import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-finder',
  templateUrl: './film-finder.component.html',
  styleUrls: ['./film-finder.component.css'],
})
export class FilmFinderComponent {
  constructor(public http: HttpClient) {}

  searchText = '';
  title = undefined;
  year = '';
  director = '';
  poster = '';
  plot = '';
  actors = '';
  imdRating = '';

  async getData() {
    
    await this.http
      .get<any>(
        `${environment.movieAPI}${this.searchText}&apikey=${environment.movieAPIKey}`
      )
      .subscribe((res) => {
        this.title = res.Title;
        this.year = res.Year;
        this.director = res.Director;
        this.poster = res.Poster;
        this.plot = res.Plot;
        this.actors = res.Actors;
        this.imdRating = res.imdbRating;        
      });
  }
}
