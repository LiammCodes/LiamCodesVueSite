// Enum for all possible OSRS skills
export enum OsrsSkillName {
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
export interface OsrsSkill {
  name: OsrsSkillName;
  level: number;
  experience?: number; // Optional XP field
  iconUrl: string;
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

// Interface for the component's props
export interface OsrsStatsProps {
  initialStats?: OsrsSkill[];
  showExperience?: boolean;
  characterName?: string;
  theme?: 'classic' | 'modern' | 'dark';
}

// Type for skill update payload
export type SkillUpdatePayload = {
  skillName: OsrsSkillName;
  newLevel: number;
  newExperience?: number;
}

// Type for level thresholds (level -> required XP)
export type ExperienceTable = {
  [level: number]: number;
}

// Utility type for validation
export type ValidationResult = {
  isValid: boolean;
  errors?: string[];
}

// Component methods interface
export interface OsrsStatsMethods {
  getSkillLevel(skillName: OsrsSkillName): number;
  updateSkillLevel(payload: SkillUpdatePayload): ValidationResult;
  calculateCombatLevel(): number;
  getTotalLevel(): number;
  getSkillExperience?(skillName: OsrsSkillName): number;
}

// Constants type
export const OSRS_CONSTANTS = {
  MAX_LEVEL: 99,
  MIN_LEVEL: 1,
  MAX_EXPERIENCE: 200000000, // 200M XP cap
  BASE_COMBAT_MULTIPLIER: 0.25,
  MELEE_COMBAT_MULTIPLIER: 0.325,
  PRAYER_DIVISOR: 2
} as const;

// Vue component type
export type OsrsStatsComponent = {
  data(): OsrsStatsData;
  props: OsrsStatsProps;
  computed: {
    totalLevel: () => number;
    combatLevel: () => number;
    highestSkill: () => OsrsSkill;
    isMaxed: () => boolean;
  };
  methods: OsrsStatsMethods;
}