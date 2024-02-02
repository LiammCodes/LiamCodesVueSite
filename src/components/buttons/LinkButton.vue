<template>
  <a 
    ref="button"
    role="button" 
    :href="link" 
    target="_blank" 
    class="btn btn-outline btn-bg bg-opacity-10 grow mb-4"    
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
  data() {},
  computed: {},
  mounted() {
    this.setClasses();
  },
  methods: {
    setClasses(): void {
      let buttonRef = this.$refs['button'] as HTMLElement;
      let buttonClasses = buttonRef.classList as DOMTokenList;
      if (!this.customClassList) {
        buttonClasses.add(`text-${this.color}-600`, `bg-${this.color}-600`, `hover:bg-${this.color}-500`, `hover:border-${this.color}-600`);
      } else {
        buttonClasses.add("btn-default", "bg-gray-500")
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