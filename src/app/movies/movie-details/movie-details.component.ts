import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id!: number;
  ngOnInit(): void {
    // read the id from the Route
    console.log('inside Movie details page');
    this.route.paramMap.subscribe(
      params => {
        console.log(params);
        console.log(params.get('id'));
        this.id = Number(params.get('id'));
        console.log('Movie Id:' + this.id);
        // call the MovieService that will call the Movie Details API.
      }
    )

  }

}
