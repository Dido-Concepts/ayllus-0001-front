import type { PVResponse, Item, ItemPVData, HeaderItemPVData } from '@src/context/quienes-somos/interfaces/principiosValores'

const KEYS = ['Pricipios', 'Valores']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function principiosValoresHeaderAdapter ({ data }: { data: any }): HeaderItemPVData {
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
export function nuestraHistoriaBodyAdapter ({ data }: { data: any }): ItemPVData[] {
  const listItems: ItemPVData[] = KEYS.map((key): ItemPVData | null => {
    const items: PVResponse[] | null = data?.attributes?.PageContent[0][key] || null

    if (!items) return null

    const itemsAdapter = items.map((item: PVResponse): Item => {
      return {
        titulo: item.titulo,
        img: {
          url: item.img.data[0].attributes.url,
          width: item.img.data[0].attributes.width,
          height: item.img.data[0].attributes.height,
          extension: item.img.data[0].attributes.ext,
          mime: item.img.data[0].attributes.mime
        },
        descripcion: item.descripcion
      }
    })

    return {
      title: key,
      items: itemsAdapter
    }
  }).filter((item): item is ItemPVData => item !== null)

  return listItems
}
