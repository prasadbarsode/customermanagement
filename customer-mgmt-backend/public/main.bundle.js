webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/custmgmt/custmgmt.module": [
		"../../../../../src/app/custmgmt/custmgmt.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    {
        path: '',
        loadChildren: 'app/custmgmt/custmgmt.module#CustmgmtModule'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custmgmt_custmgmt_module__ = __webpack_require__("../../../../../src/app/custmgmt/custmgmt.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_custdetails_service__ = __webpack_require__("../../../../../src/app/services/custdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validaterules_service__ = __webpack_require__("../../../../../src/app/services/validaterules.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_edit_cust_control_service__ = __webpack_require__("../../../../../src/app/services/edit-cust-control.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__custmgmt_custmgmt_module__["CustmgmtModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_custdetails_service__["a" /* CustdetailsService */],
                __WEBPACK_IMPORTED_MODULE_10__services_validaterules_service__["a" /* ValidaterulesService */],
                __WEBPACK_IMPORTED_MODULE_11__services_edit_cust_control_service__["a" /* EditCustControlService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/custmgmt/cust-info-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustInfoBase; });
var CustInfoBase = (function () {
    function CustInfoBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
    }
    return CustInfoBase;
}());



/***/ }),

/***/ "../../../../../src/app/custmgmt/custmgmt-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustmgmtRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewcustdetails_viewcustdetails_component__ = __webpack_require__("../../../../../src/app/custmgmt/viewcustdetails/viewcustdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dynamiccustedit_dynamiccustedit_component__ = __webpack_require__("../../../../../src/app/custmgmt/dynamiccustedit/dynamiccustedit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__viewcustdetails_viewcustdetails_component__["a" /* ViewcustdetailsComponent */],
    },
    {
        path: 'editcustomerdetails/:id',
        //component: EditcustomerdetailsComponent, 
        component: __WEBPACK_IMPORTED_MODULE_3__dynamiccustedit_dynamiccustedit_component__["a" /* DynamiccusteditComponent */],
    }
];
var CustmgmtRoutingModule = (function () {
    function CustmgmtRoutingModule() {
    }
    CustmgmtRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CustmgmtRoutingModule);
    return CustmgmtRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/custmgmt/custmgmt.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustmgmtModule", function() { return CustmgmtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custmgmt_routing_module__ = __webpack_require__("../../../../../src/app/custmgmt/custmgmt-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewcustdetails_viewcustdetails_component__ = __webpack_require__("../../../../../src/app/custmgmt/viewcustdetails/viewcustdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editcustomerdetails_editcustomerdetails_component__ = __webpack_require__("../../../../../src/app/custmgmt/editcustomerdetails/editcustomerdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dynamiccustedit_dynamiccustedit_component__ = __webpack_require__("../../../../../src/app/custmgmt/dynamiccustedit/dynamiccustedit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gen_edit_form_group_gen_edit_form_group_component__ = __webpack_require__("../../../../../src/app/custmgmt/gen-edit-form-group/gen-edit-form-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__populate_cust_info_fields_populate_cust_info_fields_component__ = __webpack_require__("../../../../../src/app/custmgmt/populate-cust-info-fields/populate-cust-info-fields.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CustmgmtModule = (function () {
    function CustmgmtModule() {
    }
    CustmgmtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__custmgmt_routing_module__["a" /* CustmgmtRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__viewcustdetails_viewcustdetails_component__["a" /* ViewcustdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__editcustomerdetails_editcustomerdetails_component__["a" /* EditcustomerdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dynamiccustedit_dynamiccustedit_component__["a" /* DynamiccusteditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gen_edit_form_group_gen_edit_form_group_component__["a" /* GenEditFormGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__populate_cust_info_fields_populate_cust_info_fields_component__["a" /* PopulateCustInfoFieldsComponent */]],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NO_ERRORS_SCHEMA */],
                __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__viewcustdetails_viewcustdetails_component__["a" /* ViewcustdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__editcustomerdetails_editcustomerdetails_component__["a" /* EditcustomerdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dynamiccustedit_dynamiccustedit_component__["a" /* DynamiccusteditComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gen_edit_form_group_gen_edit_form_group_component__["a" /* GenEditFormGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__populate_cust_info_fields_populate_cust_info_fields_component__["a" /* PopulateCustInfoFieldsComponent */]
            ]
        })
    ], CustmgmtModule);
    return CustmgmtModule;
}());



/***/ }),

/***/ "../../../../../src/app/custmgmt/datepicker-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_info_base__ = __webpack_require__("../../../../../src/app/custmgmt/cust-info-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DatepickerInfo = (function (_super) {
    __extends(DatepickerInfo, _super);
    function DatepickerInfo(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'datepicker';
        _this.type = options['type'] || '';
        return _this;
    }
    return DatepickerInfo;
}(__WEBPACK_IMPORTED_MODULE_0__cust_info_base__["a" /* CustInfoBase */]));



/***/ }),

