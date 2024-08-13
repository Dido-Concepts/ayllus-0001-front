import fetchApi from '@src/utils/strapi.util'
import { infoAhorroAdapter } from '@src/context/ahorros/adapters/infoAhorro.adapter'
import type { InfoAhorroResponse } from '@src/context/ahorros/interfaces/infoAhorro'
import type { InfoProductCopacData } from '@src/interfaces/ProductCopac'

export async function infoAhorroService ({ slug }: { slug: string | undefined }): Promise<InfoProductCopacData > {
  if (!slug) throw new Error('No se proporcionó un slug.')

  const serverData: InfoAhorroResponse[] = await fetchApi({
    endpoint: 'ahorros-infos',
    query: {
      populate: '*',
      'filters[slug][$eq]': slug
    },
    wrappedByKey: 'data'
  })

  if (serverData.length === 0) {
    throw new Error('No se encontraron datos para el slug proporcionado.')
  }

  const data = infoAhorroAdapter({ data: serverData })

  return data
}
