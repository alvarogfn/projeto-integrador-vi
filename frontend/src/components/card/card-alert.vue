<template>
  <section class="card" :style="styles">
    <icon-alert class="card__icon" />
    <p class="card__content">{{ content }}</p>
  </section>
</template>

<script>
  import IconAlert from "../../icons/icon-alert.vue";

  export default {
    components: { IconAlert },
    props: {
      content: String,
    },
    computed: {},
  };
</script>

<style lang="scss" scoped>
  @use "../../styles/colors.scss" as *;
  .card {
    position: relative;

    background-color: #ffc107;
    border-radius: 5px;
    padding: 10px;

    flex-grow: 1;

    display: flex;
    flex-flow: column-reverse nowrap;
    row-gap: 10px;

    @include box-shadow();

    color: #fff;

    text-align: center;

    &__icon {
      fill: #fff;
      height: 20px;
      width: 20px;

      position: absolute;
      top: 10px;
      left: 10px;
    }

    &__content {
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
</style>
