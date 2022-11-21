<template>
  <button class="card">
    <icon-export class="card__icon" />
    <p class="card__label">{{ label }}</p>
  </button>
</template>

<script>
  import IconExport from "../../icons/icon-export.vue";

  export default {
    components: { IconExport },
    props: {
      label: String,
    },
  };
</script>

<style lang="scss" scoped>
  @use "../../styles/colors.scss" as *;
  .card {
    position: relative;

    background-color: #6610f2;
    border-radius: 5px;
    padding: 10px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    column-gap: 10px;

    @include box-shadow();

    color: #fff;

    text-align: center;

    &__icon {
      fill: #fff;
      height: 20px;
      width: 20px;
    }

    &__label {
      font-weight: 700;
      font-size: 1rem;
    }
  }
</style>
