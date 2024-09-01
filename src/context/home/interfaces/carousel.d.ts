import type { Image, MultimediaStrapi } from '@src/interfaces/Image'

export interface CarouselResponse {
    id: number;
    descripcion: string;
    url: string;
    multimedia: MultimediaStrapi;
}

export interface CarouselData {
    id: number;
    descripcion: string;
    url: string;
    imagen: Image
}
