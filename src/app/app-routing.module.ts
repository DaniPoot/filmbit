import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './core/services/login/login.service';
import { LayoutComponent as DetailsComponent } from './modules/details/layout/layout.component';
import { LayoutComponent as HomeComponent } from './modules/home/layout/layout.component';
import { LayoutComponent as LoginComponent } from './modules/login/layout/layout.component';
import { LayoutComponent as RegisterComponent } from './modules/register/layout/layout.component';
import { LayoutComponent as FavoritesComponent } from './modules/favorites/layout/layout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [LoginService] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [], 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
