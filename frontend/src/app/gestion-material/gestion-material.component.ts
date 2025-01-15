
/* ---------------- */
import { Component, OnInit, ViewChild } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';
//table imports
import {AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogMatComponent } from '../dialog-mat/dialog-mat.component';
//import { changed } from '../dialog-asgn/dialog-asgn.component'
/* ---------------- */

@Component({
  selector: 'app-gestion-material',
  templateUrl: './gestion-material.component.html',
  styleUrls: ['./gestion-material.component.css']
})
export class GestionMaterialComponent {
  displayedColumns: string[] = ['ID', 'Name', 'Price', 'Purchase_Date', 'Brand', 'Reference', 'IsTaken','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api : ApiService) {}
  

  ngOnInit(): void {
    this.getAllMaterials();
  }

  openDialogMat() {
    this.dialog.open(DialogMatComponent, {
      width:'30%',
      
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllMaterials();
      }
    });
  }

  getAllMaterials() {
    this.api.getMaterial()
    .subscribe({
      next:(res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; //from the viewchild
        
      },
      error:(err) => {
        alert("Error while fetching the Records")
      }
    })
  }
  editMaterial(row: any) {
    this.dialog.open(DialogMatComponent,{
      width:'30%' ,
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllMaterials();
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

  

  deleteMaterial(id:number) {
    this.api.deleteMaterial(id)
    .subscribe({
      next:(res)=>{
        /* alert("deleted success"); */
        this.getAllMaterials();
      },
      error:()=>{
        alert("deletion problem :(");
      }
    })
  }

  
}
