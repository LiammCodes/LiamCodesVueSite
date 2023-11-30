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
      <label class="swap swap-rotate btn btn-ghost p-3 mr-2">
        <input type="checkbox" :checked="true" @change="handleThemeChange"/>
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
      }
    },
    methods: {
      handleThemeChange() {
        const html = document.getElementById('html')
        console.log(html)
        if (this.darkMode) {
          if (html) {
            html.style.backgroundColor = '#FFFFFF';
          }
          this.$emit('theme-change', 'winter')
          this.darkMode = false;
        } else {
          if (html) {
            html.style.backgroundColor = '#0F1729';
          }
          this.$emit('theme-change', 'night')
          this.darkMode = true;
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