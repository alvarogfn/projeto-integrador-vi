<template>
  <bar-chart-js :chart-options="chartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
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
  interface Props {
    chartData: any;
    chartOptions: any;
  }

  const props = defineProps<Props>();
</script>
