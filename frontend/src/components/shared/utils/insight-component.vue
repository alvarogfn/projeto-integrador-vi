<template>
  <div>
    <h1>{{ props.title }}</h1>
    <p>{{ props.content }}</p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string | number;
    content: string | number;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  div {
    width: min-content;
    flex-grow: 1;
    @include card($color: transparent, $padding: 15px);

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
    line-height: 1.5rem;
    color: $color-1;
  }

  p {
    font-weight: 900;
    font-size: 1.6rem;
  }
</style>