/***/ "../../../../../src/app/custmgmt/dropdown-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_info_base__ = __webpack_require__("../../../../../src/app/custmgmt/cust-info-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DropdownInfo = (function (_super) {
    __extends(DropdownInfo, _super);
    function DropdownInfo(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.options = options['options'] || [];
        return _this;
        //this.custCountrySetValue = options['type'] || [];
    }
    return DropdownInfo;
}(__WEBPACK_IMPORTED_MODULE_0__cust_info_base__["a" /* CustInfoBase */]));



/***/ }),

/***/ "../../../../../src/app/custmgmt/dynamiccustedit/dynamiccustedit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custmgmt/dynamiccustedit/dynamiccustedit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <h2 class=\"page-header\">Edit existing customer details</h2>\n  \n      <app-gen-edit-form-group [custInfoToBeEdited]=\"custInfoToBeEdited\" *ngIf=\"custInfoToBeEdited.length > 0\">\n\n        </app-gen-edit-form-group>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/custmgmt/dynamiccustedit/dynamiccustedit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamiccusteditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_custdetails_service__ = __webpack_require__("../../../../../src/app/services/custdetails.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamiccusteditComponent = (function () {
    function DynamiccusteditComponent(custdetailsService) {
        this.custdetailsService = custdetailsService;
        this.customerDataRes = {};
        this.custInfoToBeEdited = this.custdetailsService.getCustInfoBase();
    }
    DynamiccusteditComponent.prototype.ngOnInit = function () {
    };
    DynamiccusteditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-dynamiccustedit',
            template: __webpack_require__("../../../../../src/app/custmgmt/dynamiccustedit/dynamiccustedit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custmgmt/dynamiccustedit/dynamiccustedit.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_custdetails_service__["a" /* CustdetailsService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_custdetails_service__["a" /* CustdetailsService */]])
    ], DynamiccusteditComponent);
    return DynamiccusteditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/custmgmt/editcustomerdetails/editcustomerdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n\r\n  .input-group ul{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .input-group ul li{\r\n    list-style-type: none;\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .custom-select {\r\n    padding: 0;\r\n    width: auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custmgmt/editcustomerdetails/editcustomerdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<h2 class=\"page-header\">Edit existing customer details</h2>\n\n  <form (submit)=\"onEditCustomerSubmit(customerDataRes._id)\" #customerForm=\"ngForm\">\n    <div class=\"row\">\n    <div class=\"form-group col-sm-10\">\n      <label>Customer Name</label>\n      <input type=\"text\" [(ngModel)]=\"customerDataRes.name\" name=\"customerName\" #customerName=ngModel minlength=\"2\" class=\"form-control\" required>\n\n    <div *ngIf=\"customerName.invalid && (customerName.dirty || customerName.touched)\"\n    class=\"alert alert-danger\">\n    <div *ngIf=\"customerName.errors.required\">\n          Name is required.\n    </div>\n    <div *ngIf=\"customerName.errors.minlength\">\n      Name must be at least 2 characters long.\n    </div>\n    </div>\n    </div>\n    </div>\n\n    <div class=\"row\">\n    <div class=\"form-group col-sm-10\">\n        <label for=\"country\">Customer Country</label>\n        <select class=\"form-control\" id=\"customerCountry\" [(ngModel)]=\"customerDataRes.country\" name=\"customerCountry\" required>\n          <option *ngFor=\"let country of countries\" [value]=\"country\">{{country}}</option>\n        </select>\n    </div>\n    </div>\n\n    <div class=\"row\">\n    <div class=\"form-group col-sm-10\">\n        <label>Number Of Employees</label>\n        <input type=\"number\" [(ngModel)]=\"customerDataRes.numberOfEmployees\" name=\"numberOfEmployees\" #numberOfEmployees=ngModel min=\"1\" class=\"form-control\" required>\n  \n      <div *ngIf=\"numberOfEmployees.invalid && (numberOfEmployees.dirty || numberOfEmployees.touched)\"\n      class=\"alert alert-danger\">\n      <div *ngIf=\"numberOfEmployees.errors.required\">\n            Number of employees is required field.\n      </div>\n      <!-- <div *ngIf=\"numberOfEmployees.errors.min\">\n        Name must be at least 2 characters long.\n      </div> -->\n      </div>\n  \n      </div>\n    </div>  \n\n    <div class=\"row\">\n      <div class=\"form-group col-sm-10\">\n          <label>Website Url</label>\n          <input type=\"text\" [(ngModel)]=\"customerDataRes.websiteUrl\" name=\"websiteUrl\" #websiteUrl=ngModel class=\"form-control\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-10\">\n\n      <div class=\"form-group\">\n          <label>Contract Expiry Date</label>\n          <pre>{{ contractExpDateDisplayFormat | date:'dd/MM/yyyy HH:mm'}}</pre>\n\n        <div class=\"input-group date\" id='datetimepicker1'>\n            <input class=\"form-control\" placeholder=\"dd-MM-yyyy\" name=\"contractExpiryDate\" [(ngModel)]=\"selectedDate\"  ngbDatepicker #d1=\"ngbDatepicker\">\n            <div class=\"input-group-addon\" (click)=\"d1.toggle()\" >\n              <!-- <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> -->\n            <span class=\"glyphicon glyphicon-calendar\"></span>\n        </div>\n      </div>\n      </div>\n\n      </div>\n      </div>\n      \n      \n\n      <div class=\"row\">\n      <div class=\"form-group col-sm-10\" *ngIf=\"customerDataRes.type==2\">\n          <label>Annual Turnover</label>\n          <input type=\"number\" [(ngModel)]=\"customerDataRes.annualTurnover\" name=\"annualTurnover\" #annualTurnover=ngModel class=\"form-control\" required>\n          {{ customerDataRes.annualTurnover | currency : 'EUR' }}\n        <div *ngIf=\"annualTurnover.invalid && (annualTurnover.dirty || annualTurnover.touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"annualTurnover.errors.required\">\n            Annual Turnover is required field.\n        </div>\n        </div>\n        </div>\n        </div>\n\n      \n        <div class=\"row\">\n        <div class=\"form-group col-sm-10\" *ngIf=\"customerDataRes.type==2\">\n          <label>Compliance Checked</label>\n        <div class=\"input-group\">\n          <ul>\n            <li>\n                <label class=\"form-check-inline\">\n                    <input type=\"radio\" [(ngModel)]=\"customerDataRes.complianceChecked\" name=\"complianceChecked\" [value]=\"true\" #complianceChecked=ngModel> Yes\n                </label>\n            </li>\n            <li>\n                <label>\n                    <input type=\"radio\" [(ngModel)]=\"customerDataRes.complianceChecked\" name=\"complianceChecked\" [value]=\"false\"> No\n                </label>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n      \n\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" [disabled]=\"!customerForm.form.valid\">\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/custmgmt/editcustomerdetails/editcustomerdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditcustomerdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custdetails_service__ = __webpack_require__("../../../../../src/app/services/custdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditcustomerdetailsComponent = (function () {
    function EditcustomerdetailsComponent(custdetailsService, route, router, calendar, config) {
        this.custdetailsService = custdetailsService;
        this.route = route;
        this.router = router;
        this.calendar = calendar;
        this.config = config;
        this.customerDataRes = {};
        this.countries = ['Denmark', 'Sweden', 'Norway'];
        this.getSelectedCustomerDetail(this.route.snapshot.params.id);
        this.currentDate = new Date();
        config.minDate = { year: this.currentDate.getFullYear(),
            month: this.currentDate.getMonth() + 1,
            day: this.currentDate.getDate() };
        config.maxDate = { year: this.currentDate.getFullYear() + 3,
            month: this.currentDate.getMonth() + 1,
            day: this.currentDate.getDate() };
    }
    EditcustomerdetailsComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    EditcustomerdetailsComponent.prototype.createForm = function () {
    };
    //Make service call to fetch details of selected customer
    EditcustomerdetailsComponent.prototype.getSelectedCustomerDetail = function (id) {
        var _this = this;
        this.custdetailsService.getSelectedCustomerInfo(id).subscribe(function (data) {
            _this.customerDataRes = data;
            //get UTC date in correct format as it has extra space in test data
            _this.customerDataRes.contractExpiryDate = _this.convertUTCtoDateformat(_this.customerDataRes.contractExpiryDate);
            _this.selectedDate = _this.customerDataRes.contractExpiryDate;
            console.log("Assigned date:", _this.selectedDate);
        });
    };
    EditcustomerdetailsComponent.prototype.convertUTCtoDateformat = function (contractExpiryDate) {
        //Convert UTC date format to standard date
        this.contractExpDateDisplayFormat = contractExpiryDate.split(" ");
        if (this.contractExpDateDisplayFormat.length > 1) {
            contractExpiryDate = this.contractExpDateDisplayFormat[0] + this.contractExpDateDisplayFormat[1];
            //console.log("contractExpDateDisplayFormat:", contractExpiryDate);
        }
        this.contractExpDateDisplayFormat = new Date(contractExpiryDate);
        return this.contractExpDateDisplayFormat;
    };
    EditcustomerdetailsComponent.prototype.onEditCustomerSubmit = function (id) {
        console.log("inside edit customer");
        //var event = new Date('05 October 2011 14:48 UTC');
        //console.log(event.toISOString());
        var revisedDate = new Date(this.selectedDate.year, this.selectedDate.month, this.selectedDate.day);
        console.log(revisedDate.toISOString());
        var localTime = revisedDate.getTime();
        // obtain local UTC offset and convert to msec
        var localOffset = revisedDate.getTimezoneOffset() * 60000;
        var offset = 5.5;
        // obtain UTC time in msec
        var utc = localTime + localOffset;
        var bombay = utc + (3600000 * offset);
        var nd = new Date(bombay);
        //document.writeln("Bombay time is " + nd.toLocaleString() + "<br>");
        console.log(nd.toLocaleString());
        var revisedCustomerDetail = {
            _id: this.customerDataRes._id,
            id: this.customerDataRes.id,
            type: this.customerDataRes.type,
            name: this.customerDataRes.name,
            country: this.customerDataRes.country,
            websiteUrl: this.customerDataRes.websiteUrl,
            numberOfEmployees: this.customerDataRes.numberOfEmployees,
            contractExpiryDate: revisedDate.toISOString(),
            annualTurnover: this.customerDataRes.annualTurnover,
            complianceChecked: this.customerDataRes.complianceChecked
        };
        console.log('revisedCustomerDetail:' + revisedCustomerDetail.contractExpiryDate);
        // Required Fields
        //  if(!this.validateService.validateAirlineDetails(this.revisedCustomerDetail)){
        //   console.log("Please feel in all fields to complete addition of new airline");
        //   return false;
        // }
        //Navigate back to default view in case of success
        //this.router.navigate(['/']);
    };
    EditcustomerdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-editcustomerdetails',
            template: __webpack_require__("../../../../../src/app/custmgmt/editcustomerdetails/editcustomerdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custmgmt/editcustomerdetails/editcustomerdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_custdetails_service__["a" /* CustdetailsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbCalendar */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerConfig */]])
    ], EditcustomerdetailsComponent);
    return EditcustomerdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/custmgmt/gen-edit-form-group/gen-edit-form-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custmgmt/gen-edit-form-group/gen-edit-form-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\" *ngIf=\"form\">\n\n    <div *ngFor=\"let custInfo of custInfoToBeEdited\" class=\"form-row\">\n      <app-populate-cust-info-fields [custInfo]=\"custInfo\" [form]=\"form\"></app-populate-cust-info-fields>\n    </div>\n\n    <div class=\"form-row\">\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Save</button>\n    </div>\n  </form>\n\n  <div *ngIf=\"payLoad\" class=\"form-row alert alert-success\">\n    <strong>Saved updated customer details</strong><br>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/custmgmt/gen-edit-form-group/gen-edit-form-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenEditFormGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_customer_type__ = __webpack_require__("../../../../../src/app/model/customer-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_edit_cust_control_service__ = __webpack_require__("../../../../../src/app/services/edit-cust-control.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_custdetails_service__ = __webpack_require__("../../../../../src/app/services/custdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validaterules_service__ = __webpack_require__("../../../../../src/app/services/validaterules.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenEditFormGroupComponent = (function () {
    function GenEditFormGroupComponent(custdetailsService, route, router, editCustControlService, validaterulesService) {
        this.custdetailsService = custdetailsService;
        this.route = route;
        this.router = router;
        this.editCustControlService = editCustControlService;
        this.validaterulesService = validaterulesService;
        this.custInfoToBeEdited = [];
        this.editedFormData = '';
        this.customerDataRes = {};
        this.custType = new __WEBPACK_IMPORTED_MODULE_2__model_customer_type__["a" /* CustomerType */]();
        this.custId = this.route.snapshot.params.id;
    }
    GenEditFormGroupComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    GenEditFormGroupComponent.prototype.onSubmit = function () {
        var _this = this;
        //Get revised contract expiry date as per EU offset format
        var contractExp = this.validaterulesService.getContractExpiryDateinUTCFormat(this.form.controls['contractExpiryDate'].value);
        if (this.customerDataRes.type == this.custType.bigCustomerType) {
            //Set compliance checked status in boolean format
            if (this.form.controls['complianceChecked'].value == "true") {
                this.complianceChecked = true;
            }
            else if (this.form.controls['complianceChecked'].value == "false"
                || this.form.controls['complianceChecked'].value == null
                || this.form.controls['complianceChecked'].value == "") {
                this.complianceChecked = false;
            }
            //Request body object with updated customer details
            var editedCustomerData = {
                _id: this.customerDataRes._id,
                id: this.customerDataRes.id,
                type: this.customerDataRes.type,
                name: this.form.controls['name'].value,
                country: this.form.controls['country'].value,
                websiteUrl: this.form.controls['websiteUrl'].value,
                numberOfEmployees: parseInt(this.form.controls['numberOfEmployees'].value),
                contractExpiryDate: contractExp,
                annualTurnover: parseInt(this.form.controls['annualTurnover'].value),
                complianceChecked: this.complianceChecked
            };
            // Update existing big customer details
            this.custdetailsService.updateCustomerDetail(editedCustomerData).subscribe(function (data) {
                if (data.success) {
                    alert("Details updated successfully");
                    setTimeout(function () {
                        _this.router.navigate(['/']);
                    }, 1000);
                    _this.editedFormData = JSON.stringify(_this.form.value);
                }
                else {
                    alert("Details could not be updated. Please try again");
                }
            });
        }
        else if (this.customerDataRes.type == this.custType.smallCustomerType) {
            var editedCustomerData = {
                _id: this.customerDataRes._id,
                id: this.customerDataRes.id,
                type: this.customerDataRes.type,
                name: this.form.controls['name'].value,
                country: this.form.controls['country'].value,
                websiteUrl: this.form.controls['websiteUrl'].value,
                numberOfEmployees: parseInt(this.form.controls['numberOfEmployees'].value),
                contractExpiryDate: contractExp,
            };
            // Update existing small customer details through service call
            this.custdetailsService.updateCustomerDetail(editedCustomerData).subscribe(function (data) {
                if (data.success) {
                    alert("Details updated successfully");
                    setTimeout(function () {
                        _this.router.navigate(['/']);
                    }, 1000);
                    _this.editedFormData = JSON.stringify(_this.form.value);
                }
                else {
                    alert("Details could not be updated. Please try again");
                }
            });
        }
    };
    GenEditFormGroupComponent.prototype.createForm = function () {
        var _this = this;
        this.custdetailsService.getSelectedCustomerInfo(this.custId).subscribe(function (data) {
            //Receive data from backend
            _this.customerDataRes = data;
            //get UTC date in correct format as it has extra space in test data
            _this.customerDataRes.contractExpiryDate = _this.validaterulesService.convertUTCtoDateformat(_this.customerDataRes.contractExpiryDate);
            //Annual turnover and Compliance checked not required in case of small customers
            if (_this.customerDataRes.type == _this.custType.smallCustomerType) {
                _this.custInfoToBeEdited = _this.custInfoToBeEdited.filter(function (custInfoToBeEdited) {
                    return custInfoToBeEdited.key != 'annualTurnover' && custInfoToBeEdited.key != 'complianceChecked';
                });
            }
            //Populate FormGroup
            _this.form = _this.editCustControlService.toFormGroup(_this.custInfoToBeEdited, _this.customerDataRes);
            //Set display date in yyyy-MM-dd as it is only accepted format in ng-Bootstrap
            _this.form.value.contractExpiryDate = new Date(_this.form.value.contractExpiryDate);
            _this.form.controls['contractExpiryDate'].setValue({
                year: parseInt(_this.form.value.contractExpiryDate.getFullYear()),
                month: parseInt(_this.form.value.contractExpiryDate.getMonth() + 1),
                day: parseInt(_this.form.value.contractExpiryDate.getDate()),
                hour: parseInt(_this.form.value.contractExpiryDate.getHours()),
                minute: parseInt(_this.form.value.contractExpiryDate.getMinutes()),
                seconds: parseInt(_this.form.value.contractExpiryDate.getSeconds()),
            });
            //Add customer type as hidden field as it is not displayed on screen
            //It is used to differentiate between max date for small and big customers
            _this.form.addControl('customerType', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required));
            _this.form.controls['customerType'].setValue(_this.customerDataRes.type);
        });
    };
    GenEditFormGroupComponent.prototype.ngOnDestroy = function () {
        this.custdetailsService.getSelectedCustomerInfo(this.custId).subscribe().unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], GenEditFormGroupComponent.prototype, "custInfoToBeEdited", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], GenEditFormGroupComponent.prototype, "customerDataRes", void 0);
    GenEditFormGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-gen-edit-form-group',
            template: __webpack_require__("../../../../../src/app/custmgmt/gen-edit-form-group/gen-edit-form-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custmgmt/gen-edit-form-group/gen-edit-form-group.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_edit_cust_control_service__["a" /* EditCustControlService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_custdetails_service__["a" /* CustdetailsService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_edit_cust_control_service__["a" /* EditCustControlService */],
            __WEBPACK_IMPORTED_MODULE_6__services_validaterules_service__["a" /* ValidaterulesService */]])
    ], GenEditFormGroupComponent);
    return GenEditFormGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/custmgmt/populate-cust-info-fields/populate-cust-info-fields.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n  \r\n  .ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n  }\r\n\r\n  .input-group ul{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  .input-group ul li{\r\n    list-style-type: none;\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n  }\r\n\r\n  .custom-select {\r\n    padding: 0;\r\n    width: auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custmgmt/populate-cust-info-fields/populate-cust-info-fields.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form [formGroup]=\"form\">\n    <label [attr.for]=\"custInfo.key\">{{custInfo.label}}</label>\n  \n    <div [ngSwitch]=\"custInfo.controlType\" class=\"row\">\n  \n    <div class=\"form-group col-sm-10\">  \n      <input *ngSwitchCase=\"'textbox'\" [formControlName]=\"custInfo.key\"\n              [id]=\"custInfo.key\" [type]=\"custInfo.type\" class=\"form-control col-sm-10\">\n  \n      <select [id]=\"custInfo.key\" *ngSwitchCase=\"'dropdown'\" [formControlName]=\"custInfo.key\" class=\"form-control col-sm-10\">\n        <option *ngFor=\"let opt of custInfo.options\" [value]=\"opt.key\">{{opt.value}}</option>\n      </select>\n\n      <div *ngSwitchCase=\"'datepicker'\" class=\"input-group date\" id='datetimepicker1'>\n        <input [formControlName]=\"custInfo.key\"\n              [id]=\"custInfo.key\" [type]=\"custInfo.type\" readonly\n              class=\"form-control col-sm-10\" ngbDatepicker #d1=\"ngbDatepicker\">\n          <div class=\"input-group-addon\" (click)=\"d1.toggle()\">\n                <span class=\"glyphicon glyphicon-calendar\"></span>\n          </div> \n      </div>\n      \n    </div> \n    </div> \n\n    <div class=\"row\">\n      <div class=\"alert alert-danger col-sm-10\" *ngIf=\"!isValid\">{{custInfo.label}} is required in valid format</div>\n    </div>\n    \n  </form>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/custmgmt/populate-cust-info-fields/populate-cust-info-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulateCustInfoFieldsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cust_info_base__ = __webpack_require__("../../../../../src/app/custmgmt/cust-info-base.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_customer_type__ = __webpack_require__("../../../../../src/app/model/customer-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PopulateCustInfoFieldsComponent = (function () {
    function PopulateCustInfoFieldsComponent(calendar, config) {
        this.calendar = calendar;
        this.config = config;
        this.custType = new __WEBPACK_IMPORTED_MODULE_3__model_customer_type__["a" /* CustomerType */]();
    }
    Object.defineProperty(PopulateCustInfoFieldsComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.custInfo.key].valid; },
        enumerable: true,
        configurable: true
    });
    PopulateCustInfoFieldsComponent.prototype.ngOnInit = function () {
        this.getValidContractDates();
    };
    PopulateCustInfoFieldsComponent.prototype.getValidContractDates = function () {
        //It is not allowed to set back date for contract expiry date
        //Current date is set as minimun date
        this.currentDate = new Date();
        this.config.minDate = { year: this.currentDate.getFullYear(),
            month: this.currentDate.getMonth() + 1,
            day: this.currentDate.getDate() };
        //Calculate max date allowed for contract expiry
        //Max exp date is plus 2 years from current date in case of small customer(typ=1)
        //Max exp date is plus 3 years from current date in case of big customer (type=2)  
        if (this.form.controls['customerType'].value == this.custType.bigCustomerType) {
            this.config.maxDate = { year: this.currentDate.getFullYear() + 3,
                month: this.currentDate.getMonth() + 1,
                day: this.currentDate.getDate() };
        }
        else if (this.form.controls['customerType'].value == this.custType.smallCustomerType) {
            this.config.maxDate = { year: this.currentDate.getFullYear() + 2,
                month: this.currentDate.getMonth() + 1,
                day: this.currentDate.getDate() };
        }
    };
    PopulateCustInfoFieldsComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__cust_info_base__["a" /* CustInfoBase */])
    ], PopulateCustInfoFieldsComponent.prototype, "custInfo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */])
    ], PopulateCustInfoFieldsComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], PopulateCustInfoFieldsComponent.prototype, "customerType", void 0);
    PopulateCustInfoFieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-populate-cust-info-fields',
            template: __webpack_require__("../../../../../src/app/custmgmt/populate-cust-info-fields/populate-cust-info-fields.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custmgmt/populate-cust-info-fields/populate-cust-info-fields.component.css")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbCalendar */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbDatepickerConfig */]])
    ], PopulateCustInfoFieldsComponent);
    return PopulateCustInfoFieldsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/custmgmt/textbox-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextboxInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cust_info_base__ = __webpack_require__("../../../../../src/app/custmgmt/cust-info-base.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextboxInfo = (function (_super) {
    __extends(TextboxInfo, _super);
    function TextboxInfo(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxInfo;
}(__WEBPACK_IMPORTED_MODULE_0__cust_info_base__["a" /* CustInfoBase */]));



