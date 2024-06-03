import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'Test description 1',
      'https://picsum.photos/id/11/800/600',
      [new Ingredient('Meat', 2), new Ingredient('Egg', 2)]
    ),
    new Recipe(
      'Test Recipe 2',
      'Test description 2',
      'https://picsum.photos/id/4/800/600',
      [new Ingredient('Chicken', 2), new Ingredient('Egg', 2)]
    ),
    new Recipe(
      'Test Recipe 3',
      'Test description 3',
      'https://picsum.photos/id/6/800/600',
      [new Ingredient('Chicken', 2), new Ingredient('Egg', 2)]
    ),
    new Recipe(
      'Test Recipe 4',
      'Test description 4',
      'https://picsum.photos/id/9/800/600',
      [new Ingredient('Chicken', 2), new Ingredient('Egg', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  constructor(private shoppingListService: ShoppingListService) {}

  toShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(index: number) {
    return this.recipes.slice()[index];
  }
}
