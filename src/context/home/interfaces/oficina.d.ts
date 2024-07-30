export interface OficinaResponse {
    id: number;
    title: string;
    direccion: string;
    foto_oficina: FotoOficina;
}

export interface FotoOficina {
    data: Data;
}

export interface Data {
    id: number;
    attributes: Attributes;
}

export interface Attributes {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
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

export interface Formats {
    small: Small;
    thumbnail: Small;
}

export interface Small {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id: string;
    resource_type: string;
}


export interface OficinaData {
    id: number;
    title: string;
    direccion: string;
    imagen: {
        extension: string;
        url: string;
        height: number;
        width: number;
        mime: string;
    }
}