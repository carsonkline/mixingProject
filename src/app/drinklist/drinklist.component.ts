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
  recipes: Recipe[] = storedRecipes;
  selectedRecipe?: Recipe;
  ingredients = storedIngredients;


  selectedIngredients: number[] = [];

  get filteredRecipe(): Recipe[] {
    /* This fuction filters the recipe array to diplay recipies based on availible ingredients */
    return this.recipes.filter(recipe => {
      for (let ingredient of recipe.ingredients) {
        if (this.selectedIngredients.includes(ingredient) == false)
          return false
      }
      return true
    })
  }

  constructor() { }
  ngOnInit(): void {
  }
  onSelectRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }
  onSelectIngredient(ingredient: Ingredient): void {
    /*  Adds or Removes  */
    if (this.selectedIngredients.includes(ingredient.id)) {
      const index = this.selectedIngredients.indexOf(ingredient.id);
      if (index > -1) {
        this.selectedIngredients.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    else {
      this.selectedIngredients.push(ingredient.id);
    }

  }
}
