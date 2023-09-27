import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  volveralLogin() {
    // Utiliza el método navigate para redirigir al usuario a la ruta deseada
    this.router.navigate(['login']);
  }
}
