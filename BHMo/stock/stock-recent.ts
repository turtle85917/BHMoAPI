// 💸 주식 > 최근 거래 조회

interface recent {
    from?: string;
    to?: string;
    staticItemId: string;
    quantity: number;
    totalGem: string;
    date: number;
}

export interface stockRecent {
    type: string;
    version: string;
    list: recent[];
}
