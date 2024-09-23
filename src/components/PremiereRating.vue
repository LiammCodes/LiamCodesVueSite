<template>
<div class="flex">
  <svg viewBox="0 0 17 32" class="vertical-lines" :style="{ fill: svgFillColor }">
    <path d="M5.44 2.13A2.6 2.6 0 0 1 7.99 0h1.86a.6.6 0 0 1 .6.7L4.83 31.5a.6.6 0 0 1-.6.5h-2.3c-1 0-1.76-.9-1.58-1.89l5.1-27.98ZM11.82.99c.1-.57.6-.99 1.18-.99h2.93a.6.6 0 0 1 .59.7l-5.4 30.31c-.1.57-.6.99-1.18.99H7a.6.6 0 0 1-.59-.7L11.82.98Z"></path>
  </svg>
  <div class="cs-rating flex items-center justify-center font-bold" :class="ratingClass">
    <span class="px-3 text-2xl italic no-skew">
      {{ ratingBig }}<small class="tracking-wider">{{ ratingSmall }}</small>
    </span>
  </div>
</div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'PremiereRating',
  props: {
    rating: {
      type: String,
      required: false,
      default: ""
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ratingBig() {
      if (!this.loading && this.rating != null) {
        return this.rating.substring(0, this.rating.indexOf(','))
      } else {
        return '-- ';
      }
    },
    ratingSmall() {
      if (!this.loading && this.rating != null) {
        return this.rating.substring(this.rating.indexOf(','))
      } else {
        return '---';
      }
    },
    ratingClass(): string {
      if (this.rating != null) {
        const rating: number = parseFloat((this.rating).replace(/,/g, ''));
        if (this.loading || rating < 5000) {     
          // common      
          return 'common';
        } else if (rating < 10000) {   
          // uncommon
          return 'uncommon';
        } else if (rating < 15000) {
          // rare
          return 'rare';
        } else if (rating < 20000) {
          // legendary
          return 'legendary';
        } else if (rating < 25000) {
          // mythical
          return 'mythical';
        } else if (rating < 30000) {
          // ancient
          return 'ancient';
        } else {
          // unusual
          return 'unusual';
        }
      } else return 'common'
      
    },
    svgFillColor(): string {
      if (this.rating != null) {
        const rating: number = parseFloat((this.rating).replace(/,/g, ''));
        if (this.loading || rating < 5000) {     
          // common      
          return 'rgb(183, 195, 215)';
        } else if (rating < 10000) {   
          // uncommon
          return 'rgb(114, 150, 212)';
        } else if (rating < 15000) {
          // rare
          return 'rgb(90, 104, 248)';
        } else if (rating < 20000) {
          // legendary
          return 'rgb(128, 75, 246)';
        } else if (rating < 25000) {
          // mythical
          return 'rgb(189, 67, 222)';
        } else if (rating < 30000) {
          // ancient
          return 'rgb(236, 71, 53)';
        } else {
          // unusual
          return 'rgb(255, 183, 0)';
        }
      } else return 'rgb(183, 195, 215)';
    }
  }

});
</script>

<style>
.vertical-lines {
  width: 1.2em;
  z-index: 1;
}

.no-skew {
  transform: skew(+7deg);
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5); /* Add text shadow */
}

.cs-rating {
  transform: skew(-10deg);
  border-radius: 3px;
  margin-left: -8px;
}

.common {
  background-color: rgb(45, 47, 55);
  border: solid 1px rgb(183, 195, 215);
  color: rgb(239, 242, 247); 
}

.uncommon {
  background-color: rgb(14, 27, 52);
  border: solid 1px rgb(114, 150, 212);
  color: rgb(156, 191, 250); 
}

.rare {
  background-color: #0f207a;
  border: solid 1px rgb(90, 104, 248);
  color: rgb(145, 156, 248); 
}

.legendary {
  background-color: rgb(22, 7, 54);
  border: solid 1px rgb(128, 75, 246);
  color: rgb(173, 141, 248); 
}

.mythical {
  background-color: rgb(44, 11, 54);
  border: solid 1px rgb(189, 67, 222);
  color: rgb(221, 129, 248); 
}

.ancient {
  background-color: rgb(93, 0, 0);
  border: solid 1px rgb(236, 71, 53);
  color: rgb(255, 110, 99); 
}

.unusual {
  background-color: rgb(83, 57, 0);
  border: solid 1px rgb(255, 183, 0);
  color: rgb(255, 225, 92); 
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

</style>