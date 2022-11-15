<template>
  <button class="button" :class="classes">
    <component class="button__icon" :is="icon" />
    <span class="button__text">{{ props.content }}</span>
  </button>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  interface Props {
    icon: any;
    content: string;
    type: "teal" | "red" | "green" | "yellow";
  }

  const props = defineProps<Props>();

  const classes = computed(() => ({
    "button--teal": props.type === "teal",
    "button--red": props.type === "red",
    "button--green": props.type === "green",
    "button--yellow": props.type === "yellow",
  }));
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .button {
    box-shadow: 3.5px 3.5px 6.5px 0px rgba(50, 50, 50, 0.22);

    padding: 7.5px;

    transition: all 0.3s ease-out;

    border-radius: 7.5px;

    color: white;

    font-weight: bold;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    column-gap: 20px;

    text-align: justify;

    cursor: pointer;

    &__icon {
      fill: white;
      width: 30px;
      height: 30px;
    }

    &--teal {
      background-color: $teal;
    }
  }
</style>
