<template>
  <section class="analytics">
    <card-component class="analytics__view">
      <router-view></router-view>
    </card-component>
    <section class="analytics__details">
      <card-component class="analytics__download"> Exportar </card-component>
      <h1>Insights</h1>
      <card-component
        class="analytics__insight"
        v-for="(item, index) in [{ a: 'asdsad', b: 'roi <a>a</a>' }, {}, {}]"
        :key="index"
      >
        <h1>{{ item.a }}</h1>
        <p v-html="item.b"></p>
      </card-component>

      <router-link to="/"> Ver todos os detalhes </router-link>
    </section>
  </section>
</template>

<script setup lang="ts">
  import CardComponent from "@/components/utils/card-component.vue";
  import { onMounted, onUpdated } from "vue";
  import { useRoute } from "vue-router";

  const route = useRoute();

  onMounted(() => {
    console.log(route.path);
  });
  onUpdated(() => {
    console.log(route.path);
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .analytics {
    display: flex;
    flex-flow: row nowrap;
    margin: 10px;
    column-gap: 20px;

    &__view {
      flex: 1;
      flex-basis: 65%;
      height: 450px;
    }
    &__details {
      flex-basis: 300px;

      display: flex;
      flex-flow: column nowrap;
      row-gap: 10px;
    }

    &__insight {
      flex-grow: 1;
    }

    &__download {
      background-color: $orange;
    }
  }
</style>
