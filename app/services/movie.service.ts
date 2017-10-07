import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
    apiKey:string;
    currentDate:string = new Date().getDate().toString();
    currentYear:string = new Date().getFullYear().toString();
    currentMonth:string = (new Date().getMonth() + 1).toString();
    lastMonth:string = (new Date().getMonth()).toString();
    searchDate:string;
    marginDate:string;

    constructor(private _jsonp:Jsonp){
        this.apiKey = 'b63f3b60776f510d0be5712e50e1cd35';
        console.log('MovieServiceInitilized');
    }

    getPopular(){
        return this._jsonp.get("https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=b63f3b60776f510d0be5712e50e1cd35")
        .map(res => res.json());
    }

    getInTheaters(){
        
        this.marginDate = this.currentYear + "-" + this.lastMonth + "-" + this.currentDate;
        this.searchDate = this.currentYear + "-" + this.currentMonth + "-" + this.currentDate;
        
        return this._jsonp.get("https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte="+ this.marginDate + "&primary_release_date.lte=" + this.searchDate + "&sort_by=popularity.desc&api_key=b63f3b60776f510d0be5712e50e1cd35")
        .map(res => res.json());   
    }

    searchMovies(searchStr:string){
        return this._jsonp.get("https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=" + searchStr + "&sort_by=popularity.desc&api_key=b63f3b60776f510d0be5712e50e1cd35")
        .map(res => res.json()); 
    }

    getMovie(id:string){
        return this._jsonp.get("https://api.themoviedb.org/3/movie/" + id +"?callback=JSONP_CALLBACK&api_key=b63f3b60776f510d0be5712e50e1cd35")
        .map(res => res.json());
    }
}