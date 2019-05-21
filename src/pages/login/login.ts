import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5';
import { Storage } from '@ionic/storage';
import { MenuClientePage } from './../menu-cliente/menu-cliente';
import { MenuRestPage } from './../menu-rest/menu-rest'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})



export class LoginPage {

  public form: FormGroup;
  public usuario: string = "";
  public clave: string = "";
  public restaurante: boolean = false;
  public datos: any;
  public errormsg: string = "";
  public respuesta: any;
  public estado: any;
  public usuariosGuardados: any;
  public adminsGuardados: any;
  public reservas : any;
  public res_temp : any;
  public idReservas : any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public storage: Storage,
    private firestore: AngularFirestore
  ) {
    //this.preparar_usuarios();
    this.obtener_usuarios();
    this.obtener_reservas();
    this.preparar_firmas();
    this.prepara_forma();
    this.preparar_reservas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  prepara_forma() {
    this.errormsg = "";
    this.form = new FormGroup({
      usuario: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required),
      restaurante: new FormControl('', Validators.required)
    });
  }

  preparar_usuarios() {
    let us1 = {
      "id": "joicem",
      "usuario": "joicem",
      "clave": Md5.hashStr('12345')
    }
    let usuarios = [us1]
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    let admin = {
      "id": "admin",
      "usuario": "admin",
      "clave": Md5.hashStr('12345')
    }
    let admins = [admin]
    localStorage.setItem('administradores', JSON.stringify(admins))
    console.log('guardado')
  }


  preparar_firmas() {
    let firm = {
      "fecha": "02/02/2019",
      "restaurante": "Majadas",
    }
    let firm1 = {
      "fecha": "03/01/2019",
      "restaurante": "Miraflores",
    }

    let firmas = [firm, firm1]
    localStorage.setItem('firmas', JSON.stringify(firmas))
    console.log('guardado')

  }

  preparar_reservas() {
    let res1 = {
      "sede": "Miraflores",
      "fecha": "10/05/2019",
      "cantidad": "20",
      "id": "aiewr241"
    }

    let res2 = {
      "sede": "Condado Concepcion",
      "fecha": "10/05/2019",
      "cantidad": "20",
      "id": "akjshdk225"
    }

    let res3 = {
      "sede": "Avia",
      "fecha": "10/05/2019",
      "cantidad": "20",
      "id": "akjerk219"
    }

    let reservas = [res1, res2, res3]
    localStorage.setItem('reservas', JSON.stringify(reservas))
    console.log('Reservas guardadas')

  }


  onSubmit() {

    let controles = this.form.controls;
    let type = controles.restaurante.value;
    let clavemd5 = Md5.hashStr(controles.clave.value);

    let ident = {
      "id": controles.usuario.value,
      "usuario": controles.usuario.value,
      "clave": clavemd5
    };

    if (type == true) {
      this.adminsGuardados = JSON.parse(localStorage.getItem('administradores'))
      if (this.adminsGuardados != null) {
        for (let admin in this.adminsGuardados) {
          if (this.adminsGuardados[admin].usuario == ident.usuario && this.adminsGuardados[admin].clave == ident.clave) {
            console.log('USUARIO ENCONTRADO')
            this.navCtrl.setRoot(MenuRestPage);
          }
        }
        console.log('NO SE ENCONTRO USUARIO')
      }

    }
    else {
      console.log('Es un usuario')
      console.log(this.usuariosGuardados)
      if (this.usuariosGuardados != null) {
        for (let user in this.usuariosGuardados) {
          console.log(this.usuariosGuardados[user].data.nombre)
          if (this.usuariosGuardados[user].data.usuario == ident.usuario && this.usuariosGuardados[user].data.clave == ident.clave) {
            console.log('USUARIO ENCONTRADO')
            let current={
              "id": this.usuariosGuardados[user].id,
              "usuario":this.usuariosGuardados[user].data.usuario
            }
            this.idReservas=this.usuariosGuardados[user].data.reservas
            this.obtener_reservas()
            localStorage.setItem('current', JSON.stringify(current))
            this.navCtrl.setRoot(MenuClientePage);
          }
        }
      }
      console.log('NO SE ENCONTRO USUARIO')
    }
  }

  obtener_usuarios() {
    this.getAll('usuarios').subscribe((catsSnapshot) => {
      this.usuariosGuardados = [];
      catsSnapshot.forEach((catData: any) => {
        this.usuariosGuardados.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })

      console.log(this.usuariosGuardados)
    });

  }

  obtener_reservas(){
    this.getAll('reservas').subscribe((catsSnapshot) => {
      this.res_temp = [];
      catsSnapshot.forEach((catData: any) => {
        this.res_temp.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })

    }); 
    this.reservas=[]
    for (let reserva in this.res_temp ){
      if (this.idReservas.indexOf(this.res_temp[reserva].id)  > -1){
        this.reservas.push(this.res_temp[reserva])
      }
    }

    localStorage.setItem('reservas', JSON.stringify(this.reservas))
    
  }

  public getOne(collectionName: string, documentId: string) {
    return this.firestore.collection(collectionName).doc(documentId).snapshotChanges();
  }

  public getAll(collectionName: string) {
    return this.firestore.collection(collectionName).snapshotChanges();
  }

}
