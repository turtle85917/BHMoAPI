// 🏆 랭킹 > 서버별 여행자 수 랭킹

import { serverScore } from "./ranking-guild-mileage";

export interface rankingGuildLink {
    type: string;
    version: string;
    list: serverScore[];
}
