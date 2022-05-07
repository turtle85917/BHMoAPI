import { farm } from "../user/farms";

export interface guildCofarm {
    type: string;
    farms: farm[];
    contributions: { [x: string]: number };
    version: string;
}