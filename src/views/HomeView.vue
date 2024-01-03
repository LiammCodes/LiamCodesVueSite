<template>
  <div class="w-full">
    <!-- fixed div for hero and particle bg -->
    <div class="w-full fixed">
      <kinesis-container :active="scrollPosition == 0">
        <div class="mx-6 md:mx-24">
          <kinesis-element class="z-10" :strength="-10">
            <particle-background/>
          </kinesis-element>
          <div class="h-screen flex items-center justify-center max-w-7xl mx-auto" ref="content">
            <div ref="headerDiv" class="text-4xl md:text-5xl">
              <div ref="hi">
                <kinesis-element :strength="8" class="font-extrabold py-1 tracking-wider">Hi! 👋</kinesis-element>
              </div>
              <div ref="name">
                <kinesis-element :strength="2" class="font-extrabold py-1 tracking-wider">
                  <span ref="im">I'm </span>
                  <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-focus">Liam Moore</span>
                  <div ref="subName" class="pl-3 absolute">
                    <div class="font-bold py-2 pl-20 text-xl tracking-wider">
                      <div>Fullstack Software Developer</div>
                      <div>NS, Canada</div>
                    </div>
                  </div>
                </kinesis-element>
              </div>
              <div ref="title">
                <kinesis-element :strength="8" class="font-extrabold tracking-wider">A Fullstack Software Developer</kinesis-element>
              </div>
            </div>
          </div>
        </div>
      </kinesis-container>
    </div>

    <!-- Bio in column (much better solution)-->
    <div class="fixed h-screen w-full grid grid-cols-7">
      <div class="col-span-4 flex items-center mx-6 md:mx-24">
        <div class="flex flex-col space-y-4">
          <div class="flex flex-row items-center">
            <div class="z-40 w-20 md:w-52">
              <img ref="avatar" class="mask mask-circle" size="sm" src="../assets/images/liam.png" alt="Handsome pic of Liam"/>
            </div>
          </div>
          
          <div ref="bio" class="px-5 pb-4 pt-2 border border-neutral rounded-lg shadow lg:flex-row lg:max-w-xl card-bg mb-4">
            <h5 class="font-extrabold text-xl py-1 tracking-wider text-secondary">TLDR</h5>
            <p class="pb-2">
              I'm a software developer from Nova Scotia Canada specializing in UI/UX design and development.
              Currently working full time as a Full Stack developer with Vue3, TypeScript and Quasar. 
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- NON fixed div for scrolling page content -->
    <div class="h-screen" id="top" ref="topOfList"></div>
    <div class="project-box mx-6 md:mx-24" ref="projectList">
      <div class="max-w-7xl mx-auto grid grid-cols-7">
        <div class="col-span-4"></div>
        <div class="col-span-3 space-y-16">

          <!-- project list -->
          <div class="space-y-4">
            <p :strength="5" class="header-bg font-extrabold text-5xl py-4 tracking-wider z-40" ref="projectsTitle">Projects 💻</p>
            <project-card 
              class="col-span-1"
              name="FFMpeg Video Editor" 
              description="A video editing toolbox with features such as segment, preview, and thumbnail generation." 
              img-path="../../assets/images/mcSwissPic.png"
              :theme="theme"
            >
              <template v-slot:thumbnailSlot>
                <img class="object-cover w-full h-full rounded" src="../assets/images/mcSwissPic.png" alt="Project Thumbnail">
              </template>
              <template v-slot:languageSlot>
                <div class="badge badge-success">Vue 3</div>
                <div class="badge badge-info">TypeScript</div>
              </template>
            </project-card>
            <project-card 
              class="col-span-1" 
              name="Song Request Chat Bot" 
              description="A chat bot for Twitch that allows users to queue songs to a streamers Spotify playlist."
              :theme="theme"
            >
              <template v-slot:thumbnailSlot>
                <img class="object-cover w-full h-full rounded" src="../assets/images/mcSwissPic.png" alt="Project Thumbnail">
              </template>
              <template v-slot:languageSlot>
                <div class="badge bg-green-500 text-neutral border-none">Python</div>
              </template>
            </project-card>
          </div>

          <!-- education list -->
          <div class="space-y-4">
            <p :strength="5" class="header-bg font-extrabold text-5xl py-4 tracking-wider z-40 text-secondary">Education 🎓</p>
            <time-period-card 
              class="col-span-1"
              title="Bachelor of Applied Computer Science" 
              dateRange="2017 - 2022" 
              subtitle="Dalhousie University"
              :theme="theme"
            />
          </div>

          <!-- work experience list -->
          <div class="space-y-4">
            <p :strength="5" class="header-bg font-extrabold text-5xl py-4 tracking-wider z-40 text-accent">Work Experience 📈</p>
            <time-period-card 
              class="col-span-1"
              title="Full Stack Software Developer" 
              dateRange="2022 - present" 
              subtitle="Praxes Medical Group"
              :theme="theme"
            />
            <time-period-card 
              class="col-span-1"
              title="Assistant Platform Development Manager" 
              dateRange="2019 - 2022" 
              subtitle="McIntyre Media Inc."
              :theme="theme"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ParticleBackground from '../components/ParticleBackground.vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
