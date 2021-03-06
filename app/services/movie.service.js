"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var MovieService = (function () {
    function MovieService(_jsonp) {
        this._jsonp = _jsonp;
        this.currentDate = new Date().getDate().toString();
        this.currentYear = new Date().getFullYear().toString();
        this.currentMonth = (new Date().getMonth() + 1).toString();
        this.lastMonth = (new Date().getMonth()).toString();
        this.apiKey = 'b63f3b60776f510d0be5712e50e1cd35';
        console.log('MovieServiceInitilized');
    }
    MovieService.prototype.getPopular = function () {
        return this._jsonp.get("https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=b63f3b60776f510d0be5712e50e1cd35")
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getInTheaters = function () {
        this.marginDate = this.currentYear + "-" + this.lastMonth + "-" + this.currentDate;
        this.searchDate = this.currentYear + "-" + this.currentMonth + "-" + this.currentDate;
        return this._jsonp.get("https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=" + this.marginDate + "&primary_release_date.lte=" + this.searchDate + "&sort_by=popularity.desc&api_key=b63f3b60776f510d0be5712e50e1cd35")
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.searchMovies = function (searchStr) {
        return this._jsonp.get("https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=" + searchStr + "&sort_by=popularity.desc&api_key=b63f3b60776f510d0be5712e50e1cd35")
            .map(function (res) { return res.json(); });
    };
    MovieService.prototype.getMovie = function (id) {
        return this._jsonp.get("https://api.themoviedb.org/3/movie/" + id + "?callback=JSONP_CALLBACK&api_key=b63f3b60776f510d0be5712e50e1cd35")
            .map(function (res) { return res.json(); });
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map