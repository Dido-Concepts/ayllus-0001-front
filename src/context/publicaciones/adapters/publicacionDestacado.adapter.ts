import type { PublicacionDestacadoResponse, PublicacionDestacadoData } from '@src/context/publicaciones/interfaces/publicacion'

export function publicacionDestacadoAdapter ({ data }: { data: PublicacionDestacadoResponse[] }): PublicacionDestacadoData[] {
  return data.map(item => ({
    titulo: item.attributes.titulo,
    descripcion: item.attributes.descripcion,
    slug: item.attributes.slug,
    imagen: {
      url: item.attributes.imagen.data.attributes.url,
      width: item.attributes.imagen.data.attributes.width,
      height: item.attributes.imagen.data.attributes.height,
      extension: item.attributes.imagen.data.attributes.ext,
      mime: item.attributes.imagen.data.attributes.mime
    }
  }))
}
