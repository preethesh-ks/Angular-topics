import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {

  isCompleted = input(false);

  constructor() { }
  el = inject(ElementRef);

  stylesEffect = effect(() => {
    if(this.isCompleted()) {
      // return {
      //   'text-decoration': 'line-through',
      //   'color': 'grey'
      // }
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'grey';
      this.el.nativeElement.style.cursor = 'pointer';
    } else {
      // return {
        // 'text-decoration': 'none',
        // 'color': 'black'
      // }
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'black';
      this.el.nativeElement.style.cursor = 'pointer';
}});

}
