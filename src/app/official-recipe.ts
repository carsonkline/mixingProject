
import { Recipe } from "./recipes";

/* Recipe ingredient id Reference
    50: Lime Juice
    51: Ginger Beer
    52: Vodka
    53: Gin
    54: Tonic Water
    55: Rum (Dark)
    56: Simple Suger
    57: Bitters
*/

export const storedRecipes: Recipe[] = [
    new Recipe(1,"Moscow Mule",[50,51,52],"Put 1.5oz Vodka, 0.5oz Lime Juice, and 6oz Ginger Beer in glass with ice."),
    new Recipe(2,"Gin and Tonic",[50,53,54],"Fill a highball glass with ice, then add 2oz Gin. Top with the tonic water and gently stir. Garnish with lime wheels or seasonal garnishes."),
    new Recipe(3,"Dark and Stormy",[50,51,55,56,57],"Add 2oz Dark Rum and 0.5oz lime juice to a tall glass filled with ice. Top with 6oz ginger beer. Garnish with a lime wheel.")
]