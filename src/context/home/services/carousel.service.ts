import fetchApi from '@src/utils/strapi.util'
import { carouselAdapter } from '@src/context/home/adapters/carousel.adapter'

export async function carouselService () {
  const serverData = await fetchApi({
    endpoint: 'home-page',
    query: {
      'populate[PageContent][on][home.carousel][populate][Primer_Item][populate]': '*',
      'populate[PageContent][on][home.carousel][populate][Segunda_Item][populate]': '*',
      'populate[PageContent][on][home.carousel][populate][Tercer_Item][populate]': '*',
      'populate[PageContent][on][home.carousel][populate][Cuarto_Item][populate]': '*'
    },
    wrappedByKey: 'data'
  })

  const data = carouselAdapter({ data: serverData })

  return data
}
