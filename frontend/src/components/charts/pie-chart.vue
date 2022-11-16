<template>
  <pie-chart-js :chart-options="chartOptions" :chart-data="chartData" />
</template>

<script>
  import { Pie as PieChartJs } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    ArcElement,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, CategoryScale, ArcElement);

  export default {
    name: "PieChart",
    components: { PieChartJs },
    props: {
      chartData: Object,
      chartOptions: Object,
    },
  };
</script>
