import { Injectable } from "@angular/core";
import { Project } from "../models/project";
import { ProjectRepository } from "../repositories/project.repository";

@Injectable()
export class ProjectService{
  private projectData: Project[] = [];
  private projectRepository: ProjectRepository;
  constructor(_projectRepository:ProjectRepository ) {
    this.projectRepository=_projectRepository;
    this.projectRepository.projects$.subscribe(data => {
      this.projectData = data;
    });
  }
 GetProject(): Project[] {
    return this.projectData;
  }
}
