import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = signal(0);
  increment() {
    console.log('Incrementing counter');
    // this.counter.set(this.counter() + 1);
    this.counter.update((val :number) => val + 1);
  }

  decrement() {
    console.log('Decrementing counter');
    // this.counter.set(this.counter() - 1);
    this.counter.update((val :number) => val - 1);
  }


  reset() {
    console.log('Resetting counter');
    this.counter.set(0);
  }
}
