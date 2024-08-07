import fetchApi from '@src/utils/strapi.util'
import { aportacionesBodyAdapter } from '@src/context/socios/adapters/aportaciones.adapter'

export async function aportacionesBodyService () {
  const serverData = await fetchApi({
    endpoint: 'aportaciones-page',
    query: {
      'populate[PageContent][on][socios.seccion-aportaciones][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = aportacionesBodyAdapter({ data: serverData })

  return data
}
