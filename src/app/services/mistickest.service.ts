import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({providedIn: 'root'})
export class MisTickestService {

  private ticketsAsignados: Ticket[] = [];

  obtenerTickets(): Ticket[] {
    return this.ticketsAsignados;
  }

  obtenerCantidadTickets(): number {
    return this.ticketsAsignados.length;
  }

  obtenerTicketId(id: number): Ticket | undefined {
    return this.ticketsAsignados.find(ticket => ticket.id === id);
  }

  asignar(ticket: Ticket): boolean {
    const yaAsignado = this.ticketsAsignados.some(t => t.id === ticket.id);

    if (yaAsignado) {
      return false;
    }

    this.ticketsAsignados.push(ticket);
    return true;
  }

  estaAsignado(id: number): boolean {
    return this.ticketsAsignados.some(ticket => ticket.id === id);
  }
}
