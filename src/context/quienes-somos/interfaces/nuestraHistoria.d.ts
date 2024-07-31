import type { Image, MultimediaStrapi } from '@src/interfaces/Image'

export interface ListCardResponse {
    id: number;
    descripcion: Descripcion[];
    img: MultimediaStrapi;
}

export interface Descripcion {
    type: string;
    children: Child[];
}

export interface Child {
    text: string;
    type: string;
}

export interface NuestraHistoriaData {
    imageHeader: Image
    listCard: {
        id: number
        descripcion: Descripcion[]
        imagen: Image
    }[]
}
