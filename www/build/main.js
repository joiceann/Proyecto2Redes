webpackJsonp([4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_cliente_menu_cliente__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_rest_menu_rest__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import firebase from 'firebase';
var LoginPage = /** @class */ (function () {
    /* createPerson(firstName: string, lastName: string): void {
      const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
    } */
    function LoginPage(navCtrl, navParams, menuCtrl, fb, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.usuario = "";
        this.clave = "";
        this.restaurante = false;
        this.errormsg = "";
        this.preparar_usuarios();
        this.prepara_forma();
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
            this.usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'));
            console.log(this.usuariosGuardados);
            if (this.usuariosGuardados != null) {
                for (var user in this.usuariosGuardados) {
                    console.log(user);
                    if (this.usuariosGuardados[user].usuario == ident.usuario && this.usuariosGuardados[user].clave == ident.clave) {
                        console.log('USUARIO ENCONTRADO');
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_cliente_menu_cliente__["a" /* MenuClientePage */]);
                    }
                }
                console.log('NO SE ENCONTRO USUARIO');
            }
        }
        console.log(controles.usuario.value);
        console.log(controles.clave.value);
        console.log(controles.restaurante.value);
        this.storage.set("users", JSON.stringify(ident));
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <ion-buttons start>\n          <button ion-button icon-only >\n            <ion-icon name="refresh"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>\n          Login \n          <ion-icon name="wifi"></ion-icon>\n        </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" >\n      <ion-item>\n        <ion-label floating primary>Usuario</ion-label>\n        <ion-input [(ngModel)]="usuario" type="text" formControlName="usuario" id="usuario" spellcheck="false" autocapitalize="off"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating primary>Clave</ion-label>\n        <ion-input [(ngModel)]="clave" type="password" formControlName="clave" id="clave" spellcheck="false" autocapitalize="off"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label > Restaurante?</ion-label>\n        <ion-checkbox [(ngModel)]="restaurante" formControlName="restaurante" id="restaurante" ></ion-checkbox>\n      </ion-item>\n      <div class="error" *ngIf="errormsg">\n        {{ errormsg }}\n      </div>\n  \n      <button ion-button type="submit" block primary outline [disabled]="!form.valid">Login</button>\n    </form>\n\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pick_time_pick_time__ = __webpack_require__(107);
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
    function MenuClientePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    MenuClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-cliente',template:/*ion-inline-start:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/menu-cliente/menu-cliente.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>MENU CLIENTE</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="hola">\n\n    <ion-grid>\n        <ion-row center>\n          <ion-col>\n            <button ion-button class="high" (click)="goPickTime()">\n              <ion-icon slot="icon-only" name="time" class="larger">\n              </ion-icon>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button class="high" (click)="createCode()">\n              <ion-icon slot="icon-only" name="qr-scanner" class="larger">\n              </ion-icon>\n            </button>\n            <ion-card *ngIf="createdCode">\n                <ngx-qrcode [qrc-value]="createdCode"></ngx-qrcode>\n                  <ion-card-content>\n                    <p >Value: {{ createdCode }}</p>\n                  </ion-card-content>  \n                </ion-card>\n          </ion-col>\n          <ion-col>\n            <button ion-button class="high">\n              <ion-icon slot="icon-only" name="book" class="larger">\n              </ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n  <ion-item>\n    <ion-input type="text" placeholder="My QR Data" [(ngModel)]="qrData"></ion-input>\n  </ion-item>\n  <!-- <button ion-button full (click)="createCode()">Crear Codigo QR</button> -->\n  \n</ion-content>\n'/*ion-inline-end:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/menu-cliente/menu-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MenuClientePage);
    return MenuClientePage;
}());

//# sourceMappingURL=menu-cliente.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
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
 * Generated class for the PickTimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PickTimePage = /** @class */ (function () {
    function PickTimePage(navCtrl, navParams, fb, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.errormsg = "";
        this.prepara_forma();
    }
    PickTimePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PickTimePage');
    };
    PickTimePage.prototype.prepara_forma = function () {
        this.errormsg = "";
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            usuario: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            clave: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            restaurante: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
        });
    };
    PickTimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pick-time',template:/*ion-inline-start:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/pick-time/pick-time.html"*/'<!--\n  Generated template for the PickTimePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>pick-time</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" >\n            <ion-item>\n                <ion-label>Nombre </ion-label>\n                <ion-input type="text" ngControl="title"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Date</ion-label>\n                <ion-datetime display-format="MMMM YYYY" min="2019"></ion-datetime>\n              </ion-item>\n          <button ion-button type="submit" block primary outline [disabled]="!form.valid">Ready</button>\n        </form>\n    \n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/pick-time/pick-time.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PickTimePage);
    return PickTimePage;
}());

//# sourceMappingURL=pick-time.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuRestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
            selector: 'page-menu-rest',template:/*ion-inline-start:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/menu-rest/menu-rest.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>MENU RESTAURANTE</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/menu-rest/menu-rest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MenuRestPage);
    return MenuRestPage;
}());

//# sourceMappingURL=menu-rest.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		305,
		3
	],
	"../pages/menu-cliente/menu-cliente.module": [
		306,
		2
	],
	"../pages/menu-rest/menu-rest.module": [
		307,
		1
	],
	"../pages/pick-time/pick-time.module": [
		308,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_menu_cliente_menu_cliente__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_menu_rest_menu_rest__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pick_time_pick_time__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_qrcode2__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                __WEBPACK_IMPORTED_MODULE_12__pages_pick_time_pick_time__["a" /* PickTimePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-cliente/menu-cliente.module#MenuClientePageModule', name: 'MenuClientePage', segment: 'menu-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-rest/menu-rest.module#MenuRestPageModule', name: 'MenuRestPage', segment: 'menu-rest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pick-time/pick-time.module#PickTimePageModule', name: 'PickTimePage', segment: 'pick-time', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13_ngx_qrcode2__["a" /* NgxQRCodeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_menu_cliente_menu_cliente__["a" /* MenuClientePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_menu_rest_menu_rest__["a" /* MenuRestPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pick_time_pick_time__["a" /* PickTimePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(105);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pablolopez/Desktop/ProyectoRedes/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pablolopez/Desktop/ProyectoRedes/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/pablolopez/Desktop/ProyectoRedes/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map