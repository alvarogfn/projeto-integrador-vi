<template>
  <line-chart-js :chart-options="chartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
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

  interface Props {
    chartData: any;
    chartOptions: any;
  }

  const props = defineProps<Props>();
</script>
