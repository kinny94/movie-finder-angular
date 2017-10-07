import { Component } from '@angular/core';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieService} from './services/movie.service';
import {JSONP_PROVIDERS} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl : 'app.component.html',
    directives: [MoviesComponent],
    providers: [JSONP_PROVIDERS, MovieService]
})
export class AppComponent { }
