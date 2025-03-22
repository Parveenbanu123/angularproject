import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-namelist',
  templateUrl: './namelist.component.html',
  styleUrls: ['./namelist.component.css']
})
export class NamelistComponent {
  customer:any=[];
  constructor(private empservice:CustomerService){}

  ngOnInit(){
    this.customer=this.empservice.getAllCustomer().subscribe((emp)=>(this.customer=emp));
    console.log(this.customer);
  }
}
