import { Component } from '@angular/core';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [IntroductionComponent, HeaderComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, ContactComponent, RouterOutlet, ScrollTopModule]
})
export class AppComponent {
  title = 'aesy_portfolioweb';
}
