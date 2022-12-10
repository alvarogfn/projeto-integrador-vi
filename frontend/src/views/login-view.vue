<template>
  <div class="login">
    <main class="login__content">
      <form class="login__form" @submit.prevent="authenticate">
        <h1 class="login__title">Entrar</h1>
        <label class="login__label" for="username">Username</label>
        <input
          class="login__input"
          id="username"
          type="text"
          placeholder="Username"
          v-model="login.username"
          required
        />
        <label class="login__label" for="password">Password</label>
        <input
          class="login__input login__input--password"
          id="password"
          type="password"
          v-model="login.password"
          placeholder="Senha"
          required
        />
        <button class="login__submit" type="submit">Autenticar</button>
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
  import { reactive, ref } from "vue";
  import { useRouter } from "vue-router";
  import { api } from "@/api/api";
  import type { Login } from "@/model/loginModel";
  import { useAppStore } from "@/stores/app";

  const router = useRouter();

  const appStore = useAppStore();

  const login = reactive({ username: "", password: "" });

  const error = ref(false);

  async function authenticate() {
    try {
      const response = await api.post<Login>("/login", {
        username: login.username,
        password: login.password,
      });

      const loginData = response.data;

      appStore.username = loginData.username;
      appStore.name = loginData.name;
      appStore.token = loginData.token;

      localStorage.setItem("token", loginData.token);

      if (appStore.isAuth) router.push({ name: "home" });
    } catch (e) {
      error.value = true;
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
