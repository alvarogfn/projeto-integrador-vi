<template>
  <div class="checkbox">
    <p class="checkbox__label">
      {{ props.label }}
      <span class="checkbox__label-required" v-if="props.required">*</span>
    </p>
    <div class="checkbox__values">
      <div
        class="checkbox__value"
        v-for="option in props.options"
        :key="option.id"
      >
        <input
          class="checkbox__check"
          type="checkbox"
          :id="option.label"
          :value="option.id"
          v-model="selected"
        />
        <label class="checkbox__option-label" :for="option.label">
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
    options: { id: number; label: string }[];
    required?: boolean;
  }

  interface Emit {
    (e: "update:value", value: (string | number)[]): void;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<Emit>();

  const selected = ref<number[]>([]);

  watch(selected, (newValue) => {
    emit("update:value", newValue);
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .checkbox {
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
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      column-gap: 30px;
      row-gap: 10px;
      overflow: hidden;
    }

    &__value {
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
    }

    &__option-label {
      width: 100%;
      height: 100%;
      padding: 10px;
      padding-left: 30px;

      font-size: 0.9rem;
      text-align: left;

      cursor: pointer;

      position: relative;

      &::before {
        content: "";

        display: block;

        position: absolute;
        top: 50%;
        left: 0;

        transform: translateY(-50%);

        width: 20px;
        height: 20px;

        border: 1px solid $color-1;

        border-radius: 5px;

        transition: 200ms;
      }
    }

    &__check {
      display: none;

      &:checked + .checkbox__option-label {
        &::before {
          background-color: $color-1;
        }
      }
    }
  }
</style>
