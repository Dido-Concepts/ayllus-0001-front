import type { MultimediaStrapi, Image, Attributes } from '@src/interfaces/Image'

export interface PublicacionDestacadoResponse {
    id: number;
    attributes: PublicacionDestacadoResponseAttributes;
}

export interface PublicacionDestacadoResponseAttributes {
    titulo: string;
    descripcion: string;
    contenido?: Contenido[];
    slug: string;
    imagen: MultimediaStrapi;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
}

export interface Contenido {
    type: string;
    children: Child[];
    image?: Attributes;
    level?: number;
}

export interface Child {
    text: string;
    type: string;
}

export interface PublicacionDestacadoData {
    titulo: string;
    descripcion: string;
    slug: string;
    imagen: Image;
    contenido?: Contenido[];
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
}
