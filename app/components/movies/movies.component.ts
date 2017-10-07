import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
    moduleId: module.id,
    selector: 'movies',
    templateUrl: 'movies.component.html'
})
export class MoviesComponent { 
    constructor(private _movieService: MovieService){
        this._movieService.getPopular().subscribe(res => {
            console.log(res.results);
        });
    }
}
