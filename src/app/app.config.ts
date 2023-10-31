import { NgOptimizedImage } from "@angular/common";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChipModule } from "primeng/chip";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ScrollTopModule } from "primeng/scrolltop";
import { TimelineModule } from "primeng/timeline";
import { AppRoutingModule } from "./app-routing.module";
import { ExperienceRepository } from "./repositories/experience.repository";
import { IntroductionRepository } from "./repositories/introduction.repository";
import { ProjectRepository } from "./repositories/project.repository";
import { SkillsRepository } from "./repositories/skills.repository";
import { ContactService } from "./services/contact.service";
import { ExperienceService } from "./services/experience.service";
import { IntroductionService } from "./services/introduction.service";
import { ProjectService } from "./services/project.service";
import { SkillsService } from "./services/skills.service";

export const appConfig:ApplicationConfig={
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, NgbModule, NgOptimizedImage, TimelineModule, ChipModule, InputTextareaModule, InputTextModule, ScrollTopModule, InputNumberModule, ReactiveFormsModule),
        IntroductionService, IntroductionRepository, ExperienceService, ExperienceRepository, ProjectService, ProjectRepository, SkillsService, SkillsRepository, ContactService,
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi())
    ]
}