import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  nombrePersona: string = "Osvani";
  apellidoPersona: string = "Colina";
  edad: number = 24;

  getEdad(): number{
    return this.edad;
  }

}
