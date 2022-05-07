// 🧑 여행자 > 여행자 영토 조회

export interface facility {
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
