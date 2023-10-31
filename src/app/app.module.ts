import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/shared/header/header.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimelineModule } from 'primeng/timeline';
import { ChipModule } from 'primeng/chip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ScrollTopModule } from 'primeng/scrolltop';
import { IntroductionService } from './services/introduction.service';
import { IntroductionRepository } from './repositories/introduction.repository';
import { ExperienceService } from './services/experience.service';
import { ExperienceRepository } from './repositories/experience.repository';
import { ProjectRepository } from './repositories/project.repository';
import { ProjectService } from './services/project.service';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsRepository } from './repositories/skills.repository';
import { SkillsService } from './services/skills.service';
import { ReactiveFormsModule  } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgOptimizedImage,
    BrowserAnimationsModule ,
    TimelineModule,
    ChipModule,
    InputTextareaModule,
    InputTextModule,
    ScrollTopModule,
    InputNumberModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [IntroductionService,IntroductionRepository,ExperienceService,ExperienceRepository,ProjectService,ProjectRepository,SkillsService,SkillsRepository,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
