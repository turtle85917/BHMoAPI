// ๐ง ์ฌํ์ > ์ฌํ์ ์์  ์กฐํ

interface achievement {
    staticId: string;
    point: number;
    finishedAt: number;
}

export interface Achievements {
    type: string;
    version: string;
    list: achievement[];
}
