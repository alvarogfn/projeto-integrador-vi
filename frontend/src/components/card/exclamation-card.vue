<template>
  <section class="card">
    <h1 class="card__title">{{ title }}</h1>
    <icon-exclamation fill="white" />
    <p>{{ content }}</p>
  </section>
</template>

<script>
  import IconExclamation from "../../icons/icon-alert.vue";

  export default {
    props: {
      title: String,
      content: String,
    },
    components: { IconExclamation },
  };
</script>

<style lang="scss" scoped>
  @use "../../styles/colors.scss" as *;

  section {
    @include box-shadow();
    background-color: #20c997;
    padding: 10px;
    border-radius: 5px;

    display: flex;

    flex-flow: column nowrap;

    h1 {
      font-size: 1.25rem;
    }
  }
</style>
