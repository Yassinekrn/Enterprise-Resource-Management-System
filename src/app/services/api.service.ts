import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmployee(data: any) {
    return this.http.post<any>("https://localhost:7058/api/Employee", data)
  }
  getEmployee() {
    return this.http.get<any>("https://localhost:7058/api/Employee")
  }

  getMaterialWithId(id: number) {
    return this.http.get<any>("https://localhost:7058/api/Material/"+id)
  }

  putEmployee(data: any, id: number) {
    return this.http.put<any>("https://localhost:7058/api/Employee/"+id , data)
    
  }
  deleteEmployee(id: number) {
    return this.http.delete<any>("https://localhost:7058/api/Employee/"+id)
  }
  /* Material API Services */
  postMaterial(data: any) {
    return this.http.post<any>("https://localhost:7058/api/Material", data)
  }
  getMaterial() {
    return this.http.get<any>("https://localhost:7058/api/Material")
  }
  putMaterial(data: any, id: number) {
    return this.http.put<any>("https://localhost:7058/api/Material/"+id , data)
    
  }
  deleteMaterial(id: number) {
    return this.http.delete<any>("https://localhost:7058/api/Material/"+id)
  }
  /* Assignements API Services */
  postAssign(data: any) {
    return this.http.post<any>("https://localhost:7058/api/Assign", data)
  }
  getAssign() {
    return this.http.get<any>("https://localhost:7058/api/Assign")
  }
  putAssign(data: any, id: number) {
    return this.http.put<any>("https://localhost:7058/api/Assign/"+id , data)
    
  }
  deleteAssign(id: number) {
    return this.http.delete<any>("https://localhost:7058/api/Assign/"+id)
  }
}
