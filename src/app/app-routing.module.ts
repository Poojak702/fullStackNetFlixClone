import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {path:'' ,component:AppComponent},
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie',component:MovieComponent},
  {path:'details/:id',component:MovieDetailsComponent},
  {path : 'login',component:LoginComponent},
  {path : 'signup' , component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
