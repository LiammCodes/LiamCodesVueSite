<template>
  <!-- <div class="card card-side card-bg border border-primary w-full">
    <figure>
      <img class="thumbnail" src="../assets/images/mcSwissPic.png" alt="Thumbnail"/>
    </figure>
    <h2 class="card-title">{{ name }}</h2>
    <div class="card-body p-5">
      <p> {{ description }}</p>
      <div class="card-actions justify-end pt-5">
        <button class="btn btn-sm btn-primary">Learn now!</button>
      </div>
    </div>
  </div> -->


  <!-- <kinesis-container>
    <div class="card card-side card-bg shadow-base-200 shadow-md border w-full">
      <kinesis-element :strength="5" class="px-2 pt-2 w-2/3">
        <figure class="rounded-xl shadow-md">
          <img src="../assets/images/mcSwissPic.png" />
        </figure>
      </kinesis-element>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{{ name }}</h2>
        <p>{{ description }}</p>
        <div class="card-actions pt-4">
          <button class="btn btn-sm btn-primary">view project</button>
        </div>
      </div>
    </div>
  </kinesis-container> -->

  <a href="#" class="flex flex-col card-bg items-center border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 z-40">
    <img class="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg h-full" src="../assets/images/mcSwissPic.png" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>
    </div>
  </a>
  
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
    id: {
      type: Number,
      required: true
    }
  },
  components: { KinesisContainer, KinesisElement },
  data() {
    return {
      
    }
  },
  mounted() {

  },
});
</script>
<style lang="scss">
$color: hsl(random(360), 70%, 50%);
.card-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
}
.card-shadow {
  border: 1px;
  border-style: solid;
  border-color: $color;
  box-shadow: 0px 0px 5px 1px $color;
}
// .thumbnail {
//     -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
//     mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
//   }
</style>