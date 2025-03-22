import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmpnamelistComponent } from './empnamelist/empnamelist.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';
import { EmpeditComponent } from './empedit/empedit.component';

const routes: Routes = [
  { path:"home" , component:HomeComponent},
  { path:"aboutus" , component:AboutusComponent},
  { path:"contactus" , component:ContactusComponent},
  { path:"emplist" , component:EmplistComponent},
  { path:"addemp" , component:AddempComponent},
  { path:"namelist" , component:EmpnamelistComponent},
  {path:"updateemp/:eid",component:EmpeditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
