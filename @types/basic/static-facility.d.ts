// 🎈 기본 > 시설물 조회

interface Facility {
  id: string;
  icon: string;
  color: string;
  level: number;
  size: number[] | null;
  buildCosts: ({ [x: string]: number } | { "[object Object]": {} })[];
  options: FacilityOptions;
  rotatable: boolean;
}

interface StaticFacility {
  type: string;
  data: Facility;
  names: Locale;
  descriptions: Locale;
  version: string;
}