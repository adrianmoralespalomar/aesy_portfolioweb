import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class GlobalConstants {
  public static PATH_DOCUMENTS = "assets/documents/";
  public static PATH_IMAGES_GLOBAL = "assets/images/general/";
  public static PATH_IMAGES_LANGUAGES = "assets/images/general/languages/";
  public static PATH_IMAGES_PROJECTS = "assets/images/projects/";
  public static PATH_IMAGES_TECHNOLOGIES = "assets/images/technologies/";
}