<template>
  <div>
    <div class="img-border relative w-full font-['Runescape'] bg-[#3E3528] text-xl flex justify-center items-center space-x-2">
      <img src="https://oldschool.runescape.wiki//images/Invasion_plans.png?adc7e" alt="Skills Icon"/>
      <span>{{ username }}'s Skills</span>
      <img src="https://oldschool.runescape.wiki//images/Invasion_plans.png?adc7e" alt="Skills Icon"/>
    </div>
    <div class="img-border relative w-full h-full">
      <!-- Grid Container -->
      <div class="grid grid-cols-3 grid-rows-8 relative w-full h-full">
        <!-- Grid Items -->
        <div class="col-span-1 row-span-1 relative" v-for="(tile, index) in skills" :key="index">
          <span v-if="tile.name != 'Overall'">
            <img :src="tile.cellImg" alt="Skill Tile" class="w-full h-full object-cover pointer-events-none">
            <span class="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl font-['Runescape'] osrs-style">
              {{ tile.level }}
            </span>
          </span>
          <span v-else>
            <!-- Total Level -->
            <div class="relative flex flex-col items-center justify-center">
              <img :src="tile.cellImg" alt="Skill Tile" class="w-full h-full object-cover pointer-events-none">
              <div class="absolute flex flex-col items-center">
                <span class="text-xs font-['Runescape'] osrs-style text-center leading-none">Total Level:</span>
                <span class="text-xl font-['Runescape'] osrs-style leading-none">{{tile.level}}</span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  OsrsSkill,
  OsrsSkillName,
  OsrsStatsData,
  ApiOsrsSkill
} from '../../types/osrsStatTypes';

export default defineComponent({
  name: 'OsrsStats',
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data(): OsrsStatsData {
    return {
      skills: [
        { name: OsrsSkillName.ATTACK, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/attack.png'},
        { name: OsrsSkillName.HITPOINTS, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/hitpoints.png' },
        { name: OsrsSkillName.MINING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/mining.png' },
        { name: OsrsSkillName.STRENGTH, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/strength.png' },
        { name: OsrsSkillName.AGILITY, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/agility.png' },
        { name: OsrsSkillName.SMITHING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/smithing.png' },
        { name: OsrsSkillName.DEFENCE, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/defence.png' },
        { name: OsrsSkillName.HERBLORE, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/herblore.png' },
        { name: OsrsSkillName.FISHING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/fishing.png' },
        { name: OsrsSkillName.RANGED, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/ranged.png' },
        { name: OsrsSkillName.THIEVING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/thieving.png' },
        { name: OsrsSkillName.COOKING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/cooking.png' },
        { name: OsrsSkillName.PRAYER, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/prayer.png' },
        { name: OsrsSkillName.CRAFTING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/crafting.png' },
        { name: OsrsSkillName.FIREMAKING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/firemaking.png' },
        { name: OsrsSkillName.MAGIC, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/magic.png' },
        { name: OsrsSkillName.FLETCHING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/fletching.png' },
        { name: OsrsSkillName.WOODCUTTING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/woodcutting.png' },
        { name: OsrsSkillName.RUNECRAFT, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/runecraft.png' },
        { name: OsrsSkillName.SLAYER, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/slayer.png' },
        { name: OsrsSkillName.FARMING, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/farming.png' },
        { name: OsrsSkillName.CONSTRUCTION, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/construction.png' },
        { name: OsrsSkillName.HUNTER, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/hunter.png' },
        { name: OsrsSkillName.OVERALL, level: 0, xp: 0, cellImg: 'src/assets/images/osrsSkillTiles/totallevel.png'}
      ] as OsrsSkill[],
    }
  },

  mounted() {
    this.getSkillsData("liama6");
  },

  methods: {
    populateSkills(apiData: ApiOsrsSkill[]): OsrsSkill[] {
      return this.skills.map(skill => {
        // Find the matching skill in the API data
        const matchingSkill = apiData.find(apiSkill => apiSkill.name === skill.name);

        return {
          ...skill,
          level: matchingSkill ? matchingSkill.level : skill.level,
          xp: matchingSkill ? matchingSkill.xp : skill.xp
        };
      });
    },

    async getSkillsData(player: string) {
      const apiUrl = `http://localhost:6090/osrs-stats/${player}`;
      
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        this.skills = this.populateSkills(responseData.skills)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    getSkillLevel(skillName: OsrsSkillName): number {
      return this.skills.find((skill: OsrsSkill) => skill.name === skillName)?.level ?? 1
    },
  }
})
</script>

<style scoped>
.img-border {
  border-width: 9px 8px 9px 8px;
  border-image: url(../../assets/images/osrsSkillTiles/skillsTabBg.png) 4% 5% 4% 5%;
  color: #FFFF06;
  text-shadow: 2px 2px 1px black;
}

@font-face {
  font-family: Runescape;
  src:  url(src/assets/fonts/Runescape-UF/runescape_uf.ttf) format('truetype'),
        url(src/assets/fonts/Runescape-UF/runescape-uf.woff) format('woff'),
        url(src/assets/fonts/Runescape-UF/runescape-uf.woff2) format('woff2');
}
</style>