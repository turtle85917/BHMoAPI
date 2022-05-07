// 👪 서버 > 서버 날씨 조회

interface weather {
    time: number;
    rain: number;
}

export interface guildWeather {
    type: string;
    version: string;
    list: weather[];
}
