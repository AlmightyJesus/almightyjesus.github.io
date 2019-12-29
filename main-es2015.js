(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <div className=\"logo\">\n    <a routerLink=\"/home\" routerLinkActive=\"active\">\n      <h1>Mr. <span class=\"logo-b\">₿</span></h1>\n    </a>\n\n  </div>\n  <div>\n    <a routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n    <a routerLink=\"/contact\" routerLinkActive=\"active\">Contacts</a>\n  </div>\n</nav>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-details/contact-details.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-details/contact-details.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngIf=\"contact\" class=\"contact-details\">\n    <h1>{{contact.name}}'s details:</h1>\n    <p>Email : {{contact.email}}</p>\n    <p className=\"phone\">Phone Number : {{contact.phone}}</p>\n    <div class=\"contact-actions\">\n        <a routerLink=\"/edit/{{contact._id}}\" routerLinkActive=\"active\">Edit Contact</a>\n        <button (click)=\"removeContact(contact._id)\">Remove Contact</button>\n    </div>\n    <form (submit)=\"transferBtc($event,amount)\" class=\"btc-transfer-container\">\n        <label>\n            Transfer BTC :\n            <input type=\"text\" name=\"btc\" [(ngModel)]=\"amount\" placeholder=\"BTC\" />\n        </label>\n        <button>Transfer</button>\n    </form>\n    <div class=\"transfer-img\">\n        <img src=\"https://robohash.org/{{contact._id}}/?set=set5\" />\n        <div *ngIf=\"movesToContact.length\" class=\"moves-list\">\n            <h4>Moves List:</h4>\n            <move-list [moves]=\"movesToContact\"></move-list>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-edit/contact-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-edit/contact-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 *ngIf=\"contact._id;else notContact\">Contact edit</h1>\n<ng-template #notContact>\n    <h1>Add a new contact</h1>\n</ng-template>\n<form (submit)=saveContact($event)>\n    <label>Full Name: <input type=\"text\" name=\"name\" [(ngModel)]=\"contact.name\" placeholder=\"Enter name\" /></label>\n    <label>Email Adress: <input type=\"email\" name=\"email\" [(ngModel)]=\"contact.email\"\n            placeholder=\"Enter email\" /></label>\n    <label>Phone Number: <input type=\"text\" name=\"phone\" [(ngModel)]=\"contact.phone\"\n            placeholder=\"Enter phone\" /></label>\n    <button>Save</button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-list/contact-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-list/contact-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"contact-list container\">\n        <contact-preview *ngFor=\"let contact of contacts\" [contact]=\"contact\"></contact-preview >\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-preview/contact-preview.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-preview/contact-preview.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<li class=\"contact\">\n    <a routerLink=\"/contact/{{contact._id}}\" routerLinkActive=\"active\">\n        <img src=\"https://robohash.org/{{contact._id}}/?set=set5\">\n        <div class=\"contact-Info\">\n            <h3>{{contact.name}}</h3>\n            <p>Email:{{contact.email}}</p>\n            <p>Phone:{{contact.phone}}</p>\n        </div>\n    </a>\n</li>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-header\">\n    <h1>Contact List</h1>\n    <label>Search Contact:  \n        <input class=\"filter-input\" type=\"text\" (change)=\"handleFilter()\" name=\"filter\" [(ngModel)]=\"filter\" placeholder=\"Contact Name\">\n    </label>\n    <a routerLink=\"/edit\" routerLinkActive=\"active\">Add Contact</a>\n</div>\n<contact-list *ngIf=\"contacts\" [contacts]=\"contactsToShow\"></contact-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"user-data\">\n    <h1>Welcome, {{loggedInUser.name}}</h1>\n    <h4>Your coins : {{loggedInUser.coins}}</h4>\n    <h4>BTC rate is: {{rate}}</h4>\n    <ng-template [ngIf]=\"loggedInUser.moves.length\" [ngIfElse]=\"noMoves\">\n        <h5>Moves List:</h5>\n        <move-list [moves]=\"loggedInUser.moves\"></move-list>\n    </ng-template>\n    <ng-template #noMoves>\n        <h3>No moves yet!</h3>\n    </ng-template>\n    <a routerLink=\"/contact\" routerLinkActive=\"active\">See your contacts</a>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"login-container\">\n    <h1>Login / Signup</h1>\n    <img class=\"bitcoin-img\" src=\"../../assets/img/bitcoin.png\" alt=\"bitcoin\">\n    <form (submit)=\"login($event)\">\n            <input name=\"name\" type=\"text\" [(ngModel)]=\"name\" placeholder=\"Enter name\" autocomplete=\"off\">\n        <button>Sign-In</button>\n    </form>\n</section>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact-details/contact-details.component */ "./src/app/contact/contact-details/contact-details.component.ts");
/* harmony import */ var _contact_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact-edit/contact-edit.component */ "./src/app/contact/contact-edit/contact-edit.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");








