import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/components/services/recipe.service';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})

export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index:number;
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

}