/***/ }),

/***/ "../../../../../src/app/custmgmt/viewcustdetails/viewcustdetails.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/custmgmt/viewcustdetails/viewcustdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container table-responsive\">\n  <h2>Small Customer Details</h2>  \n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Country</th>\n        <th>Number of Employees</th>\n        <th>Website</th>\n        <th>Contract Expiry Date(DD-MM-YYYY)</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let customer of smallCustomers\">\n      <tr class=\"success\">        \n        <td>{{customer.name}}</td>\n        <td>{{customer.country}}</td>\n        <td>{{customer.numberOfEmployees}}</td>\n        <td>{{customer.websiteUrl}}</td>\n        <td>{{customer.contractExpiryDate | date:'dd-MM-yyyy'}}</td>\n        <td><a class=\"btn btn-primary\" [routerLink]=\"['/editcustomerdetails', customer._id]\">Edit</a></td>\n      </tr>            \n    </tbody>\n  </table> \n\n  <h2>Big Customer Details</h2>  \n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Country</th>\n        <th>Number of Employees</th>\n        <th>Website</th>\n        <th>Contract Expiry Date(DD-MM-YYYY)</th>\n        <th>Annual Turnover</th>\n        <th>Compliance Checked</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let customer of bigCustomers\">\n      <tr class=\"danger\">\n        <td>{{customer.name}}</td>\n        <td>{{customer.country}}</td>\n        <td>{{customer.numberOfEmployees}}</td>\n        <td>{{customer.websiteUrl}}</td>\n        <td>{{customer.contractExpiryDate | date: 'dd-MM-yyyy' }}</td>\n        <td>{{customer.annualTurnover | currency:'EUR'}}</td>\n        <td *ngIf='customer.complianceChecked'>Yes</td>\n        <td *ngIf='!customer.complianceChecked'>No</td>\n        <td><a class=\"btn btn-primary\" [routerLink]=\"['/editcustomerdetails', customer._id]\">Edit</a></td>\n      </tr>            \n    </tbody>\n  </table> \n</div>"

