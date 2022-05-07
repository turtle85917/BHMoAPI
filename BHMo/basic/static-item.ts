import { options } from "../user/items";

export type categories = "box" | "crop" | "document" | "element" | "equipment-a" | "equipment-b" | "equipment-h" | "equipment-k" | "equipment-m" | "equipment-o" | "equipment-s" | "equipment-t" | "equipment-w" | "etc" | "food" | "resource" | "sapling";

interface item {
    id: string;
    icon: string;
    category: categories;
    level: number;
    weight: number;
    options: options;
    vested: boolean;
    planted: boolean;
    usable: boolean;
    collectible: boolean;
}

export interface staticItem {
    type: string;
    data: item;
    names: {
        ko: string; en: string;
    };
    descriptions: {
        ko: string; en: string;
    }
    version: string;
}