import { Component } from '@angular/core';
import { storedRecipes } from './official-recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-mixing-guide';
  recipes=storedRecipes;
}
