import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipelist/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("Tamales",
      "Tamales de Queso",
      "https://www.cocinavital.mx/wp-content/uploads/2017/09/tamal-de-rajas.jpg",
      [new Ingredient('Cebolla', 2),
      new Ingredient('Pan', 4)])
  ];

  constructor(private shoppinglistService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppinglistService.addIngredients(ingredients)
  }

}