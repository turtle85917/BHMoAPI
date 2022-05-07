// 🏆 랭킹 > 수확 랭킹

import { userScore } from "./ranking-mileage";

export interface rankingHarvest {
    type: string;
    version: string;
    list: userScore[];
}
