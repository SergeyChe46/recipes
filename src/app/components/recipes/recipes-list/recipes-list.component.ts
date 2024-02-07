import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IRecipe } from '../../../../models/recipe.interface';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent implements OnInit {
  constructor(
    private recipeService: RecipesService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.#getAllRecipes();
  }

  #recipes: IRecipe[] = [];
  #sortAscending: boolean = true;
  get Recipes() {
    return this.#recipes;
  }

  sortRecipesBy(sortField: 'rating' | 'difficulty'): void {
    this.#recipes = this.#recipes.sort((recipeA: any, recipeB: any) => {
      return recipeB[sortField] > recipeA[sortField] ? 1 : -1;
    });
    this.#ReverseSortedList();
  }

  #getAllRecipes(): void {
    this.recipeService.getAllRecipes().subscribe({
      next: (recipes: any) => {
        this.#recipes = recipes['recipes'];
        this.toastr.success('Загружено');
      },
    });
  }
  #ReverseSortedList(): void {
    this.#recipes = this.#sortAscending
      ? this.#recipes
      : this.#recipes.reverse();
    this.#sortAscending = !this.#sortAscending;
  }
}
