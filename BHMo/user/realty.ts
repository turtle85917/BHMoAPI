import { facility } from "./land";

interface realtyList {
    staticAgoraMapId: string;
    position: number[];
    gem: string;
    facility: facility | null;
}

export interface realty {
    type: string;
    list: realtyList[];
    version: string;
}
