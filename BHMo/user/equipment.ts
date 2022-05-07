// 🧑 여행자 > 여행자 장비 조회

import { options } from "./items";

interface equipData {
    staticId: string;
    options?: options;
    maker?: string;
    expiredAt?: number;
}

export interface equipment {
    type: string;
    list: equipData[];
    version: string;
}
