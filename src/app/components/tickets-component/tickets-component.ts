import { Component } from '@angular/core';
import { TicketsService } from '../../services/tickest.service';
import { Ticket } from '../../interfaces/ticket.interface';
import { Router } from '@angular/router';
import { MisTickestService } from '../../services/mistickest.service';

@Component({
  selector: 'app-tickets-component',
  standalone: false,
  templateUrl: './tickets-component.html',
  styleUrl: './tickets-component.css',
})
export class TicketsComponent  {

  tickets: Ticket[] = [];

  textoBusqueda: string = '';
  filtroCategoria: string = '';
  filtroPrioridad: string = '';

  mensajeExito: string = '';

  categorias: string[] = ['Redes', 'Hardware', 'Software', 'Soporte'];
  prioridades: string[] = ['Alta', 'Media', 'Baja'];

  constructor(
    private ticketsService: TicketsService,
    private router: Router,
    private misTicket: MisTickestService
  ) {}

  ngOnInit(): void {
    this.tickets = this.ticketsService.obtenerTickets();
  }

  get ticketsFiltrados(): Ticket[] {
    return this.tickets.filter(ticket => {
      const texto = this.textoBusqueda.toLowerCase();

      const coincideTexto =
        ticket.titulo.toLowerCase().includes(texto) ||
        ticket.cliente.toLowerCase().includes(texto) ||
        ticket.descripcion.toLowerCase().includes(texto);

      const coincideCategoria =
        this.filtroCategoria === '' || ticket.categoria === this.filtroCategoria;

      const coincidePrioridad =
        this.filtroPrioridad === '' || ticket.prioridad === this.filtroPrioridad;

      return coincideTexto && coincideCategoria && coincidePrioridad;
    });
  }

  verTicket(id: number): void {
    this.router.navigate(['detalle', id]);
  }

  asignar(ticket: Ticket): void {
  const asignado = this.misTicket.asignar(ticket);

  if (!asignado) {
    this.mensajeExito = `El ticket "${ticket.titulo}" ya fue asignado`;
    return;
  }

  this.mensajeExito = `Ticket "${ticket.titulo}" asignado con éxito`;

  setTimeout(() => {
    this.mensajeExito = '';
  }, 3000);
}

estaAsignado(id: number): boolean {
  return this.misTicket.estaAsignado(id);
}

  limpiarFiltros(): void {
    this.textoBusqueda = '';
    this.filtroCategoria = '';
    this.filtroPrioridad = '';
  }

  get totalAbiertos(): number {
    return this.ticketsService.totalAbiertos;
  }

  get totalEnProgreso(): number {
    return this.ticketsService.totalEnProgreso;
  }

  get totalCerrados(): number {
    return this.ticketsService.totalCerrados;
  }

  get prioridadAlta(): number {
    return this.ticketsService.prioridadAlta;
  }
}
