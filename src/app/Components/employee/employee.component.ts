import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import { Dboperation } from 'src/app/Services/enum';


import { EmployeeObj } from './EmployeeObj';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 


  employee:EmployeeObj[]=[];
  employ: EmployeeObj | undefined;
  buttonText:string ='Save';
  dboper:Dboperation;

  constructor( private fb: FormBuilder,private service:DataService ) {
   
   }
    
   form !:FormGroup;
   ngOnInit(): void {

   this.form= this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    technology:['',Validators.required],
    desination:['',Validators.required],
    skills:['',Validators.required],
    coreExperties:['',Validators.required],
    certification:['',Validators.required],
    compony:['',Validators.required],
    aboutYourself:['',Validators.required],
    id:[null],
  })
   
  this.getUser();
    
  }
   
  onCancel(){
    this.form.reset();
    this.buttonText='Save';
    this.dboper=Dboperation.create;

  }

  onSubmit(){
    

    switch(this.dboper){
      
      case Dboperation.create:
       this.service.addEmployee(this.form.value).subscribe(data =>{
        console.log(this.form.value);
        this.getUser();
        this.onCancel();
       })      
        break;

      case Dboperation.update:
         this.service.updateEmployee(this.form.value).subscribe(data =>{
          this.onCancel();
          this.dboper=Dboperation.create;
          this.getUser();
          this.buttonText="Save";
         })
     }
     
  } 
  
  getUser(){
    this.service.getEmployees().subscribe(data=>{
      this.employee=data;
    });
  }

  onEdit(empId:number){
    this.buttonText = "Update";
    this.dboper=Dboperation.update;
    this.employ=this.employee.find( (e:EmployeeObj)=>e.id==empId);
    this.form.patchValue(this.employ)
    

  }
  
  onUpdate(){
    this.service.updateEmployee(this.employ).subscribe(data=>{
      this.getUser();
      }
      );
  }

  onDelete(id:any){
    this.service.deleteEmployee(id).subscribe(data=>{
         this.getUser();
     });
  }
} 

