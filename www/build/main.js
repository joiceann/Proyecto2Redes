webpackJsonp([6],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_cliente_menu_cliente__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_rest_menu_rest__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, fb, loadingCtrl, alertCtrl, storage, firestore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.firestore = firestore;
        this.usuario = "";
        this.clave = "";
        this.restaurante = false;
        this.errormsg = "";
        this.idReservas = [];
        //this.preparar_usuarios();
        this.obtener_usuarios();
        this.obtener_reservas();
        this.preparar_firmas();
        this.prepara_forma();
        this.preparar_reservas();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.prepara_forma = function () {
        this.errormsg = "";
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            usuario: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            clave: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            restaurante: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        });
    };
    LoginPage.prototype.preparar_usuarios = function () {
        var us1 = {
            "id": "joicem",
            "usuario": "joicem",
            "clave": __WEBPACK_IMPORTED_MODULE_3_ts_md5__["Md5"].hashStr('12345')
        };
        var usuarios = [us1];
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        var admin = {
            "id": "admin",
            "usuario": "admin",
            "clave": __WEBPACK_IMPORTED_MODULE_3_ts_md5__["Md5"].hashStr('12345')
        };
        var admins = [admin];
        localStorage.setItem('administradores', JSON.stringify(admins));
        console.log('guardado');
    };
    LoginPage.prototype.preparar_firmas = function () {
        var firm = {
            "fecha": "02/02/2019",
            "restaurante": "Majadas",
        };
        var firm1 = {
            "fecha": "03/01/2019",
            "restaurante": "Miraflores",
        };
        var firmas = [firm, firm1];
        localStorage.setItem('firmas', JSON.stringify(firmas));
        console.log('guardado');
    };
    LoginPage.prototype.preparar_reservas = function () {
        var res1 = {
            "sede": "Miraflores",
            "fecha": "10/05/2019",
            "cantidad": "20",
            "id": "aiewr241"
        };
        var res2 = {
            "sede": "Condado Concepcion",
            "fecha": "10/05/2019",
            "cantidad": "20",
            "id": "akjshdk225"
        };
        var res3 = {
            "sede": "Avia",
            "fecha": "10/05/2019",
            "cantidad": "20",
            "id": "akjerk219"
        };
        var reservas = [res1, res2, res3];
        localStorage.setItem('reservas', JSON.stringify(reservas));
        console.log('Reservas guardadas');
    };
    LoginPage.prototype.onSubmit = function () {
        var controles = this.form.controls;
        var type = controles.restaurante.value;
        var clavemd5 = __WEBPACK_IMPORTED_MODULE_3_ts_md5__["Md5"].hashStr(controles.clave.value);
        var ident = {
            "id": controles.usuario.value,
            "usuario": controles.usuario.value,
            "clave": clavemd5
        };
        if (type == true) {
            this.adminsGuardados = JSON.parse(localStorage.getItem('administradores'));
            if (this.adminsGuardados != null) {
                for (var admin in this.adminsGuardados) {
                    if (this.adminsGuardados[admin].usuario == ident.usuario && this.adminsGuardados[admin].clave == ident.clave) {
                        console.log('USUARIO ENCONTRADO');
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__menu_rest_menu_rest__["a" /* MenuRestPage */]);
                    }
                }
                console.log('NO SE ENCONTRO USUARIO');
            }
        }
        else {
            console.log('Es un usuario');
            console.log(this.usuariosGuardados);
            if (this.usuariosGuardados != null) {
                for (var user in this.usuariosGuardados) {
                    console.log(this.usuariosGuardados[user].data.nombre);
                    if (this.usuariosGuardados[user].data.usuario == ident.usuario && this.usuariosGuardados[user].data.clave == ident.clave) {
                        console.log('USUARIO ENCONTRADO');
                        var current = {
                            "id": this.usuariosGuardados[user].id,
                            "usuario": this.usuariosGuardados[user].data.usuario
                        };
                        this.idReservas = this.usuariosGuardados[user].data.reservas;
                        this.obtener_reservas();
                        localStorage.setItem('current', JSON.stringify(current));
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_cliente_menu_cliente__["a" /* MenuClientePage */]);
                    }
                }
            }
            console.log('NO SE ENCONTRO USUARIO');
        }
    };
    LoginPage.prototype.obtener_usuarios = function () {
        var _this = this;
        this.getAll('usuarios').subscribe(function (catsSnapshot) {
            _this.usuariosGuardados = [];
            catsSnapshot.forEach(function (catData) {
                _this.usuariosGuardados.push({
                    id: catData.payload.doc.id,
                    data: catData.payload.doc.data()
                });
            });
            console.log(_this.usuariosGuardados);
        });
    };
    LoginPage.prototype.obtener_reservas = function () {
        var _this = this;
        this.getAll('reservas').subscribe(function (catsSnapshot) {
            _this.res_temp = [];
            catsSnapshot.forEach(function (catData) {
                _this.res_temp.push({
                    id: catData.payload.doc.id,
                    data: catData.payload.doc.data()
                });
            });
        });
        this.reservas = [];
        for (var reserva in this.res_temp) {
            if (this.idReservas.indexOf(this.res_temp[reserva].id) > -1) {
                this.reservas.push(this.res_temp[reserva]);
            }
        }
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
    };
    LoginPage.prototype.getOne = function (collectionName, documentId) {
        return this.firestore.collection(collectionName).doc(documentId).snapshotChanges();
    };
    LoginPage.prototype.getAll = function (collectionName) {
        return this.firestore.collection(collectionName).snapshotChanges();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n      <ion-buttons start>\n\n          <button ion-button icon-only >\n\n            <ion-icon name="refresh"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n          Login \n\n          <ion-icon name="wifi"></ion-icon>\n\n        </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" >\n\n      <ion-item>\n\n        <ion-label floating primary>Usuario</ion-label>\n\n        <ion-input [(ngModel)]="usuario" type="text" formControlName="usuario" id="usuario" spellcheck="false" autocapitalize="off"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating primary>Clave</ion-label>\n\n        <ion-input [(ngModel)]="clave" type="password" formControlName="clave" id="clave" spellcheck="false" autocapitalize="off"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label > Restaurante?</ion-label>\n\n        <ion-checkbox [(ngModel)]="restaurante" formControlName="restaurante" id="restaurante" ></ion-checkbox>\n\n      </ion-item>\n\n      <div class="error" *ngIf="errormsg">\n\n        {{ errormsg }}\n\n      </div>\n\n  \n\n      <button ion-button type="submit" block primary outline [disabled]="!form.valid">Login</button>\n\n    </form>\n\n\n\n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["AngularFirestore"]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_time_pick_time__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner_ngx__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__firmas_firmas__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuClientePage = /** @class */ (function () {
    function MenuClientePage(navCtrl, navParams, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.qrScanner = qrScanner;
        this.qrData = null;
        this.createdCode = null;
    }
    MenuClientePage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    MenuClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuClientePage');
    };
    MenuClientePage.prototype.goPickTime = function () {
        console.log("presionando");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pick_time_pick_time__["a" /* PickTimePage */]);
    };
    MenuClientePage.prototype.goFirmas = function () {
        console.log("presionando");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__firmas_firmas__["a" /* FirmasPage */]);
    };
    MenuClientePage.prototype.scannear = function () {
        var _this = this;
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                // start scanning
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    console.log('Scanned something', text);
                    _this.qrScanner.hide(); // hide camera preview
                    scanSub_1.unsubscribe(); // stop scanning
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    MenuClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-cliente',template:/*ion-inline-start:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\menu-cliente\menu-cliente.html"*/'<ion-header>\n\n  <link href="https://fonts.googleapis.com/css?family=Anton|Baloo+Bhai|Poppins|Yanone+Kaffeesatz&display=swap"\n\n    rel="stylesheet">\n\n  <ion-navbar>\n\n    <ion-title class="center"> MENU CLIENTE</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-grid class="vertical">\n\n    <ion-row center>\n\n      <ion-col>\n\n        <button ion-button class="high" (click)="goPickTime()" shape="round">\n\n          <img src="../../assets/imgs/cloche.png"\n\n            style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button class="high" (click)="createCode()">\n\n          <img src="../../assets/imgs/qr-code.png"\n\n            style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n        </button>\n\n        <ion-card *ngIf="createdCode">\n\n          <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n\n          <ion-card-content>\n\n            <p>Value: {{ createdCode }}</p>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button class="high" (click)="goFirmas()">\n\n          <img src="../../assets/imgs/award.png"\n\n            style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button class="high" disabled=true>\n\n          <img src="../../assets/imgs/business.png"\n\n            style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n\n\n  <ion-item>\n\n    <ion-input type="text" placeholder="My QR Data" [(ngModel)]="qrData"></ion-input>\n\n  </ion-item>\n\n  <!-- <button ion-button full (click)="createCode()">Crear Codigo QR</button> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\menu-cliente\menu-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_qr_scanner_ngx__["a" /* QRScanner */]])
    ], MenuClientePage);
    return MenuClientePage;
}());

