import { Injectable } from "@angular/core";
import { SNS } from "../models/sns";
import { BehaviorSubject } from "rxjs";
import { Technology } from "../models/technology";

@Injectable()
export class SkillsRepository{
  private tech = new BehaviorSubject<Technology[]>(new Array<Technology>());
  public tech$ = this.tech.asObservable();
  constructor() {this.tech.next(this.GetDataFromDataBase());}
  public GetDataFromDataBase(){
    return [
      new Technology(1,"NET 7","assets/images/technologies/netcoreIcon.png"),
      new Technology(2,"Angular","assets/images/technologies/angularIcon.png"),
      new Technology(3,"TypeScript","assets/images/technologies/typescriptIcon.png"),
      new Technology(4,"Bootstrap 5","assets/images/technologies/bootstrapIcon.png"),
      new Technology(5,"HTML5","assets/images/technologies/htmlIcon.png"),
      new Technology(6,"CSS","assets/images/technologies/cssIcon.png"),
      new Technology(7,"JavaScript","assets/images/technologies/javascriptIcon.png"),
      new Technology(8,"Sql Server","assets/images/technologies/sqlIcon.png"),
      new Technology(9,"Git","assets/images/technologies/gitIcon.png"),
      new Technology(10,"Jira","assets/images/technologies/jiraIcon.png"),
      new Technology(11,"Azure Devops","assets/images/technologies/azuredevopsIcon.png"),
      new Technology(12,"Trello","assets/images/technologies/trelloIcon.png")
    ];
  }
}
