import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule, AlertController, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    this.loginForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      usuario: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    });
  }

  async login(): Promise<void> {
    const form = this.loginForm;

    if (form.invalid) {
      let mensaje = '';

      if (form.get('nombreUsuario')?.hasError('required')) {
        mensaje = 'El nombre de usuario no puede estar vacío.';
      } else if (form.get('usuario')?.hasError('required')) {
        mensaje = 'El correo electrónico es obligatorio.';
      } else if (form.get('usuario')?.hasError('email')) {
        mensaje = 'El correo debe tener un formato válido (ej: usuario@correo.com).';
      } else if (form.get('contraseña')?.hasError('required')) {
        mensaje = 'La contraseña no puede estar vacía.';
      } else if (form.get('contraseña')?.hasError('minlength') || form.get('contraseña')?.hasError('maxlength')) {
        mensaje = 'La contraseña debe tener entre 5 y 8 caracteres.';
      } else {
        mensaje = 'Por favor completa los campos correctamente.';
      }

      const alert = await this.alertCtrl.create({
        header: 'Error de validación',
        message: mensaje,
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const nombreUsuario: string = form.value.nombreUsuario;
    const correo: string = form.value.usuario;
    const contraseña: string = form.value.contraseña;

    console.log('Nombre Usuario:', nombreUsuario);
    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);

    localStorage.setItem('nombreUsuario', nombreUsuario);
    localStorage.setItem('correoUsuario', correo);
    localStorage.setItem('rolUsuario', 'usuario');

    this.navCtrl.navigateForward('/home');
  }
}
