import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Components/employee/employee.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { EmployeeService } from './services/employee.service';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'employee/new', component: EmployeeComponent },
      { path: 'employee/:id', component: EmployeeComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: '**', redirectTo: 'home' }
  ])
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
