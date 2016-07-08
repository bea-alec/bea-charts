Highcharts.theme = {
    colors: ['#C6D9F1', '#d86018', '#9ea2a2', '#004c97', '#f2a900', '#24CBE5', '#64E572',
             '#FF9655', '#FFF263', '#6AF9C4'],

    title: {
        style: {
            color: '#000',
            font: 'bold 18px "Lato", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Lato", Verdana, sans-serif'
        }
    },
    lang: {
        thousandsSep: ','
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
