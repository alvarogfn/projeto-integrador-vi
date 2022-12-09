<template>
  <form-label
    class="label"
    :id="props.id"
    :label="props.label"
    :required="required"
  >
    <select
      class="label__input"
      :id="props.id"
      @input="emit('update:value', ($event.target as HTMLInputElement).value)"
    >
      <option value="" selected disabled>{{ placeholder }}</option>
      <option v-for="(value, index) in values" :key="index" :value="value">
        {{ value }}
      </option>
    </select>
  </form-label>
</template>

<script setup lang="ts">
  import FormLabel from "./form-label.vue";

  interface Props {
    id: string;
    label: string;
    required: boolean;
    placeholder?: string;
    values: (string | number)[];
  }

  const props = defineProps<Props>();

  interface Emit {
    (e: "update:value", value: any): void;
  }
  const emit = defineEmits<Emit>();
</script>

<style lang="scss" scoped>
  .label {
    &__input {
      margin-top: 10px;
      padding: 10px;

      border: 1px solid rgba($color: #000000, $alpha: 0.1);
      border-radius: 10px;

      font-weight: 500;

      color: rgba($color: #000000, $alpha: 0.9);

      text-transform: capitalize;
    }
  }
</style>
