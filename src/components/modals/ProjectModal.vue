<template>
  <!-- You can open the modal using ID.showModal() method -->
  <!-- <button class="btn" onclick="my_modal_3.showModal()">open modal</button> -->
  <dialog ref="projectModal" id="my_modal_3" class="modal" :class="{ 'modal-open': showModal }">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click on ✕ button to close</p>
    </div>
  </dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ProjectModal',
  props: {
    showModal: Boolean,
  }
});
</script>
