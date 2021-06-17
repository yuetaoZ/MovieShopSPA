import { Component, Input, OnInit, Output } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/shared/models/moviedetails';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  id!: number;
  movieDetails!: MovieDetails;

  ngOnInit(): void {
    // read the id from the Route
    console.log('inside Movie details page');
    this.route.paramMap.subscribe(
      params => {
        this.id = Number(params.get('id'));
        console.log('Movie Id:' + this.id);
        // call the MovieService that will call the Movie Details API.
        this.getMovieDetails()
      }
    );
  }

  private getMovieDetails() {
      this.movieService.getMovieDetailsById(this.id)
        .subscribe(m => {
          this.movieDetails = m;
    })
  }

}
