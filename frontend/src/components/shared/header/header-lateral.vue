<template>
  <header class="header">
    <section class="header__logo">
      <h1>
        <router-link :to="{ name: 'app' }"> Analise Financeira </router-link>
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
    ></menu-nav>
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
