import { Component, OnInit } from '@angular/core';
import { AlumnosPage } from '../alumnos/alumnos.page';
import { RecetasPage } from '../recetas/recetas.page';
import {NavController,NavParams} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html'
  
})
export class TabsPage implements OnInit {

  constructor(private navController:NavController ,private navParams:NavParams) { }
   tab1: any = AlumnosPage;
   tab2: any = RecetasPage;


  ngOnInit() {


  }

}
