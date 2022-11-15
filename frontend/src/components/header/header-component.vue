<template>
  <header class="header">
    <h1>
      <router-link class="header__title" :to="{ name: 'home' }">
        Analise Financeira
      </router-link>
    </h1>
    <nav>
      <router-link class="header__about-link" :to="{ name: 'about' }">
        Sobre
      </router-link>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  .header {
    background-color: $blue;

    @include box-shadow;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    color: #fff;

    &__title {
      font-size: 1.6rem;
    }

    &__about-link {
      font-size: 1.2rem;

      transition: 200ms;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid #fff;
      }
    }
  }
</style>
