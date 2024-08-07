import type { ImageHeaderData } from '@src/interfaces/Header'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function transparenciaHeaderAdapter ({ data }: { data: any }): ImageHeaderData {
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
