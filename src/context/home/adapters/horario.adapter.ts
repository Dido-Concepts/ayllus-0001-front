import type { HorarioResponse, HorarioData } from '@src/context/home/interfaces/horario'

const KEYS = ['LunesViernes', 'Sabado']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function horarioAdapter ({ data }: { data: any }): HorarioData {
  const telefono = data?.attributes?.PageContent[0].telefono || ''

  const horarios = KEYS.map((key) => {
    const item: HorarioResponse = data?.attributes?.PageContent[0][key] || null
    return item || null
  }).filter((item) => item !== null)

  return {
    telefono,
    horario: horarios
  }
}
