<template>
  <div class="home">
    <section class="home__tips">
      <card-note title="Qual idade consome mais crédito?" content="18" />
      <card-note title="Qual região consome mais crédito?" content="18" />
      <card-note title="Qual idade consome menos crédito?" content="18" />
      <card-note title="Qual região consome mais crédito?" content="18" />
    </section>
    <section class="home__app">
      <chart-component
        v-for="(chart, index) in chartsData"
        v-bind="chart"
        :key="index"
      />
    </section>
  </div>
</template>

<script>
  import ChartComponent from "../components/charts/chart-component.vue";
  import CardNote from "../components/card/card-note.vue";

  export default {
    components: { ChartComponent, CardNote },
    data: () => ({
      chartsData: [],
      error: false,
    }),
    async created() {
      const response = await fetch("http://localhost:3000/analytics");
      this.chartsData = await response.json();
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    padding: 10px;

    display: flex;
    flex-flow: column nowrap;
    row-gap: 15px;

    &__tips {
      display: flex;
      flex-flow: row wrap;
      gap: 17.5px;

      * {
        flex-grow: 1;
        flex-basis: 100px;
      }
    }

    &__app {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;

      * {
        flex-grow: 1;
        flex-basis: 300px;
      }
    }
  }

  // .home {
  //   &__app {
  //     display: grid;
  //     margin: 10px auto;

  //     padding-inline: 10px;

  //     grid-template-columns: minmax(300px, 1fr);

  //     grid-template-rows: repeat(auto-fit, min-content);

  //     gap: 10px;
  //     grid-template-areas:
  //       "a"
  //       "b"
  //       "c"
  //       "d"
  //       "f"
  //       "g"
  //       "h";
  //   }

  //   &__tooltip {
  //     &--a {
  //       grid-area: a;
  //     }
  //     &--b {
  //       grid-area: c;
  //     }
  //     &--c {
  //       grid-area: f;
  //     }
  //     &--d {
  //       grid-area: h;
  //     }
  //   }

  //   &__chart {
  //     &--a {
  //       grid-area: b;
  //     }
  //     &--b {
  //       grid-area: d;
  //     }
  //     &--c {
  //       grid-area: g;
  //     }
  //   }
  // }

  // @media screen and (min-width: 700px) {
  //   .home {
  //     &__app {
  //       display: grid;
  //       grid-template-columns: 1fr 1fr 1fr 1fr;
  //       grid-template-rows: 65px 1fr 65px;

  //       gap: 10px;
  //       grid-template-areas:
  //         "a a b b"
  //         "c c c c"
  //         "d d f f"
  //         "g g g g"
  //         "h h h h";
  //     }

  //     &__tooltip {
  //       &--a {
  //         grid-area: a;
  //       }
  //       &--b {
  //         grid-area: b;
  //       }
  //       &--c {
  //         grid-area: d;
  //       }
  //       &--d {
  //         grid-area: f;
  //       }
  //     }

  //     &__chart {
  //       &--a {
  //         grid-area: c;
  //       }
  //       &--b {
  //         grid-area: g;
  //       }
  //       &--c {
  //         grid-area: h;
  //       }
  //     }
  //   }
  // }

  // @media screen and (min-width: 1000px) {
  //   .home {
  //     &__app {
  //       display: grid;
  //       grid-template-columns: repeat(4, 1fr);
  //       grid-template-rows: 65px 1fr 1fr;

  //       gap: 12px;
  //       grid-template-areas:
  //         "a b c d"
  //         "h h h h"
  //         "g g f f";
  //     }

  //     &__tooltip {
  //       &--a {
  //         grid-area: a;
  //       }
  //       &--b {
  //         grid-area: b;
  //       }
  //       &--c {
  //         grid-area: c;
  //       }
  //       &--d {
  //         grid-area: d;
  //       }
  //     }

  //     &__chart {
  //       &--a {
  //         grid-area: f;
  //       }
  //       &--b {
  //         grid-area: g;
  //       }
  //       &--c {
  //         grid-area: h;
  //       }
  //     }
  //   }
  // }
</style>
