import fetchApi from '@src/utils/strapi.util'
import { oficinaAdapter } from '@src/context/home/adapters/oficina.adapter'

export async function oficinaService () {
  const serverData = await fetchApi({
    endpoint: 'home-page',
    query: {
      'populate[PageContent][on][home.oficinas][populate][Ayacucho][populate]': '*',
      'populate[PageContent][on][home.oficinas][populate][Pichari][populate]': '*',
      'populate[PageContent][on][home.oficinas][populate][Kimbiri][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = oficinaAdapter({ data: serverData })

  return data
}
