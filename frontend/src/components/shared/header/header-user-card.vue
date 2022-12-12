<template>
  <section class="user">
    <p class="user__label">Logado como:</p>
    <p class="user__paragraph">{{ store.username }}</p>
    <img class="user__icon" src="@/assets/user.png" alt="User" />
  </section>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/stores/app";

  const store = useAppStore();
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .user {
    position: relative;
    padding: 10px;

    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: flex-end;
    align-items: center;
    column-gap: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid gray;

    img {
      padding: 5px;
      border-radius: 5px;
      background-color: $color-1;
      max-width: 40px;
    }

    &__paragraph {
      text-transform: capitalize;
      font-size: 1rem;

      font-weight: 900;
    }

    &__label {
      font-size: 0.8rem;
      top: -15px;
      position: absolute;
    }
  }
</style>
