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
        new SNS(1, 'Repository', 'assets/images/technologies/githubIcon.png', 'githubButton', 'Github Icon','https://github.com/adrianmoralespalomar?tab=repositories'),
        new SNS(2, 'Linkedin', 'assets/images/technologies/linkedinIcon.png', 'linkedinButton', 'Linkedin Icon','https://www.linkedin.com/in/adrian-morales-palomar-118960186'),
        new SNS(3, 'Download CV', 'assets/images/technologies/downloadIcon.png', 'greenButton', 'Download Icon'),
      ];
  }
}
