// 🧑 여행자 > 여행자 업적 조회

interface achievement {
    staticId: string;
    point: number;
    finishedAt: number;
}

export interface Achievements {
    type: string;
    version: string;
    list: achievement[];
}
