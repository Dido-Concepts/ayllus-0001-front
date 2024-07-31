import type { Image, MultimediaStrapi } from '@src/interfaces/Image'

export interface CarouselResponse {
    id: number;
    descripcion: string;
    multimedia: MultimediaStrapi;
}

export interface CarouselData {
    id: number;
    descripcion: string;
    imagen: Image
}
