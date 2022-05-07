interface biddings {
    type: "B" | "S";
    quantity: number;
    gem: string;
}

export interface stockBiddings {
    type: string;
    version: string;
    list: biddings[];
}