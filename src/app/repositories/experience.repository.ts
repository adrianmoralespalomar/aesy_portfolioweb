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
            'experience.jobNeoris.job',
            'experience.jobNeoris.description',
            'Neoris',
            'experience.jobNeoris.date',
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
            'experience.jobInforyde.job',
            'experience.jobInforyde.description',
            'Inforyde',
            'experience.jobInforyde.date',
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
            'experience.jobBPR.job',
            'experience.jobBPR.description',
            'BPR',
            'experience.jobBPR.date',
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
            'experience.jobElYetiRojo.job',
            'experience.jobElYetiRojo.description',
            'ElYetiRojo',
            'experience.jobElYetiRojo.date',
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