import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  employee:any={
    ename:'',
    email:'',
    password:'',
    gender:'',
    isMarried:false
  };
  constructor(private empservice:EmpService,public router:Router){

  }
  addEmployee(){
    console.log(this.employee);
    this.empservice.createEmployee(this.employee).subscribe((data:{})=>this.router.navigate(['/emplist']));
  }
  submitted=false;
  
  onSubmit(){
    this.submitted=true;
    alert("Employee datas are validated successfully");
  }
}
