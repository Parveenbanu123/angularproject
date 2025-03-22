import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ListallcustComponent } from './listallcust/listallcust.component';
import { AddcustComponent } from './addcust/addcust.component';
import { NamelistComponent } from './namelist/namelist.component';
import { EditcustComponent } from './editcust/editcust.component';

const routes: Routes = [
  { path:"home" , component:HomeComponent},
  { path:"aboutus" , component:AboutusComponent},
  { path:"contactus" , component:ContactusComponent},
  { path:"listallcust" , component:ListallcustComponent},
  { path:"addcust" , component:AddcustComponent},
  { path:"namelist" , component:NamelistComponent},
  {path:"updatecust/:id",component:EditcustComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
