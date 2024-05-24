import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Test Ingredient 1', 22),
    new Ingredient('Test Ingredient 2', 11),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  constructor() {}

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
