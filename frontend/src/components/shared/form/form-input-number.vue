<template>
  <form-label
    class="label"
    :id="props.id"
    :label="props.label"
    :required="required"
  >
    <input
      class="label__input"
      type="number"
      :id="props.id"
      :placeholder="props.placeholder ?? props.label"
      :value="props.value"
      :required="required"
      :min="min"
      :max="max"
      :step="step"
      @input="emit('update:value', ($event.target as HTMLInputElement).value)"
    />
  </form-label>
</template>

<script setup lang="ts">
  import FormLabel from "./form-label.vue";

  interface Props {
    id: string;
    label: string;
    required: boolean;
    value: any;
    placeholder: string;
    min?: number;
    max?: number;
    step?: number;
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

      transition: 200ms;

      &::placeholder {
        color: rgba($color: #000000, $alpha: 0.3);
      }

      &:focus {
        border: 1px solid rgba($color: #000000, $alpha: 0.4);
      }
    }
  }
</style>
