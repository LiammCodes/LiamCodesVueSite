<template>
  <kinesis-container>
    <a href="#" :class="'flex card-bg items-center border border-base-100 rounded-lg shadow flex-row z-40 p-2 space-x-4 space-y-4' + (theme === 'coffee' ? ' coffee-card-bg' : ' night-card-bg')">
      <kinesis-element :strength="5" class="lg:w-1/3 card-img">
        <slot name="thumbnailSlot"></slot>
      </kinesis-element>
      <div class="flex flex-col justify-between leading-normal lg:w-2/3">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ name }}</h5>
        <p class="mb-2 font-normal">{{ description }}</p>
        <div class="row space-x-2 mb-2">
          <slot name="languageSlot"></slot>
        </div>
      </div>
    </a>
  </kinesis-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';
export default defineComponent({
  name: "ProjectCard",
  props: { 
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  components: { KinesisContainer, KinesisElement },
  data() {
    return {
      thumbnailArr: [
        "../../assets/images/mcSwissPic.png",
      ],
    }
  },
  mounted() {
    // console.log(this.thumbnailArr);
  },
  methods: {

  },
});
</script>
<style lang="scss">
.card-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
  transition: 0.3s;
}

.night-card-bg:hover {
  // background: rgba(33, 23, 32, 0.9);
  background: rgba(130, 141, 248, 0.1);
}

.coffee-card-bg:hover {
  background: rgba(33, 23, 32, 0.5);
}
</style>