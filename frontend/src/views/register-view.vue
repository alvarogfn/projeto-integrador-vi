<template>
  <div class="register">
    <main class="register__content">
      <form class="register__form" @submit.prevent="submit">
        <h1 class="register__title">Registro</h1>
        <info-card :content="error" v-if="error" />
        <form-input
          label="Nome Completo"
          placeholder="nome"
          id="name"
          type="text"
          v-model:value="registerForm.name.value"
          @valid="registerForm.name.isValid = $event"
          required
        />
        <form-input
          label="Nome de Usuário"
          placeholder="usuário"
          id="username"
          type="text"
          v-model:value="registerForm.username.value"
          @valid="registerForm.username.isValid = $event"
          required
        />
        <form-input
          label="Senha"
          placeholder="Senha"
          id="password"
          type="password"
          v-model:value="registerForm.password.value"
          @valid="registerForm.password.isValid = $event"
          required
        />
        <button
          class="register__submit"
          type="submit"
          :disabled="!submittable || loading"
        >
          Registrar
        </button>
      </form>
      <p class="register__login">
        Já possui conta?
        <router-link class="register__link" :to="{ name: 'login' }">
          Entrar
        </router-link>
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, computed } from "vue";
  import { useRouter } from "vue-router";
  import { api } from "@/api/api";
  import { useAppStore } from "@/stores/app";
  import FormInput from "@/components/shared/form/form-input.vue";
  import InfoCard from "@/components/shared/utils/info-card.vue";
  import { AxiosError } from "axios";

  const router = useRouter();

  const appStore = useAppStore();

  const registerForm = reactive({
    name: {
      value: "",
      isValid: false,
    },
    username: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const error = ref("");
  const loading = ref<boolean>(false);

  const submittable = computed(
    () =>
      registerForm.name.isValid &&
      registerForm.username.isValid &&
      registerForm.password.isValid
  );

  async function submit() {
    if (!submittable.value) return;

    interface Register {
      token: string;
    }

    try {
      loading.value = true;
      const response = await api.post<Register>("/register", {
        name: registerForm.name.value,
        username: registerForm.username.value,
        password: registerForm.password.value,
      });

      localStorage.setItem("token", response.data.token);

      router.push({ name: "login" });
    } catch (err) {
      if (err instanceof AxiosError) {
        const response = err.response;
        if (response) {
          if (response.status === 401) {
            error.value = "Combinação de usuário e senha inválidos.";
          }

          if (response.status === 400) {
            error.value =
              "Alguma coisa deu errado na requisição, tente novamente.";
          }

          if (response.status === 422) {
            error.value =
              "Já existe alguém com esse nome de usuário. Por favor, escolha outro.";
          }
        }
      }
    } finally {
      loading.value = false;
    }
  }
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .register {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    &__content {
      @include card($padding: 30px, $color: transparent);

      width: calc(100vw - 30px);
      max-width: 400px;
      min-height: 350px;

      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      row-gap: 50px;
    }

    &__title {
      font-weight: 700;
      font-size: 2.5rem;
      text-align: center;
    }

    &__form {
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      flex-grow: 1;
      justify-content: space-between;
      row-gap: 20px;
    }

    &__label {
      display: none;
    }

    &__input {
      width: 100%;
      padding-bottom: 5px;
      border-bottom: 2px solid lighten($color: $color-1, $amount: 10%);

      transition: 200ms;

      &:hover {
        border-bottom: 2px solid $color-1;
      }

      &--password {
        border-bottom: 2px solid lighten($color: $color-8, $amount: 10%);
        &:hover {
          border-bottom: 2px solid $color-8;
        }
      }
    }

    &__submit {
      @include button($padding: 10px 20px);
      align-self: flex-end;
    }

    &__login {
      font-size: 0.9rem;
    }

    &__link {
      color: darken($color: $color-1, $amount: 50%);
      font-weight: 700;
    }
  }
</style>
