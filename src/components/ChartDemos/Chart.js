import React from 'react'
import { Line } from 'react-chartjs-2';

import styles from './styles.module.css';
 
function ChartJS() {
    const chartData = {
        labels: ['26 Dec', '28 Dec', '31 Dec', '1 Jan','3 Jan', '5 Jan', '7 Jan', '9 Jan', '11 Jan', '13 Jan'],
        datasets: [{
            data: [4, 2, 1, 5, 7, 5, 3, 2, 4, 1]
        }]
    }

    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    min: -5,
                    max: 7.5,
                    
                }
            }]
        }
    }

    return (
        <div className={styles.chartContainer}>
            <Line 
                data={{
                    labels: ['26 Dec', '28 Dec', '31 Dec', '1 Jan','3 Jan', '5 Jan', '7 Jan', '9 Jan', '11 Jan', '13 Jan'],
                    datasets: [{
                        data: [4, 2, 1, -2.5, 7, -3, 3, -2, 4, 1],
                        fill: true,
                        borderColor: 'blue',
                        backgroundColor: [
                            'green',
                            'green',
                            'green',
                            'red',
                            'green',
                            'red',
                            'green',
                            'red',
                            'green',
                            'green',
                        ]
                    }]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: false,
                                min: -5,
                                max: 7.5,
                                stepSize: 2.5
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default ChartJS
