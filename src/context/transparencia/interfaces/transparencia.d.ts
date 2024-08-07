export interface TransparenciaResponse {
    id: number;
    __component: string;
    titulo: string;
    descripcion: null | string;
    lista_documento: ListaDocumento;
}

export interface ListaDocumento {
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
    width: null;
    height: null;
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
