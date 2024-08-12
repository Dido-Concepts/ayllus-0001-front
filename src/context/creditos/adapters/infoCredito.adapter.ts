import type { InfoCreditoResponse, InfoCreditoData } from '@src/context/creditos/interfaces/infoCredito'

export function infoCreditoAdapter ({ data }: { data: InfoCreditoResponse[] }): InfoCreditoData {
  return {
    imagen: {
      url: data[0].attributes.imagen.data.attributes.url,
      width: data[0].attributes.imagen.data.attributes.width,
      height: data[0].attributes.imagen.data.attributes.height,
      extension: data[0].attributes.imagen.data.attributes.ext,
      mime: data[0].attributes.imagen.data.attributes.mime
    },
    titulo: data[0].attributes.titulo,
    descripcion: data[0].attributes.descripcion,
    contenido: data[0].attributes.contenido
  }
}
