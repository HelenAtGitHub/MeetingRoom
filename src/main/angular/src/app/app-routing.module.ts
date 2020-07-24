import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './administrator/users.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'administrator',
    component: AppComponent,
    children: [
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
