<script setup lang="ts">
  import Home from "./pages/Home.vue";
  import Form from "./pages/Home.vue";

  const routes = {
    "/": Home,
    "/form": Form,
  };
</script>

<template>
  <div class="text-3xl font-bold underline">vue test</div>
</template>
