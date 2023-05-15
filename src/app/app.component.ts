import { Component,OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  students:any=[];
  isEdit = false;
  myForm={  //myForm is used for form template and also as class object
    Studentname:"",
    DOB:"", 
    Gender:"",
    Dept:""

  }

  constructor(private studentservice:StudentService) {
    this.studentservice.getAllStudents().subscribe((data)=>
    {this.students = data})
  }

  addStudent(formObj:any){
    console.log(formObj)
    this.studentservice.createStudents(formObj).subscribe((data:any)=>{
      this.getLatestStudent()
   
      console.log("The new student is added!")
    })
   
  }

  ngOnInit(): void {
      this.getLatestStudent()
  }

  getLatestStudent(){
    this.studentservice.getAllStudents().subscribe((Response)=>{
      this.students = Response
    })
  }

  deleteStudent(students:any){
    this.students.splice(students-1,1)
    this.studentservice.deleteStudents(this.students).subscribe((Response)=>{
      this.getLatestStudent()
   
      
    })
  }

  editStudent(students:any){
    this.isEdit = true
    this.myForm = students

  }

  updateStudent(myForm:any){
    this.isEdit =!this.isEdit
    this.studentservice.updateStudents(myForm).subscribe(()=>{
      this.getLatestStudent()
    })
  }

  


}

