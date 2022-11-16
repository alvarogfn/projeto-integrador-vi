<template>
  <main class="home" v-if="!error">
    <chart-component
      v-for="(chartData, index) in chartsData"
      :key="index"
      class="home__canvas"
      :chart-type="chartData.type"
      v-bind="chartData"
    />
  </main>
</template>

<script>
  import ChartComponent from "../components/charts/chart-component.vue";

  export default {
    components: { ChartComponent },
    data: () => ({
      chartsData: [],
      error: false,
    }),
    async created() {
      try {
        const response = await fetch("http://localhost:3000/analytics");
        const json = await response.json();

        this.chartsData = json;
      } catch (e) {
        this.error = true;
      }
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    display: grid;
    grid-template-columns: repeat(3, auto);
    // grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;

    gap: 20px;

    width: calc(100vw - 20px);
    margin: 10px auto;

    &__canvas {
      width: 100%;
      height: 100%;

      // $letters: ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l");

      // @for $index from 1 through length($letters) {
      //   $letter: nth($letters, $index);
      //   &:nth-child(#{$index}) {
      //     grid-area: #{$letter};
      //   }
      // }
    }
  }
</style>
