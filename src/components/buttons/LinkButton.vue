<template>
  <a 
    role="button" 
    :href="link" 
    target="_blank" 
    :class="`btn btn-outline btn-bg bg-opacity-10 grow mb-4 ${buttonClasses}`"    
  >
    <font-awesome-icon :icon="icon" size="xl" />
    {{ text }}
  </a>
</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'LinkButton',
  props: {
    icon: {
      type: Array as PropType<string[]>, // Specify the type as an array of strings
    },
    text: {
      type: String,
    },
    customClassList: {
      type: String,
      required: false,
      default: ""
    },
    color: {
      type: String,
      required: false,
      default: ""
    },
    link: {
      type: String,
      required: true
    },
  },
  computed: {
    buttonClasses(): string {
      if (this.customClassList == "") {
        return `btn btn-outline grow mb-4 btn-bg text-${this.color}-600 bg-${this.color}-600 bg-opacity-10 hover:bg-${this.color}-500 hover:border-${this.color}-600`;
      } else {
        return "btn-default bg-gray-500";
      }
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