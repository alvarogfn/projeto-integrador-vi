<template>
  <doughnut-chart-js :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
  import { Doughnut as DoughnutChartJs } from "vue-chartjs";
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
    components: { DoughnutChartJs },
    props: {
      chartData: Object,
      chartOptions: Object,
    },
  };
</script>
