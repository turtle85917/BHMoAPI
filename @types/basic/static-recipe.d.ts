// 🎈 기본 > 아이템 제작 방법 조회

interface Ingredients {
  [x: string]: number;
}

interface Coproducts {
  [x: string]: number[];
}

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