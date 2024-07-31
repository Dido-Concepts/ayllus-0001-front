import { Image, MultimediaStrapi } from '@src/interfaces/Image'

export interface HeaderAsociateData{
    imageHeader: Image;
    descripcionHeader: string;
}

export interface AsociateBodyData{

    titulo: string;
    hero: Image;
    itemText: ItemText[];

}

export interface AsociateResponse {
    id: number;
    __component: string;
    titulo: string;
    imagen: MultimediaStrapi;
    ItemText: ItemText[];
}

export interface ItemText {
    id: number;
    item: string;
}
