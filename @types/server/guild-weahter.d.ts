// 👪 서버 > 서버 날씨 조회

interface GuildWeather {
  type: string;
  version: string;
  list: {
    time: number;
    rain: number;
  }[];
}