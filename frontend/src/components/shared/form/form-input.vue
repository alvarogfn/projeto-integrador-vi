<template>
  <div class="input">
    <label class="input__label" :for="id">{{ label }}</label>
    <input
      class="input__field"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="input"
      ref="inputRef"
      @blur="blur = true"
    />
    <p class="input__invalid" v-if="error && blur">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, type VNodeRef } from "vue";

  interface Props {
    id: string;
    label: string;
    type?: "text" | "password";
    required?: boolean;
    value: any;
    placeholder?: string;
    pattern?: string;
    patternMessage?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    required: false,
    type: "text",
  });

  interface Emit {
    (e: "update:value", value: any): void;
    (e: "valid", value: boolean): void;
  }

  const emit = defineEmits<Emit>();

  const error = ref("");
  const input = ref<string>(props.value);
  const inputRef = ref<null | VNodeRef>(null);
  const blur = ref<boolean>(false);

  watch(input, (newState) => {
    emit("update:value", newState);
    validate();
  });

  watch(input, () => {
    emit("valid", error.value === "");
  });

  function validate() {
    const value = input.value;

    if (props.required && value.length === 0) {
      error.value = "Campo obrigatório.";
      return;
    }

    if (props.pattern && !RegExp(props.pattern).test(value)) {
      error.value = props.patternMessage ?? "Formato inválido.";
      return;
    }
    error.value = "";
  }

  watch(error, (newError) => {
    if (!inputRef.value) return;
    inputRef.value.setCustomValidity(newError);
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .input {
    display: flex;
    flex-flow: column nowrap;

    &__label {
      text-transform: capitalize;
      font-size: 0.9rem;
      font-weight: 300;
    }

    &__field {
      @include input();
    }

    &__invalid {
      margin-top: 5px;
      font-size: 0.7rem;
      color: $color-8;
      font-weight: 700;
    }
  }
</style>
