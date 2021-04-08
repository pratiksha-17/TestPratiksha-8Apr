const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
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
          { name: 'Chrome', y: 80 },
          { name: 'Internet Explorer', y: 20 }
      ]
  }]
};

export default config;