export interface farm {
    staticCropId: string;
    status: 0 | 1 | 2 | 3;
    health: number;
    humidity: number;
    fertility: number;
    acceleration: number;
    growth: "dirt" | "germination" | "maturity" | "friutage";
}

export interface farms {
    type: string;
    list: farm[];
    version: string;
}