import React, { useState, useEffect } from "react";
import styles from "../css/AnalyticsComponents.module.scss"
import classNames from "classnames";
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, Tooltip, Legend, Title } from 'chart.js';
import ReactSlider from "react-slider";
import {
    calcoloQuantitaPianteAH,
    calcoloUtilizzoIrrigazione,
    utilizzoIrrigazioneNormalizzato,
    usoDelleRisorse,
    calcoloUtilizzoFertilizzazione,
    utilizzoFertilizzazioneNormalizzato
} from "../utils/formuleHelper";

export const ResourcesComponent = ({ valoriIniziali, produzioneAnnua }) => {

    const [efficienzaCalcolata, setEfficienzaCalcolata] = useState('')
    const [efficienzaStimataMassima, setEfficienzaStimataMassima] = useState('')
    const [utilizzoIrrigazioneN, setutilizzoIrrigazioneN] = useState('')
    const [utilizzoFertilizzazioneN, setutilizzoFertilizzazioneN] = useState('')
    const [efficienzaAnnuaEffettiva, setEfficienzaAnnuaEffettiva] = useState('')
    const [efficienzaAnnuaTeoricaMassima, setEfficienzaAnnuaTeoricaMassima] = useState('')
    const [utilizzoIrrigazioneEffettivo, setutilizzoIrrigazioneEffettivo] = useState('')
    const [utilizzoFertilizzazioneEffettivo, setutilizzoFertilizzazioneEffettivo] = useState('')


    useEffect(() => {
        let quantitaPianteAH = calcoloQuantitaPianteAH(valoriIniziali['densita'].value)
        let utilizzoIrrigazioneEffettivo = calcoloUtilizzoIrrigazione(valoriIniziali['irrigazione'].value, quantitaPianteAH)
        let utilizzoFertilizzazioneEffettivo = calcoloUtilizzoFertilizzazione(valoriIniziali['fertilizzazione'].value)
        let utilizzoIrrigazioneN = utilizzoIrrigazioneNormalizzato(utilizzoIrrigazioneEffettivo, quantitaPianteAH)
        let utilizzoFertilizzazioneN = utilizzoFertilizzazioneNormalizzato(utilizzoFertilizzazioneEffettivo)
        let usoRisorse = usoDelleRisorse(produzioneAnnua, utilizzoIrrigazioneN, utilizzoFertilizzazioneN)
        setutilizzoIrrigazioneEffettivo(utilizzoIrrigazioneEffettivo)
        setutilizzoFertilizzazioneEffettivo(utilizzoFertilizzazioneEffettivo)
        setEfficienzaAnnuaEffettiva(produzioneAnnua)
        setEfficienzaAnnuaTeoricaMassima(3000)
    }, [valoriIniziali]);

    ChartJS.register(ArcElement, Tooltip, Legend, Title);
    const doughnutData = {
        labels: ['% Efficienza calcolata', '% Margine di miglioramento'],
        datasets: [
            {
                label: 'Color Distribution',
                data: [efficienzaAnnuaEffettiva, efficienzaAnnuaTeoricaMassima - efficienzaAnnuaEffettiva],
                backgroundColor: [
                    '#90981b',
                    '#7a302b',
                ],
                borderWidth: 0,
            },
        ],
    };

    const barData = {
        labels: ['Efficienza teorica massima', 'Efficienza effettivo', 'utilizzo irrigazione', 'utilizzo fertilizzazione'],
        datasets: [
            {
                label: 'Sales',
                data: [parseInt(efficienzaAnnuaTeoricaMassima), parseInt(efficienzaAnnuaEffettiva), parseInt(utilizzoIrrigazioneEffettivo), parseInt(utilizzoFertilizzazioneEffettivo)],
                backgroundColor: ['#90981b', '#7a302b', '#6C4A36ff', '#A89B6Dff'],
                borderColor: ['#90981b', '#7a302b', '#6C4A36ff', '#A89B6Dff'],
                borderWidth: 1,
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
    const barOptions = {
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
                display: false,
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
        }, scales: {
            y: {
                title: {
                    display: false,
                    text: 'Produzione Annua (unità)',  // Etichetta asse Y
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                beginAtZero: true,  // Imposta l'inizio dell'asse Y a zero
                //max: 1, 
            },
            x: {
                title: {
                    display: false,
                    text: '',  // Etichetta asse Y
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
                beginAtZero: true,  // Imposta l'inizio dell'asse Y a zero
                //max: 1, 
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

            <div className="flex vertical-center">
                <div className={classNames("w-50 ", styles.resources_chart_container)}>
                    <div className="flex wrap">
                        <div className={styles.resources_chart_wrapper}>
                            <div style={{ width: '50%', margin: '0 auto' }}>
                                <Doughnut data={doughnutData} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames("w-50 ", styles.resources_chart_container)}>
                    <div style={{ margin: '0 auto' }}>
                        <Bar data={barData} options={barOptions} />
                    </div>
                </div>
            </div>
        </div >

    );
};