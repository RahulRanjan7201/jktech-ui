import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersComponent } from './headers/headers.component';
import {MaterialModule} from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import {
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadersComponent,
    DashboardComponent,
    PostsComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('762160288834233')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
