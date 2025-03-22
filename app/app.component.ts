import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproj';
  name="parveen";
  //myid=123;
  //isDisabled=false;
  successclass="success";
  hasError=true;
  msgclass={
    success:!this.hasError,
    error:this.hasError,
  };
  mystyle='blue';
  dstyle={
    color:"brown",
    fontStyle:'italic'
  };

  sayByeBye(){
    console.log("Bye for today...");
  }
  displayName=false;
  color='blue';
  colors=['red','blue','brown','green','purple'];
  date=new Date();
  emp={
    "eno":222,
    "ename":"Shiva",
    "dob":"2021-05-14",
  };
}
