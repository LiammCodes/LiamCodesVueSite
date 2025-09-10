<template>
  <div :class="'border border-base-100 rounded-lg shadow-md lg:flex-row lg:max-w-xl z-40 p-4 space-x-4 space-y-4 card-bg' + (theme === 'winter' ? ' border-gray-300' : ' border-zinc-900')">
    <div class="leading-normal w-full">
      <div class="flex justify-evenly pt-1 space-x-6">
        <div class="flex flex-col col space-y-10">
          <img src="https://oldschool.runescape.wiki/images/Old_School_RuneScape_logo.png?1d864" class="w-64" alt="Old School Runescape Logo"/>
          
          <div class="w-56">
            <span>Enter your Oldschool Runescape username below to retrieve your own skills</span>
          </div>
          
          <div class="flex flex-row space-x-1 w-full">
            <input
              type="text"
              placeholder="Username"
              class="input input-bordered input-sm w-full focus:outline-none" 
              v-model="osrsStatsUsernameInput"
            />
            <!-- <button class="btn btn-ghost btn-sm btn-square">
              <span class="loading loading-spinner w-5"></span>
            </button> -->
          </div>

          <div>

          </div>
          
        </div>
        <div class="w-64">
          <OsrsStats :username="osrsStatsUsername"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import OsrsStats from './OsrsStats.vue';

export default defineComponent({
  name: "OsrsStatsCard",
  props: { 
    theme: {
      type: String,
      required: true,
    }
  },
  components: { KinesisContainer, KinesisElement, OsrsStats },
  data() {
    return {
      loadingOsrsStats: true as boolean,
      osrsStatsLoadErr: null as null | string,
      osrsStatsUsername: 'LiamA6' as string,
      osrsStatsUsernameInput: '' as string,
    }
  },
  mounted() {

  },
  computed: {

  },
  methods: {

  }
});
</script>
<style lang="scss">

.card-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
  transition: 0.3s;
}

.dark-icon {
  filter: invert(1) grayscale(1) contrast(1) brightness(0);
}

</style>