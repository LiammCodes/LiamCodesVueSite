<template>
  <kinesis-container>
    <a href="#" :class="'flex flex-col card-bg border border-base-100 rounded-lg shadow-lg lg:flex-row lg:max-w-xl z-40 p-4 space-x-4 space-y-4 card-bg' + (theme === 'winter' ? ' border-gray-300' : ' border-zinc-900')">
      <div class="leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ title }}</h5>
        <p class="mb-2 italic font-serif opacity-75"> {{ subtitle }}</p>
        <div class="flex flex-row items-center space-x-2 opacity-50">
          <calendar-days-icon class="col w-5 h-5"/>
          <p>{{ dateRange }}</p>
        </div>
      </div>
    </a>
  </kinesis-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CalendarDaysIcon } from '@heroicons/vue/20/solid';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
export default defineComponent({
  name: "EducationCard",
  props: { 
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    dateRange: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    }
  },
  components: { CalendarDaysIcon, KinesisContainer, KinesisElement },
  data() {
    return {
      thumbnailArr: [
        "../../assets/images/mcSwissPic.png",
      ],
    }
  },
  mounted() {
    // console.log(this.thumbnailArr);
  },
  methods: {

  },
});
</script>
<style lang="scss">
.card-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
  transition: 0.3s;
}

.card-bg:hover {
  // background: rgba(33, 23, 32, 0.9);
  background: rgba(130, 141, 248, 0.1);
}
</style>