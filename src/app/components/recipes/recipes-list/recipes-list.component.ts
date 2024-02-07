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
  #recipes: IRecipe[] = [];
  get Recipes() {
    return this.#recipes;
  }

  constructor(
    private recipeService: RecipesService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.#getAllRecipes();
  }

  #getAllRecipes(): void {
    this.recipeService.getAllRecipes().subscribe({
      next: (recipes: any) => {
        this.#recipes = recipes['recipes'];
        this.toastr.success('Загружено');
      },
    });
  }
}
