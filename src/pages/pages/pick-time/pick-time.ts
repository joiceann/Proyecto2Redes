import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController  } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the PickTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pick-time',
  templateUrl: 'pick-time.html',
})
export class PickTimePage {
  public form: FormGroup;
  public errormsg: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    ) {
      this.prepara_forma();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PickTimePage');
  }

  prepara_forma() {
    this.errormsg = "";
    this.form = new FormGroup({
      usuario: new FormControl('',Validators.required),
      clave: new FormControl('', Validators.required),
      restaurante: new FormControl('', Validators.required)
    });
  }

}
