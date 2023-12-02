<template>
  <div class="w-full">

    <!-- fixed div for hero and particle bg -->
    <div class="w-full fixed">
      <kinesis-container :active="scrollPosition == 0 && !isHoveringNavbar">
        <div class="mx-24">
          <kinesis-element :strength="-10">
            <particle-background/>
          </kinesis-element>
          <div class="h-screen flex items-center justify-center max-w-7xl mx-auto" ref="content">
            <div>
              <div ref="hi">
                <kinesis-element :strength="8" class="font-extrabold text-5xl py-1 tracking-wider">Hi! 👋 </kinesis-element>
              </div>
              <div ref="name">
                <kinesis-element :strength="2" class="font-extrabold text-5xl py-1 tracking-wider">
                  <span ref="im">I'm </span>
                  <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-focus">Liam Moore</span>
                </kinesis-element>
                <div ref="bio" class="fixed mt-6 ml-20">
                  <div class="p-5 card-bg items-center border border-neutral rounded-lg shadow lg:flex-row lg:max-w-xl z-40">
                    <h5 class="font-extrabold text-2xl py-1 tracking-wider">TLDR:</h5>
                    <p>
                      Hello this is a brief TLDR about Liam. Blah blah blah, he kinda knows how to code but not really.
                    </p>
                  </div>
                </div>
              </div>
              <div ref="title">
                <kinesis-element :strength="8" class="font-extrabold text-5xl tracking-wider">A Fullstack Software Developer</kinesis-element>
              </div>
            </div>
          </div>
        </div>
      </kinesis-container>
    </div>
    
    <!-- NON fixed div for scrolling page content -->
    <div class="h-screen"></div>
    <div class="project-box mx-24">
      <div class="max-w-7xl mx-auto grid grid-cols-7" ref="projectList">
        <div class="col-span-4"></div>
        <div class="col-span-3 space-y-16">
          <div class="space-y-4">
            <p :strength="5" class="header-bg font-extrabold text-5xl py-4 tracking-wider z-40">Projects 💻</p>
            <project-card 
              class="col-span-1"
              name="FFMpeg Video Editor" 
              description="A video editing toolbox with features such as segment, preview, and thumbnail generation." 
              :id="1"
            >
              <template v-slot:languageSlot>
                <div class="badge badge-success">Vue3</div>
                <div class="badge badge-info">TypeScript</div>
              </template>
            </project-card>
            <project-card class="col-span-1" name="Another Project" description="This project was very cool because it was super neat teehee" :id="2">
              <template v-slot:languageSlot>
                <div class="badge badge-success">Vue3</div>
                <div class="badge badge-info">TypeScript</div>
              </template>
            </project-card>
            <project-card class="col-span-1" name="Cool Project" description="This project was very cool because it was super neat teehee" :id="3"/>
            <project-card class="col-span-1" name="Another Project" description="This project was very cool because it was super neat teehee" :id="4"/>
          
          </div>
          <div class="space-y-4">
            <p :strength="5" class="header-bg font-extrabold text-5xl py-4 tracking-wider z-40">Education 🎓</p>
            <project-card 
              class="col-span-1"
              name="FFMpeg Video Editor" 
              description="A video editing toolbox with features such as segment, preview, and thumbnail generation." 
              :id="1"
            />
            <project-card class="col-span-1" name="Another Project" description="This project was very cool because it was super neat teehee" :id="2"/>
            <project-card class="col-span-1" name="Cool Project" description="This project was very cool because it was super neat teehee" :id="3"/>
            <project-card class="col-span-1" name="Another Project" description="This project was very cool because it was super neat teehee" :id="4"/>
          
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
import ProjectCard from '../components/ProjectCard.vue';

export default defineComponent({
  name: 'HomeView',
  components: { KinesisContainer, KinesisElement, ParticleBackground, ProjectCard },
  props: {
    isHoveringNavbar: Boolean
  },
  setup(){
    gsap.registerPlugin(ScrollTrigger);
  },
  data(){
    return {
      scrollPosition: 0 as number,
      isHoveringProjects: false as boolean,
    }
  },
  created() {
    window.addEventListener("resize", this.slideName);
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
    

    // this.scrollFade(this.$refs.projectList as HTMLElement);

    // slide name on scroll
    this.slideName();
  },

  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    headerFade(ref: HTMLElement) {
      gsap.to(ref as HTMLElement, {
        scrollTrigger: {
          trigger: '.project-box',
          toggleActions: "restart none reverse reverse"
        },
        delay: 0,
        duration: 0.5,
        autoAlpha: 0,
        ease: "black.out(1.7)"
      });
    },

    bioFade(ref: HTMLElement) {
      gsap.from(ref as HTMLElement, {
        scrollTrigger: {
          trigger: '.project-box',
          toggleActions: "restart none reverse reverse"
        },
        delay: 0.5,
        y: 70,
        opacity: 0, // Start with opacity 0
        duration: 0.5, // Animation duration
      });
    },

    handleScroll() {
      // Update the scrollPosition data property with the current scroll position
      this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
    },

    slideName() {
      // get width of parent
      const contentBox = this.$refs.content as HTMLElement;
      const nameHeader = this.$refs.name as HTMLElement;

      if (contentBox && nameHeader) {
        const distanceToRightEdge = (80 + ((contentBox.clientWidth - nameHeader.clientWidth)/2)) * -1;
        gsap.to(this.$refs.name as HTMLElement, {
          scrollTrigger: {
            trigger: '.project-box',
            toggleActions: "restart none reverse reverse"
          },
          x: distanceToRightEdge,
        });
      }
      
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