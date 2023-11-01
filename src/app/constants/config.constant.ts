import { Injectable } from '@angular/core';
import { GlobalConstants } from './global.constant';

@Injectable({
  providedIn: 'root', 
})

export class ConfigConstants {
  public static COOKIE_KEY_LANGUAGE="lang";
  public static COOKIE_KEY_THEME="theme";
  public static CODE_LANGUAGE_SPAIN = "es";
  public static CODE_LANGUAGE_ENGLAND = "en";
  public static PATH_IMAGES_CONFIG_THEMESELECTOR = GlobalConstants.PATH_IMAGES_GLOBAL + "sunIcon.gif";
  public static PATH_IMAGES_CONFIG_SPAINFLAG = GlobalConstants.PATH_IMAGES_LANGUAGES + "spainflagIcon.png";
  public static PATH_IMAGES_CONFIG_ENGLANDFLAG = GlobalConstants.PATH_IMAGES_LANGUAGES + "britflagIcon.png";
}