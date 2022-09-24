// 🎈 기본 > 가스 소모량 조회

export interface Usage {
  type: string;
  current: number;
  past: {
    time: number;
    gas: number;
  }[];
  version: string;
}