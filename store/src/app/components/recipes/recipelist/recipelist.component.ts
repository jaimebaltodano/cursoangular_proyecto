import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Tamales","Tamales de Queso","https://www.cocinavital.mx/wp-content/uploads/2017/09/tamal-de-rajas.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
