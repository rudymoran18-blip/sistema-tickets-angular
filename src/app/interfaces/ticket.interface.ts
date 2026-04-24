export interface Ticket{
  id:number;
  titulo: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  estado: string;
  cliente: string;
  categoria: string;
  descripcion: string;
}
