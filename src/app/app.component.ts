import { Component } from '@angular/core';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import {HostListener} from '@angular/core';
import { ConfigComponent } from './components/shared/config/config.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [IntroductionComponent, HeaderComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, ContactComponent,ConfigComponent, RouterOutlet, ScrollTopModule]
})
export class AppComponent {
  title = 'Adrian Portfolio | FullStack Developer';
  previousTitle=document.title;
  @HostListener('window:blur') onBlur() {
    this.previousTitle=document.title;
    document.title="¡No te vayas! ¡Vuelve! 😱";
  }
  @HostListener('window:focus') onFocus() {
    document.title=this.previousTitle;
  }
}
