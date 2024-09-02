import type { PublicacionDestacadoData, PublicacionDestacadoResponse } from '@src/context/publicaciones/interfaces/publicacion'
import fetchApi from '@src/utils/strapi.util'
import { publicacionContentAdapter } from '@src/context/publicaciones/adapters/publicacionContent.adapter'

export async function publicacionContentService ({ slug }: { slug: string | undefined }): Promise<PublicacionDestacadoData> {
  if (!slug) throw new Error('No se proporcionó un slug.')

  const serverData: PublicacionDestacadoResponse[] = await fetchApi({
    endpoint: 'publicacions',
    query: {
      populate: '*',
      'filters[slug][$eq]': slug
    },
    wrappedByKey: 'data'
  })

  if (serverData.length === 0) {
    throw new Error('No se encontraron datos para el slug proporcionado.')
  }

  const data = publicacionContentAdapter({ data: serverData })

  return data
}
