<template>
  <div class="navbar fixed passthru-events bg-gradient-to-t from-transparent via-base-200 to-base-200 z-40">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl" @click="scrollToTop">Liam Codes</a>
    </div>
    <div class="navbar-center hidden lg:flex">
    </div>
    <div class="navbar-end">
      <!-- <div class="tooltip tooltip-bottom" data-tip="home">
        <button class="btn btn-ghost">
          <home-icon class="w-5 h-5"/>
        </button>
      </div>
      <div class="tooltip tooltip-bottom" data-tip="about me">
        <button class="btn btn-ghost">
          <user-icon class="w-5 h-5"/>          
        </button>
      </div> -->
      <!-- for multiple theme selection -->
      <!-- <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Theme</div>
        <ul tabindex="0" class="menu dropdown-content z-50 p-2 shadow bg-base-100 rounded-box w-52 mt-4">
          <li><div class="btn btn-sm btn-ghost rounded-btn" @click="handleThemeChange('night')">Night</div></li> 
          <li><div class="btn btn-sm btn-ghost rounded-btn" @click="handleThemeChange('winter')">Winter</div></li> 
          <li><div class="btn btn-sm btn-ghost rounded-btn" @click="handleThemeChange('synthwave')">Synthwave</div></li> 
        </ul>
      </div> -->
      <!-- for just dark and light theme selection -->
      <label class="swap swap-rotate btn btn-ghost p-3 mr-2">
        <input type="checkbox" :checked="true" @change="handleDarkThemeChange"/>
        <sun-icon class="swap-on w-6 h-6"/>
        <moon-icon class="swap-off w-5 h-5"/>
      </label>
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
      handleDarkThemeChange() {
        const html = document.getElementById('html')
        const lightTheme = 'winter' as string;
        const darkTheme = 'night' as string;
        if (this.darkMode) {
          if (html) {
            html.style.backgroundColor = '#FFFFFF';
            html.style.backgroundColor = '#F0F6FF';
          }
          this.$emit('theme-change', 'winter')
          this.$emit('theme-change', lightTheme)
          this.darkMode = false;
        } else {
          if (html) {
            html.style.backgroundColor = '#0F1729';
            html.style.backgroundColor = '#05080F';
          }
          this.$emit('theme-change', 'night')
          this.$emit('theme-change', darkTheme)
          this.darkMode = true;
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