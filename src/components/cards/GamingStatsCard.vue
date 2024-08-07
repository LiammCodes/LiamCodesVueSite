<template>
  <kinesis-container>
    <div :class="'flex flex-col border border-base-100 rounded-lg shadow-md lg:flex-row lg:max-w-xl z-40 p-4 space-x-4 space-y-4 card-bg' + (theme === 'winter' ? ' border-gray-300' : ' border-zinc-900')">
      <div class="leading-normal w-full">
        <div class="flex justify-evenly pt-1">
          <div class="rank">
            <div v-if="loadingCsRank" class="cs2rating uncommon animate-pulse h-16" style="background-image: url(https://static.csstats.gg/images/ranks/cs2/rating.common.png)">
              <span class="italic font-semibold" :style="ratingTextColor">
                {{ ratingBig }}<small>{{ ratingSmall }}</small>
              </span>
            </div> 
            <div v-else>
              <div class="text-sm flex justify-center font-bold">Premiere</div>      
              <div class="cs2rating transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16" :style="ratingImgStyle">
                <span class="font-fragura" :style="ratingTextColor">
                  {{ ratingBig }}<small class="small-rank">{{ ratingSmall }}</small>
                </span>
              </div>   
              <div class="text-xs flex justify-center italic">Wins: {{ csRankData.premiereRating.current.wins }}</div>      
            </div> 
          </div>
          <div class="flex items-center">
            <div class="cs2logo" :class="theme === 'night' ? '' : 'dark-icon'"  style="background-image: url('https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/global/logo_cs_sm.svg')"/>
          </div>
          <div class="rank">
            <div v-if="loadingCsRank" class="cs2rating uncommon animate-pulse h-16" style="background-image: url(https://static.csstats.gg/images/ranks/wingman/wingman0.svg)"/>
            <div v-else>
              <div class="text-sm flex justify-center font-bold">Wingman</div>      
              <div class="cs2rating transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16" :style="ratingWingmanImgStyle"/>
              <div class="text-xs flex justify-center italic">Wins: {{ csRankData.wingmanRank.wins }}</div>      
            </div> 
          </div>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CalendarDaysIcon } from '@heroicons/vue/20/solid';
// @ts-ignore
import { KinesisContainer, KinesisElement } from 'vue-kinesis';

interface Rating {
  backgroundImgURL: string;
  elo: string;
  wins?: string; // wins is optional because it's not present in "best"
}

interface PremiereRating {
  best: Rating;
  current: Rating;
}

interface WingmanRank {
  imgURL: string;
  wins: string;
}

interface Stats {
  premiereRating: PremiereRating;
  wingmanRank: WingmanRank;
}

export default defineComponent({
  name: "GenericCard",
  props: { 
    theme: {
      type: String,
      required: true,
    }
  },
  components: { CalendarDaysIcon, KinesisContainer, KinesisElement },
  data() {
    return {
      loadingCsRank: true as boolean,
      csRankLoadErr: null as null | string,
      csRankData: {} as Stats,
      rankColors: {
        common: '#B1C3D9',
        uncommon: '#5E98D7',
        rare: '#4B69FF',
        mythical: '#8846FF',
        legendary: '#D22CE6',
        ancient: '#EB4B4B',
        unusual: '#FED700'
      } as any
    }
  },
  async mounted() {
    await this.getCsRankData('76561198080776335');
  },
  computed: {
    ratingTextColor() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        const rating: number = parseFloat((this.csRankData.premiereRating.current.elo).replace(/,/g, ''));
        if (rating < 5000) {
          return { color: this.rankColors.common };
        } else if (rating < 10000) {
          return { color: this.rankColors.uncommon };
        } else if (rating < 15000) {
          return { color: this.rankColors.rare };
        } else if (rating < 20000) {
          return { color: this.rankColors.legendary };
        } else if (rating < 30000) {
          return { color: this.rankColors.ancient };
        } else {
          return { color: this.rankColors.unusual };
        }
      }
    },
    ratingImgStyle() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        return {backgroundImage: `url(${this.csRankData.premiereRating.current.backgroundImgURL})`};
      }
    },
    ratingWingmanImgStyle() {
      if (!this.loadingCsRank && !this.loadingCsRank) {
        return {backgroundImage: `url(${this.csRankData.wingmanRank.imgURL})`};
      }
    },
    rankImgStyle() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        return {backgroundImage: `url(${this.csRankData.premiereRating.current.backgroundImgURL})`};
      }
    },
    ratingBig() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        return this.csRankData.premiereRating.current.elo.substring(0, this.csRankData.premiereRating.current.elo.indexOf(','))
      } else {
        return '-- ';
      }
    },
    ratingSmall() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        return this.csRankData.premiereRating.current.elo.substring(this.csRankData.premiereRating.current.elo.indexOf(','))
      } else {
        return '---';
      }
    }
  },
  methods: {
    async getCsRankData(steamID: string) {
      this.loadingCsRank = true;
      this.csRankLoadErr = null;
      try {
        const url = `https://sp4cenet.ddns.net/cs2/rank-data/${steamID}`;
        fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br'
          },
        }).then(response => {
          // Check if the response is OK (status code in the range 200-299)
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          // Parse the JSON data from the response
          return response.json();
        })
        .then(data => {
          // Handle the data from the API
          this.csRankData = data;
          this.loadingCsRank = false;
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        });
      } catch (error: any) {
        this.csRankLoadErr = error.message;
      }
    },
  },
});
</script>
<style lang="scss">
.card-bg {
  background: rgba(58,190,247,0);
  backdrop-filter: blur(10px);
  transition: 0.3s;
}

.cs2logo {
  width: 65px;
  display: flex;
  justify-content: center;
  justify-self: center;
  justify-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: .75rem .75rem .75rem .75rem;
}

.cs2rating {
  width: 100px;
  display: flex;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: .75rem .75rem .75rem 1.5rem;
  text-shadow: 0 1px 0 black;
  margin: auto;
  filter: opacity(1);
}

.font-fragura {
  font-family: 'Fragua Pro';
  transform: scaleY(0.95) skew(-3deg);
}

.small-rank {
  font-size: 18px;
}

.dark-icon {
  filter: invert(1) grayscale(1) contrast(1) brightness(0);
}

</style>