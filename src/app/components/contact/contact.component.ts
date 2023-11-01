import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, InputTextModule, InputTextareaModule]
})
export class ContactComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private correoService: ContactService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.formGroup = this.formBuilder.group({
        name: [''],
        email: [''],
        subject: [''],
        message: [''],
    });
  }

  SendMail() {
    const formData = this.formGroup.value;
    // Llamada al servicio de envío de correo
    this.correoService.SendMail(formData).then(
      (response) => {
        // Manejar la respuesta del servidor o del servicio de correo
        console.log('Correo enviado con éxito', response);
        // Puedes mostrar un mensaje de éxito, limpiar el formulario, etc.
      },
      (error) => {
        // Manejar errores
        const errorMessage = 'Error al enviar el correo. Por favor, inténtelo de nuevo más tarde.';
        // Puedes mostrar un mensaje de error o realizar otras acciones necesarias.
        console.error(errorMessage, error);
      }
    );
  }
}
