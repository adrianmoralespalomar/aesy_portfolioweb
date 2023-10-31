import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formGroup!: FormGroup;
  constructor(private correoService: ContactService) {
    this.formGroup = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        subject: new FormControl(''),
        message: new FormControl(''),
    });
  }
  SendMail() {
    const formData = this.formGroup.value;
    console.log(formData.name)
    // Llamada al servicio de envío de correo
    // this.correoService.SendMail(formData).subscribe(
    //   (response) => {
    //     // Manejar la respuesta del servidor o del servicio de correo
    //     console.log('Correo enviado con éxito', response);
    //     // Puedes mostrar un mensaje de éxito, limpiar el formulario, etc.
    //   },
    //   (error) => {
    //     // Manejar errores
    //     console.error('Error al enviar el correo', error);
    //     // Puedes mostrar un mensaje de error o realizar otras acciones necesarias.
    //   }
    // );
  }
}
