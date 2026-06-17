import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  show = false;
  arr = ["xznc zdmc ", "dc xzcm sdcs", "xzckjndzkc ", "zc  csmc,sx"];
  arr1 = [
    ['1', '2', '3', '4', '5',],
    ['a', 'b', 'c', 'd', 'e',],
  ]

  logIn = false;

  block = 0;

  updateBlock() {
    this.block = this.block + 1;
  }

  color = "black";

  updateColor(color: string) {
    this.color = color;
  }
}
