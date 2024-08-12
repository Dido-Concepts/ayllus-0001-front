import type { MultimediaStrapi, Image } from '@src/interfaces/Image'

export interface TipoAhorrosResponse {
    id: number;
    attributes: TipoAhorrosResponseAttributes;
}

export interface TipoAhorrosResponseAttributes {
    nombre_tipo: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    descripcion: string;
    ahorros_infos: AhorrosInfos;
    imagen_card: MultimediaStrapi;
}

export interface AhorrosInfos {
    data: Datum[];
}

export interface Datum {
    id: number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    titulo: string;
    slug: string;
    imagen: MultimediaStrapi;
}

export interface TipoAhorrosData {
    nombreTipo: string;
    descripcion: string;
    ahorrosInfos: AhorrosInfosData[];
    imagenTipo: Image;
}

export interface AhorrosInfosData {
    titulo: string;
    imagen: Image;
    slug: string;
}
