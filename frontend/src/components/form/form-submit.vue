<template>
  <button type="submit">Enviar</button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @use "@/styles/colors.scss" as *;

  button {
    @include button($padding: 15px 50px);
    align-self: flex-end;
  }
</style>
