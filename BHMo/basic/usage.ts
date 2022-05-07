interface past {
    time: number;
    gase: number;
}

export interface usage {
    type: string;
    current: number;
    past: past[];
    version: string;
}