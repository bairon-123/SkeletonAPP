import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel,
  IonItem, IonButton, IonSelect, IonSelectOption, IonFooter
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonLabel,
    IonItem,
    IonButton,
    IonSelect,
    IonSelectOption,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    IonFooter
  ]
})
export class HomePage implements OnInit {
  @ViewChild('nombreInput', { static: false }) nombreRef!: ElementRef;
  @ViewChild('apellidoInput', { static: false }) apellidoRef!: ElementRef;

  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  fechaNacimiento: string = '';
  fechaMaxima: string = '';

  constructor(private route: ActivatedRoute, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'] || 'Invitado';
    });

    const hoy = new Date();
    this.fechaMaxima = hoy.toISOString().split('T')[0];
  }

limpiarCampos() {
  this.nombre = '';
  this.apellido = '';
  this.educacion = '';
  this.fechaNacimiento = '';

  this.agregarAnimacion(this.nombreRef);
  this.agregarAnimacion(this.apellidoRef);
}

agregarAnimacion(element: ElementRef) {
  const el = element.nativeElement;
  el.classList.remove('input-animado');
  void el.offsetWidth; 
  el.classList.add('input-animado');
}
  async mostrarDatos() {
    const alert = await this.alertCtrl.create({
      header: 'Usuario',
      message: `Su nombre es ${this.nombre} ${this.apellido}`,
      buttons: ['Yes']
    });

    await alert.present();
  }
}
