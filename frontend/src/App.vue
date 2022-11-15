<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from "./components/header/header-component.vue";
  import {
    Chart,
    BarElement,
    LineElement,
    ArcElement,
    Title,
    Legend,
    Tooltip,
    CategoryScale,
    LinearScale,
    PointElement,
  } from "chart.js";

  Chart.register(
    ArcElement,
    Title,
    Legend,
    Tooltip,
    CategoryScale,
    BarElement,
    LineElement,
    LinearScale,
    PointElement
  );
</script>

<style lang="scss" scoped></style>
