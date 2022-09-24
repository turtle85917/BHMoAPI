interface Locale {
  ko: string;
  en: string;
}

type value = number | (number | string)[];
type step = "boil" | "press" | "dry" | "wait" | "pour" | "filter" | "fry" | "stir" | "bake" | "cut";
type category = "box" | "crop" | "document" | "element" | "equipment-a" | "equipment-b" | "equipment-h" | "equipment-k" | "equipment-m" | "equipment-o" | "equipment-s" | "equipment-t" | "equipment-w" | "etc" | "food" | "resource" | "sapling";

interface Options {
  buffByEating: { [x: string]: number } | null;
  coupon: { [x: string]: { [x: string]: number | number[] } } | string | null;
  healAcceleration: number | null;
  divisibleHealth: number | null;
  health: number | null;
  maxHealth: value | null;
  pf: value | null;
  mf: value | null;
  pr: value | null;
  mr: value | null;
  speed: value | null;
  concentration: value | null;
  ferocity: value | null;
  mentality: value | null;
  agility: value | null;
  tenacity: value | null;
  harmonicity: value | null;
  capacity: value | null;
  lifespan: number | null;
  expiredAt: number | null;
}

interface FacilityOptions {
  maxWeight: number | null;
  dimension: number[] | null;
  healAcceleration: number | null;
  craftBonus: number | null;
  taskLength: number | null;
  taskBonus: number | null;
  dispensingInterval: number | null;
  maxLevel: number | null;
  maxFloor: number | null;
  wildAnimalAvoidance: number | null;
}

interface Facility {
  staticId: string;
  level: number;
  status: "fine" | "working" | "underConstruction" | "broken";
  health: number;
  position: number[];
  rotation: 0 | 1 | null;
}

interface UserScore {
  rank: number;
  entity: {
    id: string;
    userIdExternal: string;
    guildIdExternal: string;
  };
  score: number;
}

interface GuildScore {
  rank: number;
  entity: {
    id: string; address: string;
  };
  score: number;
}

interface Farm {
  staticCropId: string;
  status: 0 | 1 | 2 | 3;
  health: number;
  humidity: number;
  fertility: number;
  acceleration: number;
  growth: "dirt" | "germination" | "maturity" | "friutage";
}