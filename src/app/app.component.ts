import { Component } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { HeroModule } from './hero/hero.module';
import { ServicesModule } from './services/services.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderModule, HeroModule, ServicesModule, AboutModule, ProjectsModule, ContactModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortafolioAndresMoreno';
}