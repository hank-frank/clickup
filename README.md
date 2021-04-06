# ClickupChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

It is a page that displays a list of cocktails from [The Cocktail DB](https://www.thecocktaildb.com/). This was an APi I've used recently that seemed like a logical choice to get data pulled relatively quickly. 

To have the API return data correclty you will need to put the API key in the `src/environments/environments.ts` file. In this format: 
```
export const environment = {
  production: false,
  API_KEY: <I'm including this in the email I'm sending you>
};
```
From there, the page will pull up the list, you can sort, search/filter, or drag/drop. 

As a suggestion, try searching for rum. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
