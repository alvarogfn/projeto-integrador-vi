<template>
  <label>
    {{ label }}
    <input
      type="text"
      v-bind="$attrs"
      :value="props.value"
      @input="emit('update:value', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script setup lang="ts">
  interface Props {
    value: any;
    label?: string;
  }
  interface Emit {
    (e: "update:value", value: any): void;
  }

  const emit = defineEmits<Emit>();
  const props = withDefaults(defineProps<Props>(), {
    label: "Input:",
  });
</script>

<style lang="scss" scoped>
  label {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 10px;

    font-size: 0.9rem;
  }

  input {
    border-radius: 5px;
    border: 1px solid #e2e2e2;
    box-shadow: inset 0 0 1px #e2e2e2;

    padding: 10px;

    transition: 200ms;

    &:focus {
      border: 1px solid #c9c9c9;
    }
  }
</style>
