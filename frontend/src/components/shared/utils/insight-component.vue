<template>
  <div>
    <h1>{{ props.title }}</h1>
    <p>{{ props.content }}</p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    content: string;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  div {
    max-width: 200px;
    width: 100%;
    flex-grow: 1;
    @include card($color: transparent, $padding: 15px);

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 10px;
    line-height: 1.5rem;
    color: $color-1;
  }

  p {
    font-weight: 900;
    font-size: 1.5rem;
  }
</style>
