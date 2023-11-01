import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { ConfigConstants } from 'src/app/constants/config.constant';
import { SqueezeInOut } from 'src/app/animations/squeezeinout.animation';
import { Subscription, fromEvent } from 'rxjs';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  standalone: true,
  imports: [NgClass],
  animations: [SqueezeInOut]
})
export class ConfigComponent implements OnInit {

  selectedLanguage="";
  defaultTheme="dark";
  public paththemeSelectorIcon=ConfigConstants.PATH_IMAGES_CONFIG_THEMESELECTOR;
  public pathlanguageIconSpain=ConfigConstants.PATH_IMAGES_CONFIG_SPAINFLAG;
  public pathlanguageIconBrit=ConfigConstants.PATH_IMAGES_CONFIG_ENGLANDFLAG;
  public codeLanguageSpain=ConfigConstants.CODE_LANGUAGE_SPAIN;
  public codeLanguageBrit=ConfigConstants.CODE_LANGUAGE_ENGLAND;
  public isThemeSelectorClicked = false;
  public isLanguageSelectorClicked:any;
  private clickSubscription: Subscription | undefined;
  @ViewChild('languageSelectorContainer') languageSelectorContainer: ElementRef;
  constructor() {
    this.languageSelectorContainer = new ElementRef(null);
  }

  ngOnInit() {
    this.selectedLanguage=this.codeLanguageSpain;
    //Check if click was outside languageSelectorContainer
    this.clickSubscription = fromEvent(document, 'click').subscribe((event: Event) => {
      if (!this.languageSelectorContainer.nativeElement.contains(event.target) && this.isLanguageSelectorClicked) this.isLanguageSelectorClicked = false;
    });
  }
  ngOnDestroy() {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }
  ChangeTheme(){
    this.defaultTheme=this.defaultTheme=="dark"?"light":"dark";
    this.isThemeSelectorClicked=!this.isThemeSelectorClicked;
  }
  ChangeLanguage(newLanguage:string) {
    if(this.selectedLanguage!=newLanguage)this.selectedLanguage=newLanguage;
    this.isLanguageSelectorClicked = !this.isLanguageSelectorClicked;
  }

}
