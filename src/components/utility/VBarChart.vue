<template>
  <BarChart
    :chart-data="chartData"
    :options="options"
    @chart:render="setEvent"/>
</template>

<!--suppress ALL -->
<script>
import Chart from "chart.js";
import { defineChartComponent } from "vue-chart-3";
import { draw } from "@/utils/barChart";

Chart.defaults.global.animation.duration = 0;
Chart.controllers.barChart = Chart.controllers.bar.extend({ draw });
Chart.defaults.barChart = Chart.defaults.bar;
Chart.defaults.global.datasets.barChart = Chart.defaults.global.datasets.bar;
Chart.defaults.global.defaultFontFamily = "'B612', 'sans-serif'";

const BarChart = defineChartComponent("custom-bar", "barChart");

export default {
  name: "VBarChart",

  components: { BarChart },

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

  methods: {
    setEvent(chart) {
      this.$emit("set", chart);
    }
  }
};
</script>
