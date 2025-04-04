import React, { useState } from "react";
import styles from "../css/AnalyticsComponents.module.scss"
import classNames from "classnames";
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


export const FinancialComponent = ({ selectedComponent, setSelectedComponent }) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: '#4A90E2',
                borderColor: '#4A90E2',
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: '#4A90E2',
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                fill: true,
            },
        ],
    };

    // Opzioni comuni per tutti i grafici
    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            },
            legend: {
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="flex wrap ">
            <div>

                <h2>Bar Chart</h2>
                <Bar data={barData} options={options} />
            </div>

            <div>
                <h2>Line Chart</h2>
                <Line data={lineData} options={options} />
            </div>
        </div>

    );
};