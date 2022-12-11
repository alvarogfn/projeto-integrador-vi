<template>
  <div>
    <p>{{ props.content }}</p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    content: string;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  div {
    background-color: lighten($color: $color-5, $amount: 30%);
    border-radius: 5px;
    min-height: 25px;

    padding: 10px;

    font-size: 0.9rem;
  }

  h1 {
    font-size: 0.9em;
    font-weight: 600;
    margin-bottom: 10px;

    text-transform: uppercase;
  }

  p {
    font-size: 0.85em;
    line-height: 1rem;
    text-align: justify;

    color: darken($color: $color-5, $amount: 30%);
  }
</style>
