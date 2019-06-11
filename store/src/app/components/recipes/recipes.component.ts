import { Component } from '@angular/core';
import { Recipe } from './recipelist/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html'
})

export class RecipesComponent{
  selectedRecipe: Recipe;
}