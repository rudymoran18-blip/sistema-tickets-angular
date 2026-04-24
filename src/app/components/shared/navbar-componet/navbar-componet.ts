import { Component } from '@angular/core';
import { TicketsService } from '../../../services/tickest.service';
import { Ticket } from '../../../interfaces/ticket.interface';
import { MisTickestService } from '../../../services/mistickest.service';
@Component({
  selector: 'app-navbar-componet',
  standalone: false,
  templateUrl: './navbar-componet.html',
  styleUrl: './navbar-componet.css',
})
export class NavbarComponet {



  constructor(private misTicketsService: MisTickestService) {
  }

  // Getter: siempre devuelve la cantidad actual
  get cantidadTickets(): number {
    return this.misTicketsService.obtenerCantidadTickets();
  }

  // (opcional) si quieres mostrar la lista en el dropdown
  get misTickets(): Ticket[] {
    return this.misTicketsService.obtenerTickets();
  }
}

