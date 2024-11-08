<template>
  <div :class="'px-5 pb-4 pt-2 border rounded-lg shadow-md lg:flex-row mb-4 bio-card-bg z-40' + (theme === 'winter' ? ' border-gray-300' : ' border-zinc-900')" >
    <h5 class="font-extrabold text-xl py-1 tracking-wider text-secondary">TLDR</h5>
    <p class="pb-2" :class="bioVisible ? '' : 'pointer-events-none'">
      I'm a software developer from Nova Scotia Canada specializing in UI/UX design and development.
      Currently working full time as a Full Stack developer with Vue 3, TypeScript and Quasar. 
    </p>
  </div>

  <!-- socials row 1-->
  <div class="flex flex-col lg:flex-row lg:space-x-3">
    <a
      href="https://github.com/LiammCodes" 
      target="_blank" 
      class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 btn-default bg-gray-500"
      :class="bioVisible ? '' : 'pointer-events-none'"
    >
      <font-awesome-icon :icon="['fab', 'github']" size="xl" />
      Github
    </a>
    <a
      href="https://instagram.com/liammoore99" 
      target="_blank" 
      class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 text-pink-600 bg-pink-600 hover:bg-pink-500 hover:border-pink-600"
      :class="bioVisible ? '' : 'pointer-events-none'"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
      Instagram
    </a>
    <a 
      href="https://twitch.tv/liama6" 
      target="_blank" 
      class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 text-purple-600 bg-purple-600 hover:bg-purple-500 hover:border-purple-600"
      :class="bioVisible ? '' : 'pointer-events-none'"
    >
      <font-awesome-icon :icon="['fab', 'twitch']" size="xl" />
      Twitch
    </a>
  </div>

  <!-- socials row 2-->
  <div class="flex flex-col lg:flex-row lg:space-x-3">
    <a
      href="https://www.last.fm/user/liama6" 
      target="_blank" 
      class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 text-red-600 bg-red-600 hover:bg-red-500 hover:border-red-600"
      :class="bioVisible ? '' : 'pointer-events-none'"
    >
      <font-awesome-icon :icon="['fab', 'lastfm']" size="xl" />
      Last.fm
    </a>
    <a 
      href="https://letterboxd.com/liama6/" 
      target="_blank" 
      class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 text-cyan-600 bg-cyan-600 hover:bg-cyan-500 hover:border-cyan-600"
      :class="bioVisible ? '' : 'pointer-events-none'"
    >
      <font-awesome-icon :icon="['fab', 'letterboxd']" size="xl" />
      Letterboxd
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BioCard',
  props: {
    bioOpacity: {
      type: Number,
      required: false,
      default: 1
    },
    theme: String
  },
  computed: {
    bioVisible(): boolean {
      return this.bioOpacity > 0.5;
    }
  }
});

</script>

<style>
.bio-card-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
}
</style>