// ๐ ๊ธฐ๋ณธ > ๊ฐ์ค ์๋ชจ๋ ์กฐํ

interface past {
    time: number;
    gas: number;
}

export interface usage {
    type: string;
    current: number;
    past: past[];
    version: string;
}
