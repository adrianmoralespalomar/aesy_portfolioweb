import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateService,TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Subject, map, throttleTime } from 'rxjs';
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule,TranslateModule, InputTextModule, InputTextareaModule,ToastModule],
    providers:[MessageService]
})
export class ContactComponent implements OnInit {
  formGroup!: FormGroup;
  private ejecutarSendMail$: Subject<void> = new Subject<void>();
  sendMailTime:Date =new Date();
  translateService=inject(TranslateService);
  messageToastService=inject(MessageService);
  constructor(private correoService: ContactService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeFormGroup();
    this.ejecutarSendMail$
    .pipe(throttleTime(60000))
    .subscribe(async () => {
      const formData = this.formGroup.value;
      // Lógica a ejecutar después de 1 minuto
      await this.correoService.SendMail(formData).then(
        (response) => {
          this.messageToastService.add({ severity: 'success', summary:this.translateService.instant('contact.successSendMail'), detail: this.translateService.instant('contact.successMessageSendMail') });
        },
        (error) => {
          this.messageToastService.add({ severity: 'error', summary:this.translateService.instant('contact.errorSendMail'), detail: this.translateService.instant('contact.errorMessageSendMail') });
        }
      );
    });
  }

  initializeFormGroup() {
    this.formGroup = this.formBuilder.group({
        name: [''],
        email: [''],
        subject: [''],
        message: [''],
    });
  }

  // SendMail() {
  //   const formData = this.formGroup.value;
  //   let currenTime=[...this.sendMailTime];
  //   if(this.sendMailTime==null || this.sendMailTime.setMinutes(this.sendMailTime.getMinutes() + 20)<new Date())
  //   this.correoService.SendMail(formData).then(
  //     (response) => {
  //       this.messageToastService.add({ severity: 'success', summary:this.translateService.instant('contact.successSendMail'), detail: this.translateService.instant('contact.successMessageSendMail') });
  //     },
  //     (error) => {
  //       this.messageToastService.add({ severity: 'error', summary:this.translateService.instant('contact.errorSendMail'), detail: this.translateService.instant('contact.errorMessageSendMail') });
  //     }
  //   );
  // }
  SendMail() {
    this.ejecutarSendMail$.next();
  }
}
