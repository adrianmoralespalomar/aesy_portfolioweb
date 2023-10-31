import { Component } from '@angular/core';
import { SNS } from 'src/app/models/sns';
import { IntroductionService } from 'src/app/services/introduction.service';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.css'],
    standalone: true,
    imports: [NgFor, NgOptimizedImage]
})
export class IntroductionComponent {
  public snsData: SNS[] = [];
  private introductionService: IntroductionService;

  constructor(_introductionService:IntroductionService ) {
    this.introductionService=_introductionService;
    this.snsData=this.introductionService.GetSNS();
  }
}
