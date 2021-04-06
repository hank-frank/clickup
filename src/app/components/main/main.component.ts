import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { ApiService } from '../../api.service';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Cocktail } from '../../interfaces/cocktail.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [FilterPipe]
})
export class MainComponent implements OnInit {
  @Input() searchValue: string = '';
  public popularCocktails: Cocktail[];
  public displayCocktails: Cocktail[]; 
  public searchedForRumMessage = '';
  private order = false;
  
  constructor(
    private apiService: ApiService,
    private filter: FilterPipe
    ) {
    apiService.getPopularCocktails().subscribe((cocktails: any) => {
      this.popularCocktails = cocktails;
      this.displayCocktails = cocktails;
    }, (error: any) => {console.log('subscription error: ', error); });
  }

  ngOnInit(): void {
  }

  getCocktails () {
    this.apiService.getCocktails();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.popularCocktails, event.previousIndex, event.currentIndex);
  }

  search() {
    this.searchedForRumMessage = this.searchValue.toLowerCase() === 'rum' ? "No rum here, check the directives" : '';
    this.displayCocktails = this.filter.transform(this.popularCocktails, this.searchValue);
  }

  sort() {
    this.order = !this.order;
    let sorted = this.displayCocktails;
    if (this.order) {
      sorted = sorted.sort((a, b) => {
        const textA = a.strDrink.toLowerCase();
        const textB = b.strDrink.toLowerCase();
        return textA < textB ? -1 : textA > textB ? 1: 0;
      });
    } else {
      sorted = sorted.sort((a, b) => {
        const textA = a.strDrink.toLowerCase();
        const textB = b.strDrink.toLowerCase();
        return textB < textA ? -1 : textB > textA ? 1: 0;
      });      
    }

    this.displayCocktails = sorted;
  }
}
