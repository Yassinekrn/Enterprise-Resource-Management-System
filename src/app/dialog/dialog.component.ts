import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { of } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})



export class DialogComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  actionBtn: string ="Save";
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  employeeForm !: FormGroup; // obj for our form inputs 
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogComponent>) {} 

  ngOnInit(): void { // Init of form 
    this.employeeForm = this.formBuilder.group({
      ID : ['', Validators.required],
      Name : ['', Validators.required],
      Prename : ['', Validators.required],
      CIN : ['', Validators.required],
      Email : ['', Validators.required],
      Phone_Number : ['', Validators.required],
      Home_Address : ['', Validators.required],
      Emp_Function : ['', Validators.required],
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.employeeForm.controls['ID'].setValue(this.editData.id);
      this.employeeForm.controls['Name'].setValue(this.editData.name);
      this.employeeForm.controls['Prename'].setValue(this.editData.prename);
      this.employeeForm.controls['CIN'].setValue(this.editData.cin);
      this.employeeForm.controls['Email'].setValue(this.editData.email);
      this.employeeForm.controls['Phone_Number'].setValue(this.editData.phone_Number);
      this.employeeForm.controls['Home_Address'].setValue(this.editData.home_Address);
      this.employeeForm.controls['Emp_Function'].setValue(this.editData.emp_Function);
    }
  }

  addEmployee() {
    if (!this.editData) {
      if(this.employeeForm.valid) {
        this.api.postEmployee(this.employeeForm.value)
        .subscribe({
          next:(res)=> {
            this.employeeForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert('failed :(')
          }
        })
      }
    } else 
    {
      this.updateEmployee()
    };
    
  }
  updateEmployee(){
    this.api.putEmployee(this.employeeForm.value, this.editData.id)
    .subscribe({
      next:(res) =>{
        //alert("Prodcut updated");
        this.employeeForm.reset();
        this.dialogRef.close('update');
      },error:()=> {
        alert("error while update :(");
      }
    }
    )
}
  
}