import type { AportacionesData, AportacionesResponse } from '@src/context/socios/interfaces/aportaciones'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function aportacionesBodyAdapter ({ data }: { data: any }): AportacionesData[] {
  const listItems: AportacionesResponse[] = data?.attributes?.PageContent || null

  const itemsAdapter: AportacionesData[] = listItems.map(item => ({
    titulo: item.titulo,
    descripcion: item.descripcion,
    imagen: {
      url: item.imagen.data.attributes.url,
      width: item.imagen.data.attributes.width,
      height: item.imagen.data.attributes.height,
      extension: item.imagen.data.attributes.ext,
      mime: item.imagen.data.attributes.mime
    }

  }))

  return itemsAdapter
}
