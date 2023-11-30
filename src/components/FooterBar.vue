<template>
  <footer class="footer footer-center p-4 mt-20">
    <aside>
      <p>Copyright © {{ year }} - Liam Moore 😎</p>
    </aside>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: "FooterBar",
    data() {
      return {
        year: new Date().getFullYear() as any,
      }
    }
  });
</script>