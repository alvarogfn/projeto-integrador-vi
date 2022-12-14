<template>
  <div class="chart">
    <h1 class="chart__title">{{ props.title }}</h1>
    <component
      class="chart__canvas"
      :is="chartComponent"
      :chart-data="chartData"
      :chart-options="{
        ...chartOptions,
        responsive: true,
        maintainAspectRatio: true,
      }"
      :chart-id="props.chartId"
      :plugins="props.plugins"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import BarChart from "./bar-chart.vue";
  import LineChart from "./line-chart.vue";
  import PieChart from "./pie-chart.vue";
  import RadarChart from "./radar-chart.vue";

  interface Props {
    type: "line" | "pie" | "bar" | "radar";
    chartData: any;
    title: string | undefined;
    plugins?: any;
    chartId?: number;
    chartOptions?: any;
  }

  const props = withDefaults(defineProps<Props>(), {
    chartOptions: () => ({
      responsive: true,
      maintainAspectRatio: false,
    }),
  });

  const chartComponent = computed(() => {
    if (props.type === "pie") {
      return PieChart;
    } else if (props.type === "bar") {
      return BarChart;
    } else if (props.type === "radar") {
      return RadarChart;
    } else {
      return LineChart;
    }
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  .chart {
    @include card($padding: 10px);
    overflow: hidden;

    &__title {
      padding: 10px 0;
      text-align: left;
      font-size: 1.1rem;
      font-weight: 700;
    }

    &__canvas {
      max-height: 100%;
      max-width: 100%;
    }
  }
</style>
