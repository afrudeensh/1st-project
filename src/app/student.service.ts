import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Student } from './Student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

 

  constructor(private http:HttpClient) {}



  url="  http://localhost:3000/details"

  createStudents(student:any){
    return this.http.post(this.url,student)
  }

  getAllStudents(){
    return this.http.get(this.url)
  }
  deleteStudents(student:any){
    return this.http.delete(this.url + student.id)

  }
  updateStudents(students:any){
    return this.http.put(this.url,students.id,students)
  }


  
}
