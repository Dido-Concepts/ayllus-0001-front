import type { HeaderAsociateData, AsociateBodyData, AsociateResponse } from '@src/context/socios/interfaces/asociate'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function asociateHeaderAdapter ({ data }: { data: any }): HeaderAsociateData {
  const dataImageHeader = data?.attributes?.PageContent[0].imagen_header.data.attributes || null

  const imageHeader = {
    url: dataImageHeader.url,
    width: dataImageHeader.width,
    height: dataImageHeader.height,
    extension: dataImageHeader.ext,
    mime: dataImageHeader.mime
  }

  const descripcionHeader = data?.attributes?.PageContent[1].item || ''

  return {
    imageHeader,
    descripcionHeader
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function asociateBodyAdapter ({ data }: { data: any }): AsociateBodyData[] {
  const cards: AsociateResponse[] = data?.attributes?.PageContent || null

  return cards.map(card => ({
    hero: {
      url: card.imagen.data.attributes.url,
      width: card.imagen.data.attributes.width,
      height: card.imagen.data.attributes.height,
      extension: card.imagen.data.attributes.ext,
      mime: card.imagen.data.attributes.mime
    },
    itemText: card.ItemText,
    titulo: card.titulo
  }))
}
