import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieCard } from 'src/app/shared/models/moviecard';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // HttpClient class from Angular to coomunicate with API
  // Ctrl+P for Project file names searching
  // Ctr+Shift+P VS Code searching
  // Alt+Shift+f => Formatting your code
  // Ctr+F search for text inside a file
  // Ctrl+Shift+f for searching text throughout the project

  constructor(private http: HttpClient) { }

  getTopRevenueMovies(): Observable<MovieCard[]> {
    //  call the API to get the json data

    return this.http.get(`${environment.apiUrl}${'Movies/toprevenue'}`)
      .pipe(map(resp => resp as MovieCard[]))

  }

}
