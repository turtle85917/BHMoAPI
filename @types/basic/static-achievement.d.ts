// 🎈 기본 > 업적 조회

interface AchievementData {
  id: string;
  point: number;
  extends: string | null;
  rarity: number;
}

export interface StaticAchievement {
  type: string;
  version: string;
  data: AchievementData;
  names: Locale;
}