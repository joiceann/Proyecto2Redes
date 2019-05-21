import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import {ReservarPage} from '../reservar/reservar';

@IonicPage()
@Component({
  selector: 'page-pick-time',
  templateUrl: 'pick-time.html',
})
export class PickTimePage {
  public reservas: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    ) {
      this.cargar_reservas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickTimePage');
  }

  cargar_reservas(){
    this.reservas = JSON.parse(localStorage.getItem('reservas'))
    if (this.reservas===null || this.reservas===undefined){
      this.reservas=[]
    }
  }

  go_reservas(){
    this.navCtrl.push(ReservarPage);
  }

  unique_id(){
    return Math.random().toString(36).substr(2, 9);
  }

}
