import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Md5 } from 'ts-md5/dist/md5';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {MenuClientePage } from '../pages/menu-cliente/menu-cliente';
import {MenuRestPage} from '../pages/menu-rest/menu-rest'
import {FirmasPage} from '../pages/firmas/firmas'


import {PickTimePage} from '../pages/pick-time/pick-time'
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuClientePage,
    MenuRestPage,
    PickTimePage,
    FirmasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    MenuClientePage,
    MenuRestPage,
    PickTimePage,
    FirmasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Md5,
    QRScanner
  ]
})
export class AppModule {}