//# sourceMappingURL=menu-cliente.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservar_reservar__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PickTimePage = /** @class */ (function () {
    function PickTimePage(navCtrl, navParams, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.cargar_reservas();
    }
    PickTimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PickTimePage');
    };
    PickTimePage.prototype.cargar_reservas = function () {
        this.reservas = JSON.parse(localStorage.getItem('reservas'));
        if (this.reservas === null || this.reservas === undefined) {
            this.reservas = [];
        }
    };
    PickTimePage.prototype.go_reservas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reservar_reservar__["a" /* ReservarPage */]);
    };
    PickTimePage.prototype.unique_id = function () {
        return Math.random().toString(36).substr(2, 9);
    };
    PickTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pick-time',template:/*ion-inline-start:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\pick-time\pick-time.html"*/'<!--\n\n  Generated template for the PickTimePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <link href="https://fonts.googleapis.com/css?family=Anton|Baloo+Bhai|Poppins|Yanone+Kaffeesatz&display=swap"\n\n    rel="stylesheet">\n\n  <ion-navbar>\n\n    <ion-title class="center">RESERVAS</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="go_reservas()">\n\n        <ion-icon name="add-circle" color="secondary"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let reserva of reservas" class="poppins">\n\n\n\n      <ion-item>\n\n        <ion-thumbnail item-start>\n\n          <img src="../../assets/imgs/calendar.png" />\n\n        </ion-thumbnail>\n\n\n\n        <strong class="poppins">{{reserva.data.sede}}</strong>\n\n        <h3>Fecha:</h3> {{ reserva.data.fecha }}\n\n        <h3>Cantidad de personas:</h3> {{ reserva.data.cantidad }}\n\n      </ion-item>\n\n\n\n      <ion-item-options side="right">\n\n        <button ion-button (click)="unread(item)" color="danger">Eliminar</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n\n\n    <ion-item *ngFor="let reserva of reservas">\n\n\n\n\n\n\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\pick-time\pick-time.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PickTimePage);
    return PickTimePage;
}());

