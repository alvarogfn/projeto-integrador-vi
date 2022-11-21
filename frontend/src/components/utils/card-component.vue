<template>
  <div :style="{ borderLeftColor: color }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      color: String,
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  div {
    border-radius: 5px;
    border-left: 4px solid transparent;
    box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);

    padding: 5px;

    transition: all 0.3s ease-out;
  }
</style>
