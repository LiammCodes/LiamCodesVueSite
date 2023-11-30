<template>
  <div ref="particleContainer" class="particle-container z-0" id="particle-container">
    <div class="particle" v-for="(_, index) in particles" :key="index"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';


export default defineComponent({
  name: 'ParticleBackground',
  components: { KinesisContainer, KinesisElement },
  data() {
    return {
      particles: [] as HTMLDivElement[],
    }
  },
  mounted() {
    gsap.from(this.$refs.particleContainer as any, { 
      delay: 1.2,
      duration: 2,
      y: 100,
      autoAlpha: 0,
      ease: "black.out(1.7)"
    });
  },
  created() {
    // Create particles and add them to the array
    for (let i = 0; i < 43; i++) {
      const particle = document.createElement('div') as HTMLDivElement;
      particle.className = 'particle';
      this.particles.push(particle);
    }
  },
  methods: {}
});
</script>

<style lang="scss">

.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Add other styling as needed */
}

@for $i from 1 through 30 {
	@keyframes particle-animation-#{$i} {
    $x: random(90) * 1vw;
    $y: random(90) * 1vh;
    $z: random(100) * 1px;

    0% {
      opacity: 0;
    }
		10% {
      opacity: 1;
		}
    90% {
      opacity: 1;
		}
    100% {
      opacity: 0;
      transform: translate3d($x, $y, $z);
    }

	}

	$color: hsl(random(360), 70%, 50%);
  $time: random(60) + 60s;
	.particle:nth-child(#{$i}){
		animation: particle-animation-#{$i} $time infinite;
		$size: random(5) + 5 + px;
    $shadowSize: random(6) + px;
		opacity: calc(random(100)/100);
		height: $size;
		width: $size;
    position: absolute;
 	  border-radius: 50%;
		animation-delay: -$i * .2s;
		transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
		background: $color;
    box-shadow: 0px 0px 40px $shadowSize $color;
	}
}

</style>
