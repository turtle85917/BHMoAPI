// 🧑 여행자 > 여행자 부동산 조회

interface Realty {
  type: string;
  list: {
    staticAgoraMapId: string;
    position: number[];
    gem: string;
    facility: Facility | null;
  }[];
  version: string;
}