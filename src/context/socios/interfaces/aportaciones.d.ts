import type { MultimediaStrapi, Image } from '@src/interfaces/Image'

export interface AportacionesResponse {
    id: number;
    __component: string;
    titulo: string;
    descripcion: string;
    imagen: MultimediaStrapi;
}

export interface AportacionesData {
    titulo: string;
    descripcion: string;
    imagen: Image;
}
