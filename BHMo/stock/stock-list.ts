// ๐ธ ์ฃผ์ > ์๋ฌผ ์์ธ ์กฐํ

export interface stockList {
    type: string;
    version: string;
    data: {
        [x: string]: {
            value: number;
            delta: number;
        }
    };
}
