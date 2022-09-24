// 🎈 기본 > 아이템 제작 방법 조회

interface StaticRecipe {
  type: string;
  level: number;
  craftables: {
    place: string;
    amout: number[];
    coproducts: { [x: string]: number[] } | null;
  }[];
  ingredients: {
    [x: string]: number;
  };
  steps: step[];
  version: string;
}