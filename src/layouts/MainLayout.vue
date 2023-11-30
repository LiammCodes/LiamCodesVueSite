<template>

  <div id="themed-app" :data-theme="theme" class="bg-transparent selection:bg-secondary selection:text-secondary-content">
    <nav-bar 
      class="z-40" 
      @theme-change="handleThemeChange" 
      @mouseenter="isHoveringNavbar = true" 
      @mouseleave="isHoveringNavbar = false" 
    />
    <home-view :isHoveringNavbar="isHoveringNavbar" />
    <footer-bar/>
  </div>

  
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import FooterBar from '../components/FooterBar.vue';
import ParticleBackground from '../components/ParticleBackground.vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

export default defineComponent({
  name: 'MainLayout',
  components: { AboutView, FooterBar, HomeView, NavBar, KinesisContainer, KinesisElement, ParticleBackground },
  setup() {},
  data() {
    return {
      isHoveringNavbar: false as boolean,
      theme: 'night' as string,
    }
  },
  mounted() {},
  methods: {
    handleThemeChange(newTheme: string) {
      this.theme = newTheme;
      this.$emit('theme-change', this.theme)
      console.log(newTheme)
    },
  },
});

</script>
<style>
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Add other styling as needed */
}
</style>