import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'A simply description for a recipe', 'https://www.cookipedia.co.uk/wiki/images/e/ea/Gazpacho_ligero_con_mostaza_recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
