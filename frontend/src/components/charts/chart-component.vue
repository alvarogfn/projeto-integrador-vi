<template>
  <card-component class="chart">
    <component
      class="chart__canvas"
      :is="chartComponent"
      :chart-data="chartData"
      :chart-options="{
        ...chartOptions,
        responsive: true,
        maintainAspectRatio: false,
      }"
      :plugins="plugins"
    />
  </card-component>
</template>

<script>
  import CardComponent from "../utils/card-component.vue";
  import BarChart from "./bar-chart.vue";
  import LineChart from "./line-chart.vue";
  import PieChart from "./pie-chart.vue";
  import RadarChart from "./radar-chart.vue";
  import DoughnutChart from "./doughnut-chart.vue";

  export default {
    props: {
      type: {
        type: String,
        required: true,
        validator: (value) => {
          return ["pie", "bar", "line"].includes(value);
        },
      },
      chartData: Object,
      plugins: Object,
      chartId: Number,
      chartOptions: {
        type: Object,
        default: () => ({
          responsive: true,
          maintainAspectRatio: false,
        }),
      },
    },
    computed: {
      chartComponent() {
        if (this.type === "pie") {
          return PieChart;
        } else if (this.type === "bar") {
          return BarChart;
        } else if (this.type === "radar") {
          return RadarChart;
        } else if (this.type === "doughnut") {
          return DoughnutChart;
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
    display: flex;
    flex-flow: column nowrap;

    padding: 10px;

    cursor: pointer;

    &:active {
      scale: 0.98;
    }

    &__title {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0 10px 10px;
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
