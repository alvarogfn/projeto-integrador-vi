<template>
  <line-chart :data="chartData" :options="chartOptions"></line-chart>
</template>

<script setup lang="ts">
  import { Line as LineChart } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    PointElement,
    LinearScale,
    LineElement,
    type ChartData,
    type ChartOptions,
  } from "chart.js";
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    PointElement,
    LinearScale,
    LineElement
  );

  interface Props {
    chartData: ChartData<"line">;
    chartOptions?: ChartOptions<"line">;
  }

  const props = defineProps<Props>();
</script>

<style scoped></style>
