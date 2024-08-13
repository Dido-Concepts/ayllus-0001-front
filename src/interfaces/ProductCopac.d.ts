import type { Image } from '@src/interfaces/Image'

export interface TipoProductCopacData {
    nombreTipo: string;
    descripcion: string;
    productCopacInfos: ProductCopacInfosData[];
    imagenTipo: Image;
}

export interface ProductCopacInfosData {
    titulo: string;
    imagen: Image;
    link: string;
}

export interface InfoProductCopacData {
    titulo: string;
    descripcion: string;
    contenido: ContenidoProductCopac[];
    imagen: Image;
}

export interface ContenidoProductCopac {
    id: number;
    titulo: string;
    lista: string[];
}
