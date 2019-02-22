import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  @ViewChild('f') formValues;

  employee: any = {
    id:0,
  };

  id:any;
  name: any;
  fatherName: any;
  address:any;
  city: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) 
  {
    route.params.subscribe(
      p => {
        this.employee.id = + p['id'];
      },
      err => {
        if (err.status == 404)
          this.router.navigate(['/employee']);
      });
  }

  ngOnInit() {
    if(this.employee.id)
      this.employeeService.getEmployee(this.employee.id)
      .subscribe(
        response => {
          if (response.ok) {
            this.employee = response.body;
          }
        }
      );
  }


  submit(){
    //debugger;
    this.employee.id = this.employee.id || 0;
    console.log(this.employee);
    if(this.employee.id != 0)
    {
      this.employeeService.update(this.employee)
        .subscribe( x => 
          {
            console.log(x),
            this.router.navigate(['/employee'])
          });
    }
    else{
      this.employeeService.create(this.employee)
        .subscribe( x => 
          {
            console.log(x)
            //this.router.navigate(['/employee'])
            this.router.navigateByUrl('/employees', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/employee']));
          });
      this.formValues.resetForm();
    }
  }

  delete(){
    if(confirm("Are you sure?")){
      this.employeeService.delete(this.employee.id)
        .subscribe(x => {
          console.log(x),
          this.router.navigate(['/employee'])
        });
    }
  }


}
