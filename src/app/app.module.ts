import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DrinklistComponent } from './drinklist/drinklist.component';
import { SortListComponent } from './sort-list/sort-list.component';
import { HomeComponent } from './home/home.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DrinklistComponent,
    SortListComponent,
    HomeComponent,
    RecipeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
