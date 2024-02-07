import { Component, Input } from '@angular/core';
import { IRecipe } from '../../../../models/recipe.interface';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css',
})
export class RecipesItemComponent {
  @Input() recipe: IRecipe | undefined;
}
