// 🎈 기본 > 작물 조회

interface StaticCrop {
  type: string;
  data: {
    id: string;
    icon: string;
    level: number;
    strawberry: number;
    isTree: boolean;
    characteristics: {
      growth: "slower" | "slow" | "average" | "fast";
      water: "low" | "medium" | "high";
      soil: "low" | "medium" | "high";
      health: "low" | "medium" | "high";
    };
  };
  names: Locale;
  descriptions: Locale;
  version: string;
}