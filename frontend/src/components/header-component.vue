<template>
  <header>
    <h1>
      <router-link :to="{ name: 'home' }"> Analise Financeira </router-link>
    </h1>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  header {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    display: block;
  }
</style>
