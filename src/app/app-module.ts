import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponet } from './components/shared/navbar-componet/navbar-componet';
import { HomeComponent } from './components/home-component/home-component';
import { TicketsComponent } from './components/tickets-component/tickets-component';
import { DetalleTicketComponent } from './components/detalle-ticket-component/detalle-ticket-component';
import { MisTicketsComponent } from './components/mis-ticekts-component/mis-ticekts-component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    NavbarComponet,
    HomeComponent,
    TicketsComponent,
    DetalleTicketComponent,
    MisTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
