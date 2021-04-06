import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({ selector: '[noRum]'})
export class NoRumDirective {
    private hasView = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        ) { }

    @Input() set noRum(cocktail: any) {
        let condition = false;

        
        let allIngredients = '';

        for (let i = 0; i < 15; i++) {
            let searchStr: string = `strIngredient${i}`;
            allIngredients += `${cocktail[searchStr]} `;
        }

        if (allIngredients.toLowerCase().includes('rum')) {
            condition = true;
            cocktail.strDrink = `${cocktail.strDrink} - careful, I have rum`
        }
    

        if (!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (condition && this.hasView) {   
            this.viewContainer.remove();
            this.hasView = false;
        }
    }
}