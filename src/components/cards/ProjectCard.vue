<template>
  <kinesis-container @click="handleClick">
    <!-- Spotlight overlay -->
    <div class="spotlight-effect rounded-lg" :style="spotlightStyle"></div>
    <!-- Border gradient overlay -->
    <div class="border-effect rounded-lg" :style="borderStyle"></div>
    <div 
      class="flex items-center shadow-md rounded-lg flex-row space-x-4 cursor-pointer spotlight-container border border-gradient p-3 bg-opacity-90 backdrop-blur-md"
      :class="(theme === 'winter' ? 'border-gray-300' : 'border-zinc-900')"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      ref="container"
    >
      <!-- Existing content -->
      <kinesis-element :strength="5" class="w-full md:w-2/5">
        <img class="object-cover w-full h-full rounded max-w-sm" :src="projectData.imgPath" alt="Project Thumbnail">
      </kinesis-element>
      <div class="flex flex-col content-between leading-normal w-full md:w-3/5">
      
        <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ projectData.name }}</h5>
        <p class="mb-2 font-normal leading-tight">{{ projectData.description }}</p>
     
        <div class="row space-x-2 mb-2">
          <div
            v-for="(language, index) in projectData.languages"
            :class="language.style"
            :key="index"
          >
            {{ language.name }}
          </div>
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
      mouseX: 0,
      mouseY: 0,
      isHovering: false
    }
  },
  computed: {
    spotlightStyle() {
      if (!this.isHovering) {
        return {
          background: 'radial-gradient(circle at center, transparent 0%, transparent 100%)',
          opacity: 0
        }
      }
      return {
        background: `radial-gradient(circle at ${this.mouseX}px ${this.mouseY}px, 
                    rgba(255, 94, 188, 0.15) 10%, 
                    rgba(215, 94, 255, 0.15) 25%,
                    rgba(94, 195, 255, 0.1) 50%,
                    transparent 70%)`,
        opacity: 1
      }
    },
    borderStyle() {
      if (!this.isHovering) {
        return {
          background: 'radial-gradient(circle at center, transparent 0%, transparent 100%)',
          opacity: 0
        }
      }
      return {
        background: `radial-gradient(circle at ${this.mouseX}px ${this.mouseY}px, 
                    rgba(255, 94, 188, 0.8) 10%, 
                    rgba(215, 94, 255, 0.8) 25%,
                    rgba(94, 195, 255, 0.6) 50%,
                    transparent 70%)`,
        opacity: 1
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('clicked');
    },
    handleMouseMove(event: MouseEvent) {
      const container = this.$refs.container as HTMLElement;
      const rect = container.getBoundingClientRect();
      this.mouseX = event.clientX - rect.left;
      this.mouseY = event.clientY - rect.top;
      this.isHovering = true;
    },
    handleMouseLeave() {
      this.isHovering = false;
    }
  }
});
</script>

<style lang="scss">

.spotlight-container {
  position: relative;
}

.border-gradient {
  position: relative;
  background-clip: padding-box;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    background: linear-gradient(to right, transparent, transparent);
  }
}

.spotlight-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: opacity 0.3s ease;

}

.border-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-out;
  padding: 0.1rem;
}
</style>