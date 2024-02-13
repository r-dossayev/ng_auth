import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {IndexComponent} from './components/index/index.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {ProfileComponent} from './components/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {BookComponent} from './components/book/book.component';


import {StoreModule} from '@ngrx/store';
import {UserReducer} from './store/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    ProfileComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ users: UserReducer }),
  ],

  exports: [
    StoreModule,FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
