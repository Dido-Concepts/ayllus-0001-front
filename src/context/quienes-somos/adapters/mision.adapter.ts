import type { MisionVisionResponse, MisionVisionData } from '@src/context/quienes-somos/interfaces/mision'

const KEYS = ['Vision', 'Mision']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function misionAdapter ({ data }: { data: any }): MisionVisionData {
  const dataImageHeader = data?.attributes?.PageContent[0].imagen_header.data.attributes || null

  const imageHeader = {
    url: dataImageHeader.url,
    width: dataImageHeader.width,
    height: dataImageHeader.height,
    extension: dataImageHeader.ext,
    mime: dataImageHeader.mime
  }

  const listItems = KEYS.map((key) => {
    const item: MisionVisionResponse = data?.attributes?.PageContent[1][key] || null
    return item
      ? {
          id: item.id,
          descripcion: item.descripcion,
          title: item.title,
          hero: {
            extension: item.hero.data.attributes.ext,
            url: item.hero.data.attributes.url,
            height: item.hero.data.attributes.height,
            width: item.hero.data.attributes.width,
            mime: item.hero.data.attributes.mime
          },
          icon: {
            extension: item.logo.data.attributes.ext,
            url: item.logo.data.attributes.url,
            height: item.logo.data.attributes.height,
            width: item.logo.data.attributes.width,
            mime: item.logo.data.attributes.mime
          }
        }
      : null
  }).filter((item) => item !== null)

  return {
    imageHeader,
    listItems
  }
}
