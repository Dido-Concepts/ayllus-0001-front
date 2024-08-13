import type { MultimediaStrapi } from '@src/interfaces/Image'

export interface InfoAhorroResponse {
    id: number;
    attributes: InfoAhorroResponseAttributes;
}

export interface InfoAhorroResponseAttributes {
    titulo: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    slug: string;
    contenido: Contenido[];
    tipo_ahorro: TipoAhorro;
    imagen: MultimediaStrapi;
}

export interface Contenido {
    id: number;
    titulo: string;
    lista: string[];
}

export interface TipoAhorro {
    data: TipoAhorroData;
}

export interface TipoAhorroData {
    id: number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    nombre_tipo: string;
    descripcion: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}
