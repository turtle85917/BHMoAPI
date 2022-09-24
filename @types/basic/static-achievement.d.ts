// 🎈 기본 > 업적 조회

interface StaticAchievement {
  type: string;
  version: string;
  data: {
    id: string;
    point: number;
    extends: string | null;
    rarity: number;
  };
  names: Locale;
}