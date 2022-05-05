import React from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Series 1',
          data: [45, 40, 23, 40, 25, 60, 25],
        }],
        options: {
          chart: {
            height: 400,
            type: 'radar',
          },
          title: {
            text: 'My Build'
          },
          xaxis: {
            categories: ['Strength', 'VIgor', 'Dexterity', 'Mind', 'Faith', 'Intelgince', "endurance"]
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
</div>


      );
    }
  }