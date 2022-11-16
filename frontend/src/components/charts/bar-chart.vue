<template>
  <bar-chart-js :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
  import { Bar as BarChartJs } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  export default {
    name: "BarChart",
    components: { BarChartJs },
    props: {
      chartData: Object,
      chartOptions: Object,
    },
  };
</script>
