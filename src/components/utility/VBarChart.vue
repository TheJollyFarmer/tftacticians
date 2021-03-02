<!--suppress ALL -->
<script>
import { Bar, mixins } from "vue-chartjs";

export default {
  name: "VBarChart",

  extends: Bar,

  mixins: [mixins.reactiveProp],

  props: {
    chartData: {
      type: Object,
      required: true
    },

    options: {
      type: Object,
      required: false,
      default: () => {}
    }
  },

  data() {
    return {
      defaultOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1,
                fontFamily: "'B612', 'sans-serif'"
              },

              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              },

              ticks: {
                fontFamily: "'B612', 'sans-serif'"
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "white",
          bodyFontColor: "#4a4a4a",
          bodyFontFamily: "'B612', 'sans-serif'",
          borderColor: "#4a4a4a",
          borderWidth: 1,
          displayColors: false,
          titleFontColor: "#4a4a4a",
          titleFontFamily: "'B612', 'sans-serif'",
          cornerRadius: 3
        }
      }
    };
  },

  mounted() {
    this.renderChart(this.chartData, {
      ...this.options,
      ...this.defaultOptions
    });
  }
};
</script>
