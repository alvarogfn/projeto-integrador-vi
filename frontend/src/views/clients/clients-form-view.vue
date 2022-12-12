<template>
  <div class="clients-form">
    <h1 class="clients-form__title">
      Cadastre Novos Clientes Na sua base de dados
    </h1>
    <form
      class="clients-form__form"
      :class="{ 'clients-form__form--loading': loading }"
      @submit.prevent="submit"
    >
      <form-group title="Dados Pessoais">
        <form-input
          class="clients-form__input clients-form__input--name"
          label="nome"
          id="name"
          v-model:value="clientForm.personal.name.value"
          @valid="clientForm.personal.name.isValid = $event"
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
          v-model:value="clientForm.personal.gender.value"
          @valid="clientForm.personal.gender.isValid = $event"
          class="clients-form__input clients-form__input--sex"
        />
        <!-- <form-input
          class="clients-form__input clients-form__input--birthdate"
          label="data de nascimento"
          id="birthdate"
          type="date"
          v-model:value="clientForm.personal.birthdate.value"
          @valid="clientForm.personal.birthdate.isValid = $event"
          required
          placeholder="data de nascimento"
        /> -->
        <form-mask-input
          class="clients-form__input clients-form__input--birthdate"
          label="Data de nascimento"
          id="birthdate"
          :mask="customMasks.date"
          v-model:value="clientForm.personal.birthdate.value"
          @valid="clientForm.personal.birthdate.isValid = $event"
          required
          placeholder="data de nascimento"
        />
        <form-input-select
          class="clients-form__input clients-form__input--city"
          label="cidade"
          id="city"
          v-model:value="clientForm.personal.city.value"
          @valid="clientForm.personal.city.isValid = $event"
          required
          placeholder="cidade"
          :values="['Buritis', 'Unaí', 'Paracatu', 'Vazante', 'Guarda  Mor']"
        />
      </form-group>
      <form-group title="Interesse do Cliente">
        <form-mask-input
          class="clients-form__input clients-form__input--creditAmount"
          label="Quantidade de Crédito Consumida"
          id="credit"
          v-model:value="clientForm.finance.creditAmount.value"
          @valid="clientForm.finance.creditAmount.isValid = $event"
          required
          placeholder="R$ 0,00"
          :mask="customMasks.currency"
        />
        <form-input-checkbox
          class="clients-form__input clients-form__input--checkbox"
          label="Formas de crédito"
          v-model:value="clientForm.finance.creditPreferences"
          required
          :options="[
            { id: 1, label: 'Crédito' },
            { id: 2, label: 'Empréstimo' },
            { id: 3, label: 'Financiamento' },
            { id: 4, label: 'Consorcio' },
          ]"
        />
      </form-group>
      <button
        type="submit"
        class="clients-form__button"
        :disabled="!submittable"
      >
        Adicionar
      </button>
      <info-card v-if="error" :content="error" />
    </form>
  </div>
</template>

<script setup lang="ts">
  import FormInput from "@/components/shared/form/form-input.vue";
  import FormInputSelect from "@/components/shared/form/form-input-select.vue";
  import FormInputCheckbox from "@/components/shared/form/form-input-checkbox.vue";
  import FormInputRadio from "@/components/shared/form/form-input-radio.vue";
  import FormGroup from "@/components/shared/form/form-group.vue";
  import { reactive, computed, ref } from "vue";
  import { api } from "@/api/api";
  import { useAppStore } from "@/stores/app";
  import FormMaskInput from "@/components/shared/form/form-mask-input.vue";
  import customMasks from "@/utils/CustomMasks";
  import { AxiosError } from "axios";
  import InfoCard from "@/components/shared/utils/info-card.vue";

  const clientForm = reactive({
    personal: {
      name: { value: "", isValid: false },
      city: { value: "", isValid: false },
      birthdate: { value: "", isValid: false },
      gender: { value: "", isValid: false },
    },
    finance: {
      creditPreferences: [] as string[],
      creditAmount: { value: 0, isValid: false },
    },
  });

  const error = ref<string>("");
  const loading = ref<boolean>(false);

  const submittable = computed(
    () =>
      clientForm.personal.name.isValid &&
      clientForm.personal.birthdate.isValid &&
      clientForm.personal.gender.isValid &&
      clientForm.finance.creditAmount.isValid
  );

  async function submit(event: Event) {
    try {
      loading.value = true;
      error.value = "";
      await api.post(
        "/clients",
        {
          city: clientForm.personal.city.value,
          birthdate: +new Date(clientForm.personal.birthdate.value),
          sex: clientForm.personal.gender.value,
          credit: clientForm.finance.creditAmount.value,
          preferences: clientForm.finance.creditPreferences,
        },
        { headers: { authorization: useAppStore().token } }
      );

      (event.target as HTMLFormElement).reset();
    } catch (err) {
      if (err instanceof AxiosError) {
        error.value = err.cause?.message ?? "Alguma coisa deu errado.";
      }
    } finally {
      loading.value = false;
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
      font-size: 1rem;
      margin: 20px 0;
    }

    &__form {
      @include card($padding: 20px 30px);
      min-height: 60vh;

      display: flex;
      flex-flow: column nowrap;
      gap: 15px;

      transition: 200ms;

      &--loading {
        pointer-events: none;
        filter: blur(2px);
      }
    }

    &__input {
      flex-grow: 1;
      &--name {
        flex-basis: 80%;
      }
      &--birthdate {
        flex-basis: 250px;
      }
      &--city {
        flex-basis: 300px;
      }
      &--sex {
        flex-basis: 180px;
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
