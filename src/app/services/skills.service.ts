import { inject, Injectable } from '@angular/core';
import { SkillsRepository } from '../repositories/skills.repository';
import { Technology } from '../models/technology';

@Injectable()
export class SkillsService{
  private skillsData: Technology[] = [];
  private skillsRepository=inject(SkillsRepository);
  constructor() {
    this.skillsRepository.tech$.subscribe(data => {
      this.skillsData = data;
    });
  }
  GetTechnologies(): Technology[] {
    return this.skillsData;
  }
}
