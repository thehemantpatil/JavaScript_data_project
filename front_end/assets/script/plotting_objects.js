/* this file contains all the objects for plotting highcharts.
   The objects containing properties required of each scenarious.*/

const india = {
    url: 'https://github.com/thehemantpatil/JavaScript_data_project/blob/master/python/json/india_population.json',
    chart: {
        type: 'column'
    },
    title: {
        text: "India's Population Over Years"
    },
    subtitle: {
        text: 'from 1950 to 2014'
    },
    xAxis: {
        categories: [],
        title: {
            text: "years"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high',
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 80,
        y: 100,
        floating: true,
        borderWidth: 1,

        backgroundColor: (
            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
            '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
            name: 'population',
            data: []
        }

    ]
}

const south_asia = {
    url: 'https://github.com/thehemantpatil/JavaScript_data_project/blob/master/python/json/south_asia_population.json',
    chart: {
        type: 'column'
    },
    title: {
        text: "South Asian countries Population Over Years"
    },
    subtitle: {
        text: 'in year 2014'
    },
    xAxis: {
        categories: [],
        title: {
            text: "years"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (thousands)',
            align: 'high',
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'millions'

    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 80,
        y: 100,
        floating: true,
        borderWidth: 1,

        backgroundColor: (
            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
            '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
            name: 'population',
            data: []
        }

    ]
}

const saarc = {
    url: 'https://github.com/thehemantpatil/JavaScript_data_project/blob/master/python/json/saarc_population.json',
    chart: {
        type: 'column'
    },
    title: {
        text: "SAARC countries Population Over Years"
    },
    subtitle: {
        text: 'from year 1950 to 2014'
    },
    xAxis: {
        categories: [],
        title: {
            text: "years"
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high',
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 80,
        y: 100,
        floating: true,
        borderWidth: 1,

        backgroundColor: (
            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
            '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
            name: 'population',
            data: []
        }

    ]
}

const grouped_asia = {
    key: 'asia',
    url: 'https://github.com/thehemantpatil/JavaScript_data_project/blob/master/python/json/asia_population.json',
    chart: {
        type: 'column'
    },
    title: {
        text: "Asia's Population Over Years"
    },
    subtitle: {
        text: 'from year 2004 to 2014'
    },
    xAxis: {
        categories: [],
        title: {
            text: "years 2004-2014   "
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high',
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'millions'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 80,
        y: 100,
        floating: true,
        borderWidth: 1,

        backgroundColor: (
            (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
            '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [

    ]
}

export { india, south_asia, saarc, grouped_asia }
