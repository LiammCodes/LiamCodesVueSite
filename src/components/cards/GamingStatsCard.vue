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
              <div class="text-sm flex justify-center text-gray-400 font-bold">Premiere</div>      
              <div class="cs2rating transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16" :style="ratingImgStyle">
                <span class="italic font-semibold" :style="ratingTextColor">
                  {{ ratingBig }}<small>{{ ratingSmall }}</small>
                </span>
              </div>   
              <div class="text-xs flex justify-center italic text-gray-400">Wins: {{ csRank.current.wins }}</div>      
            </div> 
          </div>
          <div class="flex items-center">
            <div class="cs2logo" style="background-image: url('https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/global/logo_cs_sm.svg')"/>
          </div>
          <div class="rank">
            <div v-if="loadingCsWingmanRank" class="cs2rating uncommon animate-pulse h-16" style="background-image: url(https://static.csstats.gg/images/ranks/wingman/wingman0.svg)"/>
            <div v-else>
              <div class="text-sm flex justify-center text-gray-400 font-bold">Wingman</div>      
              <div class="cs2rating transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-16" :style="ratingWingmanImgStyle"/>
              <div class="text-xs flex justify-center italic text-gray-400">Wins: {{ csWingmanRank.wins }}</div>      
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
  wins?: string;
}

interface WingmanRating {
  imgURL: string;
  wins: string;
}

interface RatingData {
  best: Rating;
  current: Rating;
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
      loadingCsWingmanRank: true as boolean,
      csRankLoadErr: null as null | string,
      csWingmanRankLoadErr: null as null | string,
      csRank: {} as RatingData,
      csWingmanRank: {} as WingmanRating,
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
    await this.getCsRank('76561198080776335');
    await this.getWingmanRank('76561198080776335');
  },
  computed: {
    ratingTextColor() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        const rating: number = parseFloat((this.csRank.current.elo).replace(/,/g, ''));
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
        return {backgroundImage: `url(${this.csRank.current.backgroundImgURL})`};
      }
    },
    ratingWingmanImgStyle() {
      if (!this.loadingCsWingmanRank && !this.csWingmanRankLoadErr) {
        return {backgroundImage: `url(${this.csWingmanRank.imgURL})`};
      }
    },
    rankImgStyle() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        return {backgroundImage: `url(${this.csRank.current.backgroundImgURL})`};
      }
    },
    ratingBig() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        return this.csRank.current.elo.substring(0, this.csRank.current.elo.indexOf(','))
      } else {
        return '-- ';
      }
    },
    ratingSmall() {
      if (!this.loadingCsRank && !this.csRankLoadErr) {
        return this.csRank.current.elo.substring(this.csRank.current.elo.indexOf(','))
      } else {
        return '---';
      }
    }
  },
  methods: {
    async getCsRank(steamID: string) {
      console.log('GETTING RANK')
      this.loadingCsRank = true;
      this.csRankLoadErr = null;
      try {
        const url = `http://localhost:6090/${steamID}/premiere-rank`;
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
          this.csRank = data.rating;
          this.loadingCsRank = false;
          console.log(data.rating);
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        });
      } catch (error: any) {
        this.csRankLoadErr = error.message;
      }
    },
    async getWingmanRank(steamID: string) {
      console.log('GETTING RANK')
      this.loadingCsWingmanRank = true;
      this.csWingmanRankLoadErr = null;
      try {
        const url = `http://localhost:6090/${steamID}/wingman-rank`;
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
          this.csWingmanRank = data.rank;
          this.loadingCsWingmanRank = false;
          console.log(data.rank);
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        });
      } catch (error: any) {
        this.csWingmanRankLoadErr = error.message;
      }
    }
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
  font-size: 22px;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: .75rem .75rem .75rem 1.5rem;
  text-shadow: 0 1px 0 black;
  font-weight: bold;
  margin: auto;
}
</style>