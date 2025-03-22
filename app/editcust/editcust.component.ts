import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editcust',
  templateUrl: './editcust.component.html',
  styleUrls: ['./editcust.component.css']
})
export class EditcustComponent {
  customer:any={
    name:'',
   
  };
  constructor(private customerservice:CustomerService,public router:Router,private aroute:ActivatedRoute){

  }
  public id:any=this.aroute.snapshot.params['id'];
  ngOnInit(){
    this.customer=this.customerservice.getCustomerById(this.id).subscribe((cust)=>(this.customer=cust));
  }
  updateCustomer(){
    console.log(this.customer);
    this.customerservice.updateCustomer(this.customer).subscribe((data:{})=>this.router.navigate(['/listallcust']));
  }
  submitted=false;
  
  onSubmit(){
    this.submitted=true;
    alert("Customer datas are validated successfully");
  }
}
