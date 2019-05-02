import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PickTimePage } from '../pick-time/pick-time';

/**
 * Generated class for the MenuClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-cliente',
  templateUrl: 'menu-cliente.html',
})
export class MenuClientePage {

  qrData = null;
  createdCode = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  createCode(){
    this.createdCode = this.qrData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuClientePage');
  }

  goPickTime(){
    console.log("presionando")
    this.navCtrl.push(PickTimePage);
  }

}
