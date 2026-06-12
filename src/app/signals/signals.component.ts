import { NgStyle, CommonModule } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signals',
  imports: [RouterOutlet, NgStyle, CommonModule, FormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  username = signal('Ayush');
  count = signal(0);
  displayHeading = false;

  constructor() {
    effect(() => {
      if (this.count() % 2 == 0) {
        this.displayHeading = true;
      } else {
        this.displayHeading = false;
      }

    })
  }

  toggle() {
    this.count.set(this.count() + 1);
  }

}
