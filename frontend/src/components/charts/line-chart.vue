<template>
  <line-chart-js :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
  import { Line as LineChartJs } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, PointElement, LineElement);

  export default {
    name: "LineChart",
    components: { LineChartJs },
    props: {
      chartData: Object,
      chartOptions: Object,
    },
  };
</script>
