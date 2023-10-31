import { Component } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
  public experienceData: Experience[] = [];
  private experiencenService: ExperienceService;
  constructor(_experiencenService:ExperienceService) {
    this.experiencenService=_experiencenService;
    this.experienceData=this.experiencenService.GetExperience();
  }
}
