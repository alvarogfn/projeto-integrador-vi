<template>
  <div class="register">
    <main class="register__content">
      <form class="register__form" @submit.prevent="register">
        <h1 class="register__title">Registre-se</h1>
        <form-input-text
          id="name"
          label="Nome Completo"
          placeholder="name"
          v-model:value="user.name"
          required
        />
        <form-input-text
          id="username"
          label="Nome de Usuário"
          placeholder="Username"
          v-model:value="user.username"
          required
        />
        <form-input-text
          id="password"
          label="Senha de autenticação"
          type="password"
          v-model:value="user.password"
          placeholder="Senha"
          required
        />
        <button class="register__submit" type="submit">Autenticar</button>
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
  import { reactive, ref } from "vue";
  import { useRouter } from "vue-router";
  import { api } from "@/api/api";
  import type { Login } from "@/model/loginModel";
  import { useAppStore } from "@/stores/app";
  import FormInputText from "@/components/shared/form/form-input-text.vue";

  const router = useRouter();

  const user = reactive({ name: "", username: "", password: "" });

  const error = ref(false);

  async function register() {
    try {
      const { data } = await api.post<Login>("/register", user);
      localStorage.setItem("token", data.token);
      router.push({ name: "login" });
    } catch (e) {
      error.value = true;
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
      row-gap: 30px;
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
