<template>
  <dialog ref="projectModal" class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box w-11/12 max-w-5xl">
      <kinesis-container>
        <form method="dialog">
          <button @click="handleModalClose" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="font-bold text-lg">{{ projectData?.name }}</h3>
        <p class="py-4">Press ESC key or click outside to close</p>
        <kinesis-element :strength="5" class="lg:w-1/3 card-img">
          <img class="object-cover w-full h-full rounded max-w-sm" :src="projectData?.imgPath" alt="Project Thumbnail">
        </kinesis-element>
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
