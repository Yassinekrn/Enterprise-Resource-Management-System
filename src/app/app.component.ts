import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( private router: Router) {};

  title = 'gestionAdmin';

  goToEmployee() {
    this.router.navigate(["/gestion-employee"]);
  }
  
  goToMaterial() {
    this.router.navigate(["/gestion-material"])
  }
  
  goToAssignements() {
    this.router.navigate(["/gestion-assignements"])
  }
}
