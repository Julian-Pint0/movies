import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MainMovieComponent } from './components/main-movie/main-movie.component';




@NgModule({
  declarations: [
    HomeComponent,
    MainMovieComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})

export class HomeModule { }
