import { Component, OnInit } from '@angular/core';
import { MenuElementsInterface } from './menu.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {
  
  datosMenu: MenuElementsInterface[] =[
    {nombre: 'Inicio',enlace:'/Login',
    icono:'Log-in'},
    {nombre: 'Alumnos',enlace:'/alumnos',
    icono:'school-outline'},
    {nombre: 'Receteas',enlace:'/recetas',
    icono:'restaurant-outline'},
    {nombre: 'Tabs',enlace:'/tabs',
    icono:'folder-outline'},
    {nombre: 'home' ,enlace: '/home',
    icono: 'home'},
    {nombre: 'Turismo',enlace: '/destinos',
     icono: 'bus' },
     {nombre: 'Salir',enlace:'/home',
     icono:'log-out'}
  ];
 
  constructor(private router:Router) { }

  ngOnInit() {
    
  }
navegar(link: String){
      this.router.navigate([link]);
    }
}
