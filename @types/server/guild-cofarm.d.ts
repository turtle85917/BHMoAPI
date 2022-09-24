// 👪 서버 > 공동농장 조회

interface GuildCofarm {
  type: string;
  farms: Farm[];
  contributions: { [x: string]: number };
  version: string;
}