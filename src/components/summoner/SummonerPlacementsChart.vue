<template>
  <VBarChart
    class="placements-graph layer"
    :chart-data="chartData"
    :options="options"
    @set="setChart"/>
</template>

<script>
import chart from "@/constants/chart.json";
import styles from "./SummonerPlacementsChart?vue&type=style&index=0&lang=scss&module=1";
import { hexToRGBA } from "@/utils/helpers";
import { mapState } from "vuex";
import { defineAsyncComponent } from "vue";

const VBarChart = defineAsyncComponent(() =>
  import("@/components/utility/VBarChart")
);

export default {
  name: "SummonerPlacementsChart",

  components: { VBarChart },

  props: {
    data: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      options: chart.defaultOptions,
      styles,
      chart: {}
    };
  },

  computed: {
    ...mapState(["darkTheme"]),

    chartData() {
      return {
        labels: chart.labels,
        datasets: [
          {
            backgroundColor: this.barColours,
            data: this.data
          }
        ]
      };
    },

    textColour() {
      return this.darkTheme ? this.styles.white : this.styles.black;
    },

    barColours() {
      let primary = this.getBarColour("primary");
      let secondary = this.getBarColour("secondary");
      let tertiary = this.getBarColour("tertiary");

      return [
        primary,
        secondary,
        secondary,
        secondary,
        tertiary,
        tertiary,
        tertiary,
        tertiary
      ];
    },

    tooltipColour() {
      return this.darkTheme ? this.styles.layerDark : this.styles.layer;
    }
  },

  watch: {
    darkTheme() {
      this.updateOptions();
    }
  },

  methods: {
    setChart(chart) {
      this.chart = chart;
      this.updateOptions();
    },

    updateOptions() {
      let scale = this.chart.options.scales;
      let tooltips = this.chart.options.tooltips;
      let x = scale.xAxes[0];
      let y = scale.yAxes[0];

      y.ticks.fontColor = this.textColour;
      x.ticks.fontColor = this.textColour;
      y.gridLines.color = hexToRGBA(this.textColour, 0.075);
      y.gridLines.zeroLineColor = hexToRGBA(this.textColour, 0.2);
      x.gridLines.drawOnChartArea = false;

      tooltips.backgroundColor = this.tooltipColour;
      tooltips.bodyFontColor = this.textColour;
      tooltips.titleFontColor = this.textColour;

      this.chart.update();
    },

    getBarColour(type) {
      return this.darkTheme ? this.styles[type + "Dark"] : this.styles[type];
    }
  }
};
</script>
<style lang="scss" scoped>
.placements-graph {
  height: 162.8px;
  overflow: hidden;
  position: relative;
  flex: 1 0 320px;
}

:export {
  black: $grey-dark;
  layer: $white;
  layerDark: $shark-light;
  primary: $java;
  primaryDark: $java-light;
  secondary: $purple;
  secondaryDark: $purple-light;
  tertiary: $coral;
  tertiaryDark: $coral-light;
  white: $white;
}
</style>
