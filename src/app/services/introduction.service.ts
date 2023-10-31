import { Injectable } from "@angular/core";
import { SNS } from "../models/sns";
import { IntroductionRepository } from "../repositories/introduction.repository";

@Injectable()
export class IntroductionService{
  private snsData: SNS[] = [];
  private introductionRepository: IntroductionRepository;
  constructor(_introductionRepository:IntroductionRepository ) {
    this.introductionRepository=_introductionRepository;
    this.introductionRepository.album$.subscribe(data => {
      this.snsData = data;
    });
  }
 GetSNS(): SNS[] {
    return this.snsData;
  }
}
