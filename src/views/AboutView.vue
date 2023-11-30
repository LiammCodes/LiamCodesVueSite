<template>
  <div ref="wrapper" class="wrapper bg-base-100">
    <div class="back bg-gradient-to-br from-secondary to-accent"></div>
    <h3>This is a circular transition <br>
      Made entirely using GSAP3
    </h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  name: "AboutView",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    console.log(this.$refs.wrapper)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$refs.wrapper as HTMLElement,
        scrub: 0.1,
        start: "top center",
      },
    });

    tl.to(".back", {
      scale: 15,
    });

    tl.to(".back", {
      scale: 0,
    });
  }
});
</script>
<style>
</style>