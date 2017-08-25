import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  verParagrafo: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  mostrar(): Boolean {
    this.verParagrafo = !this.verParagrafo;
    return this.verParagrafo;
  }

}
