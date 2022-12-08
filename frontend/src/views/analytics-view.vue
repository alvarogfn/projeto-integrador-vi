<template>
  <div class="analytics">
    <div class="analytics__insights">
      <insight-component
        v-for="item in 3"
        :title="item + ''"
        :content="item + ''"
        :key="item"
      />
    </div>
    <div class="analytics__content">
      <bar-chart class="analytics__chart" :data="chartData" />
      <div class="analytics__details">a</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import InsightComponent from "@/components/insight-component.vue";
  import { Bar as BarChart } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";
  import { ref } from "vue";

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  const chartData = ref({
    labels: ["January", "February", "March"],
    datasets: [{ data: [40, 20, 12] }],
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  .analytics {
    margin: 10px;

    &__insights {
      display: flex;
      flex-flow: row nowrap;
      column-gap: 10px;
    }

    &__content {
      margin: 10px 0;

      display: flex;
      flex-flow: row nowrap;
      row-gap: 10px;
      column-gap: 10px;
    }

    &__chart {
      flex-basis: 70%;
      max-width: 70%;
      @include card($color: transparent, $padding: 20px);
    }

    &__details {
      max-height: 200px;
      flex-basis: 30%;
      max-width: 30%;
      @include card($color: $color-4);
    }
  }
</style>
