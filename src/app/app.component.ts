import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  /*public counter = 10;

 increaseBy(value: number):void{
    this.counter += value;
  }

  decrementBy(value: number):void{
    this.counter -= value;
  }

  //hacer método para resetear el counter a 10

  reset(): void{
    this.counter =10;

  }*/
}
