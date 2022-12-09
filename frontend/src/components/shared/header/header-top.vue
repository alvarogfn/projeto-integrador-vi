<template>
  <header class="header">
    <section class="header__logo">
      <img
        src="https://pa1.narvii.com/6387/34cf6c8b15f0f897611f5c4acb30076c2ceba662_hq.gif"
        alt=""
      />
    </section>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .header {
    margin-left: 250px;
    height: 70px;

    background-color: #fff;

    &__logo {
      padding: 10px;

      img {
        width: 50px;
      }
    }
  }
</style>
