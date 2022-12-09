<template>
  <section>
    <h1>• {{ props.title }}</h1>
    <nav>
      <ul>
        <li v-for="option in options" :key="option.to">
          <router-link :to="{ name: option.to }">
            {{ option.label }}
          </router-link>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    options?: { label: string; to: string }[];
  }

  const props = withDefaults(defineProps<Props>(), { options: () => [] });
</script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  section {
    margin: 10px 0;
  }

  h1 {
    font-weight: 800;
    font-size: 1.1rem;
    padding: 0 15px;
  }

  nav {
    margin: 20px 0;
  }
  ul {
    display: flex;
    flex-flow: column nowrap;
  }

  li {
    display: flex;
    flex-flow: column nowrap;
  }
  a {
    padding: 20px 30px;
    flex-grow: 1;
    font-weight: 600;
    color: gray;
    border-left: 5px solid transparent;

    transition: 200ms;
  }

  a.router-link-exact-active {
    border-left: 5px solid $color-1;
    color: darken($color: $color-1, $amount: 10%);
    font-weight: 700;
    background-image: linear-gradient(
      90deg,
      rgba($color: $color-1, $alpha: 10%) 20%,
      transparent 95%
    );
  }
</style>
