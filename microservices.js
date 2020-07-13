export default function functionName() 
{
var root = document.createElement('div')
root.id= 'container'
root.style.height='480px'
root.style.width='1100px'
root.style.cursor='pointer'
Highcharts.chart(root, {

    chart: {
        type: 'bubble',
        margin: [70, 70, 7, 7], //marginTop, marginRight, marginBottom and marginLeft
    },
    title: {
        text: 'Alveare Concessione'
    },
    subtitle: {
        text: 'Total 55 microservices'
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
            },
            point: {
                events: {
                    click: e => {
                        alert(e.target.innerHTML)
                    }
                }
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

return root
}
