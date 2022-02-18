<template>
  <div
    class="dv-card group bg-white rounded-lg shadow-md dark:bg-gray-800 hover:border-indigo-500 border-2 border-transparent flex flex-col"
  >
    <header class="dv-card-header relative text-2xl py-4 px-8">
      <slot name="header"></slot>
    </header>
    <div class="dv-card-body px-8 py-4">
      <slot name="body"></slot>
    </div>
    <footer :class="['dv-card-footer px-8 py-4', isFooterBordered ? 'border-t' : '']">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {ref, toRefs, reactive} from 'vue';

defineProps({
  isFooterBordered: {
    default: false,
  },
});
</script>

<style scoped></style>

<script lang="ts">
export default {
  name: 'DvCard',
  inheritAttrs: false,
  customOptions: {},
};
</script>