//# sourceMappingURL=pick-time.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservarPage = /** @class */ (function () {
    function ReservarPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.errormsg = "";
        this.prepara_forma();
    }
    ReservarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservarPage');
    };
    ReservarPage.prototype.prepara_forma = function () {
        this.errormsg = "";
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            nombre: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            sede: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            fecha: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            cantidad: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            hora: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        });
    };
    ReservarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservar',template:/*ion-inline-start:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\reservar\reservar.html"*/'<ion-header>\n  <link href="https://fonts.googleapis.com/css?family=Anton|Baloo+Bhai|Poppins|Yanone+Kaffeesatz&display=swap"\n    rel="stylesheet">\n  <ion-navbar>\n    <ion-title class="center">NUEVA RESERVA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="poppins" vertical-align=middle>\n  <ion-list>\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">\n      <ion-item>\n        <ion-label>Nombre </ion-label>\n        <ion-input type="text" ngControl="nombre"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Sede</ion-label>\n        <ion-select ngControl="sede">\n          <ion-option value="f">motivo1</ion-option>\n          <ion-option value="m">motivo2</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Fecha</ion-label>\n        <ion-datetime display-format="MMMM YYYY" min="2019" ngControl="fecha"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Hora</ion-label>\n        <ion-datetime displayFormat="h:mm a" ngControl="hora"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label> Cantidad de personas</ion-label>\n        <ion-input type=number> </ion-input>\n      </ion-item>\n      <button ion-button type="submit" block primary outline [disabled]="!form.valid">Ready</button>\n    </form>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\reservar\reservar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ReservarPage);
    return ReservarPage;
}());

