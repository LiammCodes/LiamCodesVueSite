<template>
  <div class="max-w-sm border-[#66563b] border-8 bg-[#2C2417] p-2 rounded-lg shadow-lg backdrop-blur-md">
    <!-- <div class="bg-[#2C2417] p-2 mb-4 rounded">
      <h2 class="text-[#FF981F] text-center font-bold">{{ characterName }}'s Stats</h2>
      <p class="text-[#FF981F] text-center">Total Level: {{ totalLevel }}</p>
    </div> -->
    
    <div class="grid grid-cols-3 gap-2">
      <template v-for="skill in skills" :key="skill.name">

        <div class="tooltip tooltip-bottom" :data-tip="skill.name">
          <div class="bg-stone-700 border-[#66563b] rounded-lg border-2 p-1 flex items-center space-x-4 clip-rounded-cuts textured-background">
            <div class="w-9 h-9 relative flex items-center">
              <img class="w-full" :src="skill.iconUrl" alt="Skill Icon">
            </div>
            <div>
              <!-- <p class="text-[#FF981F] text-sm">{{ skill.name }}</p> -->
              <p class="text-yellow-400 font-mono font-thin text-lg">{{ skill.level }}</p>
              <p v-if="showExperience" class="text-gray-400 text-xs">
                XP: {{ skill.experience?.toLocaleString() }}
              </p>
            </div>
          </div>
        </div>
      </template>
      <div class="rounded-lg border-2 border-[#4b3f2a] bg-black text-yellow-300 text-center clip-rounded-cuts">
        <div class="text-sm">Total Level:</div>
        <div>{{ totalLevel }}</div>
      </div>
    </div>
    <div class="mt-4 bg-[#2C2417] p-2 rounded">
      <p class="text-[#FF981F] text-center">Combat Level: {{ combatLevel }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  OsrsSkill,
  OsrsSkillName,
  OsrsStatsProps,
  OsrsStatsData,
  SkillUpdatePayload,
  ValidationResult,
  OSRS_CONSTANTS
} from '../../types/osrsStatTypes';
// import fetch from 'node-fetch';

