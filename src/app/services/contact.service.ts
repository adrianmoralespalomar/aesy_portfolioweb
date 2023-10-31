import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
  private baseUrl = 'https://api.tuapp.com'; // Reemplaza esto con la URL de tu servidor de correo

  constructor(private http: HttpClient) {}

  SendMail(datos: any): Observable<any> {
    const url = `${this.baseUrl}/enviar-correo`; // Reemplaza 'enviar-correo' con la ruta real en tu servidor

    // Suponiendo que el servidor espera los datos en un formato específico, como JSON:
    const body = JSON.stringify(datos);

    // Realizar una solicitud HTTP POST al servidor de correo
    return this.http.post(url, body);
  }
}