//# sourceMappingURL=reservar.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirmasPage = /** @class */ (function () {
    function FirmasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.obtener_firmas();
    }
    FirmasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirmasPage');
    };
    FirmasPage.prototype.obtener_firmas = function () {
        this.firmas = JSON.parse(localStorage.getItem('firmas'));
    };
    FirmasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-firmas',template:/*ion-inline-start:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\firmas\firmas.html"*/'<ion-header>\n  <link href="https://fonts.googleapis.com/css?family=Anton|Baloo+Bhai|Poppins|Yanone+Kaffeesatz&display=swap"\n    rel="stylesheet">\n  <ion-navbar>\n    <ion-title class="center">Historial de Firmas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="poppins">\n  <ion-list>\n    <ion-item *ngFor="let firma of firmas">\n      <ion-thumbnail item-start>\n        <img src="../../assets/imgs/rate.png" />\n      </ion-thumbnail>\n      <ion-item>\n        <h2>{{firma.fecha}}</h2>\n      </ion-item>\n      <ion-item>\n        <strong>Sede:</strong> {{ firma.restaurante }}\n      </ion-item>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\firmas\firmas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FirmasPage);
    return FirmasPage;
}());

//# sourceMappingURL=firmas.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuRestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MenuRestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuRestPage = /** @class */ (function () {
    function MenuRestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuRestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuRestPage');
    };
    MenuRestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-rest',template:/*ion-inline-start:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\menu-rest\menu-rest.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>MENU RESTAURANTE</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\menu-rest\menu-rest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MenuRestPage);
    return MenuRestPage;
}());

//# sourceMappingURL=menu-rest.js.map

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/firmas/firmas.module": [
		633,
		5
	],
	"../pages/login/login.module": [
		632,
		4
	],
	"../pages/menu-cliente/menu-cliente.module": [
		634,
		3
	],
	"../pages/menu-rest/menu-rest.module": [
		635,
		2
	],
	"../pages/pick-time/pick-time.module": [
		637,
		1
	],
	"../pages/reservar/reservar.module": [
		636,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 279;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(470);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_cliente_menu_cliente__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_rest_menu_rest__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_firmas_firmas__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reservar_reservar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pick_time_pick_time__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_qr_scanner_ngx__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















/**************
  Firebase
**************/
/*import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore'*/



var config = {
    apiKey: "AIzaSyCtlC_icvipczPGhpHS2d7kPv2cLdoCD0c",
    authDomain: "proyectoredes-b7b7f.firebaseapp.com",
    databaseURL: "https://proyectoredes-b7b7f.firebaseio.com",
    projectId: "proyectoredes-b7b7f",
    storageBucket: "proyectoredes-b7b7f.appspot.com",
    messagingSenderId: "714215123710",
    appId: "1:714215123710:web:995da11a9929ee41"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_cliente_menu_cliente__["a" /* MenuClientePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_rest_menu_rest__["a" /* MenuRestPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pick_time_pick_time__["a" /* PickTimePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_firmas_firmas__["a" /* FirmasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reservar_reservar__["a" /* ReservarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/firmas/firmas.module#FirmasPageModule', name: 'FirmasPage', segment: 'firmas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-cliente/menu-cliente.module#MenuClientePageModule', name: 'MenuClientePage', segment: 'menu-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-rest/menu-rest.module#MenuRestPageModule', name: 'MenuRestPage', segment: 'menu-rest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservar/reservar.module#ReservarPageModule', name: 'ReservarPage', segment: 'reservar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pick-time/pick-time.module#PickTimePageModule', name: 'PickTimePage', segment: 'pick-time', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                //new
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["AngularFireModule"].initializeApp(config),
                //AngularFireDatabaseModule,               
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["AngularFirestoreModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_cliente_menu_cliente__["a" /* MenuClientePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_rest_menu_rest__["a" /* MenuRestPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pick_time_pick_time__["a" /* PickTimePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_firmas_firmas__["a" /* FirmasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reservar_reservar__["a" /* ReservarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_qr_scanner_ngx__["a" /* QRScanner */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\joice\OneDrive\Documents\Universidad\9no.Semestre\Redes\Proyecto v2\Proyecto2Redes\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[349]);
//# sourceMappingURL=main.js.map