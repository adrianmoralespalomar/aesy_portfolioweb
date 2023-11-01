import { Injectable } from '@angular/core';
import { GlobalConstants } from './global.constant';

@Injectable({
  providedIn: 'root', 
})

export class ConfigConstants {
  public static CODE_LANGUAGE_SPAIN = "es-ES";
  public static CODE_LANGUAGE_ENGLAND = "en-EN";
  public static PATH_IMAGES_CONFIG_THEMESELECTOR = GlobalConstants.PATH_IMAGES_GLOBAL + "sunIcon.gif";
  public static PATH_IMAGES_CONFIG_SPAINFLAG = GlobalConstants.PATH_IMAGES_LANGUAGES + "spainflagIcon.png";
  public static PATH_IMAGES_CONFIG_ENGLANDFLAG = GlobalConstants.PATH_IMAGES_LANGUAGES + "britflagIcon.png";
}