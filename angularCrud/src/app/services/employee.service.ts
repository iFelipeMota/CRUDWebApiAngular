import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:5000/api/';
  nomeRecurso = 'employees';

  create(employee:any){
    return this.http.post(this.apiUrl+this.nomeRecurso, employee, {
      observe: 'response'
    });
  }
  getEmployee(id:any){
    return this.http.get<any>(`${this.apiUrl}${this.nomeRecurso}/${id}`, {
      observe: 'response'
    })
  }
  update(employee: any){
    return this.http.put('/api/employees/' + employee.id, employee)
  }
  delete(id: number){
    return this.http.delete('/api/employees/' + id)
  }
  getEmployees()
  {
    return this.http.get<any[]>(this.apiUrl+this.nomeRecurso, {
      observe: 'response'
    });
  }
}