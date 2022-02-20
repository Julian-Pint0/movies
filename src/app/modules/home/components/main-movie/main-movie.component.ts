import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service'; 
import { DataMovie } from 'src/app/core/models/dataMovies';
import { first, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-movie',
  templateUrl: './main-movie.component.html',
  styleUrls: ['./main-movie.component.css']
})
export class MainMovieComponent implements OnInit {

  url_img: string = environment.url_img;
  popularMovie!: DataMovie;


  constructor( private homeService: HomeService) { 

  }


  ngOnInit(): void {

    this.homeService.getPopularMovies()
      .pipe( 
        pluck( 'results' ),
        map( element => element[0] )
      )
      .subscribe( ( resp: DataMovie  ) => {
        this.popularMovie = resp;
        console.log(`RESP: `,resp.backdrop_path);
      } );
      
  }

}
