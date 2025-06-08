import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReservasPage implements OnInit {
  reservaForm: FormGroup;
  minDate: string = '';

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController // ✅ Agregado aquí
  ) {
    this.reservaForm = this.fb.group({
      nombrePerro: ['', Validators.required],
      raza: ['', Validators.required],
      tamaño: ['', Validators.required],
      tipoServicio: ['', Validators.required],
      peso: ['', Validators.required],
      indicaciones: [''],
      fechaHora: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const fechaMinima = new Date();
    fechaMinima.setDate(fechaMinima.getDate() + 2); // +2 día
    this.minDate = fechaMinima.toISOString();
  }

  guardarReserva(): void {
    if (this.reservaForm.invalid) {
      alert('Por favor completa todos los campos correctamente.');
      return;
    }

    const datos = this.reservaForm.value;
    console.log('Reserva guardada:', datos);
    alert('Reserva exitosa 🐾');
    this.navCtrl.navigateRoot('/home');
  }

  irHome(): void {
    this.navCtrl.navigateBack('/home'); // ✅ Ya funciona
  }
}
