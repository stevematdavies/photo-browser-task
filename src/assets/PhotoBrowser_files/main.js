(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-photo-browser></app-photo-browser>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  width: 100vw;\n  background-image: linear-gradient(to bottom right, #a4b0be, #747d8c);\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9Qcm9qZWN0cy9waG90by1icm93c2VyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLGFBQVk7RUFDWixxRUFJQztFQUNELHVCQUFzQjtFQUN0QixjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uL3Nhc3MvdmFyaWFibGVzJztcblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGJvdHRvbSByaWdodCxcbiAgICAkY29sb3ItcHJpbWFyeSxcbiAgICAkY29sb3Itc2Vjb25kYXJ5LFxuICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cblxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _browser_window_browser_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browser-window/browser-window.component */ "./src/app/browser-window/browser-window.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event.service */ "./src/app/event.service.ts");
/* harmony import */ var _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-detail/image-detail.component */ "./src/app/image-detail/image-detail.component.ts");
/* harmony import */ var _photo_browser_photo_browser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./photo-browser/photo-browser.component */ "./src/app/photo-browser/photo-browser.component.ts");
/* harmony import */ var _thumb_view_item_thumb_view_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./thumb-view-item/thumb-view-item.component */ "./src/app/thumb-view-item/thumb-view-item.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _photo_browser_photo_browser_component__WEBPACK_IMPORTED_MODULE_9__["PhotoBrowserComponent"],
                _browser_window_browser_window_component__WEBPACK_IMPORTED_MODULE_5__["BrowserWindowComponent"],
                _thumb_view_item_thumb_view_item_component__WEBPACK_IMPORTED_MODULE_10__["ThumbViewItemComponent"],
                _image_detail_image_detail_component__WEBPACK_IMPORTED_MODULE_8__["ImageDetailComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/browser-window/browser-window.component.html":
/*!**************************************************************!*\
  !*** ./src/app/browser-window/browser-window.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"browser-window\">\n  <div class=\"browser-window__main\">\n    <div class=\"browser-window__image-viewer\">\n      <app-thumb-view-item\n        *ngFor=\"let image of images\"[image]=\"image\">\n      </app-thumb-view-item>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/browser-window/browser-window.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/browser-window/browser-window.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".browser-window {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n  .browser-window__main {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%; }\n  .browser-window__image-viewer {\n    position: absolute;\n    padding: 4rem;\n    top: 0%;\n    left: 0;\n    height: 100%;\n    background-color: rgba(87, 49, 153, 0.8);\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9Qcm9qZWN0cy9waG90by1icm93c2VyL3NyYy9hcHAvYnJvd3Nlci13aW5kb3cvYnJvd3Nlci13aW5kb3cuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3RldmUvUHJvamVjdHMvcGhvdG8tYnJvd3Nlci9zcmMvc2Fzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFlBQVcsRUFzQlo7RUFwQkM7SUFDRSxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxhQUFZO0lBQ1osWUFBVyxFQUNaO0VBRUQ7SUFDRSxtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLFFBQU07SUFDTixRQUFNO0lBQ04sYUFBWTtJQUNaLHlDQ1hrQztJRFlsQyxjQUFhO0lBQ2Isc0NBQW9DO0lBQ3BDLG1DQUFpQztJQUNqQyxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9icm93c2VyLXdpbmRvdy9icm93c2VyLXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zYXNzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uL3Nhc3MvbWl4aW5zXCI7XG5cbi5icm93c2VyLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAmX19tYWluIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9faW1hZ2Utdmlld2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZzogNHJlbTtcbiAgICB0b3A6MCU7XG4gICAgbGVmdDowO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1wdXJwbGUtZGFya2VyLC44KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LDFmcik7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxufVxuIiwiJGRlZmF1bHQtZm9udDogJ05vdG8gU2Fucyc7XG4kY29sb3ItcHJpbWFyeTogI2E0YjBiZTtcbiRjb2xvci1zZWNvbmRhcnk6ICM3NDdkOGM7XG4kY29sb3ItdGVydGlhcnk6ICMyZjM1NDI7XG4kY29sb3ItdGVydGlhcnktbGlnaHRlcjogIzMyMzg0NjtcbiRjb2xvci1ncmV5LWRhcms6ICNjZWQ2ZTA7XG4kY29sb3ItaGlnaGxpZ2h0OnJnYig5NSwgNTgsIDE1OCk7XG4kY29sb3ItaGlnaGxpZ2h0LWxpZ2h0OnJnYigyMDcsIDE1NiwgMjQxKTtcbiRjb2xvci1oaWdobGlnaHQtbGlnaHQ6cmdiKDEyMywgNzcsIDIwMik7XG4kY29sb3Itc2hhZG93OiAjMmYzNTQyO1xuJGNvbG9yLXB1cnBsZTogIzY3M0FCNztcbiRjb2xvci1wdXJwbGUtZGFya2VyOiByZ2IoODcsIDQ5LCAxNTMpO1xuJGNvbG9yLXB1cnBsZS1kYXJrZXN0OiByZ2IoNjMsIDM3LCAxMDkpO1xuXG4kZGVmYXVsdC1mb250LXNpemU6IDEuNnJlbTtcblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/browser-window/browser-window.component.ts":
/*!************************************************************!*\
  !*** ./src/app/browser-window/browser-window.component.ts ***!
  \************************************************************/
/*! exports provided: BrowserWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowComponent", function() { return BrowserWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowserWindowComponent = /** @class */ (function () {
    function BrowserWindowComponent(dataService, eventService) {
        this.dataService = dataService;
        this.eventService = eventService;
        this.imagesSubscription = null;
        this.imageSubscription = null;
        this.dataSubscription = null;
    }
    BrowserWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagesSubscription = this.eventService.imagesSelectedEvt
            .subscribe(function () {
            _this.onImagesSelected();
        });
        this.onSelectImages();
    };
    BrowserWindowComponent.prototype.ngOnDestroy = function () {
        this.imagesSubscription.unsubscribe();
        this.images = [];
    };
    BrowserWindowComponent.prototype.onImagesSelected = function () {
        var _this = this;
        this.dataSubscription = this.dataService.fetchImages()
            .subscribe(function (images) {
            _this.images = images.slice(0, 20);
        });
    };
    BrowserWindowComponent.prototype.onImageSelected = function (image) {
        this.eventService.emitImageSelected(image);
    };
    BrowserWindowComponent.prototype.onSelectImages = function () {
        this.eventService.emitImagesSelected();
    };
    BrowserWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app-browser-window', template: __webpack_require__(/*! ./browser-window.component.html */ "./src/app/browser-window/browser-window.component.html"), styles: [__webpack_require__(/*! ./browser-window.component.scss */ "./src/app/browser-window/browser-window.component.scss")] }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]])
    ], BrowserWindowComponent);
    return BrowserWindowComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        this.imagesEndpoint = 'http://jsonplaceholder.typicode.com/photos';
        this.usersEndpoint = 'http://jsonplaceholder.typicode.com/users';
        this.albumsEndpoint = 'http://jsonplaceholder.typicode.com/albums';
    }
    DataService.prototype.fetchImages = function () {
        return this.httpClient.get(this.imagesEndpoint);
    };
    DataService.prototype.fetchAlbum = function (albumId) {
        return this.httpClient.get(this.albumsEndpoint + "/" + albumId);
    };
    DataService.prototype.fetchUser = function (userId) {
        return this.httpClient.get(this.usersEndpoint + "/" + userId);
    };
    DataService.prototype.fetchUsersForAlbum = function (albumId) {
        return this.httpClient.get(this.usersEndpoint + "/?albumId=" + albumId);
    };
    DataService.prototype.fetchAlbumsForUser = function (userId) {
        return this.httpClient.get(this.albumsEndpoint + "/?userId=" + userId);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/event.service.ts":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventService = /** @class */ (function () {
    function EventService() {
        this.imagesSelectedEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageSelectedEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.albumSelectedEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userSelectedEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.usersSelectedEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contextSelectedEvt = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EventService.prototype.emitUsersSelected = function () {
        this.usersSelectedEvt.next();
    };
    EventService.prototype.emitUserSelected = function (id) {
        this.userSelectedEvt.next(id);
    };
    EventService.prototype.emitImageSelected = function (image) {
        this.imageSelectedEvt.next(image);
    };
    EventService.prototype.emitImagesSelected = function () {
        this.imagesSelectedEvt.next();
    };
    EventService.prototype.emitAlbumSelected = function (id) {
        this.albumSelectedEvt.next(id);
    };
    EventService.prototype.emitContextSelected = function (contextDao) {
        this.contextSelectedEvt.next(contextDao);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventService.prototype, "imagesSelectedEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventService.prototype, "imageSelectedEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventService.prototype, "albumSelectedEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventService.prototype, "userSelectedEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventService.prototype, "usersSelectedEvt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventService.prototype, "contextSelectedEvt", void 0);
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/image-detail/image-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showDisplay\" class=\"image-display-modal-bg\">\n\n  <div class=\"close-btn\" (click)=\"onCloseDisplay()\">X</div>\n\n  <div class=\"image-display\">\n    <header class=\"image-display__header\">\n      <div class=\"image-display__header--title\">{{ image.title }}</div>\n    </header>\n\n    <div class=\"image-display__container\">\n\n      <div class=\"view album-view\">\n\n        <p class=\"view__icon-title\">\n          <i class=\"fa fa-folder\"></i>\n          <span class=\"view__icon-title--text\">\n            {{ album ? album.title : image.albumId }}\n          </span>\n        </p>\n\n        <div class=\"view-content\">\n          <span (click)=\"onSelectUsers()\" class=\"inline-link\">\n            <i class=\"fa fa-users\"></i> Click here to see who shares this\n            album!\n          </span>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"users\" class=\"view user-view\">\n\n        <p class=\"view__icon-title\">\n          <i class=\"fa fa-users\"></i>\n          Users\n        </p>\n\n        <div class=\"view-content\">\n          <div class=\"user-view__list-scroll\">\n            <ul class=\"user-view__user\">\n              <li *ngFor=\"let user of users\" (click)=\"onSelectUser(user.id)\">\n                <a class=\"user-view__user\">{{ user.name }}</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div *ngIf=\"user\" class=\"context-detail\">\n      <p class=\"view__icon-title\">\n         <i class=\"fa fa-user\"></i>\n         {{user.name}}\n     </p>\n     <div class=\"contex-detail__property-list\">\n       <app-user [user]=\"user\"></app-user>\n     </div>\n   </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/image-detail/image-detail.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.image-display-modal-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  color: white;\n  font-family: \"Raleway\", sans-serif; }\n.close-btn {\n  position: absolute;\n  color: #fff;\n  font-size: 4rem;\n  font-weight: 100;\n  top: 15%;\n  right: 5%; }\n.close-btn:hover {\n    cursor: pointer;\n    font-weight: 300; }\n.image-display {\n  position: relative;\n  max-width: 70vw;\n  max-height: 70vh;\n  background-color: rgba(87, 49, 153, 0.6);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 2rem; }\n.image-display__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    max-width: inherit; }\n.image-display__header--title {\n      font-size: 3rem;\n      text-transform: uppercase;\n      font-weight: 100;\n      padding-bottom: 0.2rem;\n      border-bottom: 1px solid rgba(103, 58, 183, 0.5); }\n.image-display__container {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-content: flex-start;\n    background-image: url('album.png');\n    background-blend-mode: multiply;\n    background-size: 50%;\n    background-position-x: 60%;\n    background-position-y: 50%;\n    background-repeat: no-repeat;\n    padding-bottom: 1rem; }\n.view {\n  margin: 2rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start; }\n.view__icon-title {\n    font-weight: 300;\n    font-size: 2rem;\n    text-transform: capitalize; }\n.view__icon-title--text:before {\n      content: \"Album\";\n      position: absolute;\n      left: 3.8rem;\n      top: 7.5rem;\n      color: white;\n      font-size: 1.2rem;\n      font-weight: 100; }\n.view__icon-title--small  {\n      font-size: 2rem; }\n.ablum-view {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start; }\n.context-detail {\n  width: 100%;\n  height: 100%;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(103, 58, 183, 0.5); }\n.user-view {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n.user-view__user {\n    color: white;\n    list-style: none;\n    font-weight: 100;\n    cursor: pointer; }\n.inline-link {\n  font-weight: 400;\n  transition: all 0.3s cubic-bezier(0.75, -0.5, 0, 1.75);\n  display: inline-block; }\n.inline-link:hover {\n    cursor: pointer;\n    position: relative;\n    -webkit-transform: translateX(1.1rem);\n            transform: translateX(1.1rem);\n    font-weight: 600; }\n.inline-link:hover:after {\n      content: \"---\\00bb\"; }\n.view-content {\n  margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2UtZGV0YWlsL2ltYWdlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zdGV2ZS9Qcm9qZWN0cy9waG90by1icm93c2VyL3NyYy9hcHAvaW1hZ2UtZGV0YWlsL2ltYWdlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zdGV2ZS9Qcm9qZWN0cy9waG90by1icm93c2VyL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNFakI7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFFBQU87RUFDUCxxQ0FBNEI7RUFDNUIsYUFBWTtFQUNaLFlBQVc7RUFDWCxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsYUFBWTtFQUNaLG1DQUFrQyxFQUNuQztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixTQUFRO0VBQ1IsVUFBUyxFQU1WO0FBWkQ7SUFTSSxnQkFBZTtJQUNmLGlCQUFnQixFQUNqQjtBQUdIO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLHlDQ3hCb0M7RUR5QnBDLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLDRCQUEyQjtFQUMzQixvQkFBbUI7RUFDbkIsY0FBYSxFQThCZDtBQTVCQztJQUNFLGNBQWE7SUFDYiwrQkFBOEI7SUFDOUIsd0JBQXVCO0lBQ3ZCLG1CQUFrQixFQVNuQjtBQVBDO01BQ0UsZ0JBQWU7TUFDZiwwQkFBeUI7TUFDekIsaUJBQWdCO01BQ2hCLHVCQUFzQjtNQUN0QixpREM1Q2dCLEVENkNqQjtBQUdIO0lBQ0UsWUFBVztJQUNYLGNBQWE7SUFDYiw0QkFBMkI7SUFDM0IsMEJBQXlCO0lBQ3pCLG1DQUE4QztJQUM5QyxnQ0FBK0I7SUFDL0IscUJBQW9CO0lBQ3BCLDJCQUEwQjtJQUMxQiwyQkFBMEI7SUFDMUIsNkJBQTRCO0lBQzVCLHFCQUFvQixFQUNyQjtBQUdIO0VBQ0UsYUFBWTtFQUNaLFlBQVc7RUFDWCxhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBdUJ4QjtBQXJCQztJQUNFLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLDJCQUEwQixFQWlCM0I7QUFmRTtNQUVHLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsYUFBWTtNQUNaLFlBQVc7TUFDWCxhQUFZO01BQ1osa0JBQWlCO01BQ2pCLGlCQUFnQixFQUNqQjtBQUdIO01BQ0UsZ0JBQWUsRUFDaEI7QUFJTDtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUN4QjtBQUdEO0VBQ0UsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsOENDM0dvQixFRDRHckI7QUFFRDtFQUNFLGNBQWE7RUFDYiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBVXhCO0FBTkM7SUFDRSxhQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGlCQUFnQjtJQUNoQixnQkFBZSxFQUNoQjtBQUdIO0VBQ0UsaUJBQWdCO0VBQ2hCLHVEQUFzRDtFQUN0RCxzQkFBcUIsRUFZdEI7QUFmRDtJQU1JLGdCQUFlO0lBQ2YsbUJBQWtCO0lBQ2xCLHNDQUE2QjtZQUE3Qiw4QkFBNkI7SUFDN0IsaUJBQWdCLEVBS2pCO0FBZEg7TUFZTSxvQkFBbUIsRUFDcEI7QUFJTDtFQUNFLG9CQUFtQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLWRldGFpbC9pbWFnZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaW1hZ2UtZGlzcGxheS1tb2RhbC1iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjsgfVxuXG4uY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICB0b3A6IDE1JTtcbiAgcmlnaHQ6IDUlOyB9XG4gIC5jbG9zZS1idG46aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogMzAwOyB9XG5cbi5pbWFnZS1kaXNwbGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODcsIDQ5LCAxNTMsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtOyB9XG4gIC5pbWFnZS1kaXNwbGF5X19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDsgfVxuICAgIC5pbWFnZS1kaXNwbGF5X19oZWFkZXItLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEwMywgNTgsIDE4MywgMC41KTsgfVxuICAuaW1hZ2UtZGlzcGxheV9fY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9hbGJ1bS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyB9XG5cbi52aWV3IHtcbiAgbWFyZ2luOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gIC52aWV3X19pY29uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuICAgIC52aWV3X19pY29uLXRpdGxlLS10ZXh0OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIkFsYnVtXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAzLjhyZW07XG4gICAgICB0b3A6IDcuNXJlbTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuICAgIC52aWV3X19pY29uLXRpdGxlLS1zbWFsbMKgIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxuXG4uYWJsdW0tdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cblxuLmNvbnRleHQtZGV0YWlsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEwMywgNTgsIDE4MywgMC41KTsgfVxuXG4udXNlci12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuICAudXNlci12aWV3X191c2VyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uaW5saW5lLWxpbmsge1xuICBmb250LXdlaWdodDogNDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43NSwgLTAuNSwgMCwgMS43NSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAuaW5saW5lLWxpbms6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuMXJlbSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIC5pbmxpbmUtbGluazpob3ZlcjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIi0tLVxcMDBiYlwiOyB9XG5cbi52aWV3LWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcblxuLmltYWdlLWRpc3BsYXktbW9kYWwtYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC45KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICB0b3A6IDE1JTtcbiAgcmlnaHQ6IDUlO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG59XG5cbi5pbWFnZS1kaXNwbGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXB1cnBsZS1kYXJrZXIsLjYpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbTtcblxuICAmX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcblxuICAgICYtLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wdXJwbGUsIDAuNSk7XG4gICAgfVxuICB9XG5cbiAgJl9fY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi9hc3NldHMvYWxidW0ucG5nJyk7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG59XG5cbi52aWV3IHtcbiAgbWFyZ2luOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICZfX2ljb24tdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgJi0tdGV4dCB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQWxidW1cIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAzLjhyZW07XG4gICAgICAgIHRvcDogNy41cmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtLXNtYWxswqB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICB9XG59XG5cbi5hYmx1bS12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuXG4uY29udGV4dC1kZXRhaWwgIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKCRjb2xvci1wdXJwbGUsIDAuNSk7XG59XG5cbi51c2VyLXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICZfX3VzZXJzIHt9XG5cbiAgJl9fdXNlciB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uaW5saW5lLWxpbmsge1xuICBmb250LXdlaWdodDogNDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43NSwgLTAuNSwgMCwgMS43NSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjFyZW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiLS0tXFwwMGJiXCI7XG4gICAgfVxuICB9XG59XG5cbi52aWV3LWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuIiwiJGRlZmF1bHQtZm9udDogJ05vdG8gU2Fucyc7XG4kY29sb3ItcHJpbWFyeTogI2E0YjBiZTtcbiRjb2xvci1zZWNvbmRhcnk6ICM3NDdkOGM7XG4kY29sb3ItdGVydGlhcnk6ICMyZjM1NDI7XG4kY29sb3ItdGVydGlhcnktbGlnaHRlcjogIzMyMzg0NjtcbiRjb2xvci1ncmV5LWRhcms6ICNjZWQ2ZTA7XG4kY29sb3ItaGlnaGxpZ2h0OnJnYig5NSwgNTgsIDE1OCk7XG4kY29sb3ItaGlnaGxpZ2h0LWxpZ2h0OnJnYigyMDcsIDE1NiwgMjQxKTtcbiRjb2xvci1oaWdobGlnaHQtbGlnaHQ6cmdiKDEyMywgNzcsIDIwMik7XG4kY29sb3Itc2hhZG93OiAjMmYzNTQyO1xuJGNvbG9yLXB1cnBsZTogIzY3M0FCNztcbiRjb2xvci1wdXJwbGUtZGFya2VyOiByZ2IoODcsIDQ5LCAxNTMpO1xuJGNvbG9yLXB1cnBsZS1kYXJrZXN0OiByZ2IoNjMsIDM3LCAxMDkpO1xuXG4kZGVmYXVsdC1mb250LXNpemU6IDEuNnJlbTtcblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/image-detail/image-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-detail/image-detail.component.ts ***!
  \********************************************************/
/*! exports provided: ImageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailComponent", function() { return ImageDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageDetailComponent = /** @class */ (function () {
    function ImageDetailComponent(eventService, dataService) {
        this.eventService = eventService;
        this.dataService = dataService;
        this.imageSubscription = null;
        this.albumSubscription = null;
        this.usersSubscription = null;
        this.userSubscription = null;
        this.showDisplay = false;
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.albumSubscription = this.eventService.albumSelectedEvt
            .subscribe(function () {
            _this.onAlbumSelected();
        });
        this.usersSubscription = this.eventService.usersSelectedEvt
            .subscribe(function () {
            _this.onUsersSelected();
        });
        this.userSubscription = this.eventService.userSelectedEvt
            .subscribe(function (id) {
            _this.onUserSelected(id);
        });
        this.imageSubscription = this.eventService.imageSelectedEvt
            .subscribe(function (image) {
            _this.onImageSelected(image);
        });
    };
    ImageDetailComponent.prototype.onSelectUsers = function () {
        this.eventService.emitUsersSelected();
    };
    ImageDetailComponent.prototype.onSelectUser = function (id) {
        this.eventService.emitUserSelected(id);
    };
    ImageDetailComponent.prototype.onSelectImages = function () {
        this.eventService.emitImagesSelected();
    };
    ImageDetailComponent.prototype.onSelectAlbum = function () {
        this.eventService.emitAlbumSelected(this.image.albumId);
    };
    ImageDetailComponent.prototype.onUsersSelected = function () {
        var _this = this;
        this.dataService.fetchUsersForAlbum(this.album.userId)
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    ImageDetailComponent.prototype.onUserSelected = function (id) {
        var _this = this;
        this.dataService.fetchUser(id)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    ImageDetailComponent.prototype.onImageSelected = function (image) {
        this.image = image;
        this.showDisplay = true;
        this.onSelectAlbum();
    };
    ImageDetailComponent.prototype.onAlbumSelected = function () {
        var _this = this;
        this.dataService.fetchAlbum(this.image.albumId)
            .subscribe(function (album) {
            _this.album = album;
        });
    };
    ImageDetailComponent.prototype.ngOnDestroy = function () {
        this.imageSubscription.unsubscribe();
        this.albumSubscription.unsubscribe();
        this.usersSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    ImageDetailComponent.prototype.onCloseDisplay = function () {
        this.showDisplay = false;
        this.image = null;
        this.album = null;
        this.user = null;
        this.users = null;
    };
    ImageDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'app-image-detail', template: __webpack_require__(/*! ./image-detail.component.html */ "./src/app/image-detail/image-detail.component.html"), styles: [__webpack_require__(/*! ./image-detail.component.scss */ "./src/app/image-detail/image-detail.component.scss")] }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ImageDetailComponent);
    return ImageDetailComponent;
}());



/***/ }),

/***/ "./src/app/photo-browser/photo-browser.component.html":
/*!************************************************************!*\
  !*** ./src/app/photo-browser/photo-browser.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-image-detail></app-image-detail>\n<div class=\"photo-browser\">\n  <div class=\"photo-browser__header\">\n    <div class=\"app-logo\">\n      <span class=\"app-logo__logo\">\n        <span class=\"app-logo__logo--text\">\n          <strong>Photo</strong> | Browser\n        </span>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"photo-browser__content\">\n    <app-browser-window></app-browser-window>\n  </div>\n\n  <div class=\"photo-browser__footer\">\n    <div class=\"social\">\n      <ul>\n        <li><i class=\"fa fa-twitter fa-2x\"></i></li>\n        <li><i class=\"fa fa-instagram fa-2x\"></i></li>\n        <li><i class=\"fa fa-linkedin fa-2x\"></i></li>\n        <li><i class=\"fa fa-envelope fa-2x\"></i></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/photo-browser/photo-browser.component.scss":
/*!************************************************************!*\
  !*** ./src/app/photo-browser/photo-browser.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo-browser {\n  width: 100vw;\n  height: 100vh;\n  background-image: url('camera-pic.png'), linear-gradient(to bottom, #673AB7, #3f256d);\n  background-size: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-blend-mode: multiply;\n  display: grid;\n  grid-template-columns: repeat(6, minmax(6rem, 1fr));\n  grid-template-rows: 0.5fr repeat(4, minmax(6rem, 1fr)) 0.5fr; }\n  .photo-browser__header {\n    background-color: #573199;\n    width: 100%;\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.3);\n    z-index: 100000001; }\n  .photo-browser__content {\n    grid-row: 2/6;\n    grid-column: 1 / -1; }\n  .photo-browser__footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.3);\n    box-shadow: 0 -1rem 5rem rgba(0, 0, 0, 0.3);\n    z-index: 100000001;\n    grid-row: 6 / 7;\n    grid-column: 1 / -1;\n    background-color: #573199;\n    color: whitesmoke;\n    font-family: \"Noto Sans\", sans-serif;\n    font-weight: 100;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%; }\n  .photo-browser__footer ul {\n      list-style: none; }\n  .photo-browser__footer li {\n      display: inline;\n      margin-right: 2rem; }\n  .app-logo {\n  margin-left: 2vw; }\n  .app-logo__logo {\n    display: inline-flex;\n    align-items: center;\n    justify-content: flex-start;\n    color: white;\n    font-weight: 100;\n    font-family: 'Roboto',sans-serif; }\n  .app-logo__logo--text {\n      font-size: 2vw; }\n  @media only screen and (max-width: 100rem) {\n      .app-logo__logo--text {\n        font-size: 4vw; } }\n  @media only screen and (max-width: 60rem) {\n      .app-logo__logo--text {\n        font-size: 6vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9Qcm9qZWN0cy9waG90by1icm93c2VyL3NyYy9hcHAvcGhvdG8tYnJvd3Nlci9waG90by1icm93c2VyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3N0ZXZlL1Byb2plY3RzL3Bob3RvLWJyb3dzZXIvc3JjL3Nhc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYixzRkFDa0U7RUFDbEUsc0JBQXFCO0VBQ3JCLHVCQUFzQjtFQUN0Qiw2QkFBNEI7RUFDNUIsZ0NBQStCO0VBQy9CLGNBQWE7RUFDYixvREFBbUQ7RUFDbkQsNkRBQTRELEVBMkM3RDtFQXpDQztJQUNFLDBCQ0xrQztJRE1sQyxZQUFXO0lBQ1gsZ0JBQWU7SUFDZixvQkFBbUI7SUFDbkIsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQiwrQkFBOEI7SUFDOUIsNENBQW1DO0lBQ25DLDJDQUFrQztJQUNsQyxtQkFBa0IsRUFDbkI7RUFFRDtJQUNFLGNBQWE7SUFDYixvQkFBbUIsRUFDcEI7RUFFRDtJQUNFLHlDQUFnQztJQUNoQyw0Q0FBb0M7SUFDcEMsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2Ysb0JBQW1CO0lBQ25CLDBCQzVCa0M7SUQ2QmxDLGtCQUFpQjtJQUNqQixxQ0FBb0M7SUFDcEMsaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsd0JBQXVCO0lBQ3ZCLFlBQVcsRUFTWjtFQXRCQTtNQWdCRyxpQkFBZ0IsRUFDakI7RUFqQkY7TUFtQkcsZ0JBQWU7TUFDZixtQkFBa0IsRUFDbkI7RUFJTDtFQUNFLGlCQUFnQixFQTZCakI7RUEzQkM7SUFDRSxxQkFBb0I7SUFDcEIsb0JBQWtCO0lBQ2xCLDRCQUEyQjtJQUMzQixhQUFZO0lBRVosaUJBQWdCO0lBQ2hCLGlDQUFnQyxFQWtCakM7RUFoQkM7TUFDRSxlQUFjLEVBQ2Y7RUFFRDtNQUNFO1FBQ0UsZUFBYyxFQUNmLEVBQUE7RUFHSDtNQUNFO1FBQ0UsZUFBYyxFQUNmLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9waG90by1icm93c2VyL3Bob3RvLWJyb3dzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2Fzcy92YXJpYWJsZXNcIjtcblxuLnBob3RvLWJyb3dzZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9jYW1lcmEtcGljLnBuZ1wiKSxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkY29sb3ItcHVycGxlLCAkY29sb3ItcHVycGxlLWRhcmtlc3QpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIG1pbm1heCg2cmVtLCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciByZXBlYXQoNCwgbWlubWF4KDZyZW0sIDFmcikpIDAuNWZyO1xuXG4gICZfX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXB1cnBsZS1kYXJrZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYShibGFjaywgLjMpO1xuICAgIGJveC1zaGFkb3c6IDAgMXJlbSA1cmVtIHJnYmEoYmxhY2ssIC4zKTtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDE7XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBncmlkLXJvdzogMi82O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gIH1cblxuICAmX19mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKGJsYWNrLCAuMyk7XG4gICAgYm94LXNoYWRvdzogLTAgLTFyZW0gNXJlbSByZ2JhKGJsYWNrLCAuMyk7XG4gICAgei1pbmRleDogMTAwMDAwMDAxO1xuICAgIGdyaWQtcm93OiA2IC8gNztcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wdXJwbGUtZGFya2VyO1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgIH1cbiAgfVxufVxuXG4uYXBwLWxvZ28ge1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuXG4gICZfX2xvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcblxuICAgICYtLXRleHQge1xuICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMHJlbSkge1xuICAgICAgJi0tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MHJlbSkge1xuICAgICAgJi0tdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cbiIsIiRkZWZhdWx0LWZvbnQ6ICdOb3RvIFNhbnMnO1xuJGNvbG9yLXByaW1hcnk6ICNhNGIwYmU7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNzQ3ZDhjO1xuJGNvbG9yLXRlcnRpYXJ5OiAjMmYzNTQyO1xuJGNvbG9yLXRlcnRpYXJ5LWxpZ2h0ZXI6ICMzMjM4NDY7XG4kY29sb3ItZ3JleS1kYXJrOiAjY2VkNmUwO1xuJGNvbG9yLWhpZ2hsaWdodDpyZ2IoOTUsIDU4LCAxNTgpO1xuJGNvbG9yLWhpZ2hsaWdodC1saWdodDpyZ2IoMjA3LCAxNTYsIDI0MSk7XG4kY29sb3ItaGlnaGxpZ2h0LWxpZ2h0OnJnYigxMjMsIDc3LCAyMDIpO1xuJGNvbG9yLXNoYWRvdzogIzJmMzU0MjtcbiRjb2xvci1wdXJwbGU6ICM2NzNBQjc7XG4kY29sb3ItcHVycGxlLWRhcmtlcjogcmdiKDg3LCA0OSwgMTUzKTtcbiRjb2xvci1wdXJwbGUtZGFya2VzdDogcmdiKDYzLCAzNywgMTA5KTtcblxuJGRlZmF1bHQtZm9udC1zaXplOiAxLjZyZW07XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/photo-browser/photo-browser.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/photo-browser/photo-browser.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoBrowserComponent", function() { return PhotoBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoBrowserComponent = /** @class */ (function () {
    function PhotoBrowserComponent() {
    }
    PhotoBrowserComponent.prototype.ngOnInit = function () {
    };
    PhotoBrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-browser',
            template: __webpack_require__(/*! ./photo-browser.component.html */ "./src/app/photo-browser/photo-browser.component.html"),
            styles: [__webpack_require__(/*! ./photo-browser.component.scss */ "./src/app/photo-browser/photo-browser.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoBrowserComponent);
    return PhotoBrowserComponent;
}());



/***/ }),

/***/ "./src/app/thumb-view-item/thumb-view-item.component.html":
/*!****************************************************************!*\
  !*** ./src/app/thumb-view-item/thumb-view-item.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"thumb-view\" (click)=\"onImageSelect()\">\n  <img\n    [src]=\"image.thumbnailUrl\"\n    [alt]=\"image.title\"\n    class=\"thumb-view__viz--thumb\"\n  />\n\n  <div class=\"thumb-view__meta\">\n    <h6 class=\"thumb-view__meta--heading\">{{ image.title }}</h6>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/thumb-view-item/thumb-view-item.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/thumb-view-item/thumb-view-item.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumb-view {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  font-family: \"Raleway\", sans-serif;\n  margin-bottom: 2rem; }\n  .thumb-view:hover {\n    cursor: pointer; }\n  .thumb-view:hover .thumb-view__viz--thumb {\n    -webkit-transform: skew(8deg);\n            transform: skew(8deg);\n    box-shadow: 0 1rem 4rem #2f3542;\n    opacity: .3; }\n  .thumb-view:hover .thumb-view__meta--heading {\n    font-weight: 600;\n    -webkit-transform: translateX(-8rem);\n            transform: translateX(-8rem); }\n  .thumb-view__viz {\n    margin-right: 2rem; }\n  .thumb-view__viz--thumb {\n      width: 15rem;\n      height: 15rem;\n      background-color: rgba(87, 49, 153, 0.5);\n      margin-right: 2rem;\n      border-radius: 100px;\n      transition: all .3s; }\n  .thumb-view__meta--heading {\n    color: white;\n    font-size: 1.6rem;\n    font-weight: 100;\n    margin-top: 0;\n    text-transform: uppercase;\n    padding-right: 1rem;\n    transition: all .3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZS9Qcm9qZWN0cy9waG90by1icm93c2VyL3NyYy9hcHAvdGh1bWItdmlldy1pdGVtL3RodW1iLXZpZXctaXRlbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zdGV2ZS9Qcm9qZWN0cy9waG90by1icm93c2VyL3NyYy9zYXNzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWE7RUFDYiw0QkFBMkI7RUFDM0Isb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixtQ0FBa0M7RUFDbEMsb0JBQW1CLEVBd0NwQjtFQTlDRDtJQVNJLGdCQUFlLEVBQ2hCO0VBVkg7SUFhSSw4QkFBcUI7WUFBckIsc0JBQXFCO0lBQ3JCLGdDQ1BrQjtJRFFsQixZQUFXLEVBQ1o7RUFoQkg7SUFtQkksaUJBQWdCO0lBQ2hCLHFDQUE0QjtZQUE1Qiw2QkFBNEIsRUFDN0I7RUFFRDtJQUNFLG1CQUFrQixFQVNuQjtFQVJDO01BQ0UsYUFBWTtNQUNaLGNBQWE7TUFDYix5Q0NuQmdDO01Eb0JoQyxtQkFBa0I7TUFDbEIscUJBQW9CO01BQ3BCLG9CQUFtQixFQUNwQjtFQUlEO0lBQ0UsYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsY0FBYTtJQUNiLDBCQUF5QjtJQUN6QixvQkFBbUI7SUFDbkIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdGh1bWItdmlldy1pdGVtL3RodW1iLXZpZXctaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zYXNzL3ZhcmlhYmxlc1wiO1xuXG4udGh1bWItdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJjpob3ZlciAmX192aXotLXRodW1iIHtcbiAgICB0cmFuc2Zvcm06IHNrZXcoOGRlZyk7XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDRyZW0gJGNvbG9yLXNoYWRvdztcbiAgICBvcGFjaXR5OiAuMztcbiAgfVxuXG4gICY6aG92ZXIgJl9fbWV0YS0taGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLThyZW0pO1xuICB9XG5cbiAgJl9fdml6IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgJi0tdGh1bWIge1xuICAgICAgd2lkdGg6IDE1cmVtO1xuICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXB1cnBsZS1kYXJrZXIsIC41KTtcbiAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgICB9XG4gIH1cblxuICAmX19tZXRhIHtcbiAgICAmLS1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgfVxuICB9XG59XG4iLCIkZGVmYXVsdC1mb250OiAnTm90byBTYW5zJztcbiRjb2xvci1wcmltYXJ5OiAjYTRiMGJlO1xuJGNvbG9yLXNlY29uZGFyeTogIzc0N2Q4YztcbiRjb2xvci10ZXJ0aWFyeTogIzJmMzU0MjtcbiRjb2xvci10ZXJ0aWFyeS1saWdodGVyOiAjMzIzODQ2O1xuJGNvbG9yLWdyZXktZGFyazogI2NlZDZlMDtcbiRjb2xvci1oaWdobGlnaHQ6cmdiKDk1LCA1OCwgMTU4KTtcbiRjb2xvci1oaWdobGlnaHQtbGlnaHQ6cmdiKDIwNywgMTU2LCAyNDEpO1xuJGNvbG9yLWhpZ2hsaWdodC1saWdodDpyZ2IoMTIzLCA3NywgMjAyKTtcbiRjb2xvci1zaGFkb3c6ICMyZjM1NDI7XG4kY29sb3ItcHVycGxlOiAjNjczQUI3O1xuJGNvbG9yLXB1cnBsZS1kYXJrZXI6IHJnYig4NywgNDksIDE1Myk7XG4kY29sb3ItcHVycGxlLWRhcmtlc3Q6IHJnYig2MywgMzcsIDEwOSk7XG5cbiRkZWZhdWx0LWZvbnQtc2l6ZTogMS42cmVtO1xuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/thumb-view-item/thumb-view-item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/thumb-view-item/thumb-view-item.component.ts ***!
  \**************************************************************/
/*! exports provided: ThumbViewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbViewItemComponent", function() { return ThumbViewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThumbViewItemComponent = /** @class */ (function () {
    function ThumbViewItemComponent(eventService) {
        this.eventService = eventService;
    }
    ThumbViewItemComponent.prototype.ngOnInit = function () {
    };
    ThumbViewItemComponent.prototype.onImageSelect = function () {
        this.eventService.emitImageSelected(this.image);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThumbViewItemComponent.prototype, "image", void 0);
    ThumbViewItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thumb-view-item',
            template: __webpack_require__(/*! ./thumb-view-item.component.html */ "./src/app/thumb-view-item/thumb-view-item.component.html"),
            styles: [__webpack_require__(/*! ./thumb-view-item.component.scss */ "./src/app/thumb-view-item/thumb-view-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], ThumbViewItemComponent);
    return ThumbViewItemComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user\">\n\n  <div class=\"user-detail-list\">\n\n    <div class=\"user-detail\">\n      <div class=\"user-detail__property\">Username</div>\n      <div class=\"user-detail__value\">{{user.username}}</div>\n    </div>\n\n    <div class=\"user-detail\">\n      <div class=\"user-detail__property\">Email</div>\n      <div class=\"user-detail__value\">{{user.email</div>\n    </div>\n\n    <div class=\"user-detail contextual\" (click)=\"onContextSelect(user.address, 'address')\">\n      <div class=\"user-detail__property\">\n        Address\n        <sup><i class=\"fa fa-info-circle\"></i></sup>\n      </div>\n      <div class=\"user-detail__value\">{{user.address.city}}</div>\n    </div>\n\n    <div class=\"user-detail\">\n      <div class=\"user-detail__property\">Phone</div>\n      <div class=\"user-detail__value\">{{user.phone}}</div>\n    </div>\n\n    <div class=\"user-detail\">\n      <div class=\"user-detail__property\">Website</div>\n      <div class=\"user-detail__value\">{{user.website}}</div>\n    </div>\n\n    <div class=\"user-detail contextual\" (click)=\"onContextSelect(user.company, 'company')\">\n      <div class=\"user-detail__property\">\n        Company\n        <sup><i class=\"fa fa-info-circle\"></i></sup>\n      </div>\n      <div class=\"user-detail__value\">{{user.company.name}}</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"inContext\" class=\"user-detail-context\">\n\n    <div class=\"context\">\n        <ul class=\"context-list\">\n\n          <li *ngFor=\"let item of contextProperties\" class=\"context-list__item\">\n              <span class=\"context__list--key\">{{item.key}}</span>\n              <span class=\"context__list--val\">{{item.val}}</span>\n          </li>\n\n         </ul>\n      </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.user {\n  width: inherit;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  background-image: url('user.png');\n  background-blend-mode: lighten;\n  background-position-x: 70%;\n  background-position-y: 50%;\n  background-repeat: no-repeat; }\n.user-detail-list {\n  widows: inherit; }\n.user-detail {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-right: 3rem;\n  font-size: 1.4rem;\n  margin-bottom: .6rem; }\n.user-detail__property {\n    flex: 1;\n    margin-right: 2rem; }\n.user-detail__value {\n    font-weight: 100; }\n.user-detail-context {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n.contextual:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  -webkit-text-decoration-color: rgba(255, 255, 255, 0.4);\n          text-decoration-color: rgba(255, 255, 255, 0.4); }\n.context-list {\n  list-style: none; }\n.context-list__item  {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3N0ZXZlL1Byb2plY3RzL3Bob3RvLWJyb3dzZXIvc3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCO0FDRWpCO0VBQ0UsZUFBYztFQUNkLGNBQWE7RUFDYiw0QkFBMkI7RUFDM0Isd0JBQXVCO0VBQ3ZCLGtDQUE2QztFQUM3QywrQkFBNkI7RUFDN0IsMkJBQTBCO0VBQzFCLDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDN0I7QUFFRDtFQUNFLGdCQUFlLEVBRWhCO0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLDRCQUEyQjtFQUMzQixtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLHFCQUFvQixFQVVyQjtBQVJDO0lBQ0UsUUFBTztJQUNQLG1CQUFrQixFQUNuQjtBQUVEO0lBQ0UsaUJBQWdCLEVBQ2pCO0FBR0g7RUFDRSxjQUFhO0VBQ2IsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUN4QjtBQUVEO0VBQ0UsZ0JBQWU7RUFDZiwyQkFBMEI7RUFDMUIsd0RBQWlDO1VBQWpDLGdEQUFpQyxFQUNsQztBQUlEO0VBQ0ksaUJBQWdCLEVBT25CO0FBTkc7SUFDRSxjQUFhO0lBQ2IsK0JBQThCO0lBQzlCLG9CQUFtQjtJQUNuQix1QkFBc0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udXNlciB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdXNlci5wbmdcIik7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbGlnaHRlbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA3MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XG5cbi51c2VyLWRldGFpbC1saXN0IHtcbiAgd2lkb3dzOiBpbmhlcml0OyB9XG5cbi51c2VyLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjZyZW07IH1cbiAgLnVzZXItZGV0YWlsX19wcm9wZXJ0eSB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07IH1cbiAgLnVzZXItZGV0YWlsX192YWx1ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgfVxuXG4udXNlci1kZXRhaWwtY29udGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cblxuLmNvbnRleHR1YWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxuXG4uY29udGV4dC1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAuY29udGV4dC1saXN0X19pdGVtwqAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuIiwiQGltcG9ydCAnLi4vLi4vc2Fzcy92YXJpYWJsZXMnO1xuXG4udXNlciB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vYXNzZXRzL3VzZXIucG5nJyk7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTpsaWdodGVuO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDcwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi51c2VyLWRldGFpbC1saXN0IHtcbiAgd2lkb3dzOiBpbmhlcml0O1xuXG59XG5cbi51c2VyLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjZyZW07XG5cbiAgJl9fcHJvcGVydHkge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICB9XG5cbiAgJl9fdmFsdWUge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbn1cblxuLnVzZXItZGV0YWlsLWNvbnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY29udGV4dHVhbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiYSh3aGl0ZSwgLjQpO1xufVxuXG4uY29udGV4dCB7fVxuXG4uY29udGV4dC1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICZfX2l0ZW3CoHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../event.service */ "./src/app/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(eventService) {
        this.eventService = eventService;
        this.currentContext = null;
        this.contextSubscription = null;
        this.currentContextType = null;
        this.inContext = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contextSubscription = this.eventService.contextSelectedEvt
            .subscribe(function (contextDao) {
            if (contextDao) {
                _this.transformContext(contextDao);
            }
        });
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.currentContext = null;
        this.contextSubscription.unsubscribe();
        this.inContext = false;
        this.currentContextType = null;
    };
    UserComponent.prototype.onContextSelect = function (context, kind) {
        this.eventService.emitContextSelected({ context: context, kind: kind });
    };
    UserComponent.prototype.transformContext = function (contextDao) {
        switch (contextDao.kind) {
            case 'address':
                this.currentContextType = 'address';
                break;
            case 'company':
                this.currentContextType = 'company';
                break;
        }
        this.currentContext = contextDao.context;
        this.contextProperties = this.getContextProperties(this.currentContext);
        this.inContext = true;
    };
    UserComponent.prototype.getContextProperties = function (context) {
        var proparr = [];
        for (var _i = 0, _a = Object.keys(context); _i < _a.length; _i++) {
            var key = _a[_i];
            proparr.push({ key: key, val: context[key] });
        }
        return proparr;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], UserComponent);
    return UserComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/steve/Projects/photo-browser/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/steve/Projects/photo-browser/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map