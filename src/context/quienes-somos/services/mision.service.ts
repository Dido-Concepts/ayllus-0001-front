import fetchApi from '@src/utils/strapi.util'
import { misionAdapter } from '@src/context/quienes-somos/adapters/mision.adapter'

export async function misionService () {
  const serverData = await fetchApi({
    endpoint: 'mision-vision',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*',
      'populate[PageContent][on][quienes-somos.list-card-mv][populate][Vision][populate]': '*',
      'populate[PageContent][on][quienes-somos.list-card-mv][populate][Mision][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = misionAdapter({ data: serverData })

  return data
}
