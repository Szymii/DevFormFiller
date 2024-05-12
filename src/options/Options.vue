<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Options } from '@/app/types/Options';
import { onMounted, ref } from 'vue';

const settings = ref<Options>({ kebab: false });

onMounted(() => {
  chrome.storage.sync.get('settings', (data) => {
    if ('settings' in data) {
      settings.value = data.settings;
    }
  });
});

const onKebabChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  chrome.storage.sync.set({
    settings: {
      kebab: target.checked
    }
  });
};
</script>

<template>
  <main>
    <h1>Options</h1>
    <label>
      <input type="checkbox" :onchange="onKebabChange" :checked="settings?.kebab" />
      <span>Kebab case conversion</span>
    </label>
  </main>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  background: rgb(30 41 59);
  color: white;
  padding: 1rem;
}
label {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
}
</style>
