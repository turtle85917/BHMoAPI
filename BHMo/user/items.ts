type number_or_array = number | (number | string)[];

export interface options {
    buffByEating?: { [x: string]: number };
    coupon: { [x: string]: { [x: string]: number | number[] } } | string;
    healAcceleration?: number;
    divisibleHealth?: number;
    health: number;
    maxHealth?: number_or_array;
    pf?: number_or_array;
    mf?: number_or_array;
    pr?: number_or_array;
    mr?: number_or_array;
    speed?: number_or_array;
    concentration?: number_or_array;
    ferocity?: number_or_array;
    mentality?: number_or_array;
    agility?: number_or_array;
    tenacity?: number_or_array;
    harmonicity?: number_or_array;
    capacity?: number_or_array;
    lifespan?: number;
    expiredAt?: number;
}

interface item {
    staticId: string;
    quantity: number;
    options: options;
    crop?: string;
    maker?: string;
    expiredAt?: string;

}

export interface items {
    type: string;
    weight: number;
    maxWeight: number;
    list: item[];
    version: string;
}