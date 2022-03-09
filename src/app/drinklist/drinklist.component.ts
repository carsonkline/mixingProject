import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes';
import { storedRecipes } from '../official-recipe';
import { SortlistService } from '../sortlist.service';
import { storedIngredients } from '../ingredients';
import { Ingredient } from '../ingredient';


@Component({
  selector: 'app-drinklist',
  templateUrl: './drinklist.component.html',
  styleUrls: ['./drinklist.component.css']
})
export class DrinklistComponent implements OnInit {
  recipes = storedRecipes;
  selectedRecipe?: Recipe;
  ingredients = storedIngredients;
  selectedIngredient?: Ingredient;

  selectedIngredients: Ingredient[] = [];

  constructor() { }
  ngOnInit(): void {
  }
  onSelectRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  onSelectIngredient(ingredient: Ingredient): void {
    this.selectedIngredient = ingredient;
    this.selectedIngredients.push(ingredient);
    this.selectedRecipe = this.recipes.find(recipe=>{
      return this.selectedIngredients.some(ingredient=>recipe.ingredients.includes(ingredient.id))
    })
  }
}
