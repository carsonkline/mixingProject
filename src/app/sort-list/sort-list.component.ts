import { Component, OnInit } from '@angular/core';
import { storedIngredients } from '../ingredients';
import { Ingredient } from '../ingredient';
import { SortlistService } from '../sortlist.service';

@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.css']
})
export class SortListComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
