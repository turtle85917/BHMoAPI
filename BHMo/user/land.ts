interface facility {
    staticId: string;
    level: number;
    status: "fine" | "working" | "underConstruction" | "broken";
    health: number;
    position: number[];
    rotation: 0 | 1 | null;
}

export interface land {
    type: string;
    size: number[];
    facilities: facility[]
    version: string;
}