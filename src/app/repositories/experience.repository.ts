import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Experience } from "../models/experience";
import { Technology } from "../models/technology";

@Injectable()
export class ExperienceRepository{
  private experiences = new BehaviorSubject<Experience[]>(new Array<Experience>());
  public experiences$ = this.experiences.asObservable();
  constructor() {this.experiences.next(this.GetDataFromDataBase());}
  public GetDataFromDataBase(){
    return [
        new Experience(1,
            'Analyst and ANS Technical Support Manager',
            'Desarrollo/Maquetación de Aplicaciones Web en NET6 y Angular para BBVA. Coordinador de la ANS encargado resolver incidencias/peticiones de usuarios y evolutivos de aplicaciones.',
            'Neoris',
            'June 2021 - Now',
            [
                new Technology(1,"NET 6","assets/images/technologies/netcoreIcon.png"),
                new Technology(2,"Angular","assets/images/technologies/angularIcon.png"),
                new Technology(3,"TypeScript","assets/images/technologies/typescriptIcon.png"),
                new Technology(4,"Bootstrap","assets/images/technologies/bootstrapIcon.png"),
                new Technology(5,"HTML5","assets/images/technologies/htmlIcon.png"),
                new Technology(6,"CSS","assets/images/technologies/cssIcon.png"),
                new Technology(7,"JavaScript","assets/images/technologies/javascriptIcon.png"),
                new Technology(8,"Sql Server","assets/images/technologies/sqlIcon.png"),
                new Technology(9,"Git","assets/images/technologies/gitIcon.png"),
                new Technology(10,"Jira","assets/images/technologies/jiraIcon.png")
            ],
            '#9C27B0'
        ),
        new Experience(2,
            'Programmer',
            'Desarrollo de Aplicaciones Web en NET 3.1 y Angular para Iberdrola.',
            'Inforyde',
            'January 2021 - June 2021',
            [
                new Technology(1,"NET 3.1","assets/images/technologies/netcoreIcon.png"),
                new Technology(2,"Angular","assets/images/technologies/angularIcon.png"),
                new Technology(3,"TypeScript","assets/images/technologies/typescriptIcon.png"),
                new Technology(4,"Bootstrap","assets/images/technologies/bootstrapIcon.png"),
                new Technology(5,"HTML5","assets/images/technologies/htmlIcon.png"),
                new Technology(6,"CSS","assets/images/technologies/cssIcon.png"),
                new Technology(7,"JavaScript","assets/images/technologies/javascriptIcon.png"),
                new Technology(8,"Sql Server","assets/images/technologies/sqlIcon.png"),
                new Technology(9,"Git","assets/images/technologies/gitIcon.png"),
                new Technology(11,"Azure Devops","assets/images/technologies/azuredevopsIcon.png"),
                new Technology(12,"Trello","assets/images/technologies/trelloIcon.png")
            ],
            '#673AB7'
        ),
        new Experience(3,
            'Programmer',
            'Desarrollo de Aplicaciones Web en NET 3.1 y Angular para el Hospital la Paz.',
            'BPR',
            'July 2019 - January 2021',
            [
                new Technology(1,"NET 3.1","assets/images/technologies/netcoreIcon.png"),
                new Technology(2,"Angular","assets/images/technologies/angularIcon.png"),
                new Technology(3,"TypeScript","assets/images/technologies/typescriptIcon.png"),
                new Technology(4,"Bootstrap","assets/images/technologies/bootstrapIcon.png"),
                new Technology(5,"HTML5","assets/images/technologies/htmlIcon.png"),
                new Technology(6,"CSS","assets/images/technologies/cssIcon.png"),
                new Technology(7,"JavaScript","assets/images/technologies/javascriptIcon.png"),
                new Technology(8,"Sql Server","assets/images/technologies/sqlIcon.png"),
                new Technology(9,"Git","assets/images/technologies/gitIcon.png"),
                new Technology(11,"Azure Devops","assets/images/technologies/azuredevopsIcon.png"),
                new Technology(12,"Trello","assets/images/technologies/trelloIcon.png")
            ],
            '#FF9800'
        ),
        new Experience(3,
            'Programmer',
            'Desarrollo de Aplicaciones Web en HTML5, CSS y Bootstrap para diferentes clientes.',
            'ElYetiRojo',
            'June 2015 - September 2016',
            [
                new Technology(4,"Bootstrap","assets/images/technologies/bootstrapIcon.png"),
                new Technology(5,"HTML5","assets/images/technologies/htmlIcon.png"),
                new Technology(6,"CSS","assets/images/technologies/cssIcon.png"),
                new Technology(7,"JavaScript","assets/images/technologies/javascriptIcon.png")
            ],
            '#607D8B'
        )
      ];
  }
}