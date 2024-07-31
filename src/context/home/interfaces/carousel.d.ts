import type { Image, MultimediaStrapi } from '@src/interfaces/Image'

export interface CarouselResponse {
    id:          number;
    descripcion: string;
    multimedia:  Multimedia;
}


export interface CarouselData {
    id:          number;
    descripcion: string;
    imagen:      Image
}