import React, { useState} from 'react'
import Chart from 'react-apexcharts';

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
                        curve: 'smooth',
                        width: 2
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
                        tickAmount: 6,
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
                        opacity: 1,
                        type: 'gradient',
                        // Does nothing:
                        gradient: {
                            shade: 'light',
                            type: "vertical",
                            inverseColors: false,
                            shadeIntensity: 1,
                            opacityFrom: 0.7,
                            opacityTo: 0.9,
                            stops: [0, 90, 100]
                        },
                    },
                    tooltip: {
                        x: {
                            format: "yyyy",
                        },
                        // custom: function({ series, seriesIndex, dataPointIndex, w }) {
                        //     return `
                        //         <div class="tooltip-container">

                        //         </div>
                        //     `
                        // }
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
                    },
                    responsive: [{
                        breakpoint: 800,
                        options: {
                            xaxis: {
                                labels: {
                                    style: {
                                        fontSize: '9px'
                                    }
                                },
                            },
                            yaxis: {
                                labels: {
                                    style: {
                                        fontSize: '9px'
                                    }
                                },
                            }
                        }
                    }]
                }}
            />
        // </div>
    )
}

export default ApexChartsDemo;