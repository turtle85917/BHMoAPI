// 🎈 기본 > 업적 조회

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