const routes = [
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'contact/:id',
        component: _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_5__["ContactDetailsComponent"]
    },
    {
        path: 'edit/:id',
        component: _contact_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"]
    },
    {
        path: 'edit',
        component: _contact_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_6__["ContactEditComponent"]
    },
    {
        path: '',
        component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Mr-Bitcoin';
        this.name = 'Shaul';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_services_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/utils.service */ "./src/services/utils.service.ts");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var src_services_contact_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/contact.service */ "./src/services/contact.service.ts");
/* harmony import */ var src_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/bitcoin.service */ "./src/services/bitcoin.service.ts");
/* harmony import */ var _home_move_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/move-list.component */ "./src/app/home/move-list.component.ts");
/* harmony import */ var _contact_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact-list/contact-list.component */ "./src/app/contact/contact-list/contact-list.component.ts");
/* harmony import */ var _contact_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact-preview/contact-preview.component */ "./src/app/contact/contact-preview/contact-preview.component.ts");
/* harmony import */ var _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact-details/contact-details.component */ "./src/app/contact/contact-details/contact-details.component.ts");
/* harmony import */ var _contact_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact-edit/contact-edit.component */ "./src/app/contact/contact-edit/contact-edit.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
            _home_move_list_component__WEBPACK_IMPORTED_MODULE_13__["MoveList"],
            _contact_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__["ContactList"],
            _contact_contact_preview_contact_preview_component__WEBPACK_IMPORTED_MODULE_15__["ContactPreviewComponent"],
            _contact_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_16__["ContactDetailsComponent"],
            _contact_contact_edit_contact_edit_component__WEBPACK_IMPORTED_MODULE_17__["ContactEditComponent"],
            _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_18__["SignInComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        providers: [src_services_utils_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"], src_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], src_services_contact_service__WEBPACK_IMPORTED_MODULE_11__["ContactService"], src_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_12__["BitcoinService"],],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact-details/contact-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/contact/contact-details/contact-details.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n.contact-details .transfer-img {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contact-details .transfer-img img {\n  width: 110px;\n  margin-bottom: 20px;\n  margin-right: 15px;\n}\n.contact-details .transfer-img .moves-list {\n  min-height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.contact-details .transfer-img .moves-list h4 {\n  text-decoration: underline;\n}\n.contact-details a:last-child {\n  margin-left: 15px;\n  align-self: flex-start;\n}\n.contact-details .phone {\n  margin-bottom: 15px;\n}\n.contact-actions {\n  margin-bottom: 15px;\n}\n.contact-actions button,\n.contact-actions a {\n  font-size: 16px;\n  font-family: open-sans, Arial, Helvetica, sans-serif;\n  padding: 5px;\n  background-color: unset;\n  color: unset;\n  text-decoration: unset;\n  border: 1px solid gold;\n  cursor: pointer;\n  margin: 5px;\n  margin-top: 15px;\n  border-radius: 3px;\n  transition: all 0.3s;\n}\n.contact-actions button:hover,\n.contact-actions a:hover {\n  background-color: #ebebeb;\n}\n.btc-transfer-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid black;\n  border-radius: 3px;\n  padding: 14px;\n  margin-bottom: 20px;\n}\n.btc-transfer-container button {\n  width: 50%;\n  margin-top: 10px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: rgba(255, 217, 0, 0.472);\n  color: unset;\n  text-decoration: unset;\n  border: 1px solid gold;\n  cursor: pointer;\n  border-radius: 3px;\n  transition: all 0.3s;\n}\n.btc-transfer-container button:hover {\n  background-color: rgba(255, 217, 0, 0.637);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LWRldGFpbHMvQzpcXFVzZXJzXFxPcmlcXERlc2t0b3BcXE1yIEJpdGNvaW5nIEFuZ3VsYXIvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QtZGV0YWlsc1xcY29udGFjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDR047QURESTtFQUlJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FSO0FEUFE7RUFDSSwwQkFBQTtBQ1NaO0FEQUU7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FDRUo7QURBRTtFQUNFLG1CQUFBO0FDRUo7QURDQTtFQUNFLG1CQUFBO0FDRUY7QURERTs7RUFFRSxlQUFBO0VBQ0Esb0RBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDR0o7QURGSTs7RUFDRSx5QkFBQTtBQ0tOO0FEREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0lGO0FESEU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNLSjtBREpJO0VBQ0UsMENBQUE7QUNNTiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC1kZXRhaWxzL2NvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAudHJhbnNmZXItaW1nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5tb3Zlcy1saXN0e1xyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBhOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICAucGhvbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuLmNvbnRhY3QtYWN0aW9ucyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBidXR0b24sXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogb3Blbi1zYW5zLEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIGNvbG9yOiB1bnNldDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idGMtdHJhbnNmZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgcGFkZGluZzogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxNywgMCwgMC40NzIpO1xyXG4gICAgY29sb3I6IHVuc2V0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMTcsIDAsIDAuNjM3KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhY3QtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0LWRldGFpbHMgLnRyYW5zZmVyLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhY3QtZGV0YWlscyAudHJhbnNmZXItaW1nIGltZyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLmNvbnRhY3QtZGV0YWlscyAudHJhbnNmZXItaW1nIC5tb3Zlcy1saXN0IHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWN0LWRldGFpbHMgLnRyYW5zZmVyLWltZyAubW92ZXMtbGlzdCBoNCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmNvbnRhY3QtZGV0YWlscyBhOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5jb250YWN0LWRldGFpbHMgLnBob25lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbnRhY3QtYWN0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uY29udGFjdC1hY3Rpb25zIGJ1dHRvbixcbi5jb250YWN0LWFjdGlvbnMgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2FucywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgY29sb3I6IHVuc2V0O1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmNvbnRhY3QtYWN0aW9ucyBidXR0b246aG92ZXIsXG4uY29udGFjdC1hY3Rpb25zIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xufVxuXG4uYnRjLXRyYW5zZmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJ0Yy10cmFuc2Zlci1jb250YWluZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxNywgMCwgMC40NzIpO1xuICBjb2xvcjogdW5zZXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5idGMtdHJhbnNmZXItY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMTcsIDAsIDAuNjM3KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact-details/contact-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/contact/contact-details/contact-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/contact.service */ "./src/services/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var src_services_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/utils.service */ "./src/services/utils.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let ContactDetailsComponent = class ContactDetailsComponent {
    constructor(contactService, userService, utilService, route, router) {
        this.contactService = contactService;
        this.userService = userService;
        this.utilService = utilService;
        this.route = route;
        this.router = router;
        this.loggedInUser = null;
        this.contact = null;
        this.amount = null;
        this.movesToContact = null;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.contactService.getContactById(id).subscribe(contact => {
            this.contact = contact;
        });
        this.loggedInUser = this.userService.getUser();
        this.movesToContact = this.loggedInUser.moves.filter(move => {
            return move.toId === this.contact._id;
        });
    }
    removeContact(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: `You want to remove ${this.contact.name} from your contacts?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'gray',
            confirmButtonText: 'Remove'
        }).then((result) => {
            if (result.value) {
                this.contactService.removeContact(id);
                this.utilService.showToast('Contact removed successfully!', 'success');
                this.router.navigate(['contact']);
            }
        });
    }
    transferBtc(ev, amount) {
        ev.preventDefault();
        if (!Number.isInteger(+amount)) {
            return this.utilService.showToast('Only numbers please!', 'error');
        }
        const user = this.userService.addMove(this.contact, +amount);
        if (!user)
            return;
        this.utilService.showToast('BTC\'s transferred successfully!', 'success');
        this.router.navigate(['contact']);
    }
};
ContactDetailsComponent.ctorParameters = () => [
    { type: src_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] },
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_services_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-details/contact-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-details.component.scss */ "./src/app/contact/contact-details/contact-details.component.scss")).default]
    })
], ContactDetailsComponent);



/***/ }),

/***/ "./src/app/contact/contact-edit/contact-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/contact/contact-edit/contact-edit.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  margin: 0 auto;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nform label {\n  margin: 5px;\n  padding: 3px;\n  width: 100%;\n  text-decoration: underline;\n  margin-bottom: 25px;\n}\nform label input {\n  width: 100%;\n  margin-top: 15px;\n  border: none;\n  border-bottom: 1.5px solid gold;\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.315);\n}\nform button {\n  margin-top: 15px;\n  font-size: 20px;\n  font-family: open-sans, Arial, Helvetica, sans-serif;\n  padding: 10px 20px;\n  background-color: unset;\n  color: unset;\n  text-decoration: unset;\n  border: 1px solid gold;\n  cursor: pointer;\n  border-radius: 3px;\n  transition: all 0.3s;\n}\nform button:hover {\n  background-color: #d4d4d4;\n}\nh1 {\n  text-align: center;\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LWVkaXQvQzpcXFVzZXJzXFxPcmlcXERlc2t0b3BcXE1yIEJpdGNvaW5nIEFuZ3VsYXIvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QtZWRpdFxcY29udGFjdC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QtZWRpdC9jb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUNHTjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0VKO0FEREk7RUFDRSx5QkFBQTtBQ0dOO0FERUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC1lZGl0L2NvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGFiZWwge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgZ29sZDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG9wZW4tc2FucyxBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICBjb2xvcjogdW5zZXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ29sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG4iLCJmb3JtIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuZm9ybSBsYWJlbCB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbmZvcm0gbGFiZWwgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCBnb2xkO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzE1KTtcbn1cbmZvcm0gYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogb3Blbi1zYW5zLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBjb2xvcjogdW5zZXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbmZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/contact/contact-edit/contact-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-edit/contact-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/contact.service */ "./src/services/contact.service.ts");
/* harmony import */ var src_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/utils.service */ "./src/services/utils.service.ts");





let ContactEditComponent = class ContactEditComponent {
    constructor(route, router, contactService, utilService) {
        this.route = route;
        this.router = router;
        this.contactService = contactService;
        this.utilService = utilService;
        this.contact = null;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.contactService.getContactById(id).subscribe(contact => {
                this.contact = Object.assign({}, contact);
            });
        }
        else
            this.contact = {
                name: '',
                phone: '',
                email: ''
            };
    }
    saveContact(ev) {
        ev.preventDefault();
        this.contactService.saveContact(this.contact);
        this.utilService.showToast('Contact saved successfully!', 'success');
        this.router.navigate(['contact']);
    }
};
ContactEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] },
    { type: src_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
ContactEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-edit/contact-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-edit.component.scss */ "./src/app/contact/contact-edit/contact-edit.component.scss")).default]
    })
], ContactEditComponent);



/***/ }),

/***/ "./src/app/contact/contact-list/contact-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/contact/contact-list/contact-list.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 10px;\n}\n.contact-list > * {\n  width: 100%;\n  margin: 0.5%;\n}\n@media screen and (min-width: 550px) {\n  .contact-list > * {\n    width: 75%;\n  }\n}\n@media screen and (min-width: 800px) {\n  .contact-list {\n    flex-direction: row;\n  }\n  .contact-list > * {\n    width: 49%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LWxpc3QvQzpcXFVzZXJzXFxPcmlcXERlc2t0b3BcXE1yIEJpdGNvaW5nIEFuZ3VsYXIvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QtbGlzdFxcY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjtBREFFO0VBRUU7SUFDRSxVQUFBO0VDQ0o7QUFDRjtBRENFO0VBbkJGO0lBb0JJLG1CQUFBO0VDRUY7RURBRTtJQUNFLFVBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LWxpc3QvY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAuNSU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU1MHB4KSB7XHJcblxyXG4gICAgPiAqIHtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgPiAqIHtcclxuICAgICAgd2lkdGg6IDQ5JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhY3QtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRhY3QtbGlzdCA+ICoge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjUlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgLmNvbnRhY3QtbGlzdCA+ICoge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5jb250YWN0LWxpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmNvbnRhY3QtbGlzdCA+ICoge1xuICAgIHdpZHRoOiA0OSU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact-list/contact-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-list/contact-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactList", function() { return ContactList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactList = class ContactList {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactList.prototype, "contacts", void 0);
ContactList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-list/contact-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-list.component.scss */ "./src/app/contact/contact-list/contact-list.component.scss")).default]
    })
], ContactList);



/***/ }),

/***/ "./src/app/contact/contact-preview/contact-preview.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/contact/contact-preview/contact-preview.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact {\n  padding: 10px;\n  border: 1px solid black;\n  display: flex;\n  width: 100%;\n  height: 100px;\n  border-radius: 3px;\n  align-self: center;\n  background-color: rgba(255, 255, 255, 0.493);\n}\n.contact a {\n  text-decoration: none;\n  color: unset;\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n}\n.contact a img {\n  width: 100px;\n}\n.contact a .contact-Info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LXByZXZpZXcvQzpcXFVzZXJzXFxPcmlcXERlc2t0b3BcXE1yIEJpdGNvaW5nIEFuZ3VsYXIvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QtcHJldmlld1xcY29udGFjdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QtcHJldmlldy9jb250YWN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNDSjtBREFJO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0VOO0FERE07RUFDRSxZQUFBO0FDR1I7QURETTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC1wcmV2aWV3L2NvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDkzKTtcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB1bnNldDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGFjdC1JbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9IiwiLmNvbnRhY3Qge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDkzKTtcbn1cbi5jb250YWN0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB1bnNldDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhY3QgYSBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4uY29udGFjdCBhIC5jb250YWN0LUluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact-preview/contact-preview.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/contact/contact-preview/contact-preview.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactPreviewComponent = class ContactPreviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactPreviewComponent.prototype, "contact", void 0);
ContactPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact-preview/contact-preview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-preview.component.scss */ "./src/app/contact/contact-preview/contact-preview.component.scss")).default]
    })
], ContactPreviewComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.list-header a {\n  margin-top: 15px;\n  font-size: 20px;\n  font-family: open-sans, Arial, Helvetica, sans-serif;\n  padding: 8px 18px;\n  background-color: rgba(255, 255, 255, 0.514);\n  color: unset;\n  text-decoration: unset;\n  border: 1px solid gold;\n  cursor: pointer;\n  border-radius: 3px;\n  transition: all 0.3s;\n}\n.list-header a:hover {\n  background-color: rgba(255, 255, 255, 0.712);\n}\n.filter-input {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  border-bottom: 1.5px solid gold;\n  background-color: unset;\n  margin-top: 20px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXE9yaVxcRGVza3RvcFxcTXIgQml0Y29pbmcgQW5ndWxhci9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvREFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDRUo7QURESTtFQUNFLDRDQUFBO0FDR047QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGEge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiA4cHggMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MTQpO1xyXG4gICAgY29sb3I6IHVuc2V0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzEyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCBnb2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiIsIi5saXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxpc3QtaGVhZGVyIGEge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXNhbnMsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDhweCAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTE0KTtcbiAgY29sb3I6IHVuc2V0O1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xuICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubGlzdC1oZWFkZXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MTIpO1xufVxuXG4uZmlsdGVyLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIGdvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/contact.service */ "./src/services/contact.service.ts");



let ContactComponent = class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.contactsSub = null;
        this.contacts = null;
        this.filteredContacts = null;
        this.filter = null;
    }
    get contactsToShow() {
        if (!this.filter)
            this.filteredContacts = this.contacts;
        else
            this.filteredContacts = this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.filter.toLowerCase());
            });
        return this.filteredContacts;
    }
    ngOnInit() {
        this.contactsSub = this.contactService.getContacts()
            .subscribe((contacts) => this.contacts = contacts);
    }
    ngOnDestroy() {
        this.contactsSub.unsubscribe();
    }
};
ContactComponent.ctorParameters = () => [
    { type: src_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-data {\n  text-align: center;\n}\n\n.move-list {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXE9yaVxcRGVza3RvcFxcTXIgQml0Y29pbmcgQW5ndWxhci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURHQTtFQUNJLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1kYXRhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ubW92ZS1saXN0e1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4iLCIudXNlci1kYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW92ZS1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var src_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/bitcoin.service */ "./src/services/bitcoin.service.ts");




let HomeComponent = class HomeComponent {
    constructor(userService, bitcoinService) {
        this.userService = userService;
        this.bitcoinService = bitcoinService;
        this.loggedInUser = null;
        this.rate = null;
    }
    ngOnInit() {
        this.loggedInUser = this.userService.getUser();
        this.rateSub = this.bitcoinService.getRate()
            .subscribe((rate) => this.rate = rate);
    }
    ngOnDestroy() {
        this.rateSub.unsubscribe();
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_3__["BitcoinService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);

//If i wanted to user async pipe I could do :
// ngOnInit() {
//   this.loggedInUser = this.userService.getUser()
//   this.rateSubscription = this.bitcoinService.getRate()
// }
//And then just render {{rateSubscription | async}}


/***/ }),

/***/ "./src/app/home/move-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/move-list.component.ts ***!
  \*********************************************/
/*! exports provided: MoveList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveList", function() { return MoveList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MoveList = class MoveList {
    constructor() {
        this.at = null;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MoveList.prototype, "moves", void 0);
MoveList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'move-list',
        template: `
        <ul class="move-list">
            <li *ngFor="let move of moves">
            <p>Transfered {{move.amount}} BTC to {{move.to}} at {{move.at | date : "d/M/yy HH:mm"}}</p>
            </li>
        </ul>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], MoveList);



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-container form {\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.login-container form input {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  border-bottom: 1.5px solid gold;\n  background-color: unset;\n  margin-bottom: 25px;\n}\n.login-container form button {\n  width: 120px;\n  font-size: 18px;\n  font-family: open-sans, Arial, Helvetica, sans-serif;\n  padding: 7px 15px;\n  background-color: rgba(255, 255, 255, 0.363);\n  color: unset;\n  text-decoration: unset;\n  border: 1px solid gold;\n  cursor: pointer;\n  border-radius: 3px;\n  transition: all 0.3s;\n}\n.login-container form button:hover {\n  background-color: rgba(255, 255, 255, 0.705);\n}\n.bitcoin-img {\n  width: 150px;\n  margin: 20px 0;\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9DOlxcVXNlcnNcXE9yaVxcRGVza3RvcFxcTXIgQml0Y29pbmcgQW5ndWxhci9zcmNcXGFwcFxcc2lnbi1pblxcc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFTjtBREFJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxvREFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDRU47QURETTtFQUNFLDRDQUFBO0FDR1I7QURHQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBmb3JtIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgZ29sZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC1mYW1pbHk6IG9wZW4tc2FucywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgcGFkZGluZzogN3B4IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNjMpO1xyXG4gICAgICBjb2xvcjogdW5zZXQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iaXRjb2luLWltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuIiwiLmxvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmxvZ2luLWNvbnRhaW5lciBmb3JtIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbi1jb250YWluZXIgZm9ybSBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCBnb2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5sb2dpbi1jb250YWluZXIgZm9ybSBidXR0b24ge1xuICB3aWR0aDogMTIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tc2FucywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNjMpO1xuICBjb2xvcjogdW5zZXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5sb2dpbi1jb250YWluZXIgZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KTtcbn1cblxuLmJpdGNvaW4taW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/user.service */ "./src/services/user.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_services_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/utils.service */ "./src/services/utils.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SignInComponent = class SignInComponent {
    constructor(userService, utilService, router) {
        this.userService = userService;
        this.utilService = utilService;
        this.router = router;
        this.name = null;
    }
    ngOnInit() {
    }
    login(ev) {
        ev.preventDefault();
        var user = this.userService.checkLogin(this.name);
        if (!user) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'No user found',
                text: `Would you like to create this user?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: 'gold',
                cancelButtonColor: 'gray',
                confirmButtonText: 'Create'
            }).then((result) => {
                if (result.value) {
                    user = this.userService.signUp(this.name);
                    this.utilService.showToast('User created successfully!', 'success');
                    this.router.navigate(['home']);
                }
            });
        }
        if (user)
            this.router.navigate(['home']);
    }
};
SignInComponent.ctorParameters = () => [
    { type: src_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_services_utils_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/sign-in/sign-in.component.scss")).default]
    })
], SignInComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/bitcoin.service.ts":
/*!*****************************************!*\
  !*** ./src/services/bitcoin.service.ts ***!
  \*****************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BitcoinService = class BitcoinService {
    constructor(http) {
        this.http = http;
    }
    getRate() {
        return this.http.get('https://blockchain.info/tobtc?currency=USD&value=1&cors=true');
    }
};
BitcoinService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BitcoinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BitcoinService);



/***/ }),

/***/ "./src/services/contact.service.ts":
/*!*****************************************!*\
  !*** ./src/services/contact.service.ts ***!
  \*****************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.service */ "./src/services/utils.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ContactService = class ContactService {
    constructor(utilService, http) {
        this.utilService = utilService;
        this.http = http;
        this.contacts = [
            {
                "_id": "5a56640269f443a5d64b32ca",
                "name": "Ochoa Hyde",
                "email": "ochoahyde@renovize.com",
                "phone": "+1 (968) 593-3824"
            },
            {
                "_id": "5a5664025f6ae9aa24a99fde",
                "name": "Hallie Mclean",
                "email": "halliemclean@renovize.com",
                "phone": "+1 (948) 464-2888"
            },
            {
                "_id": "5a56640252d6acddd183d319",
                "name": "Parsons Norris",
                "email": "parsonsnorris@renovize.com",
                "phone": "+1 (958) 502-3495"
            },
            {
                "_id": "5a566402ed1cf349f0b47b4d",
                "name": "Rachel Lowe",
                "email": "rachellowe@renovize.com",
                "phone": "+1 (911) 475-2312"
            },
            {
                "_id": "5a566402abce24c6bfe4699d",
                "name": "Dominique Soto",
                "email": "dominiquesoto@renovize.com",
                "phone": "+1 (807) 551-3258"
            },
            {
                "_id": "5a566402a6499c1d4da9220a",
                "name": "Shana Pope",
                "email": "shanapope@renovize.com",
                "phone": "+1 (970) 527-3082"
            },
            {
                "_id": "5a566402f90ae30e97f990db",
                "name": "Faulkner Flores",
                "email": "faulknerflores@renovize.com",
                "phone": "+1 (952) 501-2678"
            },
            {
                "_id": "5a5664027bae84ef280ffbdf",
                "name": "Holder Bean",
                "email": "holderbean@renovize.com",
                "phone": "+1 (989) 503-2663"
            },
            {
                "_id": "5a566402e3b846c5f6aec652",
                "name": "Rosanne Shelton",
                "email": "rosanneshelton@renovize.com",
                "phone": "+1 (968) 454-3851"
            },
            {
                "_id": "5a56640272c7dcdf59c3d411",
                "name": "Pamela Nolan",
                "email": "pamelanolan@renovize.com",
                "phone": "+1 (986) 545-2166"
            },
            {
                "_id": "5a5664029a8dd82a6178b15f",
                "name": "Roy Cantu",
                "email": "roycantu@renovize.com",
                "phone": "+1 (929) 571-2295"
            },
            {
                "_id": "5a5664028c096d08eeb13a8a",
                "name": "Ollie Christian",
                "email": "olliechristian@renovize.com",
                "phone": "+1 (977) 419-3550"
            },
            {
                "_id": "5a5664026c53582bb9ebe9d1",
                "name": "Nguyen Walls",
                "email": "nguyenwalls@renovize.com",
                "phone": "+1 (963) 471-3181"
            },
            {
                "_id": "5a56640298ab77236845b82b",
                "name": "Glenna Santana",
                "email": "glennasantana@renovize.com",
                "phone": "+1 (860) 467-2376"
            },
            {
                "_id": "5a56640208fba3e8ecb97305",
                "name": "Malone Clark",
                "email": "maloneclark@renovize.com",
                "phone": "+1 (818) 565-2557"
            },
            {
                "_id": "5a566402abb3146207bc4ec5",
                "name": "Floyd Rutledge",
                "email": "floydrutledge@renovize.com",
                "phone": "+1 (807) 597-3629"
            },
            {
                "_id": "5a56640298500fead8cb1ee5",
                "name": "Grace James",
                "email": "gracejames@renovize.com",
                "phone": "+1 (959) 525-2529"
            },
            {
                "_id": "5a56640243427b8f8445231e",
                "name": "Tanner Gates",
                "email": "tannergates@renovize.com",
                "phone": "+1 (978) 591-2291"
            },
            {
                "_id": "5a56640243427b8f848317891e",
                "name": "Alison Garison",
                "email": "alisgaris@renovize.com",
                "phone": "+1 (978) 591-2291"
            },
            {
                "_id": "5a5664025c3abdad6f5e098c",
                "name": "Lilly Conner",
                "email": "lillyconner@renovize.com",
                "phone": "+1 (842) 587-3812"
            }
        ];
    }
    sort(arr) {
        return arr.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
    getContacts(filterBy = null) {
        var contactsToReturn = this.contacts;
        if (filterBy && filterBy.term) {
            contactsToReturn = this.filter(filterBy.term);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.sort(contactsToReturn));
    }
    getContactById(id) {
        const contact = this.contacts.find(contact => contact._id === id);
        if (contact)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(contact);
        else
            return;
    }
    removeContact(id) {
        const index = this.contacts.findIndex(contact => contact._id === id);
        if (index !== -1) {
            this.contacts.splice(index, 1);
        }
    }
    _updateContact(contact) {
        const index = this.contacts.findIndex(c => contact._id === c._id);
        if (index !== -1) {
            this.contacts[index] = contact;
        }
        return contact;
    }
    _addContact(contact) {
        contact._id = this.utilService.makeId();
        this.contacts.push(contact);
        return contact;
    }
    saveContact(contact) {
        return contact._id ? this._updateContact(contact) : this._addContact(contact);
    }
    filter(term) {
        term = term.toLocaleLowerCase();
        return this.contacts.filter(contact => {
            return contact.name.toLocaleLowerCase().includes(term) ||
                contact.phone.toLocaleLowerCase().includes(term) ||
                contact.email.toLocaleLowerCase().includes(term);
        });
    }
};
ContactService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContactService);



/***/ }),

/***/ "./src/services/user.service.ts":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.service */ "./src/services/utils.service.ts");



let UserService = class UserService {
    constructor(utilService) {
        this.utilService = utilService;
        this.gUsers = this._createUsers();
    }
    _createUsers() {
        var users = this.utilService.loadFromStorage('users');
        if (!users) {
            users = [
                {
                    _id: this.utilService.makeId(),
                    name: "Shuki",
                    coins: 100,
                    moves: []
                },
                {
                    _id: this.utilService.makeId(),
                    name: "Shula Mualem",
                    coins: 100,
                    moves: []
                },
                {
                    _id: this.utilService.makeId(),
                    name: "Zigmond",
                    coins: 100,
                    moves: []
                },
                {
                    _id: this.utilService.makeId(),
                    name: "Mulu Mendi",
                    coins: 100,
                    moves: []
                }
            ];
            this.utilService.saveToStorage('users', users);
        }
        this.gUsers = users;
        return this.gUsers;
    }
    addMove(contact, amount) {
        var loggedInUser = this.getUser();
        if (loggedInUser.coins < amount)
            return this.utilService.showToast('Not enough BTC\'s in your wallet', 'warning');
        loggedInUser.moves.unshift({
            toId: contact._id,
            to: contact.name,
            at: Date.now(),
            amount
        });
        loggedInUser.coins -= amount;
        const loggedInUserIdx = this.gUsers.findIndex(user => {
            return user._id === loggedInUser._id;
        });
        this.gUsers.splice(loggedInUserIdx, 1, loggedInUser);
        this.utilService.saveToStorage('users', this.gUsers);
        this.utilService.saveToStorage('loggedInUser', loggedInUser);
        return loggedInUser;
    }
    getUser() {
        var loggedInUser = this.utilService.loadFromStorage('loggedInUser');
        if (!loggedInUser) {
            loggedInUser = this.gUsers[3];
            this.utilService.saveToStorage('loggedInUser', loggedInUser);
        }
        return loggedInUser;
    }
    signUp(name) {
        const newUser = {
            _id: this.utilService.makeId(),
            name,
            coins: 100,
            moves: []
        };
        this.gUsers.push(newUser);
        this.utilService.saveToStorage('users', this.gUsers);
        this.utilService.saveToStorage('loggedInUser', newUser);
        return newUser;
    }
    checkLogin(name) {
        var user = this.gUsers.find(user => {
            return user.name === name;
        });
        if (!user)
            return;
        this.utilService.saveToStorage('loggedInUser', user);
        return user;
    }
};
UserService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/services/utils.service.ts":
/*!***************************************!*\
  !*** ./src/services/utils.service.ts ***!
  \***************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



let UtilService = class UtilService {
    constructor() { }
    makeId(length = 10) {
        var txt = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            txt += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return txt;
    }
    saveToStorage(key, value) {
        const json = JSON.stringify(value);
        localStorage.setItem(key, json);
    }
    loadFromStorage(key) {
        const json = localStorage.getItem(key);
        const value = JSON.parse(json);
        return value;
    }
    showToast(txt, type) {
        const msg = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
            toast: true,
            position: 'top-start',
            showConfirmButton: false,
            timer: 3000,
        });
        msg.fire({
            icon: type,
            title: txt
        });
    }
};
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilService);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ori\Desktop\Mr Bitcoing Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);