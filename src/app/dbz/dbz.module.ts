import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [ //añadimos los componentes de list y añadir, adeamas del main page
    MainPageComponent,
    ListComponent,
    AddCharacterComponent 
  ],
  exports: [ //exxportamos para mostrar en le pagina web el mainpage
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
