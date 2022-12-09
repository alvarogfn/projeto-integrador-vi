<template>
  <div class="label">
    <label class="label__text" :for="props.id">
      {{ props.label }}
      <span class="label__required" v-if="props.required">*</span>
    </label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    id: string;
    label: string;
    required: boolean;
  }

  const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .label {
    display: flex;
    flex-flow: column nowrap;
    &__text {
      color: #2d2d2d;
      font-size: 0.9rem;
      text-transform: capitalize;
    }
    &__required {
      color: $color-8;
    }
  }
</style>
