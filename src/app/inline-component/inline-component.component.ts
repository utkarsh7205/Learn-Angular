import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-component',
  imports: [],
  template: `
   <div>
    <input class="input-box" type="text" placeholder="Nikal Maderchod">
   </div>
  `,
  styles: `.input-box{
    width: 300px;
  }`
})
export class InlineComponentComponent {

}
