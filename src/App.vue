<script setup lang="ts">
import { ref, computed } from 'vue';
import HomePage from './pages/HomePage.vue';
import FormPage from './pages/FormPage.vue';
import Toaster from './components/Toaster.vue';

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
  const regex = /#([^?]+)/;
  const match = currentPath.value.match(regex);
  const currentRoute = (match?.[1] || '/') as RoutesType;

  return routes[currentRoute];
});
</script>

<template>
  <main class="min-h-screen bg-slate-800 p-4 text-white">
    <component :is="currentView" />
    <Toaster />
  </main>
</template>
