import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestTecnicoAdsum';

  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.contactForm = this.formBuilder.group({
      nombreCompleto: '',
      nombreEmpresa: '',
      correoElectronico: '',
      telefono: '',
      categoria: '',
      mensaje: ''
    });
  }

  onSubmit() {
    const formData = this.contactForm.value;
    const jsonFormData = JSON.stringify(formData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(jsonFormData);
    this.httpClient.post('https://localhost:7297/api/contacto', jsonFormData, { headers }).subscribe(
      (response) => {
        console.log('Solicitud enviada con éxito', response);
      },
      (error) => {
        console.error('Error al enviar la solicitud', error);
      }
    );
  }
}
