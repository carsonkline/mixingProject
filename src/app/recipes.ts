export class Recipe {
    id: number
    name: string
    ingredients: number[]
    recipe: string
    constructor(id: number,name: string, ingredients: number[],recipe: string){
        this.id= id,
        this.name= name,
        this.ingredients= ingredients,
        this.recipe= recipe
    }
}