<script setup lang="ts">
import { ref, computed } from 'vue';
import HomePage from './pages/HomePage.vue';
import FormPage from './pages/FormPage.vue';

type RoutesType = keyof typeof routes;

const routes = {
  '/': HomePage,
  '/form': FormPage
};

const currentPath = ref<RoutesType>(window.location.hash as RoutesType);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash as RoutesType;
});

const currentView = computed(() => {
  const currentRoute = (currentPath.value.slice(1) || '/') as RoutesType;
  return routes[currentRoute];
});
</script>

<template>
  <component :is="currentView" />
</template>
