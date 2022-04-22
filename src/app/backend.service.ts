import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Ingredient } from './ingredient';
import { Recipe } from './recipes';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private _http: HttpClient) { }
  createRecipe(recipe: Recipe) {
    const url = `http://localhost:3000/recipe/`

    return this._http.post<Recipe>(url, recipe, options)
  }

  deleteRecipe(recipe: Recipe) {
    const url = `http://localhost:3000/recipe/${recipe.id}`

    return this._http.delete<number>(url, options)
  }

  getRecipe(recipeID: number) {
    const url = `http://localhost:3000/recipe/${recipeID}`

    return this._http.get<Recipe>(url, options)
  }
  getRecipes() {
    const url = `http://localhost:3000/recipes`

    return this._http.get<Recipe[]>(url, options)
  }

  updateRecipe(recipe: Recipe) {
    const url = `http://localhost:3000/recipe/${recipe.id}`

    return this._http.put<number>(url, recipe, options)
  }
  createIngredient(ingredient: Ingredient) {
    const url = `http://localhost:3000/ingredient/`

    return this._http.post<Ingredient>(url, ingredient, options)
  }

  deleteIngredient(ingredient: Ingredient) {
    const url = `http://localhost:3000/ingredient/${ingredient.id}`

    return this._http.delete<number>(url, options)
  }

  getIngredients() {
    const url = `http://localhost:3000/ingredients`

    return this._http.get<Ingredient[]>(url, options)
  }
  getIngredient(ingredientID: number) {
    const url = `http://localhost:3000/ingredient/${ingredientID}`

    return this._http.get<Ingredient>(url, options)
  }

  updateIngredient(ingredient: Ingredient) {
    const url = `http://localhost:3000/ingredient/${ingredient.id}`

    return this._http.put<number>(url, ingredient, options)
  }
}
