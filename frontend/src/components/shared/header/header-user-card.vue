<template>
  <section class="user">
    <p>@{{ store.username }}</p>
    <img src="@/assets/user.png" alt="User" />
  </section>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/stores/app";

  const store = useAppStore();
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .user {
    padding: 10px;

    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: flex-end;
    align-items: center;
    column-gap: 10px;

    background-color: $color-1;

    img {
      max-width: 40px;
    }

    p {
      font-size: 1.1rem;
    }
  }
</style>
