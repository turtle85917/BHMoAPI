// 💸 주식 > 호가 조회

interface StockBiddings {
  type: string;
  version: string;
  list: {
    type: "B" | "S";
    quantity: number;
    gem: string;
  }[];
}