Highcharts.theme = {
    colors: ['#d86018', '#004c97', '#9ea2a2', '#f2a900', '#24CBE5', '#64E572',
             '#FF9655', '#FFF263', '#6AF9C4'],

    title: {
        style: {
            color: '#000',
            font: 'bold 24px "Lato MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
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
