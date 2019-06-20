import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './components/shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipelistComponent } from './components/recipes/recipelist/recipelist.component';
import { RecipeitemComponent } from './components/recipes/recipelist/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './components/recipes/recipedetail/recipedetail.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DropdownDirective } from './components/shared/dropdown.directive';

import { RecipeService } from './components/services/recipe.service';
import { ShoppingListService } from './components/services/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ RecipeService, ShoppingListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
