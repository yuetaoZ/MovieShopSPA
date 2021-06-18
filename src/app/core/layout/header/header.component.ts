import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth!: boolean;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.authService.isAuthenticated.subscribe(auth => {
      this.isAuth = auth;
      console.log('Auth Status:' + this.isAuth);
    });
  }

}
