import { Component } from '@angular/core';
import { SNS } from 'src/app/models/sns';
import { IntroductionService } from 'src/app/services/introduction.service';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { GlobalConstants as GlobalConstants } from 'src/app/constants/global.constant';
import { TranslateModule } from '@ngx-translate/core';
import { IntroductionConstants } from 'src/app/constants/introduction.constant';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.css'],
    standalone: true,
    imports: [NgFor,NgIf, NgOptimizedImage,TranslateModule]
})
export class IntroductionComponent {
  public snsData: SNS[] = [];
  private introductionService: IntroductionService;
  public pathImageGlobal=GlobalConstants.PATH_IMAGES_GLOBAL;
  constructor(_introductionService:IntroductionService ) {
    this.introductionService=_introductionService;
    this.snsData=this.introductionService.GetSNS();
  }
  DownloadCV(){
    const a = document.createElement('a');
    a.href = IntroductionConstants.PATH_CV;
    a.download = IntroductionConstants.NAMEFILE_CV;
    a.click();
  }
}
