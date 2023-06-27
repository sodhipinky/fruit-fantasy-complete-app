import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  @Input()
  loggedIn: boolean = false

  vendorLogout() {
    this.authenticationService.logout()
    this.loggedIn = this.authenticationService.isLoggedIn
    this.router.navigate(['/login'])
  }
}
