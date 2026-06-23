import { Component } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { HeroModule } from './hero/hero.module';
import { ServicesModule } from './services/services.module';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { CvProfilesModule } from './cv-profiles/cv-profiles.module';
import { FooterModule } from './footer/footer.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderModule, HeroModule, ServicesModule, AboutModule, ProjectsModule, ContactModule, CvProfilesModule, FooterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortafolioAndresMoreno';
}