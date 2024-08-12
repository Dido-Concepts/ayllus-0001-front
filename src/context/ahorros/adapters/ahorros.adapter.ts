import type { ImageHeaderData } from '@src/interfaces/Header'
import type { TipoAhorrosData, TipoAhorrosResponse } from '@src/context/ahorros/interfaces/ahorros'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ahorrosHeaderAdapter ({ data }: { data: any }): ImageHeaderData {
  const dataImageHeader = data?.attributes?.PageContent[0].imagen_header.data.attributes || null

  const imageHeader = {
    url: dataImageHeader.url,
    width: dataImageHeader.width,
    height: dataImageHeader.height,
    extension: dataImageHeader.ext,
    mime: dataImageHeader.mime
  }

  return {
    imageHeader
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ahorrosBodyAdapter ({ data }: { data: any }): TipoAhorrosData[] {
  const tiposAhorros: TipoAhorrosResponse[] = data || null

  return tiposAhorros.map(tipoAhorro => ({
    nombreTipo: tipoAhorro.attributes.nombre_tipo,
    descripcion: tipoAhorro.attributes.descripcion,
    imagenTipo: {
      url: tipoAhorro.attributes.imagen_card.data.attributes.url,
      width: tipoAhorro.attributes.imagen_card.data.attributes.width,
      height: tipoAhorro.attributes.imagen_card.data.attributes.height,
      extension: tipoAhorro.attributes.imagen_card.data.attributes.ext,
      mime: tipoAhorro.attributes.imagen_card.data.attributes.mime
    },
    ahorrosInfos: tipoAhorro.attributes.ahorros_infos.data.map(ahorro => ({
      titulo: ahorro.attributes.titulo,
      slug: ahorro.attributes.slug,
      imagen: {
        url: ahorro.attributes.imagen.data.attributes.url,
        width: ahorro.attributes.imagen.data.attributes.width,
        height: ahorro.attributes.imagen.data.attributes.height,
        extension: ahorro.attributes.imagen.data.attributes.ext,
        mime: ahorro.attributes.imagen.data.attributes.mime
      }
    }))
  }))
}
