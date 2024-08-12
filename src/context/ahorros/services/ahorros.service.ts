import fetchApi from '@src/utils/strapi.util'
import { ahorrosHeaderAdapter, ahorrosBodyAdapter } from '@src/context/ahorros/adapters/ahorros.adapter'

export async function ahorrosHeaderService () {
  const serverData = await fetchApi({
    endpoint: 'ahorro-page',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = ahorrosHeaderAdapter({ data: serverData })

  return data
}

export async function ahorrosBodyService () {
  const serverData = await fetchApi({
    endpoint: 't-ipo-ahorros',
    query: {
      populate: 'ahorros_infos.imagen,imagen_card.data'
    },
    wrappedByKey: 'data'
  })

  const data = ahorrosBodyAdapter({ data: serverData })

  return data
}
