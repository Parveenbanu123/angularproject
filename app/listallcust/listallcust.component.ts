import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from 'src/Customer';

@Component({
  selector: 'app-listallcust',
  templateUrl: './listallcust.component.html',
  styleUrls: ['./listallcust.component.css']
})
export class ListallcustComponent {
  customer:any=[];
  selectedId:number=0;
  constructor(private empservice:CustomerService,private router:Router){}

  ngOnInit(){
    this.customer=this.empservice.getAllCustomer().subscribe((emp)=>(this.customer=emp));
    console.log(this.customer);
  }
  onDelete(cust:Customer){
    this.selectedId=cust.id;
    console.log(cust);
    this.empservice.deleteCustomer(this.selectedId).subscribe((data:{})=>this.router.navigate(['/listallcust']));
  }
}
