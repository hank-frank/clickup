import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clickup-challenge';

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getCocktails();
  }
}
