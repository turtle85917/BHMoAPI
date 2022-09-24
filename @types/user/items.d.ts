// 🧑 여행자 > 여행자 인벤토리 조회

export interface Items {
  type: string;
  weight: number;
  maxWeight: number;
  list: {
    staticId: string;
    quantity: number;
    options: Options;
    crop: string | null;
    maker: string | null;
    expiredAt: string | null;
  }[];
  version: string;
}