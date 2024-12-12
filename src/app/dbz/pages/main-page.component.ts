import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  // crea un array de tipo character para meterle personajes
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name:'Goku',
    power: 9500
  },{
    name:"Vegeta",
    power: 7500
  }];

 // onDelete = Index value: number;

  // usa el metodo push para añadir el personaje nuevo al array
  onNewCharacter(character:Character): void{ // recibe un objeto de tipo character (cuando es invocado, se le pasa por parametros el nmbre y el poder del personaje, al invocar el metodo)
    this.characters.push(character);
  }

  // borra un personaje de la lista basandose en el indice del mismo
  onDeleteCharacter(index:number){
    //this.characters.splice(1,2) //esto está comentado pero lo que hace es borrar el segunod y tercer heroe (lo explico justo abajo):
    /*//elimina un elemento del array desde una posicion concreta. (index, 1) significa que va a borrar desde el indice 1 posicion nada mas.
     si fuera index, 2 borraria 2 personajes partiendo desde el que se ha pulsado el boton X */
    this.characters.splice(index,1); 
  }

}
