<template>
  <div class="navbar fixed passthru-events z-40">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl">Liam Codes</a>
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
          <li><div class="btn btn-sm btn-ghost rounded-btn" @click="handleThemeChange('coffee')">Coffee</div></li> 
          <li><div class="btn btn-sm btn-ghost rounded-btn" @click="handleThemeChange('synthwave')">Synthwave</div></li> 
        </ul>
      </div>
      

      


      <!-- <label class="swap swap-rotate btn btn-ghost p-3 mr-2">
        <input type="checkbox" :checked="true" @change="handleThemeChange"/>
        <sun-icon class="swap-on w-6 h-6"/>
        <moon-icon class="swap-off w-5 h-5"/>
      </label> -->
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