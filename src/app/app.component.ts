import { Component, effect, input, Signal, signal } from '@angular/core';
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
  newUser: any = signal('hi')
  selectUserName = signal('')
  DeleteUserName = ''

  addNewUser() {
    this.users.update((data) => ([...data, this.newUser()]))
  }
  update(event: any) {
    const value = (event.target as HTMLInputElement).value
    this.newUser.set(value)
  }

  Selectuser(name: string) {
    this.selectUserName.set(name);
  }

  DeleteUser(name: string) {
    console.log(name)
    this.users.update((data) => data.filter((item) => item != name))
  }
}


