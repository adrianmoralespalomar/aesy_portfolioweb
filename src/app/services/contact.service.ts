import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
@Injectable()
export class ContactService {
  constructor() {emailjs.init('Vee_bMPyztndfCc_m')}

  SendMail(datos: any): Promise<any> {
    return emailjs.send("service_15o2pta","template_r8nz9gl",{
      from_name: datos.name,
      to_name: "Adri",
      from_email: datos.email,
      subject: datos.subject,
      message: datos.message
      });
  }
}
