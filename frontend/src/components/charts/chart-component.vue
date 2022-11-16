<template>
  <card-component class="chart">
    <h1 class="chart__title">{{ title }}</h1>
    <component
      class="chart__canvas"
      :is="chartComponent"
      :chart-data="chartData"
      :chart-options="chartOptions"
    />
    <p class="chart__source">{{ source }}</p>
  </card-component>
</template>

<script>
  import CardComponent from "../utils/card-component.vue";
  import BarChart from "./bar-chart.vue";
  import LineChart from "./line-chart.vue";
  import PieChart from "./pie-chart.vue";

  export default {
    props: {
      type: {
        type: String,
        required: true,
        validator: (value) => {
          return ["pie", "bar", "line"].includes(value);
        },
      },
      title: String,
      source: String,
      chartData: Object,
      chartOptions: {
        type: Object,
        default: () => ({
          responsive: true,
          maintainAspectRatio: false,
        }),
      },
      height: { type: Number, default: 300 },
      width: { type: Number, default: 300 },
    },
    computed: {
      chartComponent() {
        if (this.type === "pie") {
          return PieChart;
        } else if (this.type === "bar") {
          return BarChart;
        } else {
          return LineChart;
        }
      },
    },
    components: { CardComponent },
  };
</script>

<style lang="scss" scoped>
  .chart {
    width: v-bind(width);
    height: v-bind(height);

    display: flex;
    flex-flow: column nowrap;

    overflow: hidden;

    padding: 10px;

    cursor: pointer;

    &:active {
      scale: 0.98;
    }

    &__title {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 10px;
      font-size: 1rem;

      color: #222;

      @media screen and (min-width: 780px) {
        font-size: 1.2rem;
      }
    }

    &__canvas {
      height: 100%;

      width: 100%;
    }
  }
</style>
