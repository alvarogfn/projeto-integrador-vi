<template>
  <div class="dataset">
    <h1 class="dataset__title">
      Um dataset com todos os seus já dados cadastrados
    </h1>
    <section class="dataset__content">
      <header class="dataset__header">
        <button
          class="dataset__button dataset__button--delete"
          :disabled="selected.length <= 0"
        >
          Deletar
        </button>
        <button
          class="dataset__button dataset__button--export"
          :disabled="selected.length <= 0"
        >
          Exportar
        </button>
      </header>
      <table class="table" v-if="hasData">
        <thead class="table__head">
          <tr>
            <td>
              <input
                @change="selectAllChange"
                class="table__check"
                type="checkbox"
                v-model="selectAll"
              />
            </td>
            <td>Index</td>
            <td>Identificador</td>
            <td>Cidade</td>
            <td>Crédito</td>
            <td>Data De Nascimento</td>
            <td>Adicionado em</td>
          </tr>
        </thead>
        <tbody class="table__body">
          <tr v-for="(row, index) in dataset" :key="row.id">
            <td>
              <input
                type="checkbox"
                :id="row.id"
                v-model="selected"
                :value="row.id"
              />
            </td>
            <td>{{ index + 1 }}</td>
            <td>{{ row.id }}</td>
            <td>{{ row.city }}</td>
            <td>{{ formatMoney(row.credit) }}</td>
            <td>{{ formatDate(row.birthdate) }}</td>
            <td>{{ formatDate(row.createdAt) }}</td>
          </tr>
        </tbody>
      </table>
      <h1 class="dataset__empty" v-else>
        Não existem dados a serem mostrados, que tal adicionar alguns?
      </h1>
    </section>
  </div>
</template>

<script setup lang="ts">
  import type { ClientModel } from "@/model/ClientModel";
  import formatDate from "@/utils/formatDate";
  import formatMoney from "@/utils/formatMoney";
  import { ref, watch, onMounted, computed } from "vue";

  const selectAll = ref<boolean>(false);
  const selected = ref<string[]>([]);

  const dataset = ref<ClientModel[]>([]);

  watch(selected, (newState) => {
    if (newState.length === dataset.value.length && selectAll.value !== true)
      selectAll.value = true;

    if (newState.length !== dataset.value.length && selectAll.value === true)
      selectAll.value = false;
  });

  const hasData = computed(() => dataset.value.length > 0);

  function selectAllChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      selected.value = dataset.value.map((dataset) => dataset.id);
    }

    if (!checkbox.checked) {
      selected.value = [];
    }
  }

  onMounted(async () => {
    // dataset.value.push({
    //   id: "123214234",
    //   city: "Buritis",
    //   birthdate: Date.now() - 400,
    //   credit: 9000,
    //   createdAt: Date.now() - 4000,
    // });
    // dataset.value.push({
    //   id: "123214238",
    //   city: "Buritis",
    //   birthdate: Date.now() - 30,
    //   credit: 9000,
    //   createdAt: Date.now() - 590,
    // });
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  .dataset {
    margin: 15px;

    &__title {
      font-weight: 700;
      color: gray;

      text-transform: uppercase;
      font-size: 0.9rem;
      margin: 20px 0;
    }

    &__header {
      display: flex;
      justify-content: flex-end;
      column-gap: 10px;
      padding: 10px;
    }

    &__empty {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 150px;
      font-size: 1.5rem;
      font-weight: 700;
    }

    &__content {
      @include card($color: transparent);
      font-size: 0.8rem;

      input[type="checkbox"] {
        width: 20px;
        height: 20px;
      }
    }

    &__button {
      &--delete {
        @include button($color: $color-8, $padding: 12.5px 30px);
      }

      &--export {
        @include button($color: $color-1, $padding: 12.5px 30px);
      }
    }
  }

  .table {
    width: 100%;

    &__head {
      background-color: rgba($color: $color-1, $alpha: 0.3);
      color: darken($color: $color-1, $amount: 30%);
      font-weight: 500;

      td {
        vertical-align: middle;
        border-style: solid none;
        padding: 15px;

        &:last-child {
          border-bottom-right-radius: 10px;
          border-top-right-radius: 10px;
        }

        &:first-child {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }
      }
    }

    &__body {
      padding: 15px;

      tr {
        width: 100%;

        &:nth-child(even) {
          td {
            background-color: darken($color: #fff, $amount: 10%);
          }
        }
      }

      td {
        padding: 15px;
        vertical-align: middle;
        height: 20px;

        &:last-child {
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
        }

        &:first-child {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
    }
  }
</style>