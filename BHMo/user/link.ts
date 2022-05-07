interface linkStats {
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
}

interface linkData {
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
    stats: linkStats;
    level: number;
    inAgora: boolean;
    isGuest: boolean;
    isNewbie: boolean;
}

export interface link {
    type: string;
    data: linkData;
    posts: string[];
    version: string;
}