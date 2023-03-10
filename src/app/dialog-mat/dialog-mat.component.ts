/* ----------------- */
import { Component, Inject, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { of } from 'rxjs';

@Component({
  selector: 'app-dialog-mat',
  templateUrl: './dialog-mat.component.html',
  styleUrls: ['./dialog-mat.component.css']
})
export class DialogMatComponent {
  
  actionBtn: string ="Save";

  

  materialForm !: FormGroup; // obj for our form inputs 
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogMatComponent>) {} 

  ngOnInit(): void { // Init of form 
    this.materialForm = this.formBuilder.group({
      ID : ['', [Validators.required,Validators.pattern('[0-9]+$')]],
      Name : ['', [Validators.required,Validators.pattern('[a-zA-Z]+$')]],
      Price : ['', [Validators.required,Validators.pattern('[0-9]+$')]],
      Purchase_Date : ['', Validators.required],
      Brand : ['', Validators.required],
      Reference : ['', Validators.required],
      IsTaken : ['', [Validators.required,Validators.maxLength(1),Validators.max(0),Validators.min(0),Validators.pattern('[0,1]+$')]],
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.materialForm.controls['ID'].setValue(this.editData.id);
      this.materialForm.controls['Name'].setValue(this.editData.name);
      this.materialForm.controls['Price'].setValue(this.editData.price);
      this.materialForm.controls['Purchase_Date'].setValue(this.editData.purchase_Date);
      this.materialForm.controls['Brand'].setValue(this.editData.brand);
      this.materialForm.controls['Reference'].setValue(this.editData.reference);
      this.materialForm.controls['IsTaken'].setValue(0);
    }
  }

  

  addMaterial() {
    if (!this.editData) {
      if(this.materialForm.valid) {
        this.api.postMaterial(this.materialForm.value)
        .subscribe({
          next:(res)=> {
            this.materialForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert('failed :(')
          }
        })
      }
    } else 
    {
      
      this.updateMaterial()
    };
    
  }
  updateMaterial(){
    this.api.putMaterial(this.materialForm.value, this.editData.id)
    .subscribe({
      next:(res) =>{
        //alert("Prodcut updated");
        this.materialForm.reset();
        this.dialogRef.close('update');
      },error:()=> {
        alert("error while update :(");
      }
    }
    )
}
}
