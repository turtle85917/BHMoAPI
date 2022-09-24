// 💸 주식 > 작물 시세 조회

interface StockList {
  type: string;
  version: string;
  data: {
    [x: string]: {
      value: number;
      delta: number;
    }
  };
}