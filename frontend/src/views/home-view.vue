<template>
  <main class="container">
    <section class="container__section">
      <h1 class="container__title">O Projeto</h1>
      <p class="container__paragraph">
        Nosso projeto tem como objetivo principal fazer uma análise de dados
        mercadologico com o objetivo de mapear pontos de interesse no território
        Brasileiro. O projeto busca analisar de forma descritiva e informativa a
        tendência de busca de crédito por atributos como região e idade.
      </p>
    </section>
    <section class="container__section">
      <h1 class="container__title">Motivação</h1>
      <p class="container__paragraph">
        Essa analise serve como próposito demonstrar o poder do power bi para
        empresas em geral
      </p>
    </section>
    <section class="container__section">
      <h1 class="container__title">Responsáveis pelo Projeto</h1>
      <h2 class="container__subtitle">Alvaro Guimarães</h2>

      <ul class="container__list">
        <li class="container__list-item">Design e Prototipação;</li>
        <li class="container__list-item">
          Desenvolvimento do aplicativo web de analise de dados;
        </li>
        <li class="container__list-item">
          Desenvolvimento do banco de dados, API e integração dos serviços;
        </li>
      </ul>

      <h2 class="container__subtitle">Thiago Arruda</h2>
      <ul class="container__list">
        <li class="container__list-item">Coleta de dados financeiros;</li>
        <li class="container__list-item">Documentação e proposição do tema;</li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @use "../styles/colors.scss" as *;
  .container {
    padding: 20px;
    line-height: 200%;
    margin: 10px;
    @include card($color: $color-7, $padding: 10px 20px);

    &__section {
      margin: 30px 0;
    }
    &__title {
      margin: 10px 0;
      font-weight: 700;
      font-size: 1.5rem;
    }

    &__subtitle {
      font-weight: 600;
      font-size: 1.1rem;
      margin: 30px 0 10px;
    }

    &__paragraph {
      margin: 20px 0 5px;
    }

    &__list {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 10px;
    }

    &__list-item {
      margin-top: 10px;
      margin-left: 10px;
      padding-left: 10px;
      border-left: 5px solid $color-1;
    }
  }
</style>
