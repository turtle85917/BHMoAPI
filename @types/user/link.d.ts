// 🧑 여행자 > 여행자 조회

interface Link {
  type: string;
  data: {
    id: string;
    name: string;
    profile: string;
    mileage: string;
    strawberry: string;
    gem: string;
    health: number;
    maxHealth: number;
    size: number[],
    maxWeight: number;
    maxLuggage: number;
    healAcceleration: number;
    buffs: { [x: string]: number };
    stats: {
      mf: number;
      mr: number;
      pf: number;
      pr: number;
      base: {
        agility: number;
        ferocity: number;
        tenacity: number;
        mentality: number;
        harmonicity: number;
      };
      speed: number;
      concentration: number
    };
    level: number;
    inAgora: boolean;
    isGuest: boolean;
    isNewbie: boolean;
  };
  posts: string[];
  version: string;
}