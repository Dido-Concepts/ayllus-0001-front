import type { ImageHeaderData } from '@src/interfaces/Header'
import type { NuestroEquipoData, NuestroEquipoResponse } from '@src/context/quienes-somos/interfaces/nuestroEquipo'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function directivosHeaderAdapter ({ data }: { data: any }): ImageHeaderData {
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
export function directivosBodyAdapter ({ data }: { data: any }): NuestroEquipoData[] {
  const listItems: NuestroEquipoResponse[] = data?.attributes?.PageContent || null

  const itemsAdapter: NuestroEquipoData[] = listItems.map(item => ({
    id: item.id,
    nombre_oficina: item.nombre_oficina,
    CardPersonal: item.CardPersonal.map(card => ({
      id: card.id,
      cargo: card.cargo,
      nombre_persona: card.nombre_persona,
      foto: {
        url: card.foto.data.attributes.url,
        width: card.foto.data.attributes.width,
        height: card.foto.data.attributes.height,
        extension: card.foto.data.attributes.ext,
        mime: card.foto.data.attributes.mime
      }
    }))
  }))

  return itemsAdapter
}
