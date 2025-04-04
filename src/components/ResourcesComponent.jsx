import React, { useState, useEffect } from "react";
import styles from "../css/AnalyticsComponents.module.scss"
import classNames from "classnames";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ReactSlider from "react-slider";
import { calcoloQuantitaPiante, calcoloCostoIrrigazione, calcoloCostoFertilizzazione, usoDelleRisorse } from "../utils/formuleHelper";

export const ResourcesComponent = ({ valoriIniziali, produzioneAnnua }) => {

    const [efficienzaCalcolata, setEfficienzaCalcolata] = useState('')
    const [efficienzaStimataMassima, setEfficienzaStimataMassima] = useState('')
    const [obj, setObj] = useState({
        ettari: 10,
        costo_acqua: 0.0005,
        costo_fertilizzazione: 10,
        //costo_densita_impianto: 5,
    })

    useEffect(() => {
        let quantitaPiante = calcoloQuantitaPiante(obj['ettari'], valoriIniziali['densita'].value)
        let costoIrrigazioneNormalizzato = calcoloCostoIrrigazione(valoriIniziali['irrigazione'].value, obj['costo_acqua'], quantitaPiante)
        let costoFertilizzazioneNormalizzato = calcoloCostoFertilizzazione(valoriIniziali['fertilizzazione'].value, obj['costo_fertilizzazione'], obj['ettari'])
        let usoRisorse = usoDelleRisorse(produzioneAnnua, costoIrrigazioneNormalizzato, costoFertilizzazioneNormalizzato)
        let num = Math.floor(usoRisorse)
        let num2 = 100 - parseInt(num)
        setEfficienzaCalcolata(num)
        setEfficienzaStimataMassima(num2)
    }, [valoriIniziali, obj]);

    ChartJS.register(ArcElement, Tooltip, Legend, Title);
    const doughnutData = {
        labels: ['% Efficienza calcolata', '% Efficienza stimata massima'],
        datasets: [
            {
                label: 'Color Distribution',
                data: [efficienzaCalcolata, efficienzaStimataMassima],
                backgroundColor: [
                    '#90981b',
                    '#7a302b',
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    },
                },
            },
            title: {
                display: true,
                text: '',
            },
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Poppins-SemiBold',
                        size: 12,
                        weight: 'normal',
                        style: 'normal',
                    },
                    color: '#341F14ff'
                }
            }
        },
    }
    const handleField = (input, field) => {
        let tmp = obj
        tmp[field] = input
        setObj({ ...tmp })
    }

    return (
        <div>
            <div className="flex ">
                <div className={classNames("w-50 ", styles.harvest_chart_container)}>
                    <div className="flex wrap">
                        <div className={styles.harvest_chart_wrapper}>
                            <div style={{ width: '50%', margin: '0 auto' }}>
                                <Doughnut data={doughnutData} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-50 ml-20" Style="align-self: center;">
                    <div className="justify-left">
                        <div className="mb-10 default-font-size semiBold text-dark">
                            Numero ettari: {obj['ettari']}
                        </div>
                        <ReactSlider
                            className="custom-slider"
                            thumbClassName="custom-thumb"
                            trackClassName="custom-track"
                            min={5}
                            max={50}
                            step={1}
                            defaultValue={obj['ettari']}
                            onChange={(val) => handleField(val, 'ettari')}
                        />
                        <div className="default-font-size regular text-dark mt-10">
                            text
                        </div>
                    </div>
                    <div className="mt-20 justify-left">
                        <div className="mb-10 default-font-size semiBold text-dark">
                            Costo acqua/litro: {obj['costo_acqua']}€
                        </div>
                        <ReactSlider
                            className="custom-slider"
                            thumbClassName="custom-thumb"
                            trackClassName="custom-track"
                            min={0.0001}
                            max={0.0025}
                            step={0.0001}
                            defaultValue={obj['costo_acqua']}
                            onChange={(val) => handleField(val, 'costo_acqua')}
                        />
                        <div className="default-font-size regular text-dark mt-10">
                            text
                        </div>
                    </div>
                    <div className="mt-20 justify-left">
                        <div className="mb-10 default-font-size semiBold text-dark">
                            Costo fertilizzazione: {obj['costo_fertilizzazione']}€
                        </div>
                        <ReactSlider
                            className="custom-slider"
                            thumbClassName="custom-thumb"
                            trackClassName="custom-track"
                            min={5}
                            max={50}
                            step={5}
                            defaultValue={obj['costo_fertilizzazione']}
                            onChange={(val) => handleField(val, 'costo_fertilizzazione')}
                        />
                        <div className="default-font-size regular text-dark mt-10">
                            text
                        </div>
                    </div>
                    {/* 
                    <div className="mt-20 justify-left">
                        <div className="mb-10 default-font-size semiBold text-dark ">
                            Costo densità impianto: {obj['costo_densita_impianto']}€
                        </div>
                        <ReactSlider
                            className="custom-slider"
                            thumbClassName="custom-thumb"
                            trackClassName="custom-track"
                            min={1}
                            max={50}
                            step={1}
                            defaultValue={5}
                            onChange={(val) => handleField(val, 'costo_densita_impianto')}
                        />
                    </div>
                    */}
                </div>
            </div>
        </div>

    );
};