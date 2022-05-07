interface Characteristics {
    growth: "slower" | "slow" | "average" | "fast";
    water: "low" | "medium" | "high";
    soil: "low" | "medium" | "high";
    health: "low" | "medium" | "high";
}

interface staticCropData {
    id: string;
    icon: string;
    level: number;
    strawberry: number;
    isTree: boolean;
    characteristics: Characteristics;
}

export interface staticCrop {
    type: string;
    data: staticCropData;
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