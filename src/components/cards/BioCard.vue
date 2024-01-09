<template>
  <div class="px-5 pb-4 pt-2 border border-neutral rounded-lg shadow lg:flex-row mb-4 card-bg z-40" >
    <h5 class="font-extrabold text-xl py-1 tracking-wider text-secondary">TLDR</h5>
    <p class="pb-2">
      I'm a software developer from Nova Scotia Canada specializing in UI/UX design and development.
      Currently working full time as a Full Stack developer with Vue3, TypeScript and Quasar. 
    </p>
  </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BioCard',
});

</script>

<style>
.card-bg {
  z-index: 100;
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
}
</style>