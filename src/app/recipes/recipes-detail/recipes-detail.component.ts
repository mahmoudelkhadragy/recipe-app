import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss'],
})
export class RecipesDetailComponent implements OnInit {
  colapsed = false;
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
}
