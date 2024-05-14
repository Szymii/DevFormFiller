<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useToastsStore } from '@/app/useToastsStore';
import { cn } from '@/utils/cn';

const toastStore = useToastsStore();
</script>

<template>
  <Teleport to="body">
    <ul v-if="toastStore.toasts.length" class="absolute top-0 z-10 flex w-full flex-col gap-1 p-2">
      <li
        v-for="toast in toastStore.toasts"
        :class="
          cn('min-h-14 rounded border px-2 py-1', {
            'bg-red-300': toast.status === 'error',
            'border-red-400': toast.status === 'error',
            'bg-green-300': toast.status === 'success',
            'border-green-400': toast.status === 'success'
          })
        "
        :key="toast.id"
      >
        <p
          :class="
            cn('font-bold', {
              'text-red-900': toast.status === 'error',
              'text-green-900': toast.status === 'success'
            })
          "
        >
          {{ toast.title }}
        </p>
        <span
          v-if="toast.description"
          :class="
            cn('font-medium', {
              'text-red-800': toast.status === 'error',
              'text-green-800': toast.status === 'success'
            })
          "
        >
          {{ toast.description }}
        </span>
      </li>
    </ul>
  </Teleport>
</template>
