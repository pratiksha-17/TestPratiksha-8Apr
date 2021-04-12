const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      margin: [100, 500 , 10, 0]    
  },
  title: {
      text: 'Summary'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
            //   format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              connectorColor: 'silver'
          }
      }
  },
  series: [{
      name: 'Share',
      data: [
          { name: 'Correct', y: 80 },
          { name: 'InCorrect', y: 20 }
      ],
      colors: ['#25ae60', '#e94c3d']
  }]
};

export default config;