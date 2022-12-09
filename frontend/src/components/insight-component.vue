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
    width: 100%;
    flex-grow: 1;
    @include card($color: $color-2);
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    font-weight: 400;
  }
</style>
