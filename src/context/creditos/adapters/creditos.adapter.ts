import type { ImageHeaderData } from '@src/interfaces/Header'
import type { TipoCreditosResponse } from '@src/context/creditos/interfaces/creditos'
import type { TipoProductCopacData } from '@src/interfaces/ProductCopac'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function creditosHeaderAdapter ({ data }: { data: any }): ImageHeaderData {
  const dataImageHeader = data?.attributes?.PageContent[0].imagen_header.data.attributes || null

  const imageHeader = {
    url: dataImageHeader.url,
    width: dataImageHeader.width,
    height: dataImageHeader.height,
    extension: dataImageHeader.ext,
    mime: dataImageHeader.mime
  }

  return {
    imageHeader
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function creditosBodyAdapter ({ data }: { data: any }): TipoProductCopacData[] {
  const tiposCreditos: TipoCreditosResponse[] = data || null

  return tiposCreditos.map(tipoCredito => ({
    nombreTipo: tipoCredito.attributes.nombre_tipo,
    descripcion: tipoCredito.attributes.descripcion,
    imagenTipo: {
      url: tipoCredito.attributes.imagen_card.data.attributes.url,
      width: tipoCredito.attributes.imagen_card.data.attributes.width,
      height: tipoCredito.attributes.imagen_card.data.attributes.height,
      extension: tipoCredito.attributes.imagen_card.data.attributes.ext,
      mime: tipoCredito.attributes.imagen_card.data.attributes.mime
    },
    productCopacInfos: tipoCredito.attributes.creditos_infos.data.map(credito => ({
      titulo: credito.attributes.titulo,
      link: `/creditos/${credito.attributes.slug}`,
      imagen: {
        url: credito.attributes.imagen.data.attributes.url,
        width: credito.attributes.imagen.data.attributes.width,
        height: credito.attributes.imagen.data.attributes.height,
        extension: credito.attributes.imagen.data.attributes.ext,
        mime: credito.attributes.imagen.data.attributes.mime
      }
    }))
  }))
}
