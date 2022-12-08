<template>
  <div>
    <form @submit.prevent="">
      <h1>Cadastre Novos Dados</h1>
      <div>
        <label for="">
          Cidade
          <input type="text" />
        </label>
        <label for="">
          Data de Nascimento
          <input type="date" />
        </label>
        <label for="">
          Crédito
          <input type="number" />
        </label>
      </div>
      <button>Inserir</button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    padding: 10px;
  }

  form {
    margin: 10px;
    @include card();

    display: flex;
    flex-flow: column nowrap;
    row-gap: 20px;
  }

  label {
    display: flex;
    flex-flow: column nowrap;
    margin: 10px 0;
  }

  input {
    margin-top: 5px;
    padding: 10px;
    border: 1px solid black;
  }

  button {
    align-self: flex-end;
    @include button($padding: 10px 30px);
  }
</style>
