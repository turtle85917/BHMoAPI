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