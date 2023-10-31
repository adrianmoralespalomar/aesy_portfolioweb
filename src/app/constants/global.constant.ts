import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class GlobalConstants {
  public readonly CONSTANT_1 = 'Valor 1';
  public readonly CONSTANT_2 = 'Valor 2';
  public readonly PATH_IMAGES_GLOBAL = "assets/images/general/";
  public readonly PATH_IMAGES_PROJECTS = "assets/images/projects/";
  public readonly PATH_IMAGES_TECHNOLOGIES = "assets/images/technologies/";
}