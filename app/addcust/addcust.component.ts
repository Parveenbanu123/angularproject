import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcust',
  templateUrl: './addcust.component.html',
  styleUrls: ['./addcust.component.css']
})
export class AddcustComponent {
  customer:any={
    ename:''
    
  };
  constructor(private custservice:CustomerService,public router:Router){

  }
  addCustomer(){
    console.log(this.customer);
    this.custservice.createCustomer(this.customer).subscribe((data:{})=>this.router.navigate(['/listallcust']));
  }
  submitted=false;
  
  onSubmit(){
    this.submitted=true;
    alert("Customer datas are validated successfully");
  }
}
