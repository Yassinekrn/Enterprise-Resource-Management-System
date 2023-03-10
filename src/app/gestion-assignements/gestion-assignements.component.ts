/* ---------------- */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
//table imports
import {AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogAsgnComponent } from '../dialog-asgn/dialog-asgn.component';
/* ---------------- */

@Component({
  selector: 'app-gestion-assignements',
  templateUrl: './gestion-assignements.component.html',
  styleUrls: ['./gestion-assignements.component.css']
})
export class GestionAssignementsComponent {
  displayedColumns: string[] = ['ID', 'ID_Employee', 'ID_Material', 'Start_Date', 'End_Date','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  MaterialChange: any;
  materials: any[] = [];

  constructor(public dialog: MatDialog, private api : ApiService,private toastr: ToastrService) {}
  

  ngOnInit(): void {
    this.getAllAssignements();
  }

  openDialogAsgn() {
    this.dialog.open(DialogAsgnComponent, {
      width:'30%',
      
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllAssignements();
      }
    });
  }

  getAllAssignements() {
    this.api.getAssign()
    .subscribe({
      next:(res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; //from the viewchild
      },
      error:(err) => {
        this.toastr.error('Error while fetching the Records.', 'Error');
        
      }
    })
  }
  editAssignement(row: any) {
    
    this.dialog.open(DialogAsgnComponent,{
      width:'30%' ,
      data: row,
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllAssignements();
        this.toastr.success('the asignment is modified in the database.', 'Update Successful');
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

  deleteAssignement(id:number,mat_id:number) {
    //---------------------
    this.api.getMaterial().subscribe((response: any[]) => {
      this.materials = response;
		  
      this.MaterialChange = this.materials.filter((material: { id: number; }) => material.id === mat_id);  
              
    //-----------------------------------------
              
              
              if (this.MaterialChange.length > 0) {
                let boody = {
                  id: this.MaterialChange[0].id,
                  name: this.MaterialChange[0].name,
                  price: this.MaterialChange[0].price,
                  purchase_Date: this.MaterialChange[0].purchase_Date,
                  brand: this.MaterialChange[0].brand,
                  reference: this.MaterialChange[0].reference,
                  isTaken: 0,
                };
                console.log(boody);
                
              this.api.putMaterial(boody, mat_id).subscribe({
                next:(res) =>{
                  this.toastr.success('Prodcut updated successfully!', 'Update Successful');
                  
                },error:()=> {
                  this.toastr.success('Error occured while updating..', 'Error While Updating')
                }
              }
              )
            }
    })
    //-----------------------
    this.api.deleteAssign(id)
    .subscribe({
      next:(res)=>{
        this.toastr.success('the asignment is removed from the database.', 'Delete Successfully');
        this.getAllAssignements();
      },
      error:()=>{
        this.toastr.success('the asignment is not removed from the database.', 'Removal Error');
      }
    })
  
  }
}
/* --------------- */




