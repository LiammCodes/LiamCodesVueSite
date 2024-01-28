<template>
  <div :class="'px-5 pb-4 pt-2 border rounded-lg shadow-md lg:flex-row mb-4 bio-card-bg z-40' + (theme === 'winter' ? ' border-gray-300' : ' border-zinc-900')" >
    <h5 class="font-extrabold text-xl py-1 tracking-wider text-secondary">TLDR</h5>
    <p class="pb-2">
      I'm a software developer from Nova Scotia Canada specializing in UI/UX design and development.
      Currently working full time as a Full Stack developer with Vue 3, TypeScript and Quasar. 
    </p>
  </div>
  <div class="flex flex-col lg:flex-row lg:space-x-3">
    <link-button 
      text="Github" 
      :icon="['fab', 'github']"
      customClassList="btn-default bg-gray-500"
      link="https://github.com/LiammCodes"
    />
    <link-button 
      text="Instagram" 
      color="pink"
      :icon="['fab', 'instagram']"
      link="https://instagram.com/liammoore99"
    />
    <link-button 
      text="Twitch" 
      color="purple"
      :icon="['fab', 'twitch']"
      link="https://twitch.tv/liama6"
    />
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