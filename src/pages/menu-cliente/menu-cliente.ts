import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PickTimePage } from '../pick-time/pick-time';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import {FirmasPage} from '../firmas/firmas';

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public qrScanner: QRScanner) {
  }

  createCode() {
    this.createdCode = this.qrData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuClientePage');
  }

  goPickTime() {
    console.log("presionando")
    this.navCtrl.push(PickTimePage);
  }

  goFirmas() {
    console.log("presionando")
    this.navCtrl.push(FirmasPage);
  }


  scannear() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));

  }

}
