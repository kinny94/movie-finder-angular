import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    apiKey:string;

    constructor(private _jsonp:Jsonp){
        this.apiKey = 'b63f3b60776f510d0be5712e50e1cd35';
        console.log('MovieServiceInitilized');
    }

    getPopular(){
        return this._jsonp.get("https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=b63f3b60776f510d0be5712e50e1cd35")
        .map(res => res.json());
    }
}