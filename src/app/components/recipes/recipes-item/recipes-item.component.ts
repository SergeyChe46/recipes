import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { IRecipe } from '../../../../models/recipe.interface';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css',
})
export class RecipesItemComponent implements AfterViewInit {
  @Input() recipe: IRecipe | undefined;
  @ViewChild('image') imageUrl!: ElementRef<HTMLImageElement>;
  @ViewChild('recipeItem') recipeItem!: ElementRef<HTMLDivElement>;

  private mouseMove = () =>
    fromEvent(this.recipeItem.nativeElement, 'mousemove').subscribe({
      next: (event: any) => {
        this.imageUrl.nativeElement.style.visibility = 'visible';
        let positionX = Math.max(event.clientX, event.layerX);
        let positionY = Math.min(event.clientY, event.layerY);

        this.imageUrl.nativeElement.style.top = String(positionY) + 'px';
        this.imageUrl.nativeElement.style.left = String(positionX) + 'px';
      },
    });
  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    this.imageUrl.nativeElement.style.visibility = 'hidden';
  }

  ngAfterViewInit(): void {
    this.mouseMove();
  }
}
