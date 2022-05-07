import { serverScore } from "./ranking-guild-mileage";

export interface rankingGuildLink {
    type: string;
    version: string;
    list: serverScore[];
}