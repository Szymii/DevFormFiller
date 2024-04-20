<script setup lang="ts">
import { getForm } from '@/app/getForm';
import { getParams } from '@/utils/getParams';
const params = getParams<{ id: string }>();
const forms = getForm(params.id);
</script>

<template>
  <div>Form</div>
</template>
