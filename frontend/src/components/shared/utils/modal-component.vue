<template>
  <div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    open: boolean;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  div {
    position: fixed;
    height: 100vh;
    width: 100vw;
  }
</style>
