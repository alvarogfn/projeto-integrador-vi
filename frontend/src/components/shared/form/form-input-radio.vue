<template>
  <div class="radio">
    <p class="radio__label">
      {{ props.label }}
      <span class="radio__label-required" v-if="props.required">*</span>
    </p>
    <div class="radio__values">
      <div
        class="radio__value"
        v-for="option in props.options"
        :key="option.id"
        :class="{ 'radio__value--selected': input === option.id }"
      >
        <input
          class="radio__check"
          type="radio"
          :id="option.label"
          :value="option.id"
          v-model="input"
        />
        <label class="radio__option-label" :for="option.label">
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";

  interface Props {
    label: string;
    options: { id: number | string; label: string }[];
    required?: boolean;
  }

  const props = defineProps<Props>();

  interface Emit {
    (e: "update:value", value: any): void;
    (e: "valid", value: boolean): void;
  }

  const emit = defineEmits<Emit>();

  const error = ref("");
  const input = ref<string>("");

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
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .radio {
    display: flex;
    flex-flow: column nowrap;

    &__label {
      color: #2d2d2d;
      font-size: 1rem;
      text-transform: capitalize;

      margin-bottom: 10px;
    }

    &__label-required {
      color: $color-8;
    }

    &__values {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      border: 1px solid rgba($color: #000000, $alpha: 0.1);
      border-radius: 10px;
      color: rgba($color: #000000, $alpha: 0.9);

      border-radius: 10px;

      overflow: hidden;
    }

    &__value {
      display: flex;
      flex-flow: row nowrap;

      background-color: rgba($color: #f1f1f1, $alpha: 0.3);

      flex-grow: 1;

      &--selected {
        color: #fff;
        background-color: darken($color: #f1f1f1, $amount: 80%);
      }
    }

    &__option-label {
      width: 100%;
      height: 100%;
      padding: 11.5px;

      font-size: 0.9rem;
      text-align: center;

      text-transform: capitalize;

      cursor: pointer;

      transition: 200ms;

      &:hover {
        background-color: darken($color: #f1f1f1, $amount: 20%);
      }
    }

    &__check {
      display: none;
    }
  }
</style>
