import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from '../app/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'detail', component: MovieDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
  [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
