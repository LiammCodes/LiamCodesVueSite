<template>
  <div class="navbar fixed passthru-events bg-gradient-to-t from-transparent via-base-200 to-base-200 z-40">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl" @click="scrollToTop">Liam Codes</a>
    </div>
    <div class="navbar-center hidden lg:flex">
    </div>
    <div class="navbar-end">
      <div class="tooltip tooltip-bottom" data-tip="home">
        <button class="btn btn-ghost">
          <home-icon class="w-5 h-5"/>
        </button>
      </div>
      <div class="tooltip tooltip-bottom" data-tip="about me">
        <button class="btn btn-ghost">
          <user-icon class="w-5 h-5"/>          
        </button>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Theme</div>
        <ul tabindex="0" class="menu dropdown-content z-50 p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><div class="btn btn-sm btn-ghost rounded-btn" @click="handleThemeChange('night')">Night</div></li> 
          <li><div class="btn btn-sm btn-ghost rounded-btn" @click="handleThemeChange('nord')">Nord</div></li> 
          <li><div class="btn btn-sm btn-ghost rounded-btn" @click="handleThemeChange('synthwave')">Synthwave</div></li> 
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { MoonIcon, SunIcon, HomeIcon, UserIcon } from '@heroicons/vue/20/solid';

  export default defineComponent({
    name: 'NavBar',
    components: {
      HomeIcon,
      MoonIcon,
      SunIcon,
      UserIcon,
    },
    setup() {},
    data() {
      return {
        darkMode: true as boolean,
        themes: new Map<string, string>([
          ["night", "#05080F"],
          ["coffee", "#0C080C"],
          ["synthwave", "#0E0920"]
        ]),
      }
    },
    methods: {
      handleThemeChange(theme: string) {
        const html = document.getElementById('html')
        this.$emit('theme-change', theme); // set theme

        // set background color of html element (for overscroll)
        if (html) {
          html.style.backgroundColor = this.themes.get(theme) as string;
        }
      },
      scrollToTop() {
        // TODO: Smooth scroll to top
        // window.scrollTo(0,0);
        // @ts-ignore
        this.$refs.topOfList.scrollIntoView({ behavior: 'smooth' });
        // this.getElementById('top').scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
</script>
<style>
.passthru-events {
  pointer-events: none;
  /* other styles */
}
.btn {
  pointer-events: auto;
}
</style>