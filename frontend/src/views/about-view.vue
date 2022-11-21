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
      <h1>Motivação</h1>
      <p>
        A abertura de uma nova instituição financeira (COOP BRASIL) no Brasil
        especializada em intermediar o dinheiro, analisar cada um dos associados
        para que seja possível efetuar a contratação do crédito com uma taxa
        baixa e justa para os associados.
      </p>
    </section>
    <section>
      <h1>Responsáveis pelo Projeto</h1>
      <h2>Alvaro Guimarães</h2>

      <ul>
        <li>Desenvolvimento do aplicativo web de analise de dados;</li>
        <li>
          Desenvolvimento do banco de dados, API e integração dos serviços;
        </li>
      </ul>

      <h2>Thiago Arruda</h2>
      <ul>
        <li>Coleta de dados financeiros;</li>
        <li>Documentação e proposição do tema;</li>
      </ul>
    </section>
  </main>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @use "../styles/colors.scss" as *;

  main {
    padding: 20px;

    line-height: 200%;

    section {
      margin: 20px 0;
    }

    h1 {
      margin: 10px 0;
    }

    h2 {
      margin: 20px 0 5px;
    }

    li {
      margin-top: 10px;

      margin-left: 10px;
      padding-left: 10px;

      border-left: 5px solid $blue;
    }
  }
</style>