/***/ }),

/***/ "../../../../../src/app/custmgmt/viewcustdetails/viewcustdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewcustdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_customer_type__ = __webpack_require__("../../../../../src/app/model/customer-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_custdetails_service__ = __webpack_require__("../../../../../src/app/services/custdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validaterules_service__ = __webpack_require__("../../../../../src/app/services/validaterules.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewcustdetailsComponent = (function () {
    function ViewcustdetailsComponent(custdetailsService, validaterulesService) {
        this.custdetailsService = custdetailsService;
        this.validaterulesService = validaterulesService;
        this.customerDataRes = [];
        this.customerType = new __WEBPACK_IMPORTED_MODULE_1__model_customer_type__["a" /* CustomerType */]();
        this.smallCustomers = [];
        this.bigCustomers = [];
    }
    ViewcustdetailsComponent.prototype.ngOnInit = function () {
        this.getCustomerDetails();
    };
    ViewcustdetailsComponent.prototype.getCustomerDetails = function () {
        var _this = this;
        this.custdetailsService.getCustomerData()
            .subscribe(function (data) {
            _this.customerDataRes = data;
            for (var i = 0; i < _this.customerDataRes.length; i++) {
                _this.customerDataRes[i].contractExpiryDate = _this.validaterulesService.convertUTCtoDateformat(_this.customerDataRes[i].contractExpiryDate);
            }
            _this.smallCustomers = _this.customerDataRes.filter(function (customerDataRes) {
                return customerDataRes.type == _this.customerType.smallCustomerType;
            });
            _this.bigCustomers = _this.customerDataRes.filter(function (customerDataRes) {
                return customerDataRes.type == _this.customerType.bigCustomerType;
            });
        });
    };
    ViewcustdetailsComponent.prototype.ngOnDestroy = function () {
        this.custdetailsService.getCustomerData().subscribe().unsubscribe();
    };
    ViewcustdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-viewcustdetails',
            template: __webpack_require__("../../../../../src/app/custmgmt/viewcustdetails/viewcustdetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/custmgmt/viewcustdetails/viewcustdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_custdetails_service__["a" /* CustdetailsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validaterules_service__["a" /* ValidaterulesService */]])
    ], ViewcustdetailsComponent);
    return ViewcustdetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/customer-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerType; });