export default defineComponent({
  name: 'OsrsStats',
  
  props: {
    initialStats: {
      type: Array as () => OsrsSkill[],
      default: () => []
    },
    showExperience: {
      type: Boolean,
      default: false
    },
    characterName: {
      type: String,
      default: 'Character'
    },
    theme: {
      type: String as () => 'classic' | 'modern' | 'dark',
      default: 'classic'
    }
  },

  data(): OsrsStatsData {
    return {
      skills: this.initialStats.length ? this.initialStats : [
        { name: OsrsSkillName.ATTACK, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Attack_icon.png'},
        { name: OsrsSkillName.HITPOINTS, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Hitpoints_icon.png' },
        { name: OsrsSkillName.MINING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Mining_icon.png' },
        { name: OsrsSkillName.STRENGTH, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Strength_icon.png' },
        { name: OsrsSkillName.AGILITY, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Agility_icon.png' },
        { name: OsrsSkillName.SMITHING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Smithing_icon.png' },
        { name: OsrsSkillName.DEFENCE, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Defence_icon.png' },
        { name: OsrsSkillName.HERBLORE, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Herblore_icon.png' },
        { name: OsrsSkillName.FISHING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Fishing_icon.png' },
        { name: OsrsSkillName.RANGED, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Ranged_icon.png' },
        { name: OsrsSkillName.THIEVING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Thieving_icon.png' },
        { name: OsrsSkillName.COOKING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Cooking_icon.png' },
        { name: OsrsSkillName.PRAYER, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Prayer_icon.png' },
        { name: OsrsSkillName.CRAFTING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Crafting_icon.png' },
        { name: OsrsSkillName.FIREMAKING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Firemaking_icon.png' },
        { name: OsrsSkillName.MAGIC, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Magic_icon.png' },
        { name: OsrsSkillName.FLETCHING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Fletching_icon.png' },
        { name: OsrsSkillName.WOODCUTTING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Woodcutting_icon.png' },
        { name: OsrsSkillName.RUNECRAFT, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Runecraft_icon.png' },
        { name: OsrsSkillName.SLAYER, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Slayer_icon.png' },
        { name: OsrsSkillName.FARMING, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Farming_icon.png' },
        { name: OsrsSkillName.CONSTRUCTION, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Construction_icon.png' },
        { name: OsrsSkillName.HUNTER, level: 99, experience: 13034431, iconUrl: 'https://oldschool.runescape.wiki/images/Hunter_icon.png' },
      ],
      characterName: this.characterName
    }
  },

  computed: {
    totalLevel(): number {
      return this.skills.reduce((sum: number, skill: OsrsSkill) => sum + skill.level, 0)
    },

    combatLevel(): number {
      const attack = this.getSkillLevel(OsrsSkillName.ATTACK)
      const strength = this.getSkillLevel(OsrsSkillName.STRENGTH)
      const defence = this.getSkillLevel(OsrsSkillName.DEFENCE)
      const hitpoints = this.getSkillLevel(OsrsSkillName.HITPOINTS)
      const prayer = this.getSkillLevel(OsrsSkillName.PRAYER)
      const ranged = this.getSkillLevel(OsrsSkillName.RANGED)
      const magic = this.getSkillLevel(OsrsSkillName.MAGIC)

      const base = OSRS_CONSTANTS.BASE_COMBAT_MULTIPLIER * 
        (defence + hitpoints + Math.floor(prayer / OSRS_CONSTANTS.PRAYER_DIVISOR))
      const melee = OSRS_CONSTANTS.MELEE_COMBAT_MULTIPLIER * (attack + strength)
      const range = OSRS_CONSTANTS.MELEE_COMBAT_MULTIPLIER * (Math.floor(ranged/2) + ranged)
      const mage = OSRS_CONSTANTS.MELEE_COMBAT_MULTIPLIER * (Math.floor(magic/2) + magic)

      return Math.floor(base + Math.max(melee, range, mage))
    }
  },

  methods: {

    // getSkillsData(): null {
    //   const url = `https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${player}`;

    //   try {
    //     const response = await fetch(url);
        
    //     // Check if the response is successful
    //     if (!response.ok) {
    //       console.error(`Error fetching data for player ${player}: ${response.statusText}`);
    //       return null;
    //     }

    //     // Parse the JSON response
    //     const data: HiscoreData = await response.json();
        
    //     // Return the parsed data
    //     return data;
    //   } catch (error) {
    //     console.error(`Error occurred while fetching hiscore data: ${error}`);
    //     return null;
    //   }


    // }

    getSkillLevel(skillName: OsrsSkillName): number {
      return this.skills.find((skill: OsrsSkill) => skill.name === skillName)?.level ?? 1
    },

    updateSkillLevel(payload: SkillUpdatePayload): ValidationResult {
      const { skillName, newLevel, newExperience } = payload
      
      if (newLevel < OSRS_CONSTANTS.MIN_LEVEL || newLevel > OSRS_CONSTANTS.MAX_LEVEL) {
        return {
          isValid: false,
          errors: [`Level must be between ${OSRS_CONSTANTS.MIN_LEVEL} and ${OSRS_CONSTANTS.MAX_LEVEL}`]
        }
      }

      const skill = this.skills.find(skill => skill.name === skillName)
      if (skill) {
        skill.level = newLevel
        if (newExperience !== undefined) {
          skill.experience = newExperience
        }
      }

      return { isValid: true }
    }
  }
})
</script>
<style scoped>

.clip-rounded-cuts {
  position: relative;
  mask: radial-gradient(10px at 20px 20px, transparent 98%, black) -20px -20px;
  outline: 2px solid rgb(117, 97, 69);
}

.clip-rounded-cuts {

  
}


.textured-background {
  background-image: url("https://www.transparenttextures.com/patterns/light-toast.png");
}

</style>