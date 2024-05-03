<script setup lang="ts">
import { fillForm } from '@/app/fillForm';
import { useFormsStore } from '@/app/useFormsStore';
import BinIcon from '@/assets/BinIcon.vue';
import EditIcon from '@/assets/EditIcon.vue';
import PlayIcon from '@/assets/PlayIcon.vue';
import IconButton from '@/components/IconButton.vue';

const state = useFormsStore();

const editForm = (id: string) => {
  window.location.hash = `#/form?id=${id}`;
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
        <IconButton :action="() => fillForm(id)" :icon="PlayIcon" />
        <IconButton :action="() => editForm(id)" :icon="EditIcon" />
        <IconButton :action="() => state.deleteForm(id)" :icon="BinIcon" />
      </span>
    </li>
  </ul>
  <button class="border p-3 w-full rounded-md" @click="() => state.addForm()">Add form</button>
</template>
