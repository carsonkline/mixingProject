import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes';
import { Ingredient } from '../ingredient';
import { BackendService } from '../backend.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-drinklist',
  templateUrl: './drinklist.component.html',
  styleUrls: ['./drinklist.component.css']
})
export class DrinklistComponent implements OnInit {
  recipes: Recipe[] | undefined;
  selectedRecipe?: Recipe;
  ingredients: Ingredient[] | undefined;

  ingredientForm = new FormGroup({
    name: new FormControl('ingredient name')
  })

  selectedIngredients: number[] = [];

  get filteredRecipe(): Recipe[] {
    /* This fuction filters the recipe array to diplay recipies based on availible ingredients */
    return this.recipes?.filter(recipe => {
      for (let ingredient of recipe.ingredients) {
        if (this.selectedIngredients.includes(ingredient.id) == false)
          return false
      }
      return true
    })
  }

  constructor(public backendService: BackendService) {
    this.backendService.getIngredients().subscribe(ingredients => {
      this.ingredients = ingredients
    })
    this.backendService.getRecipes().subscribe(recipes => {
      this.recipes = recipes
    })
  }
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
    console.log(ingredient)
  }
  onSubmit() {
    this.backendService.createIngredient(this.ingredientForm.value).subscribe()
    this.ingredients?.push(this.ingredientForm.value)
  }
  deleteIngredient(ingredient: Ingredient) {
    this.backendService.deleteIngredient(ingredient).subscribe()
  }
}
