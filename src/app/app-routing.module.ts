import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdultMovieComponent } from './adult-movie/adult-movie.component';
import { AddComponent } from './add/add.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'adult', component: AdultMovieComponent },
  { path: 'menu', component: MenuComponent, children: [
    {path: '', redirectTo: '/listMovie', pathMatch: 'full'},
    {
      path: 'listMovie', component: MoviesComponent, children: [
        { path: 'detail/:id', component: MovieDetailComponent }
      ]
    },
    { path: 'add', component: AddComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
