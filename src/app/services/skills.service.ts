import { Injectable } from "@angular/core";
import { Technology } from "../models/technology";
import { SkillsRepository } from "../repositories/skills.repository";

@Injectable()
export class SkillsService{
  private skillsData: Technology[] = [];
  private skillsRepository: SkillsRepository;
  constructor(_skillsRepository:SkillsRepository ) {
    this.skillsRepository=_skillsRepository;
    this.skillsRepository.tech$.subscribe(data => {
      this.skillsData = data;
    });
  }
 GetTechnologies(): Technology[] {
    return this.skillsData;
  }
}
