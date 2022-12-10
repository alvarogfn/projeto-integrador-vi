<template>
  <form-label
    class="label"
    :id="props.id"
    :label="props.label"
    :required="required"
  >
    <input
      class="label__input"
      type="date"
      :id="props.id"
      :placeholder="props.placeholder ?? props.label"
      :required="required"
      v-model="input"
    />
  </form-label>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";
  import FormLabel from "./form-label.vue";

  interface Props {
    id: string;
    label: string;
    required: boolean;
    value: any;
    placeholder: string;
  }

  const props = defineProps<Props>();

  const input = ref<string>("");

  interface Emit {
    (e: "update:value", value: any): void;
  }
  const emit = defineEmits<Emit>();

  watch(input, (state) => {
    emit("update:value", +new Date(state));
  });
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

      &::placeholder {
        color: rgba($color: #000000, $alpha: 0.3);
      }
    }
  }
</style>
