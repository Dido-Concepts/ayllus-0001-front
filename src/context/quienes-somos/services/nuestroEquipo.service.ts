import fetchApi from '@src/utils/strapi.util'
import { nuestroEquipoHeaderAdapter, nuestraHistoriaBodyAdapter } from '@src/context/quienes-somos/adapters/nuestroEquipo.adapter'

export async function nuestroEquipoHeaderService () {
  const serverData = await fetchApi({
    endpoint: 'nuestro-equipo',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = nuestroEquipoHeaderAdapter({ data: serverData })

  return data
}

export async function nuestroEquipoBodyService () {
  const serverData = await fetchApi({
    endpoint: 'nuestro-equipo',
    query: {
      'populate[PageContent][on][quienes-somos.oficinas][populate][CardPersonal][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = nuestraHistoriaBodyAdapter({ data: serverData })

  return data
}
