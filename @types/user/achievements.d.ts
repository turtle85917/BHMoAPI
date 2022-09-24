// 🧑 여행자 > 여행자 업적 조회

interface Achievements {
  type: string;
  version: string;
  list: {
    staticId: string;
    point: number;
    finishedAt: number;
  }[];
}