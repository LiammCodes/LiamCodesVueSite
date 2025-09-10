// Enum for all possible OSRS skills
export enum OsrsSkillName {
  OVERALL = 'Overall',
  ATTACK = 'Attack',
  HITPOINTS = 'Hitpoints',
  MINING = 'Mining',
  STRENGTH = 'Strength',
  AGILITY = 'Agility',
  SMITHING = 'Smithing',
  DEFENCE = 'Defence',
  HERBLORE = 'Herblore',
  FISHING = 'Fishing',
  RANGED = 'Ranged',
  THIEVING = 'Thieving',
  COOKING = 'Cooking',
  PRAYER = 'Prayer',
  CRAFTING = 'Crafting',
  FIREMAKING = 'Firemaking',
  MAGIC = 'Magic',
  FLETCHING = 'Fletching',
  WOODCUTTING = 'Woodcutting',
  RUNECRAFT = 'Runecraft',
  SLAYER = 'Slayer',
  FARMING = 'Farming',
  CONSTRUCTION = 'Construction',
  HUNTER = 'Hunter'
}

// Interface for a single skill
export interface ApiOsrsSkill {
  id: number;
  level: number;
  name: string;
  rank: number;
  xp: number;
}

export interface OsrsSkill extends ApiOsrsSkill {
  cellImg: string;
}

// Interface for combat-related calculations
export interface CombatStats {
  meleeLevel: number;
  rangedLevel: number;
  magicLevel: number;
  baseLevel: number;
}

// Interface for the component's data structure
export interface OsrsStatsData {
  skills: OsrsSkill[];
  characterName?: string;
}