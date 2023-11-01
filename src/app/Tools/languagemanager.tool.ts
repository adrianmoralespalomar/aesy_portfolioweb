import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfigConstants } from '../constants/config.constant';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class LanguageManager {
    private currentLanguage = "es";
    private translateService: TranslateService;

    constructor(_translateService: TranslateService) {
        this.translateService = _translateService;
        this.SetDefaultLanguage();
    }

    public SetLanguage(newLanguage: string) {
        localStorage.setItem('lang', newLanguage);
        this.translateService.use(newLanguage);
        this.ChangeDocumentTitle(newLanguage);
    }
    public SetDefaultLanguage() {
        this.translateService.setDefaultLang(ConfigConstants.CODE_LANGUAGE_SPAIN);
        this.translateService.use(localStorage.getItem('lang') || ConfigConstants.CODE_LANGUAGE_SPAIN);
    }
    private ChangeDocumentTitle(newLanguage: string){
        this.translateService.get('titleWeb.default').subscribe((text: string) => {
            document.title = text;
        });
    }
    public async GetDefaultDocumentTitle(){
        const translationObservable: Observable<string> = this.translateService.get('titleWeb.default');       
        return firstValueFrom(translationObservable);
    }
    public async GetBlurDocumentTitle(){
        const translationObservable: Observable<string> = this.translateService.get('titleWeb.blur');       
        return firstValueFrom(translationObservable);
    }
}
