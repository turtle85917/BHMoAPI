// π§ μ¬νμ > μ¬νμ μ₯λΉ μ‘°ν

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
