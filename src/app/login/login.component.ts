import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { AuthService } from '../services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  constructor(private authService: SocialAuthService, private auth:AuthService, private dialogRef:MatDialogRef<LoginComponent>) { }
  ngOnInit() {
    this.authService.authState.subscribe(user => {
    this.socialUser = user;
    if(user) {
      this.auth.signIn(this.socialUser).subscribe((response: any) => {
        this.auth.setToken('access_token', response.access_token)
        this.auth.subject.next(response.access_token)
        this.dialogRef.close()
      });
    }
  });
}
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
}
