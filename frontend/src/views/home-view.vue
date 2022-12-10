<template>
  <div>
    <main>
      <section>
        <nav>
          <ul>
            <li v-for="(menu, index) in state.menu" :key="index">
              <router-link :to="{ name: 'home' }">
                <h1>{{ menu.title }}</h1>
                <p>{{ menu.content }}</p>
              </router-link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from "vue";

  const state = reactive({
    menu: [
      {
        title: "Cadastrar Novos Dados",
        content: "Cadastre novos dados para alimentar a sua base de dados.",
        to: "add",
      },
      {
        title: "Analisar Dados",
        content:
          "Tenha um panorama geral de como os dados influenciam na sua empresa.",
        to: "analytics",
      },
      {
        title: "Listar Dados Existentes",
        content: "Exporte, delete e gerencie tudo que você cadastrou.",
        to: "dataset",
      },
    ],
  });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  ul {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    margin: 10px;
  }

  li {
    flex-grow: 1;
  }

  a {
    display: block;
    @include card($padding: 20px, $color: $color-1, $animate: true);
  }

  h1 {
    font-weight: 600;
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
</style>
