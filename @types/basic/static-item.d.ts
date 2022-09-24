// 🎈 기본 > 아이템 조회

interface StaticItem {
  type: string;
  data: {
    id: string;
    icon: string;
    category: category;
    level: number;
    weight: number;
    options: Options;
    vested: boolean;
    planted: boolean;
    usable: boolean;
    collectible: boolean;
  };
  names: Locale;
  descriptions: Locale;
  version: string;
}