import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firmas',
  templateUrl: 'firmas.html',
})
export class FirmasPage {
  public firmas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.obtener_firmas();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirmasPage');
  }

  obtener_firmas(){
    this.firmas = JSON.parse(localStorage.getItem('firmas'))
  }

}
