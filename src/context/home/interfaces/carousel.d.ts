export interface CarouselResponse {
    id:          number;
    descripcion: string;
    multimedia:  Multimedia;
}

export interface Multimedia {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:               string;
    url:               string;
    hash:              string;
    mime:              string;
    name:              string;
    path:              null;
    size:              number;
    width:             number;
    height:            number;
    sizeInBytes:       number;
    provider_metadata: ProviderMetadata;
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: string;
}


export interface CarouselData {
    id:          number;
    descripcion: string;
    imagen:      {
        extension: string;
        url:       string;
        width:     number;
        height:    number;
        mime:      string;
    }
}