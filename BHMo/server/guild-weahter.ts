// ๐ช ์๋ฒ > ์๋ฒ ๋ ์จ ์กฐํ

interface weather {
    time: number;
    rain: number;
}

export interface guildWeather {
    type: string;
    version: string;
    list: weather[];
}
