<template>
  <label>
    {{ label }}
    <select
      v-bind="$attrs"
      @input="emit('update:value', ($event.target as HTMLInputElement).value)"
    >
      <option disabled selected value="">{{ label }}</option>
      <option v-for="option in props.options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
  interface Props {
    options: (string | number)[];
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

  select {
    background-color: #fff;
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
