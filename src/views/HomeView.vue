<template>
  <div class="w-full">
    <!-- fixed div for hero and particle bg -->
    <div class="w-full fixed">
      <div class="z-40">
        <div class="mx-6 md:mx-24">
          <div class="z-10">
            <particle-background :is-mobile="isMobile"/>
          </div>
          <!-- hide on mobile to avoid animation weirdness -->
          <div v-if="!isMobile" class="h-screen flex items-center justify-center max-w-7xl mx-auto" ref="content">
            <div ref="headerDiv" class="text-4xl md:text-5xl header-bg">
              <div ref="hi">
                <span class="font-extrabold py-1 tracking-wider">Hi! 👋</span>
              </div>
              <div class="font-extrabold py-1 tracking-wider">
                <span ref="im">I'm </span>
                <div ref="name" class="inline-block">
                  <span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-focus">Liam Moore</span>
                  <div ref="subName" class="absolute pl-1">
                    <div class="font-bold py-2 text-lg tracking-wider">
                      <div>Fullstack Software Developer</div>
                      <div>NS, Canada</div>
                    </div>
                  </div>
                </div>
              </div>
              <div ref="title">
                <span class="font-extrabold tracking-wider">A Fullstack Software Developer</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div v-if="isMobile" class="pt-32 pb-16">
      <div class="mx-3 md:mx-12">
        <div class="w-full flex justify-center pb-14">
          <div class="pr-5 w-60">
            <img class="mask mask-circle" size="sm" src="../assets/images/liam.png" alt="Handsome pic of Liam"/>
          </div>
          <div class="py-2 text-lg tracking-wider flex items-center">
            <div class="header-bg">
              <span class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-focus">Liam Moore</span>
              <div class="font-bold pl-1">
                <div>Fullstack Software Developer</div>
                <div>NS, Canada</div>
              </div>
            </div>
          </div>
        </div>
        <bio-card/>
      </div>
    </div>

    <!-- Bio in column (much better solution)-->
    <div v-else class="fixed flex items-center w-full h-screen">
      <div class="flex max-w-7xl mx-auto">
        <div class="flex mx-3 md:mx-12 w-full">
          <div class="flex flex-col space-y-4 w-full">
            <!-- avatar -->
            <div ref="avatar" class="z-40 pr-5 w-44 xl:w-52">
              <img class="mask mask-circle" size="sm" src="../assets/images/liam.png" alt="Handsome pic of Liam"/>
            </div>
            <div ref="bio" class="w-full">
              <bio-card/>
            </div>
          </div>
        </div>
        <div class="hidden lg:block flex-col w-full mx-3 md:mx-12"></div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="max-w-7xl mx-auto">
      
      <!-- NON fixed div for scrolling page content -->
      <div v-if="!isMobile" class="h-screen"></div>
      <div class="flex">
        <div class="hidden lg:block flex-col w-full mx-3 md:mx-12"></div>
        <div ref="projectList" class="flex-col w-full justify-start mx-3 md:mx-12">
          <div class="w-full space-y-16">
            <!-- project list -->
            <div class="space-y-4">
              <p :strength="5" class="header-bg font-extrabold text-3xl md:text-5xl py-4 pl-2 tracking-wider z-40" ref="projectsTitle">Projects 💻</p>
              <project-card 
                class="col-span-1"
                name="FFmpeg Video Editor" 
                description="A video editing toolbox with features such as segment, preview, and thumbnail generation." 
                img-path="../../assets/images/mcSwissPic.png"
                :theme="theme"
              >
                <template v-slot:thumbnailSlot>
                  <img class="object-cover w-full h-full rounded max-w-sm" src="../assets/images/mcSwissPic.png" alt="Project Thumbnail">
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
                  <img class="object-cover w-full h-full rounded max-w-sm" src="../assets/images/mcSwissPic.png" alt="Project Thumbnail">
                </template>
                <template v-slot:languageSlot>
                  <div class="badge bg-green-500 text-neutral border-none">Python</div>
                </template>
              </project-card>
            </div>

            <!-- education list -->
            <div class="space-y-4">
              <p :strength="5" class="header-bg font-extrabold text-3xl md:text-5xl py-4 pl-2 tracking-wider z-40 text-secondary">Education 🎓</p>

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
              <p :strength="5" class="header-bg font-extrabold text-3xl md:text-5xl py-4 pl-2 tracking-wider z-40 text-accent">Work Experience 📈</p>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gsap from 'gsap';
import BioCard from '../components/cards/BioCard.vue';
import ScrollTrigger from "gsap/ScrollTrigger";
import ParticleBackground from '../components/ParticleBackground.vue';
import ProjectCard from '../components/cards/ProjectCard.vue';
import TimePeriodCard from '../components/cards/TimePeriodCard.vue';

export default defineComponent({
  name: 'HomeView',
  components: { BioCard, ParticleBackground, ProjectCard, TimePeriodCard },
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
      windowWidth: window.innerWidth as number
    }
  },
  watch: {
    windowWidth(oldVal: number, newVal: number) {
      if (oldVal < 1024 && newVal >= 1024 || oldVal >= 1024 && newVal < 1024){
        location.reload()
      }
      console.log(oldVal + ' ---> ' + newVal)
    }
  },
  mounted() {
    window.addEventListener("resize", this.updateWindowSize);
    // fade header in on load
    gsap.from(this.$refs.headerDiv as any, { 
      delay: 0.5,
      duration: 1,
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
    this.slideToAvatar();
  },

  computed: {
    isMobile(): boolean {
      return this.windowWidth < 1024;
    }
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
          toggleActions: "restart none reverse reverse",
        },
        delay: 0,
        duration: 0.5,
        autoAlpha: 0,
        ease: "black.out(1.7)"
      });
    },

    slideToAvatar() {
      const avatar = this.$refs.avatar as HTMLElement;
      const name = this.$refs.name as HTMLElement
      gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.projectsTitle as HTMLElement,
          end: "bottom center",
          toggleActions: "restart none reverse reverse",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }).to(name as HTMLElement, {
        x: () => {
          // Calculate the target X position based on the avatar position
          const avatarRect = avatar.getBoundingClientRect();
          const nameRect = name.getBoundingClientRect();
          return avatarRect.right - nameRect.left;
        },
        y: () => {
          // Calculate the target Y position based on the avatar position
          const avatarRect = avatar.getBoundingClientRect();
          const nameRect = name.getBoundingClientRect();
          // Calculate the middle of the avatar
          const avatarMiddleY = (avatarRect.top + avatarRect.bottom) / 2;

          // Set the target Y position to align the middle of the name with the middle of the avatar
          return avatarMiddleY - nameRect.bottom;
        },
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
        autoAlpha: 0,
        delay: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    },

    updateWindowSize() {
      this.windowWidth = window.innerWidth
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