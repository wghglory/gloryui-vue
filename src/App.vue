<template>
  <div class="container mx-auto bg-gray-100 p-4 min-h-screen space-y-4">
    <h1 class="text-4xl text-indigo-700">This page aims to develop and test the component</h1>

    <div>
      <h2 class="text-2xl">Current Time</h2>
      <dv-current-time>
        <template #prefix>Time is </template>
      </dv-current-time>
    </div>

    <div>
      <h2 class="text-2xl">Card</h2>
      <dv-card :is-footer-bordered="true">
        <template #header>
          <div>Header</div>
        </template>
        <template #body>
          <div>body</div>
        </template>
        <template #footer>
          <div>footer</div>
        </template>
        <div>Header</div>
      </dv-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {DvCurrentTime, DvCard} from './components';
</script>

<style scoped>
.dv-card {
  background: #a2b8ff;
}
</style>
