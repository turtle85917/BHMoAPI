// 💸 주식 > 작물 시세 조회

export interface stockList {
    type: string;
    version: string;
    data: {
        [x: string]: {
            value: number;
            delta: number;
        }
    };
}
