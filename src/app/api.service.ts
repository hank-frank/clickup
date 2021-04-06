import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Cocktail } from './interfaces/cocktail.model';
import { ApiReturn } from './interfaces/apiReturn.model';

import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private API_BASE_URL = `https://www.thecocktaildb.com/api/json/v2/${environment.API_KEY}`;
    private API_POPULAR_URL = `${this.API_BASE_URL}/popular.php`;
    private API_10RANDOM_URL = `${this.API_BASE_URL}/randomselection.php`;
    private popularCocktails = new Subject<[Cocktail]>();
    

    constructor( private httpClient: HttpClient ) {
    }

    setPopularCocktails (cocktails: [Cocktail]): void {
        this.popularCocktails.next(cocktails);
    }

    getPopularCocktails(): Observable<[Cocktail]> {
        return this.popularCocktails.asObservable();
    }

    public getCocktails(): void {
        this.httpClient.get(`${this.API_POPULAR_URL}`).subscribe((data: ApiReturn) => {
            this.popularCocktails.next(data.drinks);            
        });
    }

}
