import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { TicketsComponent } from './components/tickets-component/tickets-component';
import { MisTicketsComponent } from './components/mis-ticekts-component/mis-ticekts-component';import { DetalleTicketComponent } from './components/detalle-ticket-component/detalle-ticket-component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'mis-tickets', component: MisTicketsComponent },
  { path: 'detalle/:id', component: DetalleTicketComponent },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
