import { inject, Injectable } from '@angular/core';
import { Project } from '../models/project';
import { ProjectRepository } from '../repositories/project.repository';

@Injectable()
export class ProjectService{
  private projectData: Project[] = [];
  private projectRepository=inject(ProjectRepository);
  constructor() {
    this.projectRepository.projects$.subscribe(data => {
      this.projectData = data;
    });
  }
 GetProject(): Project[] {
    return this.projectData;
  }
}
