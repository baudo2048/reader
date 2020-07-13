Highcharts.chart(root, {

    chart: {
        type: 'bubble',
        margin: [70, 70, 70, 70], //marginTop, marginRight, marginBottom and marginLeft
    },
    title: {
        text: 'Official regions of the United States'
    },
    subtitle: {
        text: 'Source: <a href="https://en.wikipedia.org/wiki/List_of_capitals_in_the_United_States">Wikipedia.org</a>'
    },

    plotOptions: {
        series: {
            marker: {
                lineColor: 'transparent',
            },
            dataLabels: {
                enabled: true,
                format: '{point.USstate}',
                color: '#000000',
                style: {
                    textOutline: false
                }
            },
            marker: {
                symbol: 'hexagon',
                lineWidth: 0
            }
        }
    },
    tooltip: {
        useHTML: true,
        headerFormat: null,
        pointFormat: '- State of <b>{point.USstate}</b><br/> - The <b>{point.region}</b> region<br/> <b>- {point.capital}</b><br><b> - core</b><br/> '
    },
    xAxis: {
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
            enabled: false
        },
        minorTickLength: 0,
        tickLength: 0
    },
    yAxis: {

        gridLineWidth: 0,
        tickPositions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: {
            enabled: false
        },
        title: {
            text: null
        },
        minorTickLength: 0,
        tickLength: 0
    },
    legend: {
        enabled: false
    },

    series: document.store.hichartseries
});