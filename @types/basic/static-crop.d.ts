// 🎈 기본 > 작물 조회

interface Characteristics {
  growth: "slower" | "slow" | "average" | "fast";
  water: "low" | "medium" | "high";
  soil: "low" | "medium" | "high";
  health: "low" | "medium" | "high";
}

interface StaticCropData {
  id: string;
  icon: string;
  level: number;
  strawberry: number;
  isTree: boolean;
  characteristics: Characteristics;
}

interface staticCrop {
  type: string;
  data: StaticCropData;
  names: Locale;
  descriptions: Locale;
  version: string;
}
