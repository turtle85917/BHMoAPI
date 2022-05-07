export interface userScore {
    rank: number;
    entity: {
        id: string;
        userIdExternal: string;
        guildIdExternal: string;
    };
    score: number;
}

export interface rankingMileage {
    type: string;
    version: string;
    list: userScore[];
}