import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./components/login/login.component";
import {IndexComponent} from "./components/index/index.component";
import {users} from "./data/users";
import {UserService} from "./services/user.service";
import {ProfileComponent} from "./components/profile/profile.component";

const service = new UserService();
const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: "full"},
  {path: 'home', component: IndexComponent},
  {path: 'login', component: LoginComponent,},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true}),

  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
