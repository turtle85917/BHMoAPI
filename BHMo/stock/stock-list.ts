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