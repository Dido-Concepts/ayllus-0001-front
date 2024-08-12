import fetchApi from '@src/utils/strapi.util'
import { creditosHeaderAdapter, creditosBodyAdapter } from '@src/context/creditos/adapters/creditos.adapter'

export async function creditosHeaderService () {
  const serverData = await fetchApi({
    endpoint: 'credito-page',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = creditosHeaderAdapter({ data: serverData })

  return data
}

export async function creditosBodyService () {
  const serverData = await fetchApi({
    endpoint: 'tipo-credidos',
    query: {
      populate: 'creditos_infos.imagen,imagen_card.data'
    },
    wrappedByKey: 'data'
  })

  const data = creditosBodyAdapter({ data: serverData })

  return data
}
