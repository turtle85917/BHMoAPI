export interface facilityOptions {
    maxWeight?: number;
    dimension?: number[];
    healAcceleration?: number;
    craftBonus?: number;
    taskLength?: number;
    taskBonus?: number;
    dispensingInterval?: number;
    maxLevel?: number;
    maxFloor?: number;
    wildAnimalAvoidance?: number;
}

interface facility {
    id: string;
    icon: string;
    color: string;
    level: number;
    size?: number[];
    buildCosts: ({ [x: string]: number } | { "[object Object]": {} })[];
    options: facilityOptions;
    rotatable: boolean;
}

export interface staticFacility {
    type: string;
    data: facility;
    names: {
        ko: string;
        en: string;
    };
    descriptions: {
        ko: string;
        en: string;
    };
    version: string;
}