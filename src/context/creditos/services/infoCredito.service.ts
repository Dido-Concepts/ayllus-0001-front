import fetchApi from '@src/utils/strapi.util'
import { infoCreditoAdapter } from '@src/context/creditos/adapters/infoCredito.adapter'
import type { InfoCreditoData, InfoCreditoResponse } from '@src/context/creditos/interfaces/infoCredito'

export async function infoCreditoService ({ slug }: { slug: string | undefined }): Promise<InfoCreditoData > {
  if (!slug) throw new Error('No se proporcionó un slug.')

  const serverData: InfoCreditoResponse[] = await fetchApi({
    endpoint: 'creditos-infos',
    query: {
      populate: '*',
      'filters[slug][$eq]': slug
    },
    wrappedByKey: 'data'
  })

  if (serverData.length === 0) {
    throw new Error('No se encontraron datos para el slug proporcionado.')
  }

  const data = infoCreditoAdapter({ data: serverData })

  return data
}
