<template>
  <div class="login">
    <main class="login__content">
      <form class="login__form" @submit.prevent="auth">
        <h1 class="login__title">Entrar</h1>
        <label class="login__label" for="login">Autenticação</label>
        <input
          class="login__input"
          id="login"
          type="password"
          placeholder="Sessão"
        />
        <button class="login__submit" type="submit">Autenticar</button>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";

  const router = useRouter();

  function auth() {
    router.push({ name: "app" });
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
      @include card($padding: 20px, $color: transparent);

      width: calc(100vw - 30px);
      max-width: 400px;
      min-height: 300px;
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
    }

    &__submit {
      @include button($padding: 10px 20px);
      align-self: flex-end;
    }
  }
</style>
