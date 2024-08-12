export function convertirHora (formato24: string): string {
  const [horas, minutos] = formato24.split(':').map(Number)

  const periodo = horas >= 12 ? 'PM' : 'AM'

  const horas12 = horas % 12 || 12

  const horas12Str = horas12.toString().padStart(2, '0')
  const minutosStr = minutos.toString().padStart(2, '0')

  return `${horas12Str}:${minutosStr} ${periodo}`
}
