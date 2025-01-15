/* ----------------- */
import { Component, Inject, Input, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { of } from 'rxjs';


@Component({
  selector: 'app-dialog-asgn',
  templateUrl: './dialog-asgn.component.html',
  styleUrls: ['./dialog-asgn.component.css']
})
export class DialogAsgnComponent {
  actionBtn: string ="Save";
  
  
  

  materialForm !: FormGroup; // obj for our form inputs 
  filteredMaterials:any=[];
  materials: any=[];
  employees: any=[];
  filteredEmployees: any=[];
  MaterialChange: any;
  
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogAsgnComponent>) {} 

  ngOnInit(): void { // Init of form 
    this.filterByStatus()
    this.materialForm = this.formBuilder.group({
      ID : ['', [Validators.required,Validators.pattern('[0-9]+$')]],
      ID_Employee : ['', [Validators.required]],
      ID_Material : ['', [Validators.required]],
      Start_Date : ['', Validators.required],
      End_Date : ['', Validators.required],
      
      });
      

    if(this.editData){
      this.actionBtn = "Update";
      this.materialForm.controls['ID'].setValue(this.editData.id);
      this.materialForm.controls['ID_Employee'].setValue(this.editData.iD_Employee);
      this.materialForm.controls['ID_Material'].setValue(this.editData.iD_Material);
      this.materialForm.controls['Start_Date'].setValue(this.editData.start_Date);
      this.materialForm.controls['End_Date'].setValue(this.editData.end_Date);
      }
  }

  

  addAssignement() {
    if (!this.editData) {
      if(this.materialForm.valid) {
        
        //this.api.putMaterial(this.materialForm.value.isTaken = 0, this.materialForm.value.ID_Material)
        this.api.postAssign(this.materialForm.value)
        .subscribe({
          next:(res)=> {
            const selectedValue = this.materialForm?.get('ID_Material')?.value;
            console.log(selectedValue);
            //------------------------------------------------
            this.api.getMaterial().subscribe((response: any[]) => {
              this.materials = response;
              this.MaterialChange = this.materials.filter((material: { id: number; }) => material.id === Number(selectedValue));
              // 2 is probably changed with "this.materialForm.controls['ID_Employee']"
              console.log("If this is 2 u good")
              //-----------------------------------------
              
              console.log(selectedValue);
              if (this.MaterialChange.length > 0) {
                let boody = {
                  id: this.MaterialChange[0].id,
                  name: this.MaterialChange[0].name,
                  price: this.MaterialChange[0].price,
                  purchase_Date: this.MaterialChange[0].purchase_Date,
                  brand: this.MaterialChange[0].brand,
                  reference: this.MaterialChange[0].reference,
                  isTaken: 1,
                };
                console.log(boody);
                
              this.api.putMaterial(boody, Number(selectedValue)).subscribe({
                next:(res) =>{
                  alert("Prodcut updated");
                  
                },error:()=> {
                  alert("error while update :(");
                }
              }
              )
            }
          })
            this.materialForm.reset();
            this.dialogRef.close('save');
            //------------------------------------------------
          },
          error:()=>{
            alert('Material not found')
          }
        })
      }
    } else 
    {
      
      this.updateAssignement()
      
    };
    
  }
  updateAssignement(){
    this.api.putAssign(this.materialForm.value, this.editData.id)
    //this.api.putMaterial(this.materialForm.value.isTaken = 1, this.editData.id)
    
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

  filterByStatus() {
    this.api.getMaterial().subscribe((response:any []) => {
      this.materials = response;
      this.filteredMaterials = this.materials.filter((material: { isTaken: number; }) => material.isTaken === 0);
       //modify me later up above
     // this.filteredMaterials = this.materials.filter(material => material.IsTaken === 0);
    });
    this.api.getEmployee().subscribe((res:any []) => {
      this.employees = res;
      this.filteredEmployees = this.employees;
      
     // this.filteredMaterials = this.materials.filter(material => material.IsTaken === 0);
    });
  }

 
}

/* ----------------- */


