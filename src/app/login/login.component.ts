import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  vendorCode: string = '';

  @Output()
  loggedInEvent: EventEmitter<boolean> = new EventEmitter<boolean>()

  validateVendor() {
    if (this.vendorCode === 'VE1025') {
      this.authenticationService.login();
      this.loggedInEvent.emit(true)
      this.router.navigate(['/home'])
    }
  }
}
