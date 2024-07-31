import { Image, MultimediaStrapi } from '@src/interfaces/Image'

export interface MisionVisionResponse {
    id: number;
    title: string;
    descripcion: string;
    logo: MultimediaStrapi;
    hero: MultimediaStrapi;
}

export interface MisionVisionData {
    imageHeader: Image;
    listItems: {
        id: number;
        title: string;
        descripcion: string;
        hero: Image;
        icon: Image;
    }[];
}
