import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.scss'
})
export class DynamicStylingComponent {

  BgColor = "red";
  fontSize = "30";
  headingSizeBig = "80px"
  headingSizeSmall = "30px"

  zoom = true;
  updateHeadingSize() {
    this.zoom = !this.zoom;
  }
} 
