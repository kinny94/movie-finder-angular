import {provideRouter, RouterConfig} from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';

const routes:RouterConfig = [
    {path: '', component: MoviesComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];   