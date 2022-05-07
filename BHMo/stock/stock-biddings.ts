// 💸 주식 > 호가 조회

interface biddings {
    type: "B" | "S";
    quantity: number;
    gem: string;
}

export interface stockBiddings {
    type: string;
    version: string;
    list: biddings[];
}
