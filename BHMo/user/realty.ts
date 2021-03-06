// π§ μ¬νμ > μ¬νμ λΆλμ° μ‘°ν

import { facility } from "./land";

interface realtyList {
    staticAgoraMapId: string;
    position: number[];
    gem: string;
    facility?: facility;
}

export interface realty {
    type: string;
    list: realtyList[];
    version: string;
}
