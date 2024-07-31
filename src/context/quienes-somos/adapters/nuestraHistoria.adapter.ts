import type { ListCardResponse, NuestraHistoriaData } from '@src/context/quienes-somos/interfaces/nuestraHistoria'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function nuestraHistoriaAdapter ({ data }: { data: any }): NuestraHistoriaData {
  const dataImageHeader = data?.attributes?.PageContent[0].imagen_header.data.attributes || null

  const imageHeader = {
    url: dataImageHeader.url,
    width: dataImageHeader.width,
    height: dataImageHeader.height,
    extension: dataImageHeader.ext,
    mime: dataImageHeader.mime
  }

  const dataCardInfo: ListCardResponse[] = data?.attributes?.PageContent[1].ListCard || null

  const listCard = dataCardInfo.map((item) => {
    return {
      id: item.id,
      descripcion: item.descripcion,
      imagen: {
        url: item.img.data.attributes.url,
        width: item.img.data.attributes.width,
        height: item.img.data.attributes.height,
        extension: item.img.data.attributes.ext,
        mime: item.img.data.attributes.mime
      }
    }
  })

  return {
    imageHeader,
    listCard
  }
}
