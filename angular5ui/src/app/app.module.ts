import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard as AuthGuard } from './services/auth.guard.service';
import { DatabaseService } from './services/database.service';
import { DictionaryService } from './services/dictionary.service';
import { AuthService as AuthServ } from './services/auth.service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,AuthServ, DatabaseService, DictionaryService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }