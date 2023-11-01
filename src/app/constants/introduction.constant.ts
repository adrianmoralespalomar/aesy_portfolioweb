import { Injectable } from '@angular/core';
import { GlobalConstants } from './global.constant';

@Injectable({
  providedIn: 'root', 
})

export class IntroductionConstants {
  public static NAMEFILE_CV="Adrian Morales Palomar Curriculum.pdf";
  public static PATH_CV = GlobalConstants.PATH_DOCUMENTS + IntroductionConstants.NAMEFILE_CV;
}