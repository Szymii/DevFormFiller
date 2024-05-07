<script setup lang="ts">
import { fillForm } from '@/app/fillForm';
import { useFormsStore } from '@/app/useFormsStore';
import BinIcon from '@/assets/BinIcon.vue';
import EditIcon from '@/assets/EditIcon.vue';
import PlayIcon from '@/assets/PlayIcon.vue';
import JSONIcon from '@/assets/JSONIcon.vue';
import IconButton from '@/components/IconButton.vue';
import { ref } from 'vue';

const state = useFormsStore();
const fileInput = ref<HTMLInputElement>();

const editForm = (id: string) => {
  window.location.hash = `#/form?id=${id}`;
};

const importFile = () => {
  if (!fileInput.value) return;

  const file = fileInput.value.files?.[0];

  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      if (typeof reader.result === 'string') {
        const jsonData = JSON.parse(reader.result);
        state.importForm(jsonData);
        // success notification
      }
      // failure notification
    } catch {
      // failure notification
    }
  };

  reader.readAsText(file);
};
</script>

<template>
  <ul class="flex flex-col gap-4 min-w-[300px] pb-4">
    <li
      v-for="({ id, name }, index) in state.currentForms"
      v-bind:key="id"
      class="border p-3 rounded-md"
    >
      <p class="truncate">{{ name || `Form ${index + 1}` }}</p>
      <span class="flex mt-2 gap-3">
        <IconButton :action="() => fillForm(id)" title="Play" :icon="PlayIcon" />
        <IconButton :action="() => editForm(id)" title="Edit" :icon="EditIcon" />
        <IconButton
          :action="() => state.deleteForm(id) /* success notification */"
          title="Delete"
          :icon="BinIcon"
        />
        <IconButton :action="() => state.exportForm(id)" title="Export to JSON" :icon="JSONIcon" />
      </span>
    </li>
  </ul>
  <div class="flex items-center gap-4">
    <button class="border p-3 w-full rounded-md" @click="() => state.addForm()">Add form</button>
    <input type="file" @change="importFile" ref="fileInput" class="hidden" accept=".json" />
    <IconButton
      :action="() => fileInput?.click()"
      :icon="JSONIcon"
      title="Import JSON"
      class="p-2 w-12 h-11 border rounded-md"
    />
  </div>
</template>
