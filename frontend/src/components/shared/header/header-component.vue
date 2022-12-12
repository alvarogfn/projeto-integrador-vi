<template>
  <header class="header">
    <div class="header__top">
      <button
        class="header__menu"
        :class="{ 'header__menu--rotate': isOpen }"
        @click="isOpen = !isOpen"
      >
        <img class="header__menu-icon" src="@/assets/menu.png" alt="menu" />
      </button>
      <button class="header__logout" @click="logout">Logout</button>
    </div>
    <div class="header__lateral" v-if="isOpen" ref="lateralMenu">
      <header-app-logo />
      <header-user-card />
      <header-menu-nav
        title="Clientes"
        :options="[
          { label: 'Adicione Dados', to: 'clients-form' },
          { label: 'Revise Dados', to: 'clients-dataset' },
          { label: 'Analise Dados', to: 'clients-analytics' },
        ]"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useOnClickOutside } from "@/composables/useOnClickOutside";
  import { useAppStore } from "@/stores/app";
  import { ref } from "vue";
  import HeaderMenuNav from "./header-menu-nav.vue";
  import HeaderAppLogo from "./header-app-logo.vue";
  import HeaderUserCard from "./header-user-card.vue";
  const isOpen = ref<boolean>(false);

  const lateralMenu = ref<HTMLElement | null>(null);

  useOnClickOutside(lateralMenu, () => {
    isOpen.value = false;
  });

  const store = useAppStore();
  function logout() {
    localStorage.removeItem("token");
    store.$reset();
    location.reload();
  }
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  @keyframes open-menu {
    from {
      transform: translateX(-150px);
    }
    to {
      transform: translateX(0px);
    }
  }

  .header {
    &__top {
      z-index: 1;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;

      height: 60px;

      padding-inline: calc(10px + 1vw);

      background-color: #fff;
    }

    &__lateral {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 30px;

      z-index: 2;
      background-color: #fff;
      width: 250px;

      top: 0;
      bottom: 0;
      position: fixed;

      border-right: 2px solid rgba(0, 0, 0, 0.1);

      animation: open-menu 200ms;
    }

    &__menu,
    &__menu-icon {
      width: 30px;
      height: 30px;
    }

    &__menu {
      transition: 200ms ease-in-out;
      &--rotate {
        transform: rotate(90deg);
      }
    }

    &__logout {
      @include button;
    }
  }
</style>
