// 🏆 랭킹 > 서버별 경험치 합 수 랭킹

export interface serverScore {
    rank: number;
    entity: {
        id: string; address: string;
    };
    score: number;
}

export interface rankingGuildMileage {
    type: string;
    version: string;
    list: serverScore[];
}
