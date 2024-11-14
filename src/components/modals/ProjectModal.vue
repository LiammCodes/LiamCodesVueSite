<template>
  <dialog ref="projectModal" class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box border bg-opacity-80 backdrop-blur-md w-11/12 max-w-5xl"
      :class="theme === 'winter' ?  'bg-gray-200 border-zinc-400': 'bg-zinc-950 border-zinc-800'"   
    >
      <kinesis-container>
        <form method="dialog">
          <button @click="handleModalClose" class="btn btn-xs text-2xl md:text-sm btn-circle btn-ghost absolute right-0 top-0">✕</button>
        </form>
        <div class="flex flex-col md:flex-row space-x-6">
          <div class="flex flex-col mt-10 md:mt-0 justify-center items-center">
            <kinesis-element :strength="5" class="w-full">
              <img class="object-cover w-full rounded max-w-sm" :src="projectData?.imgPath" alt="Project Thumbnail" style="border-radius: 12px;">
            </kinesis-element>
          </div>
          
          <div class="flex md:w-2/3 flex-col justify-between">
            <div class="py-5">
              <h3 class="font-bold text-2xl">{{ projectData?.name }}</h3>
              <div class="row space-x-2 mb-2">
                <div
                  v-for="(language, index) in projectData?.languages"
                  :class="language.style"
                  :key="index"
                >
                {{ language.name }}
                </div>
              </div>
              <p class="py-4">{{ projectData?.longDescription }}</p>
            </div>
            <div v-if="projectData?.githubUrlId">
              <a 
                :href="`https://github.com/LiammCodes/${projectData.githubUrlId}`" 
                target="_blank" 
                class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 btn-default bg-gray-500"    
              >
                <font-awesome-icon :icon="['fab', 'github']" size="xl" />
                Github
              </a>
            </div>
            <div v-if="projectData?.demoUrl">
              <a 
                :href="`${projectData.demoUrl}`" 
                target="_blank" 
                class="btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 text-indigo-600 bg-indigo-600 hover:bg-indigo-500 hover:border-indigo-600"    
              >
                Live Demo
              </a>
            </div>
            
          </div>
        </div>
        
      </kinesis-container>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button @click="handleModalClose">close</button>
    </form>
  </dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import { ProjectData } from '../../types/types';

export default defineComponent({
  name: 'ProjectModal',
  components: { KinesisContainer, KinesisElement },
  props: {
    showModal: Boolean,
    projectData: Object as PropType<ProjectData>,
    theme: String
  },
  data() {
    return {
      modalIsOpen: this.showModal as boolean,
    }
  },
  mounted() {
    // @ts-ignore
    this.$refs.projectModal.focus();
  },
  methods: {
    handleModalClose(): void {
      this.$emit('modal-closed');
    }
  }
});
</script>
<style>
</style>
