// 💸 주식 > 최근 거래 조회

interface StockRecent {
  type: string;
  version: string;
  list: {
    from: string | null;
    to: string | null;
    staticItemId: string;
    quantity: number;
    totalGem: string;
    date: number;
  }[];
}