import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private tickets: Ticket[] = [
    {
      id: 1,
      titulo: 'No hay conexión a internet en el área de ventas',
      prioridad: 'Alta',
      estado: 'Abierto',
      cliente: 'María González',
      categoria: 'Redes',
      descripcion: 'Los equipos del departamento de ventas no pueden acceder a internet desde esta mañana.'
    },
    {
      id: 2,
      titulo: 'Impresora HP LaserJet no imprime',
      prioridad: 'Media',
      estado: 'En progreso',
      cliente: 'Carlos Ramírez',
      categoria: 'Hardware',
      descripcion: 'La impresora del 3er piso muestra error de papel atascado.'
    },
    {
      id: 3,
      titulo: 'Error al iniciar sesión en sistema de nómina',
      prioridad: 'Alta',
      estado: 'En progreso',
      cliente: 'Ana Martínez',
      categoria: 'Software',
      descripcion: 'El sistema de nómina muestra error de credenciales inválidas.'
    },
    {
      id: 4,
      titulo: 'Solicitud de instalación de AutoCAD',
      prioridad: 'Baja',
      estado: 'Abierto',
      cliente: 'Roberto Silva',
      categoria: 'Software',
      descripcion: 'Necesita instalación de AutoCAD 2024.'
    },
    {
      id: 5,
      titulo: 'Pantalla con líneas verticales',
      prioridad: 'Media',
      estado: 'Cerrado',
      cliente: 'Laura Pérez',
      categoria: 'Hardware',
      descripcion: 'Monitor Dell presenta líneas verticales verdes.'
    }
  ];

  obtenerTickets(): Ticket[] {
    return this.tickets;
  }

  obtenerTicketId(id: number): Ticket | undefined {
    return this.tickets.find(ticket => ticket.id === id);
  }

  get totalAbiertos(): number {
    return this.tickets.filter(t => t.estado === 'Abierto').length;
  }

  get totalEnProgreso(): number {
    return this.tickets.filter(t => t.estado === 'En progreso').length;
  }

  get totalCerrados(): number {
    return this.tickets.filter(t => t.estado === 'Cerrado').length;
  }

  get prioridadAlta(): number {
    return this.tickets.filter(t => t.prioridad === 'Alta').length;
  }

  get prioridadMedia(): number {
    return this.tickets.filter(t => t.prioridad === 'Media').length;
  }

  get prioridadBaja(): number {
    return this.tickets.filter(t => t.prioridad === 'Baja').length;
  }

  cerrarTicket(id: number): boolean {
  const ticket = this.tickets.find(t => t.id === id);

  if (!ticket) return false;

  if (ticket.estado === 'Cerrado') return false;

  ticket.estado = 'Cerrado';
  return true;
}
}
