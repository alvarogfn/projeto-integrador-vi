<template>
  <div class="app">
    <header-component class="app__header"></header-component>
    <div class="app__route">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeaderComponent from "@/components/shared/header/header-component.vue";
</script>

<style lang="scss" scoped>
  .app {
    &__route {
      margin-left: 250px;
    }
  }
</style>
