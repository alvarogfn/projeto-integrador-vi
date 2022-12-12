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
      <h2 class="container__subtitle">
        <a href="https://www.linkedin.com/in/alvarogfn/"> Alvaro Guimarães </a>
      </h2>

      <ul class="container__list">
        <li class="container__list-item">Design e Prototipação;</li>
        <li class="container__list-item">
          Desenvolvimento do aplicativo web de analise de dados;
        </li>
        <li class="container__list-item">
          Desenvolvimento do banco de dados, API e integração dos serviços;
        </li>
      </ul>

      <h2 class="container__subtitle">
        <a href="https://www.linkedin.com/in/thiago-arruda-6954411a7/">
          Thiago Arruda
        </a>
      </h2>
      <ul class="container__list">
        <li class="container__list-item">Coleta de dados financeiros;</li>
        <li class="container__list-item">Documentação e proposição do tema;</li>
      </ul>
    </section>
    <section class="container__section">
      <h1 class="container__title">Orientadores</h1>
      <h2 class="container__subtitle">
        <a href="https://www.linkedin.com/in/henriqueguedesp/">
          Henrique Guedes
        </a>
      </h2>
      <ul class="container__list">
        <li class="container__list-item">Professor Orientador</li>
      </ul>

      <h2 class="container__subtitle">
        <a href="https://www.linkedin.com/in/thais-dias-aaba361b5/">
          Thais Dias
        </a>
      </h2>
      <ul class="container__list">
        <li class="container__list-item">Coordenadora do Curso De Sistemas</li>
      </ul>
    </section>
    <section class="container__section">
      <h1 class="container__title">Informações técnicas</h1>
      <h2 class="container__subtitle">Banco De Dados</h2>
      <ul class="container__list">
        <li class="container__list-item">
          MongoDB
          <em>
            (No inicio a aplicação foi desenvolvida em MySQL. Porém com alguns
            testes de estresse, o banco de dados acabou deixando o processamento
            de dados mais lento que em mongoDB)
          </em>
          ;
        </li>
      </ul>
      <h2 class="container__subtitle">Back-end</h2>
      <ul class="container__list">
        <li class="container__list-item">
          Express
          <em> (Servir a aplicação via http) </em>
          ;
        </li>
        <li class="container__list-item">
          Mongoose
          <em> (conectar com o banco de dados)</em>
          ;
        </li>
        <li class="container__list-item">
          jsonwebtoken
          <em>(Autenticação via Token) </em>
          ;
        </li>
      </ul>
      <h2 class="container__subtitle">Front-end</h2>
      <ul class="container__list">
        <li class="container__list-item">
          Chart.js
          <em> (exibir gráficos e tabelas) </em>
          ;
        </li>
        <li class="container__list-item">
          axios

          <em>(biblioteca para realizar requisições http)</em>
          ;
        </li>
      </ul>
      <h2 class="container__subtitle">Repósitorio</h2>
      <ul class="container__list">
        <li class="container__list-item">
          <a href="https://github.com/alvarogfn/projeto-integrador-vi">
            GitHub
          </a>
        </li>
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
      &:first-letter {
        text-transform: uppercase;
      }
    }

    &__list-item {
      margin-top: 10px;
      margin-left: 10px;
      padding-left: 10px;
      border-left: 5px solid $color-1;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      a {
        color: $color-1;
        background-image: url("@/assets/linkedin.svg");
        padding-left: 30px;
        background-repeat: no-repeat;
      }
    }
    em {
      font-size: 0.8em;
    }

    li {
      a {
        color: $color-1;
      }
    }
  }
</style>
