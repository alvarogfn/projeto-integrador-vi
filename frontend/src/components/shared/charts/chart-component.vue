<template>
  <div>
    <component
      class="chart__canvas"
      :is="chartComponent"
      :chart-data="chartData"
      :chart-options="{
        ...chartOptions,
        responsive: true,
        maintainAspectRatio: false,
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

  div {
    @include card($padding: 30px);
  }
</style>
