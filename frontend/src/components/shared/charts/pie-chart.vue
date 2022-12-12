<template>
  <pie-chart-js :options="chartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
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

  interface Props {
    chartData: any;
    chartOptions: any;
  }

  const props = defineProps<Props>();
</script>
