import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Experience } from "../models/experience";
import { Technology } from "../models/technology";
import { TechnologyConstants } from "../constants/technology.constant";

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
                new Technology(1,TechnologyConstants.NAME_TECHNOLOGY_NET,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_NET),
                new Technology(2,TechnologyConstants.NAME_TECHNOLOGY_ANGULAR,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_ANGULAR),
                new Technology(3,TechnologyConstants.NAME_TECHNOLOGY_TYPESCRIPT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_TYPESCRIPT),
                new Technology(4,TechnologyConstants.NAME_TECHNOLOGY_BOOTSTRAP,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_BOOTSTRAP),
                new Technology(5,TechnologyConstants.NAME_TECHNOLOGY_HTML5,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_HTML5),
                new Technology(6,TechnologyConstants.NAME_TECHNOLOGY_CSS,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_CSS),
                new Technology(7,TechnologyConstants.NAME_TECHNOLOGY_JAVASCRIPT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_JAVASCRIPT),
                new Technology(8,TechnologyConstants.NAME_TECHNOLOGY_SQL,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_SQL),
                new Technology(9,TechnologyConstants.NAME_TECHNOLOGY_GIT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_GIT),
                new Technology(10,TechnologyConstants.NAME_TECHNOLOGY_JIRA,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_JIRA),
            ],
            '#9C27B0'
        ),
        new Experience(2,
            'Programmer',
            'Desarrollo de Aplicaciones Web en NET 3.1 y Angular para Iberdrola.',
            'Inforyde',
            'January 2021 - June 2021',
            [
                new Technology(1,TechnologyConstants.NAME_TECHNOLOGY_NET,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_NET),
                new Technology(2,TechnologyConstants.NAME_TECHNOLOGY_ANGULAR,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_ANGULAR),
                new Technology(3,TechnologyConstants.NAME_TECHNOLOGY_TYPESCRIPT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_TYPESCRIPT),
                new Technology(4,TechnologyConstants.NAME_TECHNOLOGY_BOOTSTRAP,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_BOOTSTRAP),
                new Technology(5,TechnologyConstants.NAME_TECHNOLOGY_HTML5,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_HTML5),
                new Technology(6,TechnologyConstants.NAME_TECHNOLOGY_CSS,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_CSS),
                new Technology(7,TechnologyConstants.NAME_TECHNOLOGY_JAVASCRIPT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_JAVASCRIPT),
                new Technology(8,TechnologyConstants.NAME_TECHNOLOGY_SQL,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_SQL),
                new Technology(9,TechnologyConstants.NAME_TECHNOLOGY_GIT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_GIT),
                new Technology(11,TechnologyConstants.NAME_TECHNOLOGY_AZUREDEVOPS,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_AZUREDEVOPS),
                new Technology(12,TechnologyConstants.NAME_TECHNOLOGY_TRELLO,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_TRELLO)
            ],
            '#673AB7'
        ),
        new Experience(3,
            'Programmer',
            'Desarrollo de Aplicaciones Web en NET 3.1 y Angular para el Hospital la Paz.',
            'BPR',
            'July 2019 - January 2021',
            [
                new Technology(1,TechnologyConstants.NAME_TECHNOLOGY_NET,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_NET),
                new Technology(2,TechnologyConstants.NAME_TECHNOLOGY_ANGULAR,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_ANGULAR),
                new Technology(3,TechnologyConstants.NAME_TECHNOLOGY_TYPESCRIPT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_TYPESCRIPT),
                new Technology(4,TechnologyConstants.NAME_TECHNOLOGY_BOOTSTRAP,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_BOOTSTRAP),
                new Technology(5,TechnologyConstants.NAME_TECHNOLOGY_HTML5,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_HTML5),
                new Technology(6,TechnologyConstants.NAME_TECHNOLOGY_CSS,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_CSS),
                new Technology(7,TechnologyConstants.NAME_TECHNOLOGY_JAVASCRIPT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_JAVASCRIPT),
                new Technology(8,TechnologyConstants.NAME_TECHNOLOGY_SQL,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_SQL),
                new Technology(9,TechnologyConstants.NAME_TECHNOLOGY_GIT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_GIT),
                new Technology(11,TechnologyConstants.NAME_TECHNOLOGY_AZUREDEVOPS,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_AZUREDEVOPS),
                new Technology(12,TechnologyConstants.NAME_TECHNOLOGY_TRELLO,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_TRELLO)
            ],
            '#FF9800'
        ),
        new Experience(3,
            'Programmer',
            'Desarrollo de Aplicaciones Web en HTML5, CSS y Bootstrap para diferentes clientes.',
            'ElYetiRojo',
            'June 2015 - September 2016',
            [
                new Technology(4,TechnologyConstants.NAME_TECHNOLOGY_BOOTSTRAP,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_BOOTSTRAP),
                new Technology(5,TechnologyConstants.NAME_TECHNOLOGY_HTML5,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_HTML5),
                new Technology(6,TechnologyConstants.NAME_TECHNOLOGY_CSS,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_CSS),
                new Technology(7,TechnologyConstants.NAME_TECHNOLOGY_JAVASCRIPT,TechnologyConstants.PATH_IMAGES_TECHNOLOGY_JAVASCRIPT),
            ],
            '#607D8B'
        )
      ];
  }
}