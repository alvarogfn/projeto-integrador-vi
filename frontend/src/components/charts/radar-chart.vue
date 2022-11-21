<template>
  <radar-chart-js :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
  import { Radar as RadarChartJs } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    RadialLinearScale,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, CategoryScale, RadialLinearScale);

  export default {
    name: "PieChart",
    components: { RadarChartJs },
    props: {
      chartData: Object,
      chartOptions: Object,
    },
  };
</script>
