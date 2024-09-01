import type { CarouselData, CarouselResponse } from '@src/context/home/interfaces/carousel'

const KEYS = ['Primer_Item', 'Segunda_Item', 'Tercer_Item', 'Cuarto_Item']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function carouselAdapter ({ data }: { data: any }): CarouselData[] {
  return KEYS.map((key) => {
    const item: CarouselResponse = data?.attributes?.PageContent[0][key] || null
    return item
      ? {
          id: item.id,
          descripcion: item.descripcion,
          url: item.url,
          imagen: {
            extension: item.multimedia.data.attributes.ext,
            url: item.multimedia.data.attributes.url,
            height: item.multimedia.data.attributes.height,
            width: item.multimedia.data.attributes.width,
            mime: item.multimedia.data.attributes.mime
          }
        }
      : null
  }).filter((item) => item !== null)
}
