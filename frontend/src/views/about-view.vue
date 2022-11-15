<template>
  <main>
    <section>
      <h1>O Projeto</h1>
      <p>
        Nosso projeto tem como objetivo principal fazer uma análise de dados
        mercadologico com o objetivo de mapear pontos de interesse no território
        Brasileiro. O projeto busca analisar de forma descritiva e informativa a
        tendência de busca de crédito por atributos como região e idade.
      </p>
    </section>
    <section>
      <h2>Motivação</h2>
      <p>
        A abertura de uma nova instituição financeira (COOP BRASIL) no Brasil
        especializada em intermediar o dinheiro, analisar cada um dos associados
        para que seja possível efetuar a contratação do crédito com uma taxa
        baixa e justa para os associados.
      </p>
    </section>
    <section>
      <h2>Responsáveis pelo Projeto</h2>
      <section>
        <h3>Álvaro Guimarães</h3>
        <ul>
          <li>Desenvolvimento do aplicativo web de analise de dados</li>
          <li>
            Desenvolvimento do banco de dados, API e integração dos serviços
          </li>
        </ul>
      </section>
      <section>
        <h3>Thiago Arruda</h3>
        <ul>
          <li>Coleta de Dados Financeiros</li>
          <li>Documentação e Proposição do Tema</li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  main {
    margin: 20px auto;
    width: calc(100vw - 30px);

    display: flex;
    flex-flow: column nowrap;
    row-gap: 30px;
  }

  h1,
  h2,
  h3 {
    margin: 10px 0;
  }

  ul {
    row-gap: 10px;
    margin-bottom: 20px;
  }

  li {
    border-left: 2px solid $indigo;
    padding-left: 10px;
  }

  p {
    line-height: 30px;

    font-size: 16px;

    text-indent: 20px;
    text-align: justify;
  }
</style>
