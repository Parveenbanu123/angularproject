import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ListallcustComponent } from './listallcust/listallcust.component';
import { NamelistComponent } from './namelist/namelist.component';
import { AddcustComponent } from './addcust/addcust.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Routes } from '@angular/router';
import { EditcustComponent } from './editcust/editcust.component';
import { CustomerService } from './customer.service';


const routes: Routes = [
  { path:"home" , component:HomeComponent},
  { path:"aboutus" , component:AboutusComponent},
  { path:"contactus" , component:ContactusComponent},
  { path:"listallcust" , component:ListallcustComponent},
  { path:"addcust" , component:AddcustComponent},
  { path:"namelist" , component:NamelistComponent},
  {path:"updatecust/:eid",component:EditcustComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    ListallcustComponent,
    NamelistComponent,
    AddcustComponent,
    ContactusComponent,
    EditcustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
