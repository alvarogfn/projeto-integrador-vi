<template>
  <section class="chart">
    <h1 class="chart__title">{{ props.title }}</h1>
    <bar-chart class="chart__graph" v-bind="props.chart" />
    <p>{{ props.fonts }}</p>
  </section>
</template>

<script setup lang="ts">
  import type {
    ChartData as ChartDataProp,
    ChartOptions as ChartOptionsProp,
  } from "chart.js";
  import { Bar as BarChart } from "vue-chartjs";

  interface Props {
    title: string;
    fonts: string;
    chart: {
      chartData: ChartDataProp<"bar">;
      chartOptions: ChartOptionsProp;
    };
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  .chart {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    max-width: 100%;
    max-height: 100%;

    &__graph {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
