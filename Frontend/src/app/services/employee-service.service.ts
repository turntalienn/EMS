import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl = "http://localhost:8080/api/v1/employees";
  
  constructor(private httpclient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpclient.post(`${this.baseUrl}`, employee);   
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<object>{
    return this.httpclient.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<object> {
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
}
