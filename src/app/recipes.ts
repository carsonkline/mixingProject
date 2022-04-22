import { Ingredient } from "./ingredient"

export class Recipe {
    id: number
    name: string
    ingredients: Ingredient[]
    recipe: string
    constructor(id: number, name: string, ingredients: Ingredient[], recipe: string) {
        this.id = id,
            this.name = name,
            this.ingredients = ingredients,
            this.recipe = recipe
    }
}