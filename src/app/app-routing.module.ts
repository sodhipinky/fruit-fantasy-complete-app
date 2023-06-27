import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitManagerComponent } from './fruit-manager/fruit-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: FruitManagerComponent
  },
  {
    path: 'fruit-detail/:id',
    component: FruitDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
