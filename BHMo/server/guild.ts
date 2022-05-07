interface cofarm {
    id: string;
    harvests: number;
    createdAt: number;
}

export interface guild {
    type: string;
    id: string;
    address: string;
    level: 1 | 2 | 3 | 4 | 5;
    farmers: number;
    members: number;
    cofarms: cofarm[];
    createdAt: number;
    version: string;
}