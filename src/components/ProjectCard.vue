<template>
  <kinesis-container>
    <a href="#" class="flex flex-col card-bg items-center border border-neutral rounded-lg shadow lg:flex-row lg:max-w-xl hover:bg-base-100 z-40 p-2 space-x-4 space-y-4">
      <kinesis-element :strength="5" class="lg:w-1/3">
        <img class="object-cover w-full h-full rounded" src="../assets/images/mcSwissPic.png" alt="Project Thumbnail">
      </kinesis-element>
      <div class="flex flex-col justify-between leading-normal lg:w-2/3">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ name }}</h5>
        <p class="mb-2 font-normal">{{ description }}</p>
        <div class="row space-x-2 mb-2">
          <div class="badge badge-success">Vue3</div>
          <div class="badge badge-info">TypeScript</div>
        </div>
      </div>
    </a>
  </kinesis-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
export default defineComponent({
  name: "ProjectCard",
  props: { 
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  components: { KinesisContainer, KinesisElement },
  data() {
    return {
      
    }
  },
  mounted() {

  },
});
</script>
<style lang="scss">
</style>