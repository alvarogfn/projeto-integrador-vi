<template>
  <header>
    <div>
      <h1>
        <router-link :to="{ name: 'home' }"> Análise Financeira </router-link>
      </h1>
      <p>Projeto Integrador VI</p>
    </div>
    <router-link class="header__about" :to="{ name: 'about' }"
      >Sobre</router-link
    >
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @use "../../styles/colors.scss" as *;

  .header {
    &__title {
    }

    &__home-link {
      color: inherit;
      text-decoration: none;
    }

    &__about {
      text-decoration: none;
      color: black;
      background-color: #fff;
      padding: 10px 20px;

      border-radius: 5px;

      @include box-shadow();
    }
  }

  header {
    background-color: $blue;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 10px;

    @include box-shadow();

    div {
      display: flex;
      flex-flow: column nowrap;

      color: #fff;

      h1 {
        font-size: 1.5rem;
      }
    }
  }
</style>
