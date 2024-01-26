<template>
  <a 
    role="button" 
    href="https://github.com/LiammCodes" 
    target="_blank" 
    :class="'btn btn-outline bio-card-bg bg-opacity-10 grow mb-4 btn-default bg-gray-500'"
  >
    <font-awesome-icon :icon="['fab', 'github']" size="xl" />
    Github
  </a>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LinkButton',
  props: {
    icon: () => Array<String>,
    text: String,
    customClassList: String,
    textColor: String,
    borderColor: String,
    backgroundColor: String
  }
});

</script>

<style>

</style>