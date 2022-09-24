// 🎈 기본 > 시설물 조회

interface StaticFacility {
  type: string;
  data: {
    id: string;
    icon: string;
    color: string;
    level: number;
    size: number[] | null;
    buildCosts: ({ [x: string]: number } | { "[object Object]": {} })[];
    options: FacilityOptions;
    rotatable: boolean;
  };
  names: Locale;
  descriptions: Locale;
  version: string;
}