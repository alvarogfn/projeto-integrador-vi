<template>
  <div class="analytics" v-if="!loading && dataset">
    <div class="analytics__insights">
      <insight-component
        class="analytics__insights-item"
        :key="index"
        v-for="(insight, index) in dataset.insights"
        :content="insight.value"
        :title="insight.label"
      />
    </div>
    <div class="analytics__charts">
      <chart-component
        v-for="(chart, index) in dataset.chart"
        :key="index"
        v-bind="chart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ChartComponent from "@/components/shared/charts/chart-component.vue";
  import InsightComponent from "@/components/shared/utils/insight-component.vue";
  import { useFetch } from "@/composables/useFetch";

  const { data: dataset, loading } = useFetch<{
    insights: { value: string; label: string }[];
    chart: { chartData: {}; chartOptions: {}; type: string }[];
  }>({
    url: "analytics",
    method: "get",
  });
</script>

<style lang="scss" scoped>
  .analytics {
    margin: 15px;

    display: flex;
    flex-flow: column nowrap;
    gap: 10px;

    &__insights {
      display: flex;
      flex-flow: row wrap;
      gap: 15px;
    }

    &__charts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;
    }
  }
</style>
