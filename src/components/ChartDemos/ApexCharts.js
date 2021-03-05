import React, { useState} from 'react'
import Chart from 'react-apexcharts';

import styles from './styles.module.css';


function ApexChartsDemo() {
    const { options, setOptions } = useState(null)
    const { series, setSeries } = useState(null)

    return (
        <div className={styles.chartContainer}>
            <Chart
                type="area"
                series={[{
                    name: 'Demo asset performance infographic',
                    // ['26 Dec', '28 Dec', '31 Dec', '1 Jan','3 Jan', '5 Jan', '7 Jan', '9 Jan', '11 Jan', '13 Jan'],
                    data: [
                      {
                        x: '26 Dec',
                        y: 4
                      },
                      {
                        x: '28 Dec',
                        y: 0.9
                      },
                      {
                        x: '31 Dec',
                        y: 5
                      },
                      {
                        x: '1 Jan',
                        y: 7.5
                      },
                      {
                        x: '3 Jan',
                        y: 0
                      },
                      {
                        x: '5 Jan',
                        y: 2
                      },
                      {
                        x: '7 Jan',
                        y: 0
                      },
                      {
                        x: '9 Jan',
                        y: -2
                      },
                      {
                        x: '11 Jan',
                        y: -2.5
                      },
                      {
                        x: '13 Jan',
                        y: -5
                      }
                    ]
                }]}
                options={{
                    // colors: ['rgba(255, 0, 0, 1)'],
                    colors: [
                        function ({ value, seriesIndex, w }) {
                            if (value < 0) {
                                return 'rgba(255, 0,0,1)'
                            }
                            return 'rgba(0, 255,0,1)'
                        }
                    ],
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    
                    title: {
                        text: 'Assets Performace',
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
                            show: false
                        },
                        axisTicks: {
                            show: true,
                            color: '#4E4F51',
                            borderType: 'solid'
                        }
                    },
                    yaxis: {
                        min: -5,
                        max: 7.5,
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
                        colors: ['#00C14D'],
                        opacity: 0.4,
                        type: 'solid',
                        gradient: {
                            shade: 'dark',
                            type: "horizontal",
                            shadeIntensity: 0.5,
                            gradientToColors: undefined,
                            inverseColors: true,
                            opacityFrom: 1,
                            opacityTo: 0.5,
                            stops: [0, 50, 100],
                            colorStops: []
                        },
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
        </div>
    )
}

export default ApexChartsDemo;