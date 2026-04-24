import { Component } from '@angular/core';
import { MisTickestService } from '../../services/mistickest.service';
import { Ticket } from '../../interfaces/ticket.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-ticekts-component',
  standalone: false,
  templateUrl: './mis-ticekts-component.html',
  styleUrl: './mis-ticekts-component.css',
})
export class MisTicketsComponent  {

  tickets: Ticket[] = [];

  constructor(
    private misTicket: MisTickestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tickets = this.misTicket.obtenerTickets();
  }

  verTicket(id: number): void {
    this.router.navigate(['detalle', id]);
  }
}
