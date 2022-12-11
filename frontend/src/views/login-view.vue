<template>
  <div class="login">
    <main class="login__content">
      <form class="login__form" @submit.prevent="submit">
        <h1 class="login__title">Entrar</h1>
        <info-card :content="error" v-if="error" />
        <form-input
          label="Usuário"
          placeholder="usuário"
          id="username"
          type="text"
          v-model:value="loginForm.username.value"
          @valid="loginForm.username.isValid = $event"
          required
        />
        <form-input
          label="Senha"
          placeholder="Senha"
          id="password"
          type="password"
          v-model:value="loginForm.password.value"
          @valid="loginForm.password.isValid = $event"
          required
        />
        <button
          class="login__submit"
          type="submit"
          :disabled="!submittable || loading"
        >
          Entrar
        </button>
      </form>
      <p class="login__register">
        Não possui conta?
        <router-link class="login__link" :to="{ name: 'register' }">
          Registre-se!
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

  const loginForm = reactive({
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
    () => loginForm.username.isValid && loginForm.password.isValid
  );

  async function submit() {
    if (!submittable.value) return;

    interface Login {
      username: string;
      name: string;
      token: string;
    }

    try {
      loading.value = true;
      const response = await api.post<Login>("/login", {
        username: loginForm.username.value,
        password: loginForm.password.value,
      });

      appStore.username = response.data.username;
      appStore.name = response.data.name;
      appStore.token = response.data.token;

      localStorage.setItem("token", response.data.token);

      if (appStore.isAuth) router.push({ name: "home" });
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
        }
      }
    } finally {
      loading.value = false;
    }
  }
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;
  .login {
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

    &__register {
      font-size: 0.9rem;
    }

    &__link {
      color: darken($color: $color-1, $amount: 50%);
      font-weight: 700;
    }
  }
</style>
