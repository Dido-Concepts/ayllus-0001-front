import type { OficinaResponse, OficinaData } from '@src/context/home/interfaces/oficina'

const KEYS = ['Ayacucho', 'Pichari', 'Kimbiri']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function oficinaAdapter ({ data }: { data: any }): OficinaData[] {
  return KEYS.map((key) => {
    const item: OficinaResponse = data?.attributes?.PageContent[0][key] || null
    return item
      ? {
          id: item.id,
          title: item.title,
          direccion: item.direccion,
          imagen: {
            extension: item.foto_oficina.data.attributes.ext,
            url: item.foto_oficina.data.attributes.url,
            height: item.foto_oficina.data.attributes.height,
            width: item.foto_oficina.data.attributes.width,
            mime: item.foto_oficina.data.attributes.mime
          }
        }
      : null
  }).filter((item) => item !== null)
}