import ProjectCard from '../components/cards/ProjectCard.vue';
import TimePeriodCard from '../components/cards/TimePeriodCard.vue';

export default defineComponent({
  name: 'HomeView',
  components: { TimePeriodCard, KinesisContainer, KinesisElement, ParticleBackground, ProjectCard },
  props: {
    theme: {
      type: String,
      required: true
    },
  },
  setup(){
    gsap.registerPlugin(ScrollTrigger);
  },
  data(){
    return {
      scrollPosition: 0 as number,
    }
  },
  watch: {},
  mounted() {
    // Add an event listener to track scroll position
    window.addEventListener('scroll', this.handleScroll);

    // fade header in on load
    gsap.from(this.$refs.headerDiv as any, { 
      delay: 0.5,
      duration: 1,
      y: 100,
      autoAlpha: 0,
      ease: "black.out(1.7)"
    });

    // fade header out on scroll
    this.headerFade(this.$refs.hi as HTMLElement);
    this.headerFade(this.$refs.title as HTMLElement);
    this.headerFade(this.$refs.im as HTMLElement);

    // fade bio in on scroll
    this.bioFade(this.$refs.bio as HTMLElement);
    this.bioFade(this.$refs.avatar as HTMLElement);
    this.bioFade(this.$refs.subName as HTMLElement);

    // slide name on scroll
    this.slideName();
  },

  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    bioFade(ref: HTMLElement) {
      let animation = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.projectsTitle as HTMLElement,
          end: "bottom center",
          toggleActions: "restart none reverse reverse",
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      animation.from(ref as HTMLElement, {
        opacity: 0
      })
      animation.to(ref as HTMLElement, {
        opacity: 1,
      });
    },

    headerFade(ref: HTMLElement) {
      gsap.to(ref as HTMLElement, {
        scrollTrigger: {
          trigger: this.$refs.projectList as HTMLElement,
          // trigger: '.project-box',
          toggleActions: "restart none reverse reverse",
        },
        delay: 0,
        duration: 0.5,
        autoAlpha: 0,
        ease: "black.out(1.7)"
      });
    },

    handleScroll() {
      // Update the scrollPosition data property with the current scroll position
      this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
    },

    slideName() {
      gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.projectsTitle as HTMLElement,
          end: "bottom center",
          toggleActions: "restart none reverse reverse",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }).to(this.$refs.name as HTMLElement, {
        // @ts-ignore
        x: () => ((80 + (( this.$refs.content.clientWidth - this.$refs.name.clientWidth)/2)) * -1) + this.$refs.avatar.clientWidth,
        // y: () => -150,
        // @ts-ignore
        y: () => (this.$refs.avatar.clientHeight/1.5) * -1,
        duration: 0.5,
      });
    },
    scrollFade(ref: HTMLElement) {
      gsap.to(ref, {
        scrollTrigger: {
          trigger: ref, // Set the trigger to the target element
          start: 'top center', // Adjust as needed
          end: 'bottom center', // Adjust as needed
          toggleActions: 'restart none restart none',
          onEnter: () => {
            // Fade in animation
            gsap.to(ref, {
              duration: 0.5,
              autoAlpha: 1,
              ease: 'power2.out',
            });
          },
          onLeave: () => {
            // Fade out animation
            gsap.to(ref, {
              duration: 0.5,
              autoAlpha: 0,
              ease: 'power2.in',
            });
          },
        },
        autoAlpha: 0, // Set initial opacity
        delay: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }
});
</script>
<style scoped>
.card-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
}

.header-bg {
  background-color:rgba(0, 0, 0, 0);
  backdrop-filter: blur(0);
}
</style>