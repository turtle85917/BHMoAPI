// 🎈 기본 > 아이템 조회

interface item {
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
}

export interface StaticItem {
  type: string;
  data: item;
  names: Locale;
  descriptions: Locale;
  version: string;
}