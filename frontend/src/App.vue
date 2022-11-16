<template>
  <div>
    <header-component />
    <router-view> </router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/header/header-component.vue";

export default { components: { HeaderComponent } };
</script>

<style lang="scss" scoped></style>
