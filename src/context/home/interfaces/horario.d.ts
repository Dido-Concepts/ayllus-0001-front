export interface HorarioResponse {
    id: number;
    titulo: string;
    Hora: Hora[];
}

export interface Hora {
    id: number;
    inicio: string;
    fin: string;
}

export interface HorarioData {
    telefono: string;
    horario: HorarioResponse[];
}
