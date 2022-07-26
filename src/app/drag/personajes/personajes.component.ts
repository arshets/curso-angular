import { Component } from '@angular/core';

import { DragService } from '../services/drag.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {
  // @Input()  personajes: Personaje[] = [];

  get personajes() {
    return this.dragService.personajes;
  }
 
  constructor(private dragService: DragService ) {
    
  }
}
