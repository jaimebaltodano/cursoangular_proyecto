import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/recipes', pathMatch:'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppinglistComponent },
]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }