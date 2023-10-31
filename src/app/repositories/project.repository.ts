import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Project } from "../models/project";
import { Technology } from "../models/technology";

@Injectable()
export class ProjectRepository{
  private projects = new BehaviorSubject<Project[]>(new Array<Project>());
  public projects$ = this.projects.asObservable();
  constructor() {this.projects.next(this.GetDataFromDataBase());}
  public GetDataFromDataBase(){
    return [
        new Project(1, 'Portfolio', 'Personal web with my experience and skills as FullStack developer.',
        [
            new Technology(1,"Angular","assets/images/technologies/angularIcon.png"),
            new Technology(4,"Bootstrap","assets/images/technologies/bootstrapIcon.png")
        ],
        'assets/images/projects/portfolioProject.png','https://github.com/adrianmoralespalomar/aesy_portfolioweb')
      ];
  }
}
