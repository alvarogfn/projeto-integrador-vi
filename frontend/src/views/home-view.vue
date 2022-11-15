<template>
  <main class="container">
    <button-component
      class="container__tip"
      :icon="IconAlertCircle"
      content="Você pode clicar em algum gráfico para ver detalhes"
      type="teal"
      v-show="tooltip"
      @click="tooltip = false"
    />
    <section class="container__content">
      <router-link :to="{ name: 'analytics' }">
        <pie-chart
          title="Quanto de crédito é buscado, por região, no brasil?"
          fonts="COOPAGE"
          :chart="pie"
        >
        </pie-chart>
      </router-link>
      <router-link :to="{ name: 'analytics' }">
        <bar-chart
          title="Quanto de crédito é buscado, por região e idade, no brasil?"
          fonts="COOPAGE"
          :chart="bar"
        >
        </bar-chart>
      </router-link>
      <router-link :to="{ name: 'analytics' }">
        <line-chart
          title="Quanto de crédito é buscado, por idade, no brasil?"
          fonts="COOPAGE"
          :chart="line"
        >
        </line-chart>
      </router-link>
    </section>
  </main>
</template>

<script setup lang="ts">
  import ButtonComponent from "@/components/buttons/button-component.vue";
  import PieChart from "@/components/charts/pie-chart.vue";
  import BarChart from "@/components/charts/bar-chart.vue";
  import LineChart from "@/components/charts/line-chart.vue";
  import IconAlertCircle from "@/components/icons/icon-alert-circle.vue";
  import { ref, onMounted, reactive } from "vue";

  const tooltip = ref<boolean>(true);

  const line = reactive({
    chartData: {
      labels: [] as any[],
      datasets: [
        {
          data: [] as any[],
          label: "idade",
          backgroundColor: "blue",
          borderColor: "lightblue",
        },
      ],
    },
    chartOptions: {
      scales: {
        y: {
          title: {
            display: true,
            text: "Em milhões de reais",
          },
        },
      },
    },
  });

  const pie = reactive({
    chartData: {
      labels: [] as any[],
      datasets: [
        {
          data: [] as any[],
          label: "idade",
          backgroundColor: "blue",
          borderColor: "lightblue",
        },
      ],
    },
    chartOptions: {
      scales: {
        y: {
          title: {
            display: true,
            text: "Em milhões de reais",
          },
        },
      },
    },
  });

  const bar = reactive({
    chartData: {
      labels: [] as any[],
      datasets: [
        {
          data: [] as any[],
          label: "idade",
          backgroundColor: "blue",
          borderColor: "lightblue",
        },
      ],
    },
    chartOptions: {
      scales: {
        y: {
          title: {
            display: true,
            text: "Em milhões de reais",
          },
        },
      },
    },
  });

  onMounted(async () => {
    const ageResponse = await fetch("http://localhost:3000/analytics/age");
    const ageJson = await ageResponse.json();

    line.chartData.labels = Object.keys(ageJson.chartData);
    line.chartData.datasets[0].data = Object.values(ageJson.chartData);

    const regionResponse = await fetch(
      "http://localhost:3000/analytics/region"
    );
    const regionJson = await regionResponse.json();

    pie.chartData.labels = Object.keys(regionJson.chartData);
    pie.chartData.datasets[0].data = Object.values(regionJson.chartData);

    const regionAgeResponse = await fetch(
      "http://localhost:3000/analytics/regionAndAge"
    );
    const regionAndAgeJson = await regionAgeResponse.json();

    bar.chartData.labels = Object.keys(regionAndAgeJson.chartData);
    bar.chartData.datasets = regionAndAgeJson.chartData;
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .container {
    display: flex;

    flex-flow: column nowrap;

    width: calc(100vw - 10px);
    margin: 10px auto;
    row-gap: 10px;

    &__tip {
      flex-grow: 1;
    }

    &__content {
      padding-inline: 10px;
      display: flex;
      flex-flow: column nowrap;
      row-gap: 30px;
    }
  }
</style>
