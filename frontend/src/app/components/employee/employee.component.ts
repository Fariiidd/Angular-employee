import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { config } from 'process';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeesService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeesService.getEmployees().subscribe(
      (res) => {
        this.employeesService.employee = res
      },
      err => console.log(err)
    );  
  }

  addEmployee(form: NgForm){
    if(form.value._id){
      this.employeesService.updateEmployee(form.value).subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    }
    this.employeesService.createEmploye(form.value).subscribe(
      (res) => {
        this.getEmployees();
        form.reset();
      },
      err => console.log(err)
    )
  }

  deleteEmployee(_id: string){
    const res = confirm("Are you sure you want to delete it?")
    if(res === true){
      this.employeesService.deleteEmployee(_id).subscribe(
        res => {
          this.getEmployees();
        }
      )
    }
  }

  editEmployee(employee: Employee){
    this.employeesService.selectedEmployee = employee;
  }

  resetForm(form: NgForm){
    form.reset();
  }
}
