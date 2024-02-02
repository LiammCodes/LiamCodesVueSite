<template>
  <div :class="'px-5 pb-4 pt-2 border rounded-lg shadow-md lg:flex-row mb-4 bio-card-bg z-40' + (theme === 'winter' ? ' border-gray-300' : ' border-zinc-900')" >
    <h5 class="font-extrabold text-xl py-1 tracking-wider text-secondary">TLDR</h5>
    <p class="pb-2">
      I'm a software developer from Nova Scotia Canada specializing in UI/UX design and development.
      Currently working full time as a Full Stack developer with Vue 3, TypeScript and Quasar. 
    </p>
  </div>
  <div class="flex flex-col lg:flex-row lg:space-x-3">

    <a 
      role="button" 
      href="https://github.com/LiammCodes" 
      target="_blank" 
      class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 btn-default bg-gray-500"    
    >
      <font-awesome-icon :icon="['fab', 'github']" size="xl" />
      Github
    </a>

    <a 
      role="button" 
      href="https://instagram.com/liammoore99" 
      target="_blank" 
      class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 text-pink-600 bg-pink-600 hover:bg-pink-500 hover:border-pink-600"    
    >
      <font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
      Instagram
    </a>

    <a 
      role="button" 
      href="https://twitch.tv/liama6" 
      target="_blank" 
      class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 text-purple-600 bg-purple-600 hover:bg-purple-500 hover:border-purple-600"    
    >
      <font-awesome-icon :icon="['fab', 'twitch']" size="xl" />
      Twitch
    </a>

  </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';
import LinkButton from '../buttons/LinkButton.vue';

export default defineComponent({
  name: 'BioCard',
  props: {
    theme: String
  },
  components: { LinkButton }
});

</script>

<style>
.bio-card-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
}
</style>