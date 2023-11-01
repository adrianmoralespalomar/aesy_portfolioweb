import { Injectable } from '@angular/core';
import { GlobalConstants } from './global.constant';

@Injectable({
  providedIn: 'root', 
})

export class TechnologyConstants {
  public static NAME_TECHNOLOGY_NET = "NET 6";
  public static PATH_IMAGES_TECHNOLOGY_NET = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "netcoreIcon.png";
  public static NAME_TECHNOLOGY_ANGULAR = "Angular";
  public static PATH_IMAGES_TECHNOLOGY_ANGULAR = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "angularIcon.png";
  public static NAME_TECHNOLOGY_TYPESCRIPT = "TypeScript";
  public static PATH_IMAGES_TECHNOLOGY_TYPESCRIPT = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "typescriptIcon.png";
  public static NAME_TECHNOLOGY_BOOTSTRAP = "Bootstrap";
  public static PATH_IMAGES_TECHNOLOGY_BOOTSTRAP = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "bootstrapIcon.png";
  public static NAME_TECHNOLOGY_HTML5 = "HTML5";
  public static PATH_IMAGES_TECHNOLOGY_HTML5 = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "htmlIcon.png";
  public static NAME_TECHNOLOGY_CSS = "CSS";
  public static PATH_IMAGES_TECHNOLOGY_CSS = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "cssIcon.png";
  public static NAME_TECHNOLOGY_JAVASCRIPT = "JavaScript";
  public static PATH_IMAGES_TECHNOLOGY_JAVASCRIPT = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "javascriptIcon.png";
  public static NAME_TECHNOLOGY_SQL = "Sql Server";
  public static PATH_IMAGES_TECHNOLOGY_SQL = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "sqlIcon.png";
  public static NAME_TECHNOLOGY_GIT = "Git";
  public static PATH_IMAGES_TECHNOLOGY_GIT = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "gitIcon.png";
  public static NAME_TECHNOLOGY_JIRA = "Jira";
  public static PATH_IMAGES_TECHNOLOGY_JIRA = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "jiraIcon.png";
  public static NAME_TECHNOLOGY_AZUREDEVOPS = "Azure Devops";
  public static PATH_IMAGES_TECHNOLOGY_AZUREDEVOPS = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "azuredevopsIcon.png";
  public static NAME_TECHNOLOGY_TRELLO = "Trello";
  public static PATH_IMAGES_TECHNOLOGY_TRELLO = GlobalConstants.PATH_IMAGES_TECHNOLOGIES + "trelloIcon.png";
}