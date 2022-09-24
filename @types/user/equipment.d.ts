// 🧑 여행자 > 여행자 장비 조회

interface Equipment {
  type: string;
  list: {
    staticId: string;
    options: Options | null;
    maker: string | null;
    expiredAt: number | null;
  }[];
  version: string;
}