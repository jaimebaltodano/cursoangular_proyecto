import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shopinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopinglistService.getIngredients();
    this.subscription = this.shopinglistService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
