import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['h2 {color: yellow;}']
 
})
export class AppComponent {
  name = 'Bartolo';
}
