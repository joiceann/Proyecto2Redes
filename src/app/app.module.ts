import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Md5 } from 'ts-md5/dist/md5';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuClientePage } from '../pages/menu-cliente/menu-cliente';
import { MenuRestPage } from '../pages/menu-rest/menu-rest'
import { FirmasPage } from '../pages/firmas/firmas'
import { ReservarPage } from '../pages/reservar/reservar'
import { PickTimePage } from '../pages/pick-time/pick-time'

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { from } from 'rxjs/observable/from';

/**************
  Firebase 
**************/
/*import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore'*/

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

var config = {
  apiKey: "AIzaSyCtlC_icvipczPGhpHS2d7kPv2cLdoCD0c",
  authDomain: "proyectoredes-b7b7f.firebaseapp.com",
  databaseURL: "https://proyectoredes-b7b7f.firebaseio.com",
  projectId: "proyectoredes-b7b7f",
  storageBucket: "proyectoredes-b7b7f.appspot.com",
  messagingSenderId: "714215123710",
  appId: "1:714215123710:web:995da11a9929ee41"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuClientePage,
    MenuRestPage,
    PickTimePage,
    FirmasPage,
    ReservarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxQRCodeModule,
    //new
    AngularFireModule.initializeApp(config),
    //AngularFireDatabaseModule,               
    AngularFireAuthModule,
    AngularFirestoreModule   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MenuClientePage,
    MenuRestPage,
    PickTimePage,
    FirmasPage,
    ReservarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Md5,
    QRScanner
  ]
})
export class AppModule { }
