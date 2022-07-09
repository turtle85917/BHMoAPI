// 🏆 랭킹 > 업적 랭킹

import { userScore } from "./ranking-mileage";

export interface rankingAchievement {
    type: string;
    list: userScore[];
    version: string;
}
