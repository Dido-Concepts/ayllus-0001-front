import fetchApi from '@src/utils/strapi.util'
import { publicacionDestacadoAdapter } from '@src/context/publicaciones/adapters/publicacionDestacado.adapter'
import type { PublicacionDestacadoResponse } from '@src/context/publicaciones/interfaces/publicacion'

export async function publicacionDestacadoService () {
  const serverData: PublicacionDestacadoResponse[] = await fetchApi({
    endpoint: 'publicacions',
    query: {
      'fields[0]': 'titulo',
      'fields[1]': 'descripcion',
      'fields[2]': 'slug',
      'populate[0]': 'imagen',
      'filters[destacado][$eq]': 'true'
    },
    wrappedByKey: 'data'
  })

  const data = publicacionDestacadoAdapter({ data: serverData })

  return data
}
