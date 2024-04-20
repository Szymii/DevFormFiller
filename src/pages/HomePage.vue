<script setup lang="ts">
import { getForms } from '@/app/getForms';
import BinIcon from '@/assets/BinIcon.vue';
import EditIcon from '@/assets/EditIcon.vue';
import PlayIcon from '@/assets/PlayIcon.vue';
import IconButton from '@/components/IconButton.vue';
const forms = getForms();

const play = (id: string) => {
  //
};

const deleteForm = (id: string) => {
  //
};

const editForm = (id: string) => {
  window.location.hash = `#/form?id=${id}`;
};
</script>

<template>
  <ul class="flex flex-col gap-4 min-w-[300px]">
    <li v-for="{ id, name } in forms" v-bind:key="id" class="border p-3 rounded-md">
      <p class="truncate">{{ name }}</p>
      <span class="flex mt-2 gap-3">
        <IconButton
          :action="
            () => {
              play(id);
            }
          "
          :icon="PlayIcon"
        />
        <IconButton
          :action="
            () => {
              editForm(id);
            }
          "
          :icon="EditIcon"
        />
        <IconButton
          :action="
            () => {
              deleteForm(id);
            }
          "
          :icon="BinIcon"
        />
      </span>
    </li>
  </ul>
</template>
