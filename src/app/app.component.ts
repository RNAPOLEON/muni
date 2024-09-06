import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./component/menu/menu.component";
import { MainComponent } from "./component/main/main.component";
import { FixedComponent } from "./component/fixed/fixed.component"; 
import { GridOneComponent } from "./component/grid-one/grid-one.component";
import { ContenidoComponent } from "./component/contenido/contenido.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, MainComponent, FixedComponent, GridOneComponent, ContenidoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'muni';
}
