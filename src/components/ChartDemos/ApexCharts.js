import React, { useState} from 'react'
import Chart from 'react-apexcharts';

import styles from './styles.module.css';


function ApexChartsDemo(props) {

    return (
            <Chart
                type="area"
                height="100%"
                series={[{
                    name: 'Portfolio Performance',
                    data: props.data
                }]}
                options={{
                    colors:['rgba(0, 0, 255, 1)'],
                    // colors: ['rgba(255, 0, 0, 1)'],
                    // colors: [
                        //     function ({ value, seriesIndex, w }) {
                    //         if (value < 0) {
                        //             return 'rgba(255, 0,0,1)'
                        //         }
                        //         return 'rgba(0, 255,0,1)'
                        //     }
                        // ],
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    
                    title: {
                        text: 'Portfolio Performace',
                        align: 'left',
                        style: {
                            fontSize: '14px'
                        }
                    },
                    xaxis: {
                        type: 'string',
                        labels: {
                            style: {
                                colors: '#4E4F51',
                                fontSize: '12px',
                                fontFamily: 'DM Sans',
                                fontWeight: '500'
                            }
                        },
                        // labels: {
                            //     formatter: function(value, timestamp, opts) {
                                //         return opts.dateFormatter(new Date(timestamp)).format("dd MMM")
                                //     }
                                // },
                                axisBorder: {
                                    show: true
                                },
                                axisTicks: {
                            show: true,
                            color: '#4E4F51',
                            borderType: 'solid'
                        }
                    },
                    yaxis: {
                        tickAmount: 5,
                        floating: false,
                        labels: {
                            style: {
                                colors: '#4E4F51',
                                fontFamily: 'DM Sans',
                                fontWeight: '600'
                            }
                        },
                        axisBorder: {
                            show: false,
                        },
                        axisTicks: {
                            show: false
                        }
                    },
                    fill: {
                        colors: ['#805CF5'],
                        opacity: 0.6,
                        type: 'solid',
                        // Does nothing:
                        // gradient: {
                            //     shade: 'dark',
                            //     type: "vertical",
                            //     shadeIntensity: 0.5,
                        //     gradientToColors: undefined,
                        //     inverseColors: true,
                        //     opacityFrom: 1,
                        //     opacityTo: 0.1,
                        //     stops: [0, 50, 100],
                        //     colorStops: []
                        // },
                    },
                    tooltip: {
                        x: {
                            format: "yyyy",
                        },
                        fixed: {
                            enabled: false,
                            position: 'topRight'
                        }
                    },
                    grid: {
                        yaxis: {
                            lines: {
                            offsetX: -30
                        }
                    },
                    padding: {
                            left: 20
                        }
                    }
                }}
            />
        // </div>
    )
}

export default ApexChartsDemo;