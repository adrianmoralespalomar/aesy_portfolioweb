import { Component } from '@angular/core';
import { Technology } from 'src/app/models/technology';
import { SkillsService } from 'src/app/services/skills.service';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: true,
    imports: [NgFor, NgOptimizedImage]
})
export class SkillsComponent {
  public skillsData: Technology[] = [];
  private skillsService: SkillsService;

  constructor(_skillsService:SkillsService ) {
    this.skillsService=_skillsService;
    this.skillsData=this.skillsService.GetTechnologies();
  }
}
