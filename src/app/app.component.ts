import { Component } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { HeroModule } from './hero/hero.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderModule, HeroModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortafolioAndresMoreno';
}