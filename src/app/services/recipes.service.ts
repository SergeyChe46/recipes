import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IRecipe } from '../../models/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  #baseUrl = 'https://dummyjson.com/recipes';

  #recipes: IRecipe[] = [];
  get Recipes$() {
    return this.#recipes;
  }
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  getAllRecipes(): Observable<IRecipe[]> {
    return this.httpClient.get<IRecipe[]>(this.#baseUrl);
  }
}
