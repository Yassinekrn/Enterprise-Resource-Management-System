
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
/* ---------------- */
@Component({
  selector: 'app-gestion-employee',
  templateUrl: './gestion-employee.component.html',
  styleUrls: ['./gestion-employee.component.css']
})
export class GestionEmployeeComponent {
  displayedColumns: string[] = ['ID', 'Name', 'Prename', 'CIN', 'Email', 'Phone_Number', 'Home_Address', 'Emp_Function','Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api : ApiService) {}
  

  ngOnInit(): void {
    this.getAllEmployees();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%',
      
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllEmployees();
      }
    });
  }

  getAllEmployees() {
    this.api.getEmployee()
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
  editEmployee(row: any) {
    this.dialog.open(DialogComponent,{
      width:'30%' ,
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllEmployees();
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

  

  deleteEmployee(id:number) {
    this.api.deleteEmployee(id)
    .subscribe({
      next:(res)=>{
        /* alert("deleted success"); */
        this.getAllEmployees();
      },
      error:()=>{
        alert("deletion problem :(");
      }
    })
  }
}
