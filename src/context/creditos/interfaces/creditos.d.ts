import type { MultimediaStrapi } from '@src/interfaces/Image'

export interface TipoCreditosResponse {
    id: number;
    attributes: TipoCreditosResponseAttributes;
}

export interface TipoCreditosResponseAttributes {
    nombre_tipo: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    descripcion: string;
    creditos_infos: CreditosInfos;
    imagen_card: MultimediaStrapi;
}

export interface CreditosInfos {
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
