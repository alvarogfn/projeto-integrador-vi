<template>
  <header class="header">
    <section></section>
    <section class="header__logo">
      <p>@{{ store.username }}</p>
      <img src="@/assets/tocha.png" alt="UniAtenas" />
      <button @click="logout">Logout</button>
    </section>
  </header>
</template>

<script setup lang="ts">
  import { useAppStore } from "@/stores/app";

  const store = useAppStore();

  function logout() {
    localStorage.removeItem("token");
    store.$reset();
    location.reload();
  }
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    margin-left: 250px;
    height: 70px;

    background-color: #fff;

    &__logo {
      display: grid;
      grid-template-areas: "a b c";

      padding: 10px;

      gap: 10px;

      align-items: center;

      p {
        font-weight: 700;
      }

      img {
        grid-area: b;
        width: 50px;
      }

      button {
        grid-area: c;
        @include button($padding: 10px, $color: $color-1);
      }
    }
  }
</style>
