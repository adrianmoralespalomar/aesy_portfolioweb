import { Component } from '@angular/core';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HostListener } from '@angular/core';
import { ConfigComponent } from './components/shared/config/config.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageManager } from './Tools/languagemanager.tool';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [IntroductionComponent,TranslateModule, HeaderComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, ContactComponent,ConfigComponent, RouterOutlet, ScrollTopModule]
})
export class AppComponent {
  constructor(private languageManager:LanguageManager){}
  async ngOnInit(){
    this.languageManager.SetDefaultLanguage();
    await this.ChangeDocumentTitle(false);
  }
  @HostListener('window:blur') async onBlur() {
    await this.ChangeDocumentTitle(true);
  }
  @HostListener('window:focus') async onFocus() {
    await this.ChangeDocumentTitle(false);
  }
  
  async ChangeDocumentTitle(blur:boolean){
    document.title=blur?await this.languageManager.GetBlurDocumentTitle():await this.languageManager.GetDefaultDocumentTitle();
  }
}
