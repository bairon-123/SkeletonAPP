import { Component, OnInit } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class PerfilPage implements OnInit {
  usuario = {
    nombreUsuario: '',
    correo: '',
    rol: 'usuario'
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit(): void {
    const nombre = localStorage.getItem('nombreUsuario');
    const correo = localStorage.getItem('correoUsuario');
    const rol = localStorage.getItem('rolUsuario');

    this.usuario.nombreUsuario = nombre ?? 'Usuario desconocido';
    this.usuario.correo = correo ?? 'Sin correo';
    this.usuario.rol = rol ?? 'usuario';
  }

  irHome() {
    this.navCtrl.navigateForward('/home');
  }
}



