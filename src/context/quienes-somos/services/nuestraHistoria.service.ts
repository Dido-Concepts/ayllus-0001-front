import fetchApi from '@src/utils/strapi.util'
import { nuestraHistoriaAdapter } from '@src/context/quienes-somos/adapters/nuestraHistoria.adapter'

export async function nuestraHistoriaService () {
  const serverData = await fetchApi({
    endpoint: 'nuestra-historia',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*',
      'populate[PageContent][on][quienes-somos.list-card-info][populate][ListCard][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = nuestraHistoriaAdapter({ data: serverData })

  return data
}
