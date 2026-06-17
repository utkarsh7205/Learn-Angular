import { Component, Input, signal, StreamingResourceOptions } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  @Input() userName: string | undefined
}
