import fetchApi from '@src/utils/strapi.util'
import { principiosValoresHeaderAdapter, nuestraHistoriaBodyAdapter } from '@src/context/quienes-somos/adapters/principiosValores.adapter'

export async function principiosValoresHeaderService () {
  const serverData = await fetchApi({
    endpoint: 'principios-valores-page',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = principiosValoresHeaderAdapter({ data: serverData })

  return data
}

export async function principiosValoresBodyService () {
  const serverData = await fetchApi({
    endpoint: 'principios-valores-page',
    query: {
      'populate[PageContent][on][quienes-somos.section-pv][populate][Pricipios][populate]': '*',
      'populate[PageContent][on][quienes-somos.section-pv][populate][Valores][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = nuestraHistoriaBodyAdapter({ data: serverData })

  return data
}
