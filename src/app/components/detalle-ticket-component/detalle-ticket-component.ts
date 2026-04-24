import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../services/tickest.service';
import { Ticket } from '../../interfaces/ticket.interface';
import { MisTickestService } from '../../services/mistickest.service';

@Component({
  selector: 'app-detalle-ticket-component',
  standalone: false,
  templateUrl: './detalle-ticket-component.html',
  styleUrl: './detalle-ticket-component.css',
})
export class DetalleTicketComponent  {

  ticket?: Ticket;
  mensaje: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private ticketsService: TicketsService,
    private misTicketService: MisTickestService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const id = Number(params['id']);
      this.ticket = this.ticketsService.obtenerTicketId(id);
    });
  }

  volver(): void {
    this.router.navigate(['/tickets']);
  }

  asignarTicket(): void {
    if (!this.ticket) return;

    const asignado = this.misTicketService.asignar(this.ticket);

    this.mensaje = asignado
      ? 'Ticket asignado correctamente.'
      : 'Este ticket ya fue asignado anteriormente.';
  }

  estaAsignado(): boolean {
    if (!this.ticket) return false;
    return this.misTicketService.estaAsignado(this.ticket.id);
  }
  cerrarTicket(): void {
  if (!this.ticket) return;

  const cerrado = this.ticketsService.cerrarTicket(this.ticket.id);

  this.mensaje = cerrado
    ? 'Ticket cerrado correctamente.'
    : 'El ticket ya estaba cerrado.';
}
}
