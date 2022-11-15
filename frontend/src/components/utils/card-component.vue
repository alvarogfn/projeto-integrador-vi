<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .card {
    box-shadow: 3.5px 3.5px 6.5px 0px rgba(50, 50, 50, 0.22);

    padding: 10px;

    transition: all 0.3s ease-out;

    border-radius: 5px;
  }
</style>
