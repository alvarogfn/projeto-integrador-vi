<template>
  <header class="header">
    <section class="header__logo">
      <img src="@/assets/tocha.png" alt="UniAtenas" />
      <h1>
        <router-link :to="{ name: 'home' }"> Analise Financeira </router-link>
      </h1>
      <p>Projeto Integrador VI</p>
    </section>
    <menu-nav
      title="Clientes"
      :options="[
        { label: 'Adicione Dados', to: 'clients-form' },
        { label: 'Revise Dados', to: 'clients-dataset' },
        { label: 'Analise Dados', to: 'clients-analytics' },
      ]"
    />
  </header>
</template>

<script setup lang="ts">
  import MenuNav from "./header-menu-nav.vue";
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .header {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;

    width: 250px;

    border-right: 2px solid rgba($color: #000000, $alpha: 0.1);

    &__logo {
      display: grid;
      grid-template-areas:
        "a b"
        "a c";

      grid-template-columns: 40px 1fr;
      gap: 10px;

      img {
        grid-area: a;
        width: 100%;
        height: 100%;
      }

      padding: 10px;
      margin: 10px 0 50px;

      h1 {
        font-size: 1.5rem;
        font-weight: 700;
      }

      a {
        display: block;
      }
    }
  }
</style>
