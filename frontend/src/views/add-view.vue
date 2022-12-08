<template>
  <div class="add">
    <h1 class="add__title">Cadastre um novo registro</h1>
    <form class="add__form" @submit.prevent="submit">
      <h1 class="add__form-title">Informações sobre o cliente</h1>
      <form-input-select
        v-model:value="city"
        label="Cidade*"
        required
        :options="['Buritis', 'Paracatu']"
      />
      <form-input
        v-model:value="birhtdate"
        label="Data de Nascimento*"
        type="date"
        required
      />
      <form-input
        v-model:value.number="credit"
        label="Crédito*"
        type="number"
        required
      />
      <form-submit></form-submit>
    </form>
  </div>
</template>

<script setup lang="ts">
  import FormInput from "@/components/form/form-input.vue";
  import FormInputSelect from "@/components/form/form-input-select.vue";
  import FormSubmit from "@/components/form/form-submit.vue";
  import { ref } from "vue";

  const city = ref("");
  const birhtdate = ref("");
  const credit = ref(0);

  async function submit() {
    console.log(city.value, birhtdate.value, credit.value);
    // const response = await fetch("http://localhost:3000/create", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     city: city.value,
    //     birhtdate: city.value,
    //     credit: city.value,
    //   }),
    // });
  }
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  .add {
    margin: 15px;

    &__title {
      font-size: 0.9rem;
      color: gray;
      font-weight: 600;
      margin: 20px 0;
    }

    &__form-title {
      font-weight: 500;
      font-size: 1.1rem;
      margin-bottom: 20px;
    }

    &__form {
      @include card($color: transparent, $padding: 20px);

      display: flex;
      flex-flow: column nowrap;
      row-gap: 30px;
    }
  }
</style>
