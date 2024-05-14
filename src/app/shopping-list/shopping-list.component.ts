import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Test Ingredient 1', 22),
    new Ingredient('Test Ingredient 2', 11),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ing: Ingredient) {
    this.ingredients.push(ing);
  }
}
