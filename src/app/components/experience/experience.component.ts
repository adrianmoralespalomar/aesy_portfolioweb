import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ChipModule } from 'primeng/chip';
import { NgFor } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { TimelineModule } from 'primeng/timeline';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    standalone: true,
    imports: [TimelineModule,TranslateModule, SharedModule, NgFor, ChipModule]
})

export class ExperienceComponent {
  public experienceData: Experience[] = [];
  private experiencenService: ExperienceService;
  constructor(_experiencenService:ExperienceService) {
    this.experiencenService=_experiencenService;
    this.experienceData=this.experiencenService.GetExperience();
  }
}
