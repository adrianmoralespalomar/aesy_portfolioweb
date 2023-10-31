import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css'],
    standalone: true,
    imports: [NgFor, NgOptimizedImage]
})
export class ProjectsComponent {
  public projectData: Project[] = [];
  private projectService: ProjectService;
  constructor(_projectService:ProjectService) {
    this.projectService=_projectService;
    this.projectData=this.projectService.GetProject();
  }
}
