// ๐ ๊ธฐ๋ณธ > ์์  ์กฐํ

interface achievementData {
    id: string;
    point: number;
    extends?: string;
    rarity: number;
}

export interface staticAchievement {
    type: string;
    version: string;
    data: achievementData;
    names: {
        ko: string;
        en: string;
    };
}
