import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowImage]',
})
export class ShowImageDirective {
  constructor(
    private templateRef: TemplateRef<HTMLDivElement>,
    private viewContainer: ViewContainerRef
  ) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
