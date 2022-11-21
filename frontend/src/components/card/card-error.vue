<template>
  <section class="card" :style="styles">
    <h1 class="card__title">{{ title }}</h1>
    <p class="card__content">{{ content }}</p>
  </section>
</template>

<script>
  // import IconTip from "../../icons/icon-tip.vue";
  // import IconAlert from "../../icons/icon-alert.vue";
  // import IconError from "../../icons/icon-error.vue";
  // import IconExport from "../../icons/icon-export.vue";

  export default {
    props: {
      type: {
        type: String,
        default: "note",
      },
      title: String,
      content: String,
    },
    computed: {
      // icon() {
      //   if (this.type === "note") return IconTip;
      //   else if (this.type === "alert") return IconAlert;
      //   else if (this.type === "error") return IconError;
      //   else if (this.type === "export") return IconExport;
      //   else return IconTip;
      // },
      styles() {
        let color = "";
        if (this.type === "note") color = "#20C997";
        else if (this.type === "alert") color = "#FFC107";
        else if (this.type === "error") color = "#DC3545";
        else if (this.type === "export") color = "#6610F2";
        else color = "#20C997";
        return {
          backgroundColor: color,
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
  @use "../../styles/colors.scss" as *;
  .card {
    position: relative;

    background-color: #dc3545;
    border-radius: 5px;
    padding: 10px;

    flex-grow: 1;

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
      top: 10px;
      left: 10px;
    }

    &__content {
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
</style>
