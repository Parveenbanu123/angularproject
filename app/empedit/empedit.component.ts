import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent {
employee:any={
    ename:'',
    email:'',
    password:'',
    gender:'',
    isMarried:false
  };
  constructor(private empservice:EmpService,public router:Router,private aroute:ActivatedRoute){

  }
  public eid:any=this.aroute.snapshot.params['eid'];
  ngOnInit(){
    this.employee=this.empservice.getEmployeeById(this.eid).subscribe((emp)=>(this.employee=emp));
  }
  updateEmployee(){
    console.log(this.employee);
    this.empservice.updateEmployee(this.employee).subscribe((data:{})=>this.router.navigate(['/emplist']));
  }
  submitted=false;
  
  onSubmit(){
    this.submitted=true;
    alert("Employee datas are validated successfully");
  }
}
