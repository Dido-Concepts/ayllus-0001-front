import { Image } from '@src/interfaces/Image'

export interface ItemPVData {
    title: string;
    items: Item[];
}

export interface HeaderItemPVData {
    imageHeader: Image;
}

export interface Item {
    titulo: string;
    img: Image;
    descripcion: string;
}

export interface PVResponse {
    id: number;
    titulo: string;
    descripcion: string;
    img: Img;
}

export interface Img {
    data: Datum[];
}

export interface Datum {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: ProviderMetadata;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}
