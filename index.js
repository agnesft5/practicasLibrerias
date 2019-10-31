function generarGrafico() {
    Highcharts.chart('graficContainer', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Personas sin hogar por sexo y nacionalidad'
        },
        subtitle: {
            text: 'Source: <a href="https://www.ine.es/jaxi/Datos.htm?path=/t25/p454/e02/a2012/&file=01002.px">Ine.es</a>'
        },
        xAxis: {
            categories: [
                'Española',
                'Unión Europea',
                'Resto de Europa',
                'África',
                'América',
                'Asia',
                'Oceanía'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Personas sin hogar (personas)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.f} personas</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Hombres',
            data: [9856, 1861, 175, 5029, 1173, 331],
            color: "#888844",

        }, {
            name: 'Mujeres',
            data: [2569, 486, 70, 921, 421, 45],
            color: "#660066"

        }]
    });
}

$(window).ready(() => { generarGrafico() })

///////////////////////////////////////////////////////////////////////////////////////////

function getCounter() {
    const end = moment().endOf('day');

    setInterval(function () {
        const timeLeft = moment(end.diff(moment())).utc(); // get difference between now and timestamp
        const formatted = timeLeft.format('HH:mm:ss'); // make pretty

        $("#counterContainer").html(formatted); // or do your jQuery stuff here
    }, 1000);
}

$(window).ready(()=>{getCounter()})


///////////////////////////////////////////////////////////////////////////////////////////////

