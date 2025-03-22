import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpnamelistComponent } from './empnamelist/empnamelist.component';
import { EmpService } from './emp.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddempComponent } from './addemp/addemp.component';
import { HomeComponent } from './home/home.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FormsModule } from '@angular/forms';
import { EmpeditComponent } from './empedit/empedit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpnamelistComponent,
    AboutusComponent,
    ContactusComponent,
    AddempComponent,
    HomeComponent,
    EmplistComponent,
    EmpeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
