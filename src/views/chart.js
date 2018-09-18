const Highcharts = require('highcharts');

const Chart = function (section) {
  this.section = section;
};

Chart.prototype.render = function (films) {
  Highcharts.chart(this.section, {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Film Ratings'
      },
      subtitle: {
          text: 'Source: StudioGhibliApi'
      },
      xAxis: {
          categories: films.map(film => film.title),
          crosshair: true
      },
      yAxis: {
          min: 0,
          max:100,
          title: {
              text: 'Score Out Of 100'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
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
          name: 'Rotten Tomatoes Score',
          data: films.map(film => parseInt(film.rt_score))
      }]
  });
};

module.exports = Chart;
