import { Component, EventEmitter, Input, Output, output, signal, StreamingResourceOptions } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  @Input() userName: string | undefined
  @Output() Selectuser = new EventEmitter()
  @Output() DeleteUser = new EventEmitter()

  users(name: string | undefined) {
    this.Selectuser.emit(name)
  }
  deleteUser(name: string | undefined) {
    this.DeleteUser.emit(name)
  }
}
