import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: any[] = [];
  employee: any;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
    ) { }

  ngOnInit() {
    this.loadEmployeeList();
  }

  loadEmployeeList(){
    console.log(this.employees);
    this.employeeService.getEmployees()
      .subscribe(response => {
        this.employees = response.body
      });
  }

  delete(id: number){
    console.log(id);
    if(confirm("Are you sure?")){
      this.employeeService.delete(id)
        .subscribe(x => {
          console.log(x),
          this.router.navigateByUrl('/employees', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/employee']));
        });
    }
  }

}
