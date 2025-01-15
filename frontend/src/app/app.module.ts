import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Importing of Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionEmployeeComponent } from './gestion-employee/gestion-employee.component';
import { GestionMaterialComponent } from './gestion-material/gestion-material.component';
import { GestionAssignementsComponent } from './gestion-assignements/gestion-assignements.component';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
/* Imports for the toolbar */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

/* Imports for Dialog pop up to enter data */
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Imports for table */
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';
import { DialogMatComponent } from './dialog-mat/dialog-mat.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogAsgnComponent } from './dialog-asgn/dialog-asgn.component';
import {MatSelectModule} from '@angular/material/select';

/* Imports for Toastr Notif */
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    GestionEmployeeComponent,
    GestionMaterialComponent,
    GestionAssignementsComponent,
    LoginComponent,
    DialogComponent,
    DialogMatComponent,
    DialogAsgnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule, /* 34 */
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    CommonModule,
    MatSelectModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
