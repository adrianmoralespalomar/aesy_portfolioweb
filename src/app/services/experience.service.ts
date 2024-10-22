import { Experience } from '../models/experience';
import { ExperienceRepository } from '../repositories/experience.repository';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class ExperienceService{
  private experienceData: Experience[] = [];
  experienceRepository=inject (ExperienceRepository);
  constructor() {
    this.experienceRepository.experiences$.subscribe(data => {
      this.experienceData = data;
    });
  }
 GetExperience(): Experience[] {
    return this.experienceData;
  }
}
