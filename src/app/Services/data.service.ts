import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeObj } from '../Components/employee/EmployeeObj';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http :HttpClient) { }
  
  //url:string = 'http://localhost:3000/posts';
  url:string = 'http://localhost:8080/api/employee';
  
  // add employee
  addEmployee(empObj: any):Observable<any>{
      return this.http.post(`${this.url}`, empObj);
  }
   // get employee
  getEmployees():Observable<EmployeeObj[]>{
     return this.http.get<EmployeeObj[]>(`${this.url}`);
  }
   // delete employee
  deleteEmployee(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  //update employee
  updateEmployee(emp: any){
     return this.http.put(`${this.url}/${emp.id}`,emp)
  }
}
