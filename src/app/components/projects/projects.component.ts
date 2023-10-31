import { Component } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public projectData: Project[] = [];
  private projectService: ProjectService;
  constructor(_projectService:ProjectService) {
    this.projectService=_projectService;
    this.projectData=this.projectService.GetProject();
  }
}
