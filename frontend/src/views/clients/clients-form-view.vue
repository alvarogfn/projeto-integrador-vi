<template>
  <div class="clients-form">
    <h1 class="clients-form__title">
      Cadastre Novos Clientes Na sua base de dados
    </h1>
    <form class="clients-form__form" @submit.prevent="submit">
      <p class="clients-form__tip">Campos com * são obrigatórios</p>
      <form-group title="Dados Pessoais">
        <form-input-text
          class="clients-form__input clients-form__input--name"
          label="nome"
          id="name"
          v-model:value="data.personal.name"
          required
          placeholder="nome"
        />
        <form-input-radio
          label="Sexo"
          :options="[
            { id: 'M', label: 'masculino' },
            { id: 'F', label: 'feminino' },
          ]"
          required
          v-model:value="data.personal.gender"
          class="clients-form__input clients-form__input--sex"
        />
        <form-input-date
          class="clients-form__input clients-form__input--birthdate"
          label="data de nascimento"
          id="birthdate"
          v-model:value="data.personal.birthdate"
          required
          placeholder="data de nascimento"
        />
        <form-input-select
          class="clients-form__input clients-form__input--city"
          label="cidade"
          id="city"
          v-model:value="data.personal.city"
          required
          placeholder="cidade"
          :values="['Buritis', 'Unaí']"
        />
      </form-group>
      <form-group title="Interesse do Cliente">
        <form-input-text
          class="clients-form__input clients-form__input--creditAmount"
          label="Quantidade de Crédito Consumida"
          id="credit"
          v-model:value="data.finance.creditAmount"
          required
          placeholder="R$ 0,00"
        />
        <form-input-checkbox
          class="clients-form__input clients-form__input--checkbox"
          label="Formas de crédito"
          v-model:value="data.finance.creditPreferences"
          required
          :options="[
            { id: 1, label: 'Crédito' },
            { id: 2, label: 'Empréstimo' },
            { id: 3, label: 'Financiamento' },
            { id: 4, label: 'Consorcio' },
          ]"
        />
      </form-group>
      <button type="submit" class="clients-form__button">Adicionar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import FormInputText from "@/components/shared/form/form-input-text.vue";
  import FormInputDate from "@/components/shared/form/form-input-date.vue";
  import FormInputSelect from "@/components/shared/form/form-input-select.vue";
  import FormInputCheckbox from "@/components/shared/form/form-input-checkbox.vue";
  import FormInputRadio from "@/components/shared/form/form-input-radio.vue";
  import FormGroup from "@/components/shared/form/form-group.vue";
  import { reactive } from "vue";
  import { api } from "@/api/api";
  import { useAppStore } from "@/stores/app";

  const data = reactive({
    personal: {
      name: "",
      city: "",
      birthdate: "",
      gender: "",
    },
    finance: {
      creditPreferences: [] as string[],
      creditAmount: 0,
    },
  });

  async function submit(event: Event) {
    try {
      const response = await api.post(
        "/clients",
        {
          city: data.personal.city,
          birthdate: data.personal.birthdate,
          preferences: data.finance.creditPreferences,
          credit: data.finance.creditAmount,
          sex: data.personal.gender,
        },
        { headers: { authorization: useAppStore().token } }
      );

      (event.target as HTMLFormElement).reset();

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .clients-form {
    margin: 10px;

    &__title {
      font-weight: 700;
      color: gray;

      text-transform: uppercase;
      font-size: 0.9rem;
      margin: 20px 0;
    }

    &__tip {
      font-size: 0.7rem;
      color: $color-8;
    }

    &__form {
      @include card($padding: 20px 30px);
      min-height: 60vh;

      display: flex;
      flex-flow: column nowrap;
      gap: 15px;
    }

    &__input {
      flex-grow: 1;
      &--name {
        flex-basis: 100%;
      }
      &--birthdate {
        flex-basis: 250px;
      }
      &--city {
        flex-basis: 300px;
      }
      &--sex {
        flex-basis: 150px;
      }
      &--creditAmount {
        flex-basis: 100%;
      }
    }

    &__button {
      align-self: flex-end;
      @include button($padding: 10px 30px);
    }
  }
</style>
