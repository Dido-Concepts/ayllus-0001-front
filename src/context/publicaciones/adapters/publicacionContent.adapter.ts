import type { PublicacionDestacadoData, PublicacionDestacadoResponse } from '@src/context/publicaciones/interfaces/publicacion'

export function publicacionContentAdapter ({ data }: { data: PublicacionDestacadoResponse[] }): PublicacionDestacadoData {
  return {
    slug: data[0].attributes.slug,
    titulo: data[0].attributes.titulo,
    descripcion: data[0].attributes.descripcion,
    imagen: {
      url: data[0].attributes.imagen.data.attributes.url,
      width: data[0].attributes.imagen.data.attributes.width,
      height: data[0].attributes.imagen.data.attributes.height,
      extension: data[0].attributes.imagen.data.attributes.ext,
      mime: data[0].attributes.imagen.data.attributes.mime
    },
    contenido: data[0].attributes.contenido,
    createdAt: data[0].attributes.createdAt,
    updatedAt: data[0].attributes.updatedAt,
    publishedAt: data[0].attributes.publishedAt
  }
}
