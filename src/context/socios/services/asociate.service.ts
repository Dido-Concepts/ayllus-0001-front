import fetchApi from '@src/utils/strapi.util'
import { asociateHeaderAdapter, asociateBodyAdapter } from '@src/context/socios/adapters/asociate.adapter'

export async function asociateHeaderService () {
  const serverData = await fetchApi({
    endpoint: 'asociate',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*',
      'populate[PageContent][on][socios.item-text][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = asociateHeaderAdapter({ data: serverData })

  return data
}

export async function asociateBodyService () {
  const serverData = await fetchApi({
    endpoint: 'asociate',
    query: {
      'populate[PageContent][on][socios.item-listado][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = asociateBodyAdapter({ data: serverData })

  return data
}
