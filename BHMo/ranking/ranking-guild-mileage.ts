// π λ­νΉ > μλ²λ³ κ²½νμΉ ν© μ λ­νΉ

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
