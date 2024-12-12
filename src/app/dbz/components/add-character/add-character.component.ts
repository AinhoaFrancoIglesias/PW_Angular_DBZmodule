import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

 @Output() //decorador para que el evento se refleje en el padre (main-page)
 public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // crear objeto character al llamar a emitcharacter()

    // objeto character vacio, para usarlo como plantilla en el html
    public character: Character = {
      name:'',
      power: 0
    };

    // método para emitir el personaej actual a través de onNewCharacter cuando se llame
    emitCharacter():void{
      // si el nombre del personaje esta vacio (character.name.length === 0) se para (return) para no mandar un personaje sin todos los adtos
      if (this.character.name.length === 0) return;

      // si el nombre esta ok, se emite el objeto character con el emisor onNewCharacter
      this.onNewCharacter.emit(this.character);

      //reinicia el objeto plantiilla character a los valores default
      this.character={ name: '', power:0};

    }
}
