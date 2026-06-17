import { Component, effect, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';
import { InlineComponentComponent } from './inline-component/inline-component.component';
import { ChildComponentComponent } from "./child-component/child-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle, CommonModule, FormsModule, InlineComponentComponent, ChildComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = signal(['dnckdsmcs', 'sdvmsdvsd', 'dvsdv', 'dvsdvfd']);
}


