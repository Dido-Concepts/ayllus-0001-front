import type { MultimediaStrapi, Image } from '@src/interfaces/Image'

export interface InfoCreditoResponse {
    id: number;
    attributes: InfoCreditoResponseAttributes;
}

export interface InfoCreditoResponseAttributes {
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    titulo: string;
    slug: string;
    contenido: Contenido[];
    tipo_credido: TipoCredido;
    imagen: MultimediaStrapi;
}

export interface Contenido {
    id: number;
    titulo: string;
    lista: string[];
}

export interface TipoCredido {
    data: TipoCredidoData;
}

export interface TipoCredidoData {
    id: number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    nombre_tipo: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    descripcion: string;
}

export interface InfoCreditoData {
    titulo: string;
    descripcion: string;
    contenido: Contenido[];
    imagen: Image;
}
