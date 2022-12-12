<template>
  <header class="header">
    <section>
      <p>@{{ store.username }}</p>
      <img src="@/assets/tocha.png" alt="UniAtenas" />
    </section>
    <button>
      <img class="header__menu" src="@/assets/menu.png" alt="menu" />
    </button>
    <button class="header__logout" @click="logout">Logout</button>
  </header>
  <header-lateral />
</template>

<script setup lang="ts">
  import { useAppStore } from "@/stores/app";
  import { ref } from "vue";
  import HeaderLateral from "./header-lateral.vue";

  const store = useAppStore();

  const isOpen = ref<boolean>(false);

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
    align-items: center;

    margin-left: 250px;
    height: 70px;

    padding-inline: 20px;

    background-color: #fff;

    &__menu {
      width: 35px;
    }

    &__user {
      display: flex;
      flex-flow: row-reverse wrap;
      align-items: center;
      gap: 15px;

      p {
        font-weight: 700;
      }

      img {
        grid-area: b;
        width: 30px;
        min-width: 30px;
      }
    }

    &__logout {
      grid-area: c;
      @include button($padding: 10px, $color: $color-1);
    }
  }
</style>
