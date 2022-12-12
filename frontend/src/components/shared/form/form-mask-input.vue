<template>
  <div class="input">
    <label class="input__label" :for="id">{{ label }}</label>
    <input
      class="input__field"
      :id="id"
      type="text"
      :placeholder="placeholder"
      ref="inputRef"
      @blur="blur = true"
    />
    <p class="input__invalid" v-if="error && blur">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    watch,
    type VNodeRef,
    onMounted,
    shallowRef,
    onUnmounted,
  } from "vue";
  import IMask from "imask";
  import type { AnyMaskedOptions } from "imask";

  interface Props {
    id: string;
    label: string;
    required?: boolean;
    value: any;
    placeholder?: string;
    mask: AnyMaskedOptions;
  }

  const props = withDefaults(defineProps<Props>(), {
    required: false,
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

  const maskInstance =
    shallowRef<IMask.InputMask<IMask.AnyMaskedOptions> | null>(null);

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

    error.value = "";
  }

  watch(error, (newError) => {
    if (!inputRef.value) return;
    inputRef.value.setCustomValidity(newError);
  });

  onMounted(() => {
    if (!inputRef.value) return;
    const inputElement = inputRef.value as HTMLInputElement;
    const mask = IMask(inputElement, props.mask);
    maskInstance.value = mask;
    mask.on("complete", () => {
      input.value = mask.unmaskedValue;
    });
  });

  onUnmounted(() => {
    maskInstance.value?.off("complete");
    maskInstance.value?.destroy();
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .input {
    display: flex;
    flex-flow: column nowrap;

    &__label {
      text-transform: capitalize;
      font-size: 1rem;
      font-weight: 300;
    }

    &__field {
      @include input();
    }

    &__invalid {
      margin-top: 5px;
      font-size: 0.8rem;
      color: $color-8;
      font-weight: 700;
    }
  }
</style>
