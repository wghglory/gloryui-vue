<template>
  <div class="time"><slot name="prefix" /> {{ displayTime }}</div>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue';

const props = defineProps({
  timeZone: {
    type: String,
    default: 'UTC',
  },
});

const emit = defineEmits(['datechange']);

const currentDateTime = ref(new Date());

const displayTime = computed(() =>
  currentDateTime.value.toLocaleString('en-US', {
    timeZone: props.timeZone,
  }),
);

setInterval(() => {
  currentDateTime.value = new Date();
  emit('datechange', displayTime);
}, 1000);
</script>

<style scoped>
.time {
  color: green;
}
</style>

<script lang="ts">
export default {
  name: 'DvCurrentTime',
  inheritAttrs: false,
  customOptions: {},
};
</script>
