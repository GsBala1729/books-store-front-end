import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookManagerDataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private bookMgrService:BookManagerDataService) { }
  username: string = '';
  password: string = '';

  navigateToOtherPage() {
    this.bookMgrService.login(this.username,this.password).subscribe((response) => {
      console.log(response);
       // Replace '/other-page' with the actual route you want to navigate to
    });
    this.router.navigate(['/dashboard']);
  }

}
