<template>
  <main class="dataset">
    <h1 class="dataset__title">Dados Cadastrados</h1>
    <table class="dataset__table">
      <thead class="dataset__table-header">
        <tr>
          <td>Selec.</td>
          <td>Index</td>
          <td>Identificador</td>
          <td>Cidade</td>
          <td>Crédito</td>
          <td>Data De Nascimento</td>
          <td>Adicionado em</td>
        </tr>
      </thead>
      <tbody class="dataset__table-body">
        <tr
          v-for="item in 60"
          :key="item"
          :class="{ 'dataset__table-row--selected': selected.includes(item) }"
        >
          <td>
            <input
              type="checkbox"
              :id="item + '-checkbox'"
              :value="item"
              v-model="selected"
            />
          </td>
          <td>{{ item }}</td>
          <td>b9b60b1f-4661-418e-b826-214cc7f70e44</td>
          <td>Buritis</td>
          <td>R$ 40000,00</td>
          <td>
            {{ new Date().toLocaleDateString("pt-BR") }}
          </td>
          <td>
            {{
              new Date().toLocaleDateString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";

  const selected = ref<number[]>([]);

  watch(selected, (state) => {
    console.log(...state.values());
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  .dataset {
    @include card($color: transparent);

    margin: 10px;

    &__title {
      font-weight: 600;
      margin: 20px 0;
      font-size: 1.4rem;
    }

    &__table {
      width: 100%;
      height: 300px;
      overflow-y: scroll;

      td {
        margin-bottom: 10px;

        transition: 200ms;

        &:nth-child(1) {
          width: 70px;
        }

        &:nth-child(2) {
          width: 50px;
        }

        &:nth-child(3) {
          width: 500px;
        }

        &:nth-child(4) {
          width: 150px;
        }

        &:nth-child(5) {
          width: 190px;
        }
      }
    }

    &__table-header {
      width: 100%;
      display: table;
      table-layout: fixed;
      color: #1d1d1d;

      border-radius: 5px;

      overflow: hidden;

      font-weight: 500;
      font-size: 0.95rem;

      margin-bottom: 10px;

      td {
        background-color: darken($color: #fff, $amount: 5%);
        border-style: solid none;
        padding: 10px;
      }
    }

    &__table-body {
      display: block;

      height: 400px;
      overflow-y: scroll;

      tr {
        display: table;
        table-layout: fixed;
        width: 100%;

        &:nth-child(even) {
          td {
            background-color: darken($color: #fff, $amount: 3%);
          }
        }
      }

      td {
        font-size: 0.9rem;

        height: 50px;
        vertical-align: middle;
        border-style: solid none;
        padding: 10px;

        &:last-child {
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
        }

        &:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }

      input {
        cursor: pointer;

        width: 20px;
        height: 20px;
      }
    }

    &__table-row {
      &--selected {
        td {
          background-color: rgba($color: $color-1, $alpha: 0.1) !important;
        }
      }
    }
  }
</style>
