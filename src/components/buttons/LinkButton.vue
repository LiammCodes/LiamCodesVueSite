<template>
  <a 
    role="button" 
    :href="this.link" 
    target="_blank" 
    :class="'btn btn-outline btn-bg bg-opacity-10 grow mb-4 btn-default bg-gray-500'"
  >
    <font-awesome-icon :icon="this.icon" size="xl" />
    {{ this.text }}
  </a>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'LinkButton',
  props: {
    icon: {
      type: Array as PropType<string[]>, // Specify the type as an array of strings
      required: true,
    },
    text: String,
    customClassList: String,
    textColor: String,
    borderColor: String,
    backgroundColor: String,
    link: String
  },
  computed: {
    iconArr() {
      return this.icon as string[];
    }
  }
});

</script>

<style>
.btn-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
}
</style>