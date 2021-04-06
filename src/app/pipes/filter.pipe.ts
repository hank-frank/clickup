import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(cocktails: any[], text: string) : any[] {
        console.log('in transform', text);
        const lowerSearchString = text;
        const nameMatches = cocktails.filter((cocktail: any) => {
            const drinkName = cocktail.strDrink.toLowerCase();
            return drinkName.includes(lowerSearchString);
        })
        
        const ingredientMatches = cocktails.filter((cocktail: any) => {
            let allIngredients = '';
    
            for (let i = 0; i < 15; i++) {
                let searchStr: string = `strIngredient${i}`;
                allIngredients += `${cocktail[searchStr]} `;
            }
    
            return allIngredients.toLowerCase().includes(lowerSearchString);
        })

        return [...nameMatches, ... ingredientMatches].filter((value, index, self) => self.map(each => each.idDrink).indexOf(value.idDrink)==index);
    }
}