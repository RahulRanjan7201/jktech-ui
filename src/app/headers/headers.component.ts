import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  isLoggedIn:boolean = false;
  constructor(public dialog: MatDialog, private auth : AuthService, private router: Router) {}
  ngOnInit() {
    this.auth.subject.subscribe({
      next:(v) =>{
         if(v) this.isLoggedIn = true;
      }
    })
  }
  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('access_token')
    this.auth.subject.next(null)
    this.router.navigate(['/']);
  }
  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
