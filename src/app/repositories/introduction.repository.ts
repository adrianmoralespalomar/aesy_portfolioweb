import { Injectable } from "@angular/core";
import { SNS } from "../models/sns";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class IntroductionRepository{
  private sns = new BehaviorSubject<SNS[]>(new Array<SNS>());
  public album$ = this.sns.asObservable();
  constructor() {this.sns.next(this.GetDataFromDataBase());}
  public GetDataFromDataBase(){
    return [
        new SNS(1, 'introduction.buttonRepository', 'assets/images/technologies/githubIcon.png', 'githubButton', 'Github Icon','https://github.com/adrianmoralespalomar?tab=repositories',false),
        new SNS(2, 'introduction.buttonLinkedin', 'assets/images/technologies/linkedinIcon.png', 'linkedinButton', 'Linkedin Icon','https://www.linkedin.com/in/adrian-morales-palomar-118960186',false),
        new SNS(3, 'introduction.buttonDownloadCV', 'assets/images/technologies/downloadIcon.png', 'greenButton', 'Download Icon','DownloadCV()',true),
      ];
  }
}
