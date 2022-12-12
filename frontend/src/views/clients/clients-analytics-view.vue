<template>
  <div class="analytics" v-if="!loading && dataset">
    <info-card
      class="analytics__alert"
      v-if="clients && clients.length < 100"
      :content="`Sua base de dados conta apenas com ${clients.length} registros.
    Isso é insuficiente para uma análise eficiente.`"
    />
    <info-card
      class="analytics__alert"
      v-if="clients && clients.length < 50"
      :content="`Adicione mais registros para ver mais gráficos.`"
    />
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
        v-for="(chart, index) in dataset.charts"
        :key="index"
        v-bind="chart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ChartComponent from "@/components/shared/charts/chart-component.vue";
  import InfoCard from "@/components/shared/utils/info-card.vue";
  import InsightComponent from "@/components/shared/utils/insight-component.vue";
  import { useFetch } from "@/composables/useFetch";
  import type { ClientModel } from "@/model/ClientModel";

  const { data: dataset, loading } = useFetch<{
    insights: { value: string; label: string }[];
    charts: {
      chartData: {};
      chartOptions: {};
      type: "line" | "bar" | "pie" | "radar";
      title: string;
    }[];
  }>({
    url: "analytics",
    method: "get",
  });

  const { data: clients } = useFetch<ClientModel[]>({
    url: "clients",
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
      grid-template-columns: repeat(auto-fit, minmax(calc(300px + 10vw), 1fr));
      gap: 20px;
    }
  }
</style>
