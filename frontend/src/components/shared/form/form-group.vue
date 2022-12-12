<template>
  <fieldset class="form-group">
    <legend class="form-group__legend">
      {{ props.title }}
    </legend>
    <div :class="classContent" class="form-group__content">
      <slot></slot>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    classContent?: string;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  .form-group {
    margin: 15px 0;

    &__legend {
      padding-bottom: 15px;

      display: flex;
      flex-flow: row nowrap;

      font-size: 1rem;
      font-weight: 700;

      color: $color-1;

      text-transform: uppercase;
    }

    &__content {
      display: flex;
      flex-flow: row wrap;
      gap: 20px;
    }
  }
</style>
