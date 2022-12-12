<template>
  <section class="logo">
    <img class="logo__imagem" src="@/assets/tocha.png" alt="UniAtenas" />
    <h1 class="logo__title">
      <router-link class="logo__link" :to="{ name: 'home' }">
        Analise Financeira
      </router-link>
    </h1>
    <p class="logo__subtitle">Projeto Integrador VI</p>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .logo {
    display: grid;
    grid-template-areas:
      "a b"
      "a c";

    grid-template-columns: 40px 1fr;
    gap: 10px;

    padding: 10px;

    &__imagem {
      grid-area: a;
      width: 100%;
      height: 100%;
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 700;
    }

    &__subtitle {
      display: block;
    }
  }
</style>
