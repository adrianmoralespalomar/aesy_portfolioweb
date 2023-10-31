import { Injectable } from "@angular/core";
import { ExperienceRepository } from "../repositories/experience.repository";
import { Experience } from "../models/experience";

@Injectable()
export class ExperienceService{
  private experienceData: Experience[] = [];
  private experienceRepository: ExperienceRepository;
  constructor(_experienceRepository:ExperienceRepository ) {
    this.experienceRepository=_experienceRepository;
    this.experienceRepository.experiences$.subscribe(data => {
      this.experienceData = data;
    });
  }
 GetExperience(): Experience[] {
    return this.experienceData;
  }
}
