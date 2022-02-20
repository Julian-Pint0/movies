import { RespMovies } from './../../../core/models/respMovies';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor( private http: HttpClient ) { }
  
  getPopularMovies():Observable<RespMovies>{
    return this.http.get<RespMovies>(`${environment.api_url}/movie/popular`);
  }

}
