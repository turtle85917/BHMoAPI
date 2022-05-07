// 👪 서버 > 공동농장 조회

import { farm } from "../user/farms";

export interface guildCofarm {
    type: string;
    farms: farm[];
    contributions: { [x: string]: number };
    version: string;
}
