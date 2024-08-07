import fetchApi from '@src/utils/strapi.util'
import { transparenciaHeaderAdapter } from '@src/context/transparencia/adapters/transparencia.adapter'
import type { TransparenciaResponse } from '@src/context/transparencia/interfaces/transparencia'

export async function transparenciaHeaderService () {
  const serverData = await fetchApi({
    endpoint: 'transparencia-page',
    query: {
      'populate[PageContent][on][share.imagen-header][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = transparenciaHeaderAdapter({ data: serverData })

  return data
}

export async function transparenciaBodyService () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const serverData : any = await fetchApi({
    endpoint: 'transparencia-page',
    query: {
      'populate[PageContent][on][transparencia.list-document][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data : TransparenciaResponse[] = serverData.attributes?.PageContent

  return data
}
