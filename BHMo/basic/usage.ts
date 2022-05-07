// 🎈 기본 > 가스 소모량 조회

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
