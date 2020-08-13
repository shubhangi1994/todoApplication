import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListToDosComponent } from './list-to-dos/list-to-dos.component';


const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'welcome/:name', component: WelcomeComponent},
{path: 'list', component: ListToDosComponent},
{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
