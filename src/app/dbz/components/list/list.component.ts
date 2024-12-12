import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

@Input() //hace que se pueda recibir el array de tipo character desde el padre (mainpage)
  public characterList: Character[] = [{
    name:'Trunk', //nombre del personaje
    power: 10 // poder del personaje
  }]

//onDeleteId = Index value= number,

@Output() //hace que el evento onDelete se pase al padre.
public onDelete: EventEmitter<number> = new EventEmitter(); //number es el indice del personaje que se va a eliminar

// metodo que llama a ondelete para eliminar el charcter con el indice que ponga entre parentesis
onDeteteCharacter(index:number):void{

   this.onDelete.emit(index);

  }

}
