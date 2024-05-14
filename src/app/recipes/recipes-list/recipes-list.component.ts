import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'Test description 1',
      'https://picsum.photos/id/11/800/600'
    ),
    new Recipe(
      'Test Recipe 2',
      'Test description 2',
      'https://picsum.photos/id/4/800/600'
    ),
    new Recipe(
      'Test Recipe 3',
      'Test description 3',
      'https://picsum.photos/id/6/800/600'
    ),
    new Recipe(
      'Test Recipe 4',
      'Test description 4',
      'https://picsum.photos/id/9/800/600'
    ),
    new Recipe(
      'Test Recipe 5',
      'Test description 5',
      'https://picsum.photos/id/20/800/600'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
