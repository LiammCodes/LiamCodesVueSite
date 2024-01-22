<template>
  <dialog ref="projectModal" class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box w-11/12 max-w-5xl">
      <form method="dialog">
        <button @click="handleModalClose" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click outside to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button @click="handleModalClose">close</button>
    </form>
  </dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProjectModal',
  props: {
    showModal: Boolean,
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
