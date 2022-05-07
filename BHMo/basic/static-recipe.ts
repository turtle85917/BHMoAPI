interface ingredients {
    [x: string]: number;
}

interface coproducts {
    [x: string]: number[];
}

export type step = "boil" | "press" | "dry" | "wait" | "pour" | "filter" | "fry" | "stir" | "bake" | "cut";

export interface staticRecipe {
    type: string;
    version: string;
    place: string;
    level: number;
    ingredients: ingredients;
    amount: number[];
    coproducts: coproducts;
    steps: step[];
}