import { directivosHeaderAdapter, directivosBodyAdapter } from '@src/context/quienes-somos/adapters/directivos.adapter'
import fetchApi from '@src/utils/strapi.util'

export async function directivosHeaderService () {
  const serverData = await fetchApi({
    endpoint: 'directivos-page',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = directivosHeaderAdapter({ data: serverData })

  return data
}

export async function directivosBodyService () {
  const serverData = await fetchApi({
    endpoint: 'directivos-page',
    query: {
      'populate[PageContent][on][quienes-somos.oficinas][populate][CardPersonal][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = directivosBodyAdapter({ data: serverData })

  return data
}
