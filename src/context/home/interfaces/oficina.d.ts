import type { Image, MultimediaStrapi } from '@src/interfaces/Image'

export interface OficinaResponse {
    id: number;
    title: string;
    direccion: string;
    foto_oficina: MultimediaStrapi;
}


export interface OficinaData {
    id: number;
    title: string;
    direccion: string;
    imagen: Image
}