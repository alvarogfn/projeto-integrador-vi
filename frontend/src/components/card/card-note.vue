<template>
  <section class="card" :style="styles">
    <icon-tip class="card__icon"></icon-tip>
    <h1 class="card__title">{{ title }}</h1>
    <p class="card__content">{{ content }}</p>
  </section>
</template>

<script>
  import IconTip from "../../icons/icon-tip.vue";

  export default {
    components: { IconTip },
    props: {
      title: String,
      content: String,
    },
  };
</script>

<style lang="scss" scoped>
  @use "../../styles/colors.scss" as *;
  .card {
    position: relative;

    background-color: #20c997;
    border-radius: 5px;
    padding: 10px;

    display: flex;
    flex-flow: column-reverse nowrap;
    row-gap: 10px;

    @include box-shadow();

    color: #fff;

    text-align: center;

    &__title {
      font-size: 0.9rem;
      font-weight: 400;
    }

    &__icon {
      fill: #fff;
      height: 20px;
      width: 20px;

      position: absolute;
      top: 5px;
      right: 5px;
    }

    &__content {
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
</style>
