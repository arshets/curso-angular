import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/drag.interface';
import { DragModule } from '../drag.module';
import { DragService } from '../services/drag.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {
    
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dradService: DragService) {
    
  }

  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    
    if (this.nuevo.nombre.trim().length === 0 ) {return;}
    this.dradService.agregarPersonaje(this.nuevo);
    // this.nuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }


}
