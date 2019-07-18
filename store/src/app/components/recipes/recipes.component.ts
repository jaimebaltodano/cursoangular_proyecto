import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipelist/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: 'recipes.component.html',
  providers:[ RecipeService ]
})

export class RecipesComponent implements OnInit{

  constructor(){}

  ngOnInit(){

  }
}