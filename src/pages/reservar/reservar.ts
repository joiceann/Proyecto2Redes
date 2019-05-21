import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-reservar',
  templateUrl: 'reservar.html',
})
export class ReservarPage {
  public form: FormGroup;
  public errormsg: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fb: FormBuilder
  ){
    this.prepara_forma();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservarPage');
  }

  prepara_forma() {
    this.errormsg = "";
    this.form = new FormGroup({
      nombre: new FormControl('',Validators.required),
      sede: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required)
    });
  }

}
