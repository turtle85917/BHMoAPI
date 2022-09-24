// 👪 서버 > 서버 조회

interface Guild {
  type: string;
  id: string;
  address: string;
  level: 1 | 2 | 3 | 4 | 5;
  farmers: number;
  members: number;
  cofarms: {
    id: string;
    harvests: number;
    createdAt: number;
  }[];
  createdAt: number;
  version: string;
}