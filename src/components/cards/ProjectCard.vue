<template>
  <kinesis-container @click="handleClick">
    <div :class="'flex card-bg items-center border shadow-md rounded-lg flex-row p-2 space-x-4 space-y-4 night-card-bg cursor-pointer' + (theme === 'winter' ? ' border-gray-300' : ' border-zinc-900')">
      <kinesis-element :strength="5" class="lg:w-1/3 card-img">
        <slot name="thumbnailSlot"></slot>
      </kinesis-element>
      <div class="flex flex-col justify-between leading-normal lg:w-2/3">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ projectData.name }}</h5>
        <p class="mb-2 font-normal">{{ projectData.description }}</p>
        <div class="row space-x-2 mb-2">
          <slot name="languageSlot"></slot>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import { ProjectData } from '../../types/types';

export default defineComponent({
  name: "ProjectCard",
  props: { 
    projectData: {
      type: Object as () => ProjectData,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  components: { KinesisContainer, KinesisElement },
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
    handleClick() {
      this.$emit('clicked', this.projectData)
    }
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
  background: rgba(130, 141, 248, 0.1);
}
</style>