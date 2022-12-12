<template>
  <radar-chart-js :chart-options="props.chartOptions" :data="props.chartData" />
</template>

<script lang="ts" setup>
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

  interface Props {
    chartData: any;
    chartOptions: any;
  }

  const props = defineProps<Props>();
</script>
