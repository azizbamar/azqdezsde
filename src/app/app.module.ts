import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { HoteltnComponent } from './hoteltn/hoteltn.component';
import { VoyageOrganiseComponent } from './voyage-organise/voyage-organise.component';
import { CroisiereComponent } from './croisiere/croisiere.component';
import { OmraComponent } from './omra/omra.component';
import { GestionAgenceComponent } from './gestion-agence/gestion-agence.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    HoteltnComponent,
    VoyageOrganiseComponent,
    CroisiereComponent,
    OmraComponent,
    GestionAgenceComponent,
    PageAdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