var CustomerType = (function () {
    function CustomerType() {
        this.smallCustomerType = 1;
        this.bigCustomerType = 2;
    }
    return CustomerType;
}());



/***/ }),

/***/ "../../../../../src/app/services/custdetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustdetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custmgmt_textbox_info__ = __webpack_require__("../../../../../src/app/custmgmt/textbox-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custmgmt_dropdown_info__ = __webpack_require__("../../../../../src/app/custmgmt/dropdown-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__custmgmt_datepicker_info__ = __webpack_require__("../../../../../src/app/custmgmt/datepicker-info.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import environment parameters




var CustdetailsService = (function () {
    function CustdetailsService(http) {
        this.http = http;
        this._url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].envurl;
    }
    CustdetailsService.prototype.getCustomerData = function () {
        return this.http.get(this._url + 'getcustomerdetails/customerdetails/')
            .map(function (res) {
            return res.json();
        });
    };
    CustdetailsService.prototype.getSelectedCustomerInfo = function (id) {
        return this.http.get(this._url + 'getcustomerdetails/customerdetails/' + id)
            .map(function (res) {
            return res.json();
        });
    };
    // TODO: get from a remote source of question metadata
    // TODO: make asynchronous
    CustdetailsService.prototype.getCustInfoBase = function () {
        var editCustDetailsFields = [
            new __WEBPACK_IMPORTED_MODULE_6__custmgmt_textbox_info__["a" /* TextboxInfo */]({
                key: 'name',
                label: 'Name',
                value: '',
                required: true,
                order: 1
            }),
            new __WEBPACK_IMPORTED_MODULE_7__custmgmt_dropdown_info__["a" /* DropdownInfo */]({
                key: 'country',
                label: 'Country',
                options: [
                    { key: 'Denmark', value: 'Denmark' },
                    { key: 'Sweden', value: 'Sweden' },
                    { key: 'Norway', value: 'Norway' },
                ],
                custCountrySetValue: '',
                required: true,
                order: 2
            }),
            new __WEBPACK_IMPORTED_MODULE_6__custmgmt_textbox_info__["a" /* TextboxInfo */]({
                key: 'websiteUrl',
                label: 'Website Url',
                value: '',
                order: 3
            }),
            new __WEBPACK_IMPORTED_MODULE_6__custmgmt_textbox_info__["a" /* TextboxInfo */]({
                key: 'numberOfEmployees',
                label: 'Number Of Employees',
                value: '',
                required: true,
                order: 4
            }),
            new __WEBPACK_IMPORTED_MODULE_8__custmgmt_datepicker_info__["a" /* DatepickerInfo */]({
                key: 'contractExpiryDate',
                label: 'Contract Expiry Date',
                value: '',
                required: true,
                order: 6
            }),
            new __WEBPACK_IMPORTED_MODULE_6__custmgmt_textbox_info__["a" /* TextboxInfo */]({
                key: 'annualTurnover',
                label: 'Annual Turnover',
                value: '',
                required: true,
                order: 6
            }),
            new __WEBPACK_IMPORTED_MODULE_7__custmgmt_dropdown_info__["a" /* DropdownInfo */]({
                key: 'complianceChecked',
                label: 'Compliance Checked',
                options: [
                    { key: 'true', value: 'Yes' },
                    { key: 'false', value: 'No' },
                ],
                //custCountrySetValue: '',
                required: true,
                order: 7
            }),
        ];
        return editCustDetailsFields.sort(function (a, b) { return a.order - b.order; });
    };
    //Function to update customr data
    CustdetailsService.prototype.updateCustomerDetail = function (editedCustomerData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this._url + 'getcustomerdetails/customerdetails/' + editedCustomerData._id, JSON.stringify(editedCustomerData), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CustdetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CustdetailsService);
    return CustdetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/edit-cust-control.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCustControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditCustControlService = (function () {
    function EditCustControlService() {
    }
    EditCustControlService.prototype.toFormGroup = function (selectedCustDetails, customerDataRes) {
        var group = {};
        selectedCustDetails.forEach(function (custInfo) {
            switch (custInfo.key) {
                case 'name':
                    group[custInfo.key] = custInfo.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.name || '', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^[a-zA-Z]*$/)])
                        : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.name || '');
                    break;
                case 'country':
                    group[custInfo.key] = custInfo.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.country || '', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
                        : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.country || '');
                    break;
                case 'websiteUrl':
                    group[custInfo.key] = custInfo.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.websiteUrl || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
                        : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.websiteUrl || '');
                    break;
                case 'numberOfEmployees':
                    // group[custInfo.key] = custInfo.required ? new FormControl(custInfo.value || '', [Validators.required, Validators.pattern(/^[1-9][0-9]{0,9}$/)])
                    // : new FormControl(custInfo.value || '');
                    group[custInfo.key] = custInfo.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.numberOfEmployees || '', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^[1-9][0-9]{0,9}$/)])
                        : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.numberOfEmployees || '');
                    break;
                case 'contractExpiryDate':
                    group[custInfo.key] = custInfo.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.contractExpiryDate, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
                        : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.contractExpiryDate || '');
                    break;
                case 'annualTurnover':
                    group[custInfo.key] = custInfo.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.annualTurnover || '', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(/^[1-9][0-9]{0,9}$/)])
                        : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.annualTurnover || '');
                    break;
                case 'complianceChecked':
                    //console.log("Compliance checked:" + custInfo.key + customerDataRes.complianceChecked);
                    group[custInfo.key] = custInfo.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.complianceChecked, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
                        : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](customerDataRes.complianceChecked || '');
                    break;
                default:
                    group[custInfo.key] = custInfo.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](custInfo.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
                        : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](custInfo.value || '');
            }
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](group);
    };
    EditCustControlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EditCustControlService);
    return EditCustControlService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validaterules.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidaterulesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidaterulesService = (function () {
    function ValidaterulesService() {
        this.YYYYMMDD_START = 0;
        this.YYYYMMDD_END = 10;
        this.TIMEINDATE_START = 11;
        this.TIMEINDATE_END = 19;
        this.DATELESSTHANTEN = 10;
        this.ISOString_START = 0;
        this.ISOString_END = 19;
        this.ISOString_TIMEZONEOFFSET = 25;
        this.DIVIDEBYSIXTY = 60;
    }
    ValidaterulesService.prototype.convertUTCtoDateformat = function (contractExpiryDate) {
        //Convert UTC date format to standard date
        var contractExpDateDisplayFormat = contractExpiryDate.substring(this.YYYYMMDD_START, this.YYYYMMDD_END).concat(" ").concat(contractExpiryDate.substring(this.TIMEINDATE_START, this.TIMEINDATE_END));
        contractExpDateDisplayFormat = new Date(contractExpDateDisplayFormat);
        return contractExpDateDisplayFormat;
    };
    //This function is called to convert date back to UTC format for DB storage
    ValidaterulesService.prototype.getContractExpiryDateinUTCFormat = function (contractExpiryDate) {
        var contractExpYear = contractExpiryDate.year;
        var contractExpMonth = contractExpiryDate.month;
        var contractExpDate = contractExpiryDate.day;
        Date.prototype.toISOString = function () {
            var tzo = -this.getTimezoneOffset();
            var dif = tzo >= 0 ? '+' : '-';
            //append 0 if date is less than 10
            var pad = function (num) {
                var norm = Math.floor(Math.abs(num));
                return (norm < 10 ? '0' : '') + norm;
            };
            return contractExpYear +
                '-' + pad(contractExpMonth) +
                '-' + pad(contractExpDate) +
                'T' + pad(this.getHours()) +
                ':' + pad(this.getMinutes()) +
                ':' + pad(this.getSeconds()) +
                dif + pad(tzo / 60) +
                ':' + pad(tzo % 60);
        };
        var dt = new Date();
        var revisedContractEndDate = dt.toISOString().substring(this.ISOString_START, this.ISOString_END).concat(" ").concat(dt.toISOString().substring(this.ISOString_END, this.ISOString_TIMEZONEOFFSET));
        return revisedContractEndDate;
    };
    ValidaterulesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ValidaterulesService);
    return ValidaterulesService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    envurl: 'http://localhost:3000/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map