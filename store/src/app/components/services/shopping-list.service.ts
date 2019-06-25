
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  newIngredient = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 4),
    new Ingredient("Tomatoes", 2)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addNewIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]){
    /* for(let ingredient of ingredients){
      this.addNewIngredient(ingredient) // esta bien pero haria muchos emit events
    } */
    this.ingredients.push(...ingredients); //ES6 features, transform array into list
    this.ingredientsChanged.emit(this.getIngredients());
  }
}