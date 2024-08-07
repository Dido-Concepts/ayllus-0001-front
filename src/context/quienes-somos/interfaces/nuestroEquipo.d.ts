import type { MultimediaStrapi, Image } from '@src/interfaces/Image'

export interface NuestroEquipoResponse {
    id: number;
    __component: string;
    nombre_oficina: string;
    CardPersonal: CardPersonal[];
}

export interface CardPersonal {
    id: number;
    cargo: string;
    nombre_persona: string;
    foto: MultimediaStrapi;
}

export interface NuestroEquipoData {
    id: number;
    nombre_oficina: string;
    CardPersonal: CardPersonalData[];
}

export interface CardPersonalData {
    id: number;
    cargo: string;
    nombre_persona: string;
    foto: Image;
}
