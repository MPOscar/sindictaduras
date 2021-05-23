(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+ImJ":
/*!*******************************************!*\
  !*** ./src/ui/helpers/mixin-decorator.ts ***!
  \*******************************************/
/*! exports provided: Mixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mixin", function() { return Mixin; });
function Mixin(baseCtors) {
    return function (derivedCtor) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                var descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
                if (name === 'constructor')
                    return;
                if (descriptor && (!descriptor.writable || !descriptor.configurable || !descriptor.enumerable || descriptor.get || descriptor.set)) {
                    Object.defineProperty(derivedCtor.prototype, name, descriptor);
                }
                else {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                }
            });
        });
    };
}


/***/ }),

/***/ "+It3":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/components/presidentes-table/presidentes-table.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PresidentesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentesTableComponent", function() { return PresidentesTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _common_error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/error-handling/services/toastr.service */ "IQ7q");
/* harmony import */ var _services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/presidentes.service */ "Vx6W");
/* harmony import */ var _common_services_country_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/services/country.service */ "/RXN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");



//


























var _c0 = ["paginator"];
function PresidentesTableComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PresidentesTableComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.nombre, " ");
} }
function PresidentesTableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Apellidos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PresidentesTableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.apellidos, " ");
} }
function PresidentesTableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pais ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PresidentesTableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r13 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.countryService.getCountryByCode(element_r13.pais), " ");
} }
function PresidentesTableComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ACTIONS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c1 = function (a1) { return ["./edit", a1]; };
var _c2 = function (a1) { return ["./delete", a1]; };
function PresidentesTableComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "Edit")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, element_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "Delete")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, element_r14.id));
} }
function PresidentesTableComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
} }
function PresidentesTableComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
} if (rf & 2) {
    var row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", row_r15.is_active ? "" : "text-decoration-line-through");
} }
var _c3 = function () { return ["/presidentes/create"]; };
var _c4 = function () { return [5, 10, 20, 50, 100]; };
//
var titleKey = 'Delete';
var deleteBtnKey = 'Delete';
var messageKey = 'Are you sure you want to delete this Task?';
var errorKey = 'Error';
var deletedMessageKey = 'Deleted';
var PresidentesTableComponent = /** @class */ (function () {
    function PresidentesTableComponent(activatedRoute, dialog, errorHandlingService, presidentesService, toastr, countryService) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.presidentesService = presidentesService;
        this.toastr = toastr;
        this.countryService = countryService;
        this.displayedColumns = [
            'description',
            'responsable',
            'priority',
            'actions'
        ];
        this.totalLength = 0;
        this.tasks = [];
        this.presidentes = [];
    }
    PresidentesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.createFilterFormGroup();
        this.filterValueChanges = this.filter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(500)).subscribe(function (change) { return _this.onFilter(); });
        this.paginator.pageIndex = 0;
        this.loadPage();
        // Begin observing style list changes.
        /*this.tasksList = this.tasksService.tasksList.subscribe((TasksList: any) => {
            this.totalLength = TasksList.dataCount;
            this.tasks = TasksList.data;
            if (this.tasks.length === 0 && this.totalLength > 0 && this.tasksService.previousPageSize > 0) {
                this.tasksService.previousPageIndex =
                    Math.ceil(this.totalLength / this.tasksService.previousPageSize) - 1;
                this.tasksService.reloadTasks().subscribe(response => {
                    this.tasksService.tasksList.next(response);
                },
                    (error: HandledError) => this.errorHandlingService.handleUiError(errorKey, error));
            }
        });*/
    };
    PresidentesTableComponent.prototype.editPresident = function (presidenteId) {
    };
    PresidentesTableComponent.prototype.ngOnDestroy = function () {
        // this.tasksList.unsubscribe();
        // this.filterValueChanges.unsubscribe();
    };
    PresidentesTableComponent.prototype.createFilterFormGroup = function () {
        var group = {};
        group['description'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](group);
    };
    PresidentesTableComponent.prototype.loadPage = function () {
        var _this = this;
        this.presidentesService.getPresidentes().subscribe(function (response) {
            _this.presidentes = response.data;
        });
    };
    PresidentesTableComponent.prototype.onFilter = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    PresidentesTableComponent.prototype.onSort = function () {
        this.paginator.pageIndex = 0;
        this.loadPage();
    };
    PresidentesTableComponent.prototype.onPage = function () {
        this.loadPage();
    };
    PresidentesTableComponent.prototype.getTaskToDelete = function (data) {
        /* this.tasksService.getTask(data.id).subscribe(response => {
             data = response.data;
             this.confirmDeleteTask(data);
         },
             (error: HandledError) => this.errorHandlingService.handleUiError(errorKey, error)
         )*/
    };
    PresidentesTableComponent.prototype.confirmDeleteTask = function (data) {
        /*this.modalRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                titleKey: titleKey,
                okBtnKey: deleteBtnKey,
                messageKey: messageKey,
                messageParam: { param: data }
            }
        });

        this.modalRef.afterClosed().subscribe(result => {
            if (result) {
                this.deleteTask(data);
            }
        });*/
    };
    PresidentesTableComponent.prototype.deleteTask = function (data) {
        /*this.tasksService.deleteTask(data.id).subscribe(response => {
            this.tasksService.reloadTasks().subscribe(response => {
                this.tasksService.tasksList.next(response);
                this.toastr.success(deletedMessageKey);
                this.loadPage();
            },
                (error: HandledError) => this.errorHandlingService.handleUiError(errorKey, error));
        },
            (error: HandledError) => {
                this.errorHandlingService.handleUiError(errorKey, error);
            }
        )*/
    };
    PresidentesTableComponent.ɵfac = function PresidentesTableComponent_Factory(t) { return new (t || PresidentesTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__["PresidentesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"])); };
    PresidentesTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresidentesTableComponent, selectors: [["app-presidentes-table"]], viewQuery: function PresidentesTableComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 30, vars: 11, consts: [[1, "margin-right-25px", "margin-bottom-10px", "width-auto", "flex-shrink-0", "background-color-secondary", "color-primary", "mat-elevation-z2", 3, "formGroup"], ["matPrefix", "", "color", "primary"], ["matInput", "", "formControlName", "description", "placeholder", "TASK"], [1, "flex-grow-1"], ["mat-raised-button", "", "color", "primary", 3, "routerLink"], [1, "flex-grow-1", "overflow-auto", "display-flex"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "margin-top-10px", "margin-right-25px", "width-100pct", 3, "dataSource", "matSortActive", "matSortDirection", "matSortChange"], ["matColumnDef", "description"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "responsable"], ["mat-cell", "", "class", "padding-table-td", 4, "matCellDef"], ["matColumnDef", "priority"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "min-width-80px", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", 4, "matRowDef", "matRowDefColumns"], [1, "flex-shrink-0", "display-flex", "border-top-style-solid", "border-top-width-2px", "border-top-color-grey"], ["showFirstLastButtons", "", 3, "length", "pageSizeOptions", "pageIndex", "pageSize", "page"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "padding-table-td"], ["mat-header-cell", ""], ["mat-cell", "", 1, "min-width-80px"], ["mat-icon-button", "", "color", "primary", 3, "matTooltip", "routerLink"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass"]], template: function PresidentesTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Presidentes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Agregrar Presidente");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function PresidentesTableComponent_Template_table_matSortChange_11_listener() { return ctx.onSort(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PresidentesTableComponent_th_13_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PresidentesTableComponent_td_14_Template, 2, 1, "td", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PresidentesTableComponent_th_16_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PresidentesTableComponent_td_17_Template, 2, 1, "td", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PresidentesTableComponent_th_19_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PresidentesTableComponent_td_20_Template, 2, 1, "td", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PresidentesTableComponent_th_22_Template, 2, 0, "th", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PresidentesTableComponent_td_23_Template, 7, 8, "td", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PresidentesTableComponent_tr_24_Template, 1, 0, "tr", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PresidentesTableComponent_tr_25_Template, 1, 1, "tr", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-paginator", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PresidentesTableComponent_Template_mat_paginator_page_28_listener() { return ctx.onPage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filter);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.presidentes)("matSortActive", ctx.presidentesService.previousSortColumn)("matSortDirection", ctx.presidentesService.previousSortDirection);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.totalLength)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100vh;\n  background-color: white !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-right: 5px;\n  width: 100px !important;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.padding-bottom-10[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\n  mat-paginator {\n  padding-top: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcmVzaWRlbnRlcy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7O0VBRUksVUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0oiLCJmaWxlIjoicHJlc2lkZW50ZXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tLTEwe1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHhcclxufVxyXG5cclxuOjpuZy1kZWVwIG1hdC1wYWdpbmF0b3Ige1xyXG4gICAgcGFkZGluZy10b3A6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"] });
    return PresidentesTableComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresidentesTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presidentes-table',
                templateUrl: './presidentes-table.component.html',
                styleUrls: ['./presidentes-table.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"] }, { type: _services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__["PresidentesService"] }, { type: _common_error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _common_services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['paginator', { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "/RXN":
/*!************************************************!*\
  !*** ./src/common/services/country.service.ts ***!
  \************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var iso_country_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! iso-country-codes */ "qqYb");
/* harmony import */ var iso_country_codes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(iso_country_codes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Countries_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Countries/countries */ "TTea");




var CountryService = /** @class */ (function () {
    function CountryService() {
    }
    CountryService.prototype.getCountryList = function () {
        return iso_country_codes__WEBPACK_IMPORTED_MODULE_1__["codes"];
    };
    CountryService.prototype.getCodeByCountry = function (countryName) {
        iso_country_codes__WEBPACK_IMPORTED_MODULE_1__["codes"].forEach(function (country) {
            if (country.name === countryName) {
                return country.alpha2;
            }
        });
        return '';
    };
    CountryService.prototype.getCountryByCode = function (countryCode) {
        var pais = _models_Countries_countries__WEBPACK_IMPORTED_MODULE_2__["COUNTRIES"].find(function (country) { return country.code === countryCode; });
        if (pais) {
            return pais.name;
        }
        else {
            return countryCode;
        }
    };
    CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(); };
    CountryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });
    return CountryService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/XId":
/*!************************************************************************************!*\
  !*** ./src/common/error-handling/interceptors/http-headers-interceptor.service.ts ***!
  \************************************************************************************/
/*! exports provided: HttpHeadersInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeadersInterceptorService", function() { return HttpHeadersInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/error-handling.service */ "IqbY");


//




var HttpHeadersInterceptorService = /** @class */ (function () {
    function HttpHeadersInterceptorService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
        this._currentLanguage = '';
    }
    Object.defineProperty(HttpHeadersInterceptorService.prototype, "userToken", {
        get: function () {
            return localStorage.getItem('sindictaduras-token');
        },
        set: function (value) {
            localStorage.setItem('sindictaduras-token', value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpHeadersInterceptorService.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage;
        },
        set: function (value) {
            this._currentLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    HttpHeadersInterceptorService.prototype.getHeaders = function () {
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept-Language': this.currentLanguage ? this.currentLanguage : '',
            'Content-Type': 'application/json',
            Authorization: this.userToken ? this.userToken : ''
            // 'useroauth': this.userToken ? this.userToken : '',
        });
        return requestOptions;
    };
    HttpHeadersInterceptorService.prototype.getRequestOptionArgs = function (request) {
        if (request.headers.keys().length === 0) {
            var headers = this.getHeaders();
            var req = request.clone({
                setHeaders: {
                    'Accept-Language': headers.get('Accept-Language'),
                    'Content-Type': headers.get('Content-Type'),
                    Authorization: headers.get('Authorization')
                    // 'useroauth': headers.get('useroauth'),
                }
            });
            return req;
        }
        else {
            return request;
        }
    };
    HttpHeadersInterceptorService.prototype.intercept = function (request, next) {
        request = this.getRequestOptionArgs(request);
        return next.handle(request);
    };
    HttpHeadersInterceptorService.ɵfac = function HttpHeadersInterceptorService_Factory(t) { return new (t || HttpHeadersInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingService"])); };
    HttpHeadersInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpHeadersInterceptorService, factory: HttpHeadersInterceptorService.ɵfac, providedIn: 'root' });
    return HttpHeadersInterceptorService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpHeadersInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingService"] }]; }, null); })();


/***/ }),

/***/ "/n1G":
/*!***************************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/components/edit-presidente/edit-presidente.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditPresidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPresidenteComponent", function() { return EditPresidenteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../ui/helpers/component-can-deactivate */ "c/YZ");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../ui/helpers/mixin-decorator */ "+ImJ");
/* harmony import */ var _services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/presidentes.service */ "Vx6W");
/* harmony import */ var _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ui_modules_image_upload_services_image_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../ui/modules/image-upload/services/image.service */ "d2QS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../presidentes-form/presidentes-form.component */ "7lQ3");



//




















function EditPresidenteComponent_app_presidentes_form_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-presidentes-form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("accept", function EditPresidenteComponent_app_presidentes_form_2_Template_app_presidentes_form_accept_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.submit($event); })("cancel", function EditPresidenteComponent_app_presidentes_form_2_Template_app_presidentes_form_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.cancel(); })("dataChange", function EditPresidenteComponent_app_presidentes_form_2_Template_app_presidentes_form_dataChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.dataChanged(); })("imageChange", function EditPresidenteComponent_app_presidentes_form_2_Template_app_presidentes_form_imageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.handleImageChangeEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.data)("validationErrors", ctx_r0.validationErrors);
} }
//
// import { setTranslations } from '@c/ngx-translate';
var errorKey = 'Error';
var updatedMessageKey = 'Updated';
var EditPresidenteComponent = /** @class */ (function () {
    function EditPresidenteComponent(activatedRoute, dialog, presidentesService, errorHandlingService, router, snackBar, translate, imagesService) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.presidentesService = presidentesService;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.imagesService = imagesService;
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // setTranslations(this.translate, TRANSLATIONS);
    }
    EditPresidenteComponent.prototype.ngOnInit = function () {
        this.presidenteId = this.activatedRoute.snapshot.data.presidenteId;
    };
    EditPresidenteComponent.prototype.ngAfterViewInit = function () {
        this.getPresidente();
    };
    EditPresidenteComponent.prototype.getPresidente = function () {
        var _this = this;
        this.presidentesService.getPresidente(this.presidenteId).subscribe(function (response) {
            _this.data = response.data;
        }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
    };
    EditPresidenteComponent.prototype.submit = function (data) {
        this.updatePresidente(data);
    };
    EditPresidenteComponent.prototype.handleImageChangeEvent = function (image) {
        this.file = image;
        console.log(image);
    };
    EditPresidenteComponent.prototype.updatePresidente = function (data) {
        var _this = this;
        console.log(this.file);
        if (this.file !== null && this.file !== undefined) {
            this.imagesService.postImagenPresidente(this.file, 'presidenteId')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.onDestroy$))
                .subscribe(function (response) {
                data.foto = response.data;
                _this.update(data);
            });
        }
        else {
            this.update(data);
        }
    };
    EditPresidenteComponent.prototype.update = function (data) {
        var _this = this;
        this.presidentesService.putEditPresidente(data).subscribe(function (response) {
            _this.close();
        });
    };
    EditPresidenteComponent.prototype.cancel = function () {
        this.close();
    };
    EditPresidenteComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    EditPresidenteComponent.ɵfac = function EditPresidenteComponent_Factory(t) { return new (t || EditPresidenteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__["PresidentesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ui_modules_image_upload_services_image_service__WEBPACK_IMPORTED_MODULE_12__["ImagesService"])); };
    EditPresidenteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditPresidenteComponent, selectors: [["app-presidente-task"]], decls: 3, vars: 1, consts: [[1, "margin-top-0px"], [3, "data", "validationErrors", "accept", "cancel", "dataChange", "imageChange", 4, "ngIf"], [3, "data", "validationErrors", "accept", "cancel", "dataChange", "imageChange"]], template: function EditPresidenteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "EDIT TASK");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditPresidenteComponent_app_presidentes_form_2_Template, 1, 2, "app-presidentes-form", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_14__["PresidentesFormComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%;\n  background-color: white !important;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n.max-width-60-pct[_ngcontent-%COMP%] {\n  max-width: 60% !important;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n  .mat-dialog-container {\n  padding: 0px 0px 25px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxlZGl0LXByZXNpZGVudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNBOztBQUVBO0VBQ0EseUJBQUE7QUFDQTs7QUFFQTtFQUNBLHlCQUFBO0FBQ0E7O0FBRUE7RUFDQSx1QkFBQTtBQUNBOztBQUNBO0VBQ0EsdUJBQUE7QUFFQTs7QUFDQTtFQUNFLDBCQUFBO0FBRUYiLCJmaWxlIjoiZWRpdC1wcmVzaWRlbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgbWF4LWhlaWdodDogODJ2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbmZvbnQtc2l6ZTogMjRweDtcclxud2lkdGg6IDI0cHg7XHJcbmhlaWdodDogMjRweDtcclxufVxyXG5cclxuLm1heC13aWR0aC02MC1wY3R7XHJcbm1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXJ7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbnRkLm1hdC1jZWxse1xyXG5ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG50aC5tYXQtaGVhZGVyLWNlbGx7XHJcbmJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHggMHB4IDI1cHggMjVweDtcclxufVxyXG4iXX0= */"] });
    EditPresidenteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateMixin"]]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__["PresidentesService"],
            _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _ui_modules_image_upload_services_image_service__WEBPACK_IMPORTED_MODULE_12__["ImagesService"]])
    ], EditPresidenteComponent);
    return EditPresidenteComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditPresidenteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-presidente-task',
                templateUrl: './edit-presidente.component.html',
                styleUrls: ['./edit-presidente.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__["PresidentesService"] }, { type: _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _ui_modules_image_upload_services_image_service__WEBPACK_IMPORTED_MODULE_12__["ImagesService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PROJECTS\SINDICTADURAS\sindictaduras-web\src\main.ts */"zUnb");


/***/ }),

/***/ "03Ik":
/*!******************************************!*\
  !*** ./src/ui/services/title.service.ts ***!
  \******************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");

//


var TitleService = /** @class */ (function () {
    function TitleService() {
        this.title = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    TitleService.prototype.setTitle = function (value) {
        this.title.next(value);
    };
    TitleService.ɵfac = function TitleService_Factory(t) { return new (t || TitleService)(); };
    TitleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TitleService, factory: TitleService.ɵfac, providedIn: 'root' });
    return TitleService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "0Ofe":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/mostrar-presidente-dialog/components/confirm-dialog/mostrar-presidente-dialog.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: MostrarPresidenteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarPresidenteDialogComponent", function() { return MostrarPresidenteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../ui/services/svg-icons.service */ "BEtn");
/* harmony import */ var _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../ui/services/dialog.service */ "Wnat");
/* harmony import */ var _common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../common/authentication/services/auth.service */ "vmVr");
/* harmony import */ var _votacion_models_votacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../votacion/models/votacion */ "1BKp");
/* harmony import */ var _votacion_services_votacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../votacion/services/votacion.service */ "gm1B");
/* harmony import */ var _presidentes_services_presidentes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../presidentes/services/presidentes.service */ "Vx6W");
/* harmony import */ var _pages_services_websocket_votacion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../pages/services/websocket-votacion.service */ "1oUk");
/* harmony import */ var _common_services_country_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/services/country.service */ "/RXN");
/* harmony import */ var _common_http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/http-request-indicator/services/loading.service */ "EdvF");
/* harmony import */ var _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");






























function MostrarPresidenteDialogComponent_div_3_mat_icon_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 21);
} }
function MostrarPresidenteDialogComponent_div_3_mat_icon_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 22);
} }
var _c0 = function (a0) { return { "color-green": a0 }; };
var _c1 = function (a0) { return { "color-yellow": a0 }; };
function MostrarPresidenteDialogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostrarPresidenteDialogComponent_div_3_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.votar("like"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostrarPresidenteDialogComponent_div_3_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.votar("disLike"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostrarPresidenteDialogComponent_div_3_Template_div_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.votar("dictator"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MostrarPresidenteDialogComponent_div_3_mat_icon_27_Template, 1, 0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MostrarPresidenteDialogComponent_div_3_mat_icon_28_Template, 1, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.presidente.foto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.presidente.biografia, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.presidente.nombre + " " + ctx_r0.presidente.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.presidente.mandatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countryService.getCountryByCode(ctx_r0.presidente.pais));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.presidente.mandatos.toLowerCase().indexOf("actualidad") > -1 ? "Crees que es un buen presidente?" : "Crees que fue un buen presidente?", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r0.votacion == null ? null : ctx_r0.votacion.like));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.presidente.likeCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx_r0.votacion == null ? null : ctx_r0.votacion.disLike));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.presidente.disLikeCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.votacion == null ? null : ctx_r0.votacion.dictator));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.votacion == null ? null : ctx_r0.votacion.dictator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.presidente.dictatorCount, "");
} }
var MostrarPresidenteDialogComponent = /** @class */ (function () {
    function MostrarPresidenteDialogComponent(translate, authService, cdRef, dialogService, dialogRef, data, presidentesService, svgIconsService, votacionService, websocketVotacionService, countryService, loadingService, errorHandlingService) {
        this.translate = translate;
        this.authService = authService;
        this.cdRef = cdRef;
        this.dialogService = dialogService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.presidentesService = presidentesService;
        this.svgIconsService = svgIconsService;
        this.votacionService = votacionService;
        this.websocketVotacionService = websocketVotacionService;
        this.countryService = countryService;
        this.loadingService = loadingService;
        this.errorHandlingService = errorHandlingService;
        this.titleKey = 'Title';
        this.messageKey = 'Message';
        this.messageParam = {};
        this.okBtnKey = 'Accept';
        this.cancelBtnKey = 'Cancel';
        this.voto = '';
        this.svgIconsService.registerIcons();
        // setTranslations(this.translate, TRANSLATIONS);
    }
    MostrarPresidenteDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.presidente = this.data.presidente;
        this.votacion = this.data.votacion;
        this.conectarAlWebSocketVotacion();
        this.actualizarUltimaVotacion();
        this.authService.reAuthenticacion.subscribe(function (response) {
            var _a, _b;
            if (response === true && ((_a = _this.dialogRef) === null || _a === void 0 ? void 0 : _a.componentInstance) != null && ((_b = _this.dialogRef) === null || _b === void 0 ? void 0 : _b.componentInstance) !== undefined) {
                _this.reAuthenticacion();
            }
        });
    };
    MostrarPresidenteDialogComponent.prototype.reAuthenticacion = function () {
        var voto = '';
        if (this.voto !== '') {
            voto = this.voto;
            this.voto = '';
        }
        this.votar(voto);
    };
    MostrarPresidenteDialogComponent.prototype.conectarAlWebSocketVotacion = function () {
        this.websocketVotacionService.conectarAlWebSocket();
        this.subscribirseALosMensajesDelWebSocketListaDeVenta();
    };
    MostrarPresidenteDialogComponent.prototype.subscribirseALosMensajesDelWebSocketListaDeVenta = function () {
        var _this = this;
        this.websocketVotacionService.enviarMensaje.subscribe(function (presidente) {
            _this.actualizarVotacion(JSON.parse(presidente));
        });
    };
    MostrarPresidenteDialogComponent.prototype.actualizarVotacion = function (presidente) {
        if (presidente !== null && presidente !== undefined) {
            if (this.presidente.id === presidente.id) {
                this.presidente = presidente;
                this.cdRef.detectChanges();
            }
        }
    };
    MostrarPresidenteDialogComponent.prototype.accept = function () {
        this.dialogRef.close(true);
    };
    MostrarPresidenteDialogComponent.prototype.close = function () {
        this.dialogRef.close(this.votacion);
    };
    MostrarPresidenteDialogComponent.prototype.votar = function (voto) {
        var _this = this;
        var anteriorVotacion = this.voto;
        if (this.voto === voto) {
            this.voto = '';
        }
        else {
            this.voto = voto;
        }
        var votacion = new _votacion_models_votacion__WEBPACK_IMPORTED_MODULE_6__["Votacion"](this.presidente.id, this.voto);
        this.loadingService.showLoader(true);
        this.votacionService.realizarVotacion(votacion).subscribe(function (response) {
            _this.votacion = response.data;
            _this.cargarPresidente(_this.presidente.id);
            _this.loadingService.showLoader(false);
        }, function (error) {
            _this.voto = anteriorVotacion !== voto ? voto : '';
            _this.errorHandlingService.handleUiError('', error);
        });
    };
    MostrarPresidenteDialogComponent.prototype.cargarPresidente = function (presidenteId) {
        var _this = this;
        this.presidentesService.getPresidente(presidenteId).subscribe(function (respose) {
            _this.presidente = respose.data;
        });
    };
    MostrarPresidenteDialogComponent.prototype.actualizarUltimaVotacion = function () {
        if (this.votacion !== null && this.votacion !== undefined) {
            if (this.votacion.like) {
                this.voto = 'like';
            }
            else if (this.votacion.disLike) {
                this.voto = 'disLike';
            }
            else if (this.votacion.dictator) {
                this.voto = 'dictator';
            }
        }
    };
    MostrarPresidenteDialogComponent.ɵfac = function MostrarPresidenteDialogComponent_Factory(t) { return new (t || MostrarPresidenteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_presidentes_services_presidentes_service__WEBPACK_IMPORTED_MODULE_8__["PresidentesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_3__["SvgIconsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_votacion_services_votacion_service__WEBPACK_IMPORTED_MODULE_7__["VotacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_services_websocket_votacion_service__WEBPACK_IMPORTED_MODULE_9__["WebsocketVotacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlingService"])); };
    MostrarPresidenteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MostrarPresidenteDialogComponent, selectors: [["app-mostrar-presidente-dialog"]], decls: 4, vars: 1, consts: [["mat-button", "", 1, "close", "z-index-1050", 3, "click"], ["matTooltip", "Cerrar", 1, "color-withe"], ["class", "height-100pct position-relative", 4, "ngIf"], [1, "height-100pct", "position-relative"], [1, "card", "d-flex", "height-100pct"], [1, "card-img-top", 3, "src"], [1, "position-absolute", "left-10px", "top-10px"], [1, "justify-content-start", "label-presidente-dialog"], [1, "h1-seo", "text-h1", "font-size-15px", "margin-0px", "cursor-pointer", "color-withe"], ["target", "_blank", 1, "color-withe", 3, "href"], [1, "h1-seo", "text-h1", "font-size-10px", "margin-0px", "cursor-pointer"], [1, "h1-seo", "text-h1", "margin-0px", "color-withe", "font-size-18px"], [1, "background-color-black", "d-flex", "position-absolute", "width-100pct", "bottom-0px", "padding-10px", "align-items-center"], [1, "d-flex", "justify-content-center"], [1, "margin-0px", "color-withe"], [1, "d-flex", "padding-left-15px", "align-items-center", 3, "click"], ["tooltip", "Buen Presidente", 1, "cursor-pointer", "color-withe", 3, "ngClass"], [1, "color-withe", "padding-left-5px"], ["tooltip", "Mal Presidente", 1, "cursor-pointer", "color-withe", 3, "ngClass"], ["class", "cursor-pointer color-withe", "svgIcon", "fist-up", "tooltip", "Dictador", 4, "ngIf"], ["class", "cursor-pointer color-withe", "svgIcon", "fist-up-red", "tooltip", "Dictador", 4, "ngIf"], ["svgIcon", "fist-up", "tooltip", "Dictador", 1, "cursor-pointer", "color-withe"], ["svgIcon", "fist-up-red", "tooltip", "Dictador", 1, "cursor-pointer", "color-withe"]], template: function MostrarPresidenteDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MostrarPresidenteDialogComponent_Template_button_click_0_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MostrarPresidenteDialogComponent_div_3_Template, 31, 17, "div", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.presidente !== undefined);
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_17__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"]], styles: ["[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n}\n\n  .mat-dialog-container{\n    padding: 0px !important;\n}\n\n.background-color-black[_ngcontent-%COMP%]{\n    background: rgba(136, 136, 136, 0.81);\n}\n\n  .close-button {\n    position: relative !important;\n}\n\n.close.mat-button[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 5px;\n    line-height: 14px;\n    min-width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc3RyYXItcHJlc2lkZW50ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJtb3N0cmFyLXByZXNpZGVudGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAucGFuZWwgLnBhbmVsLWJvZHkge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJhY2tncm91bmQtY29sb3ItYmxhY2t7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEzNiwgMTM2LCAwLjgxKTtcbn1cblxuOjpuZy1kZWVwIC5jbG9zZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuXG4uY2xvc2UubWF0LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xufVxuIl19 */"] });
    return MostrarPresidenteDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostrarPresidenteDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mostrar-presidente-dialog',
                templateUrl: './mostrar-presidente-dialog.component.html',
                styleUrls: ['./mostrar-presidente-dialog.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: _presidentes_services_presidentes_service__WEBPACK_IMPORTED_MODULE_8__["PresidentesService"] }, { type: _ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_3__["SvgIconsService"] }, { type: _votacion_services_votacion_service__WEBPACK_IMPORTED_MODULE_7__["VotacionService"] }, { type: _pages_services_websocket_votacion_service__WEBPACK_IMPORTED_MODULE_9__["WebsocketVotacionService"] }, { type: _common_services_country_service__WEBPACK_IMPORTED_MODULE_10__["CountryService"] }, { type: _common_http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_11__["LoadingService"] }, { type: _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlingService"] }]; }, null); })();


/***/ }),

/***/ "1BKp":
/*!***********************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/votacion/models/votacion.ts ***!
  \***********************************************************************/
/*! exports provided: Votacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Votacion", function() { return Votacion; });
var Votacion = /** @class */ (function () {
    function Votacion(spresidente, voto) {
        this.spresidente = spresidente;
        this.like = (voto === 'like');
        this.disLike = (voto === 'disLike');
        this.dictator = (voto === 'dictator');
    }
    return Votacion;
}());



/***/ }),

/***/ "1WeG":
/*!******************************************************!*\
  !*** ./src/common/config/services/config.service.ts ***!
  \******************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");

// import { ErrorHandlingHttpService } from '@c/error-handling';





var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ConfigService.prototype.getConfig = function () {
        var _this = this;
        return this.http.get('assets/data/config.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            _this.config = response;
        }));
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
    return ConfigService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "1oUk":
/*!**************************************************************!*\
  !*** ./src/app/pages/services/websocket-votacion.service.ts ***!
  \**************************************************************/
/*! exports provided: WebsocketVotacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketVotacionService", function() { return WebsocketVotacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stompjs */ "dNE1");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");






//
var WebsocketVotacionService = /** @class */ (function () {
    function WebsocketVotacionService() {
        this.topic = '/topic/actualizarVotacion';
        this.data = null;
        this.enviarMensaje = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.data);
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    WebsocketVotacionService.prototype.conectarAlWebSocket = function () {
        try {
            var webSocket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__(this.apiUrl + 'ws');
            this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_3__["over"](webSocket);
            var miContexto_1 = this;
            miContexto_1.stompClient.connect({}, function (frame) {
                miContexto_1.stompClient.subscribe(miContexto_1.topic, function (mensaje) {
                    if (mensaje !== undefined && mensaje !== null) {
                        miContexto_1.data = mensaje;
                        miContexto_1.enviarMensaje.next(mensaje.body);
                    }
                });
            }, this.errorAlConectar);
        }
        catch (error) {
            // no hacer nada
        }
    };
    WebsocketVotacionService.prototype.errorAlConectar = function (error) {
        var _this = this;
        setTimeout(function () {
            _this.conectarAlWebSocket();
        }, 5000);
    };
    WebsocketVotacionService.ɵfac = function WebsocketVotacionService_Factory(t) { return new (t || WebsocketVotacionService)(); };
    WebsocketVotacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketVotacionService, factory: WebsocketVotacionService.ɵfac, providedIn: 'root' });
    return WebsocketVotacionService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketVotacionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "20P2":
/*!**************************************************************!*\
  !*** ./src/common/validation/helpers/uppercase-validator.ts ***!
  \**************************************************************/
/*! exports provided: uppercase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
function uppercase(minRequired) {
    return function (control) {
        var inputValue = control.value;
        if (inputValue && minRequired && minRequired > 0) {
            var regExp = new RegExp(/([^A-Z])/g);
            var valueSplit = inputValue.replace(regExp, '');
            var isValid = valueSplit.length >= minRequired ? true : false;
            return isValid ? null : { 'passwordStrength': { 'uppercaseCount': { value: control.value } } };
        }
        return null;
    };
}


/***/ }),

/***/ "2zLe":
/*!********************************************!*\
  !*** ./src/ui/models/svg-icons/fist-up.ts ***!
  \********************************************/
/*! exports provided: FIST_UP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIST_UP", function() { return FIST_UP; });
var FIST_UP = "<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   id=\"svg3985\"\n   fill-rule=\"evenodd\"\n   preserveAspectRatio=\"xMidYMid\"\n   viewBox=\"0 0 21590 27940\"\n   version=\"1.1\">\n  <metadata\n     id=\"metadata3991\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id=\"defs3989\" />\n  <g\n     id=\"Default\"\n     visibility=\"visible\">\n    <desc\n       id=\"desc3699\">Master slide</desc>\n  </g>\n  <g\n     id=\"g3982\"\n     style=\"visibility:visible;stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n    <desc\n       id=\"desc3704\">Group</desc>\n    <g\n       id=\"g3734\"\n       style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n      <desc\n         id=\"desc3706\">Drawing</desc>\n      <g\n         id=\"g3732\"\n         style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3710\">\n          <path\n             d=\"M 8639,426 6546,3840 9419,5161 11318,2109 Z\"\n             id=\"path3708\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3728\">\n          <path\n             d=\"m 8682,453 -2093,3414 -43,-27 -43,-27 2093,-3414 43,27 z\"\n             id=\"path3712\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 6546,3840 -21,46 -8,-4 -7,-6 -6,-7 -4,-7 -3,-9 -2,-8 v -9 l 2,-9 3,-8 3,-6 z\"\n             id=\"path3714\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 6567,3794 2873,1321 -21,46 -21,46 -2873,-1321 21,-46 z\"\n             id=\"path3716\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 9419,5161 43,27 -5,7 -7,6 -7,5 -8,3 -9,2 -9,1 -9,-1 -8,-3 -2,-1 z\"\n             id=\"path3718\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 9376,5134 1899,-3052 43,27 43,27 -1899,3052 -43,-27 z\"\n             id=\"path3720\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 11318,2109 27,-43 7,5 6,7 5,7 4,8 2,9 v 9 l -1,9 -3,8 -4,8 z\"\n             id=\"path3722\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"M 11291,2152 8612,469 l 27,-43 27,-43 2679,1683 -27,43 z\"\n             id=\"path3724\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 8639,426 -43,-27 5,-7 6,-6 8,-5 8,-3 8,-2 9,-1 9,1 9,3 8,4 v 0 z\"\n             id=\"path3726\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3730\"\n           style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3768\"\n       style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n      <desc\n         id=\"desc3736\">Drawing</desc>\n      <g\n         id=\"g3766\"\n         style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3740\">\n          <path\n             d=\"m 12291,2748 -1800,2958 2191,1093 -148,1184 2484,-3779 z\"\n             id=\"path3738\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3762\">\n          <path\n             d=\"m 12335,2775 -1800,2958 -44,-27 -44,-27 1800,-2958 44,27 z\"\n             id=\"path3742\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 10491,5706 -23,46 -7,-5 -7,-6 -6,-7 -4,-8 -3,-8 -1,-9 v -9 l 2,-8 3,-9 2,-4 z\"\n             id=\"path3744\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 10514,5660 2191,1093 -23,46 -23,46 -2191,-1093 23,-46 z\"\n             id=\"path3746\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12682,6799 23,-46 7,5 7,6 6,7 4,8 3,8 1,9 v 9 0 z\"\n             id=\"path3748\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12733,6805 -148,1184 -51,-6 -51,-6 148,-1184 51,6 z\"\n             id=\"path3750\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12534,7983 43,28 -6,7 -7,6 -7,5 -8,3 -9,2 h -9 l -9,-1 -8,-3 -8,-4 -7,-6 -6,-7 -5,-7 -3,-8 -2,-9 v -9 -3 z\"\n             id=\"path3752\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12491,7955 2484,-3779 43,28 43,28 -2484,3779 -43,-28 z\"\n             id=\"path3754\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 15018,4204 24,-45 7,5 7,6 5,7 4,8 3,8 1,9 -1,9 -2,9 -3,8 -2,4 z\"\n             id=\"path3756\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 14994,4249 -2727,-1456 24,-45 24,-45 2727,1456 -24,45 z\"\n             id=\"path3758\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12291,2748 -44,-27 6,-7 6,-6 8,-5 8,-3 8,-2 9,-1 9,1 9,2 5,3 z\"\n             id=\"path3760\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3764\"\n           style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3802\"\n       style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n      <desc\n         id=\"desc3770\">Drawing</desc>\n      <g\n         id=\"g3800\"\n         style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3774\">\n          <path\n             d=\"m 15701,5479 -3896,5462 2337,864 3847,-4552 h -49 z\"\n             id=\"path3772\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3796\">\n          <path\n             d=\"m 15743,5509 -3896,5462 -42,-30 -42,-30 3896,-5462 42,30 z\"\n             id=\"path3776\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 11805,10941 -18,48 -8,-4 -7,-5 -6,-6 -5,-8 -4,-8 -2,-8 -1,-9 1,-9 2,-9 4,-8 2,-4 z\"\n             id=\"path3778\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 11823,10893 2337,864 -18,48 -18,48 -2337,-864 18,-48 z\"\n             id=\"path3780\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 14142,11805 39,33 -6,6 -8,5 -8,4 -8,2 -9,1 -9,-1 -9,-2 v 0 z\"\n             id=\"path3782\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 14103,11772 3847,-4552 39,33 39,33 -3847,4552 -39,-33 z\"\n             id=\"path3784\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 17989,7253 v -51 l 9,1 8,2 8,4 8,5 6,6 5,7 4,9 2,8 1,9 -1,9 -2,8 -4,8 -5,8 v 0 z\"\n             id=\"path3786\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 17989,7304 h -49 v -51 -51 h 49 v 51 z\"\n             id=\"path3788\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 17940,7253 v 51 l -9,-1 -8,-2 -8,-4 -7,-4 z\"\n             id=\"path3790\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 17908,7293 -2239,-1774 32,-40 32,-40 2239,1774 -32,40 z\"\n             id=\"path3792\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 15701,5479 -42,-30 6,-6 7,-6 8,-4 8,-3 9,-2 h 9 l 9,2 8,3 8,4 2,2 z\"\n             id=\"path3794\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3798\"\n           style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3832\"\n       style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n      <desc\n         id=\"desc3804\">Drawing</desc>\n      <g\n         id=\"g3830\"\n         style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3808\">\n          <path\n             d=\"m 18573,8255 -3603,4189 1119,1138 4139,-3689 z\"\n             id=\"path3806\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3826\">\n          <path\n             d=\"m 18612,8288 -3603,4189 -39,-33 -39,-33 3603,-4189 39,33 z\"\n             id=\"path3810\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 14970,12444 -36,36 -6,-7 -4,-8 -3,-8 -2,-9 v -9 l 2,-9 3,-8 4,-8 3,-3 z\"\n             id=\"path3812\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 15006,12408 1119,1138 -36,36 -36,36 -1119,-1138 36,-36 z\"\n             id=\"path3814\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 16089,13582 34,38 -7,5 -8,4 -9,3 -8,1 -9,-1 -9,-2 -8,-3 -8,-5 -4,-4 z\"\n             id=\"path3816\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 16055,13544 4139,-3689 34,38 34,38 -4139,3689 -34,-38 z\"\n             id=\"path3818\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 20228,9893 36,-36 6,7 4,7 3,9 2,8 v 9 l -2,9 -3,8 -4,8 -6,7 -2,2 z\"\n             id=\"path3820\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 20192,9929 -1655,-1638 36,-36 36,-36 1655,1638 -36,36 z\"\n             id=\"path3822\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 18573,8255 -39,-33 7,-6 7,-5 8,-4 9,-2 9,-1 8,1 9,2 8,4 7,5 3,3 z\"\n             id=\"path3824\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3828\"\n           style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3954\"\n       style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n      <desc\n         id=\"desc3834\">Drawing</desc>\n      <g\n         id=\"g3952\"\n         style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3838\">\n          <path\n             d=\"m 5377,4568 -4382,6509 6720,7693 -1267,7375 9884,-91 -438,-6692 2290,-2913 584,-3916 -2629,2186 -2192,-1957 -3992,-957 3896,6101 876,637 -1412,45 -438,1594 -586,-1594 -1460,229 1606,-1411 L 8639,11533 5669,10532 6741,9575 6448,7983 h 633 l 974,1365 2191,-91 1169,-637 146,-1458 z\"\n             id=\"path3836\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3948\">\n          <path\n             d=\"m 5419,4596 -4382,6509 -42,-28 -42,-28 4382,-6509 42,28 z\"\n             id=\"path3840\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 995,11077 -38,34 -6,-8 -4,-8 -2,-8 -1,-9 1,-9 2,-8 3,-9 3,-3 z\"\n             id=\"path3842\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 1033,11043 6720,7693 -38,34 -38,34 -6720,-7693 38,-34 z\"\n             id=\"path3844\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 7715,18770 38,-34 6,8 4,8 2,8 1,9 -1,9 v 1 z\"\n             id=\"path3846\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 7765,18779 -1267,7375 -50,-9 -50,-9 1267,-7375 50,9 z\"\n             id=\"path3848\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 6448,26145 v 51 l -8,-1 -9,-2 -8,-4 -7,-5 -7,-6 -5,-7 -4,-8 -2,-9 -1,-9 1,-8 v -1 z\"\n             id=\"path3850\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 6448,26094 9884,-91 v 51 51 l -9884,91 v -51 z\"\n             id=\"path3852\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 16332,26054 51,-3 v 9 l -2,8 -3,9 -5,7 -6,7 -7,5 -7,5 -9,3 -9,1 h -3 z\"\n             id=\"path3854\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 16281,26057 -438,-6692 51,-3 51,-3 438,6692 -51,3 z\"\n             id=\"path3856\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 15894,19362 -51,3 v -9 l 2,-8 3,-9 5,-7 1,-2 z\"\n             id=\"path3858\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 15854,19330 2290,-2913 40,32 40,32 -2290,2913 -40,-32 z\"\n             id=\"path3860\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 18184,16449 50,8 -2,8 -3,8 -5,8 z\"\n             id=\"path3862\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 18134,16441 584,-3916 50,8 50,8 -584,3916 -50,-8 z\"\n             id=\"path3864\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 18768,12533 -33,-39 8,-5 8,-4 8,-2 9,-1 9,1 9,2 8,4 7,5 6,6 5,8 4,8 2,8 1,9 -1,8 z\"\n             id=\"path3866\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 18801,12572 -2629,2186 -33,-39 -33,-39 2629,-2186 33,39 z\"\n             id=\"path3868\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 16139,14719 33,39 -8,5 -8,4 -8,2 -9,1 -9,-1 -9,-2 -8,-4 -7,-5 -1,-1 z\"\n             id=\"path3870\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 16105,14757 -2192,-1957 34,-38 34,-38 2192,1957 -34,38 z\"\n             id=\"path3872\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 13947,12762 12,-50 8,3 8,4 6,5 z\"\n             id=\"path3874\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 13935,12812 -3992,-957 12,-50 12,-50 3992,957 -12,50 z\"\n             id=\"path3876\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 9955,11805 -43,27 -4,-7 -3,-9 -1,-9 v -9 l 2,-8 4,-9 5,-7 6,-7 7,-5 7,-4 9,-3 9,-1 h 9 l 5,1 z\"\n             id=\"path3878\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 9998,11778 3896,6101 -43,27 -43,27 -3896,-6101 43,-27 z\"\n             id=\"path3880\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 13851,17906 -30,41 -7,-6 -5,-6 -1,-2 z\"\n             id=\"path3882\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 13881,17865 876,637 -30,41 -30,41 -876,-637 30,-41 z\"\n             id=\"path3884\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 14727,18543 30,-41 7,6 5,6 5,8 2,9 2,8 v 9 l -2,9 -3,8 -5,8 -6,7 -6,5 -8,5 -9,2 -8,2 h -2 z\"\n             id=\"path3886\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 14729,18594 -1412,45 -2,-51 -2,-51 1412,-45 2,51 z\"\n             id=\"path3888\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 13315,18588 -49,-14 3,-8 4,-8 6,-6 7,-6 8,-4 8,-3 9,-2 h 2 z\"\n             id=\"path3890\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 13364,18602 -438,1594 -49,-14 -49,-14 438,-1594 49,14 z\"\n             id=\"path3892\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12877,20182 49,14 -3,8 -4,8 -6,6 -7,6 -8,4 -8,3 -9,2 h -9 l -9,-2 -8,-3 -8,-4 -6,-6 -6,-7 -4,-8 -2,-3 z\"\n             id=\"path3894\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12829,20200 -586,-1594 48,-18 48,-18 586,1594 -48,18 z\"\n             id=\"path3896\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12291,18588 -8,-50 9,-1 9,1 8,2 8,4 8,6 6,6 5,7 3,7 z\"\n             id=\"path3898\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12299,18638 -1460,229 -8,-50 -8,-50 1460,-229 8,50 z\"\n             id=\"path3900\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 10831,18817 8,50 -9,1 -9,-1 -8,-2 -8,-4 -8,-6 -6,-6 -5,-7 -3,-8 -2,-9 -1,-9 1,-9 2,-8 4,-8 6,-8 4,-4 z\"\n             id=\"path3902\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 10797,18779 1606,-1411 34,38 34,38 -1606,1411 -34,-38 z\"\n             id=\"path3904\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12437,17406 43,-28 4,8 3,9 1,8 v 9 l -2,9 -4,8 -4,8 -6,6 -1,1 z\"\n             id=\"path3906\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 12394,17434 -3798,-5873 43,-28 43,-28 3798,5873 -43,28 z\"\n             id=\"path3908\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 8639,11533 16,-48 8,3 8,5 6,6 5,6 z\"\n             id=\"path3910\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 8623,11581 -2970,-1001 16,-48 16,-48 2970,1001 -16,48 z\"\n             id=\"path3912\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 5669,10532 -16,48 -8,-3 -8,-5 -6,-6 -6,-7 -3,-8 -3,-9 -1,-9 1,-9 2,-8 3,-8 5,-8 6,-6 z\"\n             id=\"path3914\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 5635,10494 1072,-957 34,38 34,38 -1072,957 -34,-38 z\"\n             id=\"path3916\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 6741,9575 50,-9 1,9 -1,8 -2,9 -4,8 -5,7 -5,6 z\"\n             id=\"path3918\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 6691,9584 -293,-1592 50,-9 50,-9 293,1592 -50,9 z\"\n             id=\"path3920\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 6448,7983 -50,9 -1,-9 1,-8 2,-9 4,-8 5,-7 6,-7 7,-5 8,-4 9,-2 9,-1 v 0 z\"\n             id=\"path3922\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 6448,7932 h 633 v 51 51 h -633 v -51 z\"\n             id=\"path3924\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 7081,7983 v -51 l 9,1 8,2 8,4 8,5 6,6 3,3 z\"\n             id=\"path3926\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 7123,7953 974,1365 -42,30 -42,30 -974,-1365 42,-30 z\"\n             id=\"path3928\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 8055,9348 2,51 h -9 l -8,-2 -9,-4 -7,-5 -7,-6 -4,-4 z\"\n             id=\"path3930\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 8053,9297 2191,-91 2,51 2,51 -2191,91 -2,-51 z\"\n             id=\"path3932\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 10246,9257 24,45 -8,3 -8,2 -6,1 z\"\n             id=\"path3934\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 10222,9212 1169,-637 24,45 24,45 -1169,637 -24,-45 z\"\n             id=\"path3936\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 11415,8620 51,5 -2,9 -3,8 -5,8 -5,7 -7,5 -5,3 z\"\n             id=\"path3938\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 11364,8615 146,-1458 51,5 51,5 -146,1458 -51,-5 z\"\n             id=\"path3940\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 11561,7162 20,-47 8,4 7,6 6,6 4,8 4,8 2,9 v 8 3 z\"\n             id=\"path3942\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 11541,7209 -6184,-2594 20,-47 20,-47 6184,2594 -20,47 z\"\n             id=\"path3944\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 5377,4568 -42,-28 5,-7 7,-6 8,-5 8,-3 9,-2 h 9 l 8,2 8,2 z\"\n             id=\"path3946\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3950\"\n           style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3980\"\n       style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n      <desc\n         id=\"desc3956\">Drawing</desc>\n      <g\n         id=\"g3978\"\n         style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\">\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3960\">\n          <path\n             d=\"m 11513,9849 -1120,1184 -1218,-501 z\"\n             id=\"path3958\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#FFFFFD;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3974\">\n          <path\n             d=\"m 11550,9884 -1120,1184 -37,-35 -37,-35 1120,-1184 37,35 z\"\n             id=\"path3962\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 10393,11033 37,35 -7,6 -7,5 -8,3 -9,2 h -9 l -9,-1 -7,-3 z\"\n             id=\"path3964\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 10374,11080 -1218,-501 19,-47 19,-47 1218,501 -19,47 z\"\n             id=\"path3966\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 9175,10532 -19,47 -8,-4 -7,-5 -6,-7 -5,-7 -4,-9 -2,-8 v -9 l 1,-9 3,-8 4,-8 5,-7 7,-6 7,-5 9,-4 h 1 z\"\n             id=\"path3968\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 9161,10483 2338,-683 14,49 14,49 -2338,683 -14,-49 z\"\n             id=\"path3970\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n          <path\n             d=\"m 11513,9849 -14,-49 8,-2 h 9 l 9,1 9,3 7,5 7,5 6,7 5,7 3,9 2,8 v 9 l -1,9 -3,9 -5,7 -5,7 z\"\n             id=\"path3972\"\n             style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3976\"\n           style=\"stroke:none;stroke-opacity:1;fill:#FFFFFD;fill-opacity:1\" />\n      </g>\n    </g>\n  </g>\n</svg>";


/***/ }),

/***/ "39SF":
/*!***************************************************************************************!*\
  !*** ./src/ui/modules/alert-dialog/components/alert-dialog/alert-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







var AlertDialogComponent = /** @class */ (function () {
    function AlertDialogComponent(translate, dialogRef, data) {
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.data = data;
        this.titleKey = '@c/ui/AlertDialogComponent/Title';
        this.messageKey = '@c/ui/AlertDialogComponent/Message';
        this.okBtnKey = '@c/ui/AlertDialogComponent/OK';
        this.messageParam = {};
        // setTranslations(this.translate, TRANSLATIONS);
    }
    AlertDialogComponent.prototype.accept = function () {
        this.dialogRef.close(true);
    };
    AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
    AlertDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertDialogComponent, selectors: [["alert-dialog"]], decls: 10, vars: 10, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertDialogComponent_Template_button_click_7_listener() { return ctx.accept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.data && ctx.data.titleKey ? ctx.data.titleKey : ctx.titleKey));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, ctx.data && ctx.data.messageKey ? ctx.data.messageKey : ctx.messageKey, ctx.data && ctx.data.messageParam ? ctx.data.messageParam : ctx.messageParam), "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, ctx.data && ctx.data.okBtnKey ? ctx.data.okBtnKey : ctx.okBtnKey));
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
    return AlertDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alert-dialog',
                templateUrl: './alert-dialog.component.html',
                styleUrls: ['./alert-dialog.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "39ud":
/*!***********************************************************************!*\
  !*** ./src/common/authentication/components/login/login.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/services/config.service */ "1WeG");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/base-reactive-form/base-reactive-form-component */ "gmUQ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "vmVr");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../error-handling/services/toastr.service */ "IQ7q");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _ui_modules_caps_lock_directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ui/modules/caps-lock/directives/caps-lock.directive */ "V7SN");
/* harmony import */ var _ui_modules_error_messages_components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../ui/modules/error-messages/components/error-messages/error-messages.component */ "i4ie");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");


























function LoginComponent_mat_icon_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var errorKey = 'LoginComponent/Error';
var requiredUserandPasswordKey = 'Required Username and Password';
var LoginComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoginComponent, _super);
    function LoginComponent(route, router, configService, authService, translateService, toastr, errorHandlingService, snackBar) {
        var _this = _super.call(this, translateService) || this;
        _this.route = route;
        _this.router = router;
        _this.configService = configService;
        _this.authService = authService;
        _this.translateService = translateService;
        _this.toastr = toastr;
        _this.errorHandlingService = errorHandlingService;
        _this.snackBar = snackBar;
        return _this;
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.data = {
            userName: '',
            password: '',
        };
        this.validationErrorMessages = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        if (this.authService.isAuthenticated) {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
        else {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
            this.authService.loginNavigationExtras = undefined;
        }
        this.createFormGroup();
    };
    LoginComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.userName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var userName = this.formGroup.get('userName').value;
        var password = this.formGroup.get('password').value;
        if (this.authService.isAuthenticated) {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
        else {
            if (userName && password) {
                this.authService.loginUser(userName, password)
                    .subscribe(function (resp) {
                    //this.rootActions.setState(this.authService.userPreferences);
                    if (_this.returnUrl && _this.returnUrl.length > 0) {
                        _this.router.navigateByUrl(_this.returnUrl);
                    }
                    else {
                        _this.router.navigate(_this.authService.afterLoginCommands, _this.authService.afterLoginNavigationExtras);
                    }
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
            else {
                this.translateService.get([requiredUserandPasswordKey, errorKey]).subscribe(function (translations) {
                    _this.toastr.success(requiredUserandPasswordKey);
                });
            }
        }
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_config_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 44, vars: 4, consts: [[1, "header", "bg-gradient-danger", "py-7", "py-lg-8"], [1, "container"], [1, "header-body", "text-center", "mb-4"], [1, "row", "justify-content-center"], [1, "col-lg-5", "col-md-6"], [1, "text-white"], [1, "text-lead", "text-light"], [1, "separator", "separator-bottom", "separator-skew", "zindex-100"], ["x", "0", "y", "0", "viewBox", "0 0 2560 100", "preserveAspectRatio", "none", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["points", "2560 0 2560 100 0 100", 1, "fill-default"], [1, "container", "mt--8"], [1, "col-lg-5", "col-md-7"], [1, "card", "bg-secondary", "shadow", "border-0"], [1, "card-body", "px-lg-5", "py-lg-5"], [1, "text-center", "text-muted", "mb-3"], ["capsLock", "", "inputFocus", "", 1, "login-form", 3, "formGroup", "ngSubmit", "capsLock"], [1, "form-group", "mb-3"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-email-83"], ["placeholder", "Email", "type", "email", "formControlName", "userName", 1, "form-control", "padding-left-10px"], ["matSuffix", "", "for", "userName", 3, "validationErrorMessages"], [1, "form-group"], [1, "ni", "ni-lock-circle-open"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", "padding-left-10px"], ["matSuffix", "", "for", "password", 3, "validationErrorMessages"], ["matSuffix", "", "color", "warn", "class", "cursor-default", "matTooltip", "The Caps Lock key is activated!", 4, "ngIf"], [1, "custom-control", "custom-control-alternative", "custom-checkbox"], ["id", " customCheckLogin", "type", "checkbox", 1, "custom-control-input"], ["for", " customCheckLogin", 1, "custom-control-label"], [1, "text-muted"], [1, "text-center"], ["type", "submit", "id", "loginSubmit", 1, "btn", "btn-primary", "my-4"], ["matSuffix", "", "color", "warn", "matTooltip", "The Caps Lock key is activated!", 1, "cursor-default"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Welcome!");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Use these awesome forms to login or create new account in your project for free.");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "svg", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "polygon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Or sign in with credentials");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_20_listener() { return ctx.login(); })("capsLock", function LoginComponent_Template_form_capsLock_20_listener($event) { return ctx.capsLockOn = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "error-messages", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "error-messages", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, LoginComponent_mat_icon_35_Template, 2, 0, "mat-icon", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Remember me");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Sign in");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("validationErrorMessages", ctx.validationErrorMessages);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("validationErrorMessages", ctx.validationErrorMessages);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.capsLockOn);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _ui_modules_caps_lock_directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_11__["CapsLockDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ui_modules_error_messages_components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_12__["ErrorMessagesComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"]], styles: [".login-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  \n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding-bottom: 10px;\n  font-size: 32px;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  padding: 40px;\n  background: #fff;\n  width: 300px;\n  box-shadow: 0 0 10px #ddd;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQXNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTtBQUhKO0FBbEJJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBb0JSO0FBbkJRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQXFCWjtBQW5CUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQXFCWjtBQXBCWTtFQUNJLDBDQUFBO0FBc0JoQjtBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUNBO0VBQ0ksV0FBQTtBQUVKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAuYXBwLW5hbWUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZGRkO1xyXG4gICAgICAgICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCB3aGl0ZSBpbnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfSovXHJcbn1cclxuLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udy0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
    return LoginComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_7__["BaseReactiveFormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }, { type: _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlingService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "3MQd":
/*!***************************************************************************!*\
  !*** ./src/common/error-handling/services/error-handling-http.service.ts ***!
  \***************************************************************************/
/*! exports provided: RequestType, ErrorHandlingHttpService, errorHandlingServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return RequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingHttpService", function() { return ErrorHandlingHttpService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandlingServiceFactory", function() { return errorHandlingServiceFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handling.service */ "IqbY");








var RequestType;
(function (RequestType) {
    RequestType[RequestType["Get"] = 0] = "Get";
    RequestType[RequestType["Post"] = 1] = "Post";
    RequestType[RequestType["Delete"] = 2] = "Delete";
    RequestType[RequestType["Patch"] = 3] = "Patch";
    RequestType[RequestType["Put"] = 4] = "Put";
    RequestType[RequestType["Request"] = 5] = "Request";
})(RequestType || (RequestType = {}));
var ErrorHandlingHttpService = /** @class */ (function () {
    function ErrorHandlingHttpService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
        this._currentLanguage = '';
        this.showDialogTime = 70 * 1000;
        this.countDown = 60;
        this._expire_in = 0;
    }
    Object.defineProperty(ErrorHandlingHttpService.prototype, "userToken", {
        get: function () {
            return localStorage.getItem('sindictaduras-token');
        },
        set: function (value) {
            localStorage.setItem('sindictaduras-token', value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorHandlingHttpService.prototype, "currentLanguage", {
        get: function () {
            return this._currentLanguage;
        },
        set: function (value) {
            this._currentLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    ErrorHandlingHttpService.prototype.getHeaders = function () {
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Accept-Language': this.currentLanguage ? this.currentLanguage : '',
            'Content-Type': 'application/json',
            Authorization: this.userToken ? 'Bearer ' + this.userToken : ''
        });
        return requestOptions;
    };
    ErrorHandlingHttpService.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = {
                headers: this.getHeaders()
            };
        }
        else {
            if (options.headers == null) {
                options.headers = this.getHeaders();
            }
        }
        return options;
    };
    ErrorHandlingHttpService.prototype.requestInterceptor = function (type, url, body, options) {
        var _this = this;
        var request = null;
        switch (type) {
            case RequestType.Get: {
                request = this.httpClient.get(url, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Post: {
                request = this.httpClient.post(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Delete: {
                request = this.httpClient.delete(url, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Patch: {
                request = this.httpClient.patch(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Put: {
                request = this.httpClient.put(url, body ? body : null, this.getRequestOptionArgs(options));
                break;
            }
            case RequestType.Request: {
                request = this.httpClient.request(url);
                break;
            }
        }
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (value) {
            if (value) {
                var expires_in = value.expires_in;
                // handle remaining time
                if (expires_in && expires_in > 0) {
                    _this._expire_in = expires_in;
                    if (_this._sessionExpire$) {
                        _this._sessionExpire$.unsubscribe();
                    }
                    // Checking if the expiration time is less than X count of seconds and
                    // if it's then start a counter for the remaining time between expiration time and notification time
                    // X count of seconds before expiration.If isn't, then show the notification immediately
                    var timeToShowDialog = _this._expire_in * 1000;
                    var countDown_1 = _this.countDown;
                    if (_this.showDialogTime < timeToShowDialog) {
                        timeToShowDialog -= _this.showDialogTime;
                        // Send a notification 70 seconds before session expire
                        _this._sessionExpire$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(timeToShowDialog).subscribe(function (here) {
                            _this.errorHandlingService.showExpireNotification.next(countDown_1);
                        });
                    }
                    else {
                        if (_this._expire_in <= _this.countDown) {
                            countDown_1 = _this._expire_in;
                        }
                        _this.errorHandlingService.showExpireNotification.next(countDown_1);
                    }
                }
            }
            // Common place where put code we want to execute for all the request when are success
            _this.errorHandlingService.serverOnline.next(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (handledError) {
            // Common place where put code we want to execute for all the request when are success
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(handledError);
        }));
    };
    ErrorHandlingHttpService.prototype.request = function (req) {
        return this.requestInterceptor(RequestType.Request, req, null);
    };
    ErrorHandlingHttpService.prototype.get = function (url, options) {
        return this.requestInterceptor(RequestType.Get, url, null, options);
    };
    ErrorHandlingHttpService.prototype.post = function (url, body, options) {
        return this.requestInterceptor(RequestType.Post, url, body, options);
    };
    ErrorHandlingHttpService.prototype.put = function (url, body, options) {
        return this.requestInterceptor(RequestType.Put, url, body, options);
    };
    ErrorHandlingHttpService.prototype.delete = function (url, options) {
        return this.requestInterceptor(RequestType.Delete, url, null, options);
    };
    ErrorHandlingHttpService.prototype.patch = function (url, body, options) {
        return this.requestInterceptor(RequestType.Patch, url, body, options);
    };
    ErrorHandlingHttpService.ɵfac = function ErrorHandlingHttpService_Factory(t) { return new (t || ErrorHandlingHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"])); };
    ErrorHandlingHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlingHttpService, factory: ErrorHandlingHttpService.ɵfac, providedIn: 'root' });
    return ErrorHandlingHttpService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlingHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"] }]; }, null); })();
function errorHandlingServiceFactory(errorHandlingService, httpClient) {
    return new ErrorHandlingHttpService(httpClient, errorHandlingService);
}


/***/ }),

/***/ "3VOU":
/*!*****************************************************************************************************!*\
  !*** ./src/common/authentication/components/change-password-form/change-password-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ChangePasswordFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFormComponent", function() { return ChangePasswordFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/base-reactive-form/base-reactive-form-component */ "gmUQ");
/* harmony import */ var _validation_helpers_digits_count_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../validation/helpers/digits-count-validator */ "fjjy");
/* harmony import */ var _validation_helpers_lowercase_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../validation/helpers/lowercase-validator */ "EcuQ");
/* harmony import */ var _validation_helpers_same_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../validation/helpers/same-password-validator */ "X623");
/* harmony import */ var _validation_helpers_special_chars_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../validation/helpers/special-chars-validator */ "mLCQ");
/* harmony import */ var _validation_helpers_uppercase_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../validation/helpers/uppercase-validator */ "20P2");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_modules_caps_lock_directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/modules/caps-lock/directives/caps-lock.directive */ "V7SN");
/* harmony import */ var _ui_modules_ask_before_refresh_directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../ui/modules/ask-before-refresh/directives/ask-before-refresh.directive */ "iFtz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_modules_error_messages_components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../ui/modules/error-messages/components/error-messages/error-messages.component */ "i4ie");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");



//






// import { setTranslations } from '@c/ngx-translate';













function ChangePasswordFormComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "@c/authentication/ChangePasswordFormComponent/Warning: The Caps Lock key is activated!"));
} }
function ChangePasswordFormComponent_mat_icon_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "@c/authentication/ChangePasswordFormComponent/Warning: The Caps Lock key is activated!"));
} }
function ChangePasswordFormComponent_mat_icon_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "@c/authentication/ChangePasswordFormComponent/Warning: The Caps Lock key is activated!"));
} }
var ChangePasswordFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ChangePasswordFormComponent, _super);
    function ChangePasswordFormComponent(translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.translateService = translateService;
        _this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
        // setTranslations(this.translateService, TRANSLATIONS);
    }
    ChangePasswordFormComponent.prototype.ngOnInit = function () {
        this.validationErrorMessages = [
            {
                type: 'required',
                key: '@c/authentication/ChangePasswordFormComponent/Required Field',
                params: null,
                translation: ''
            },
            {
                type: 'passwordStrength',
                key: '@c/authentication/ChangePasswordFormComponent/Password Strength',
                params: {
                    numberCount: this.digitsCount,
                    uppercase: this.uppercase,
                    lowercase: this.lowercase,
                    minSize: this.passwordSize,
                    specialCharacters: this.specialCharsCount
                }, translation: ''
            },
            {
                type: 'matchPassword',
                key: '@c/authentication/ChangePasswordFormComponent/Password Match',
                params: null,
                translation: ''
            }
        ];
        this.createFormGroup();
    };
    ChangePasswordFormComponent.prototype.createFormGroup = function () {
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.password, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(28),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.passwordSize),
            Object(_validation_helpers_lowercase_validator__WEBPACK_IMPORTED_MODULE_5__["lowercase"])(this.lowercase),
            Object(_validation_helpers_uppercase_validator__WEBPACK_IMPORTED_MODULE_8__["uppercase"])(this.uppercase),
            Object(_validation_helpers_digits_count_validator__WEBPACK_IMPORTED_MODULE_4__["digitsCount"])(this.digitsCount),
            Object(_validation_helpers_special_chars_validator__WEBPACK_IMPORTED_MODULE_7__["specialChars"])(this.specialCharsCount),
        ]);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            old_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.old_password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: this.password,
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.confirmPassword, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                Object(_validation_helpers_same_password_validator__WEBPACK_IMPORTED_MODULE_6__["samePassword"])(this.password)
            ]),
        });
    };
    ChangePasswordFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    ChangePasswordFormComponent.ɵfac = function ChangePasswordFormComponent_Factory(t) { return new (t || ChangePasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"])); };
    ChangePasswordFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangePasswordFormComponent, selectors: [["change-password-form"]], inputs: { passwordSize: "passwordSize", uppercase: "uppercase", lowercase: "lowercase", specialCharsCount: "specialCharsCount", digitsCount: "digitsCount" }, outputs: { cancel: "cancel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 37, vars: 23, consts: [["novalidate", "", "role", "form", "capsLock", "", "inputFocus", "", "autocomplete", "off", 1, "flex-grow-1", "min-height-0", "display-flex", "flex-direction-column", 3, "askBeforeRefresh", "formGroup", "ngSubmit", "capsLock"], [1, "flex-grow-1", "overflow-auto", "display-flex", "flex-direction-column"], [1, "flex-grow-1", "flex-shrink-0", "display-flex", "flex-direction-column"], ["appearance", "fill"], ["type", "password", "tabindex", "-1", 1, "no-save-password", 2, "left", "0", "margin", "0", "max-height", "1px", "max-width", "1px", "opacity", "0", "outline", "none", "overflow", "hidden", "pointer-events", "none", "position", "absolute", "top", "0", "z-index", "-1"], ["matInput", "", "type", "password", "formControlName", "old_password", "required", ""], ["matSuffix", "", "color", "warn", "class", "cursor-default", 3, "matTooltip", 4, "ngIf"], ["matSuffix", "", "for", "old_password", 3, "validationErrorMessages"], ["matInput", "", "type", "password", "formControlName", "password", "required", "", "autofocus", ""], ["matSuffix", "", "for", "password", 3, "validationErrorMessages"], ["matInput", "", "type", "password", "formControlName", "confirm_password", "required", ""], ["matSuffix", "", "for", "confirm_password", 3, "validationErrorMessages"], [1, "margin-right-25px", "padding-top-25px", "padding-bottom-25px", "flex-shrink-0", "display-flex", "border-top-style-solid", "border-top-width-2px", "border-top-color-grey"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "type", "button", 1, "margin-left-10px", 3, "click"], ["matSuffix", "", "color", "warn", 1, "cursor-default", 3, "matTooltip"]], template: function ChangePasswordFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChangePasswordFormComponent_Template_form_ngSubmit_0_listener() { return ctx.submitClicked(); })("capsLock", function ChangePasswordFormComponent_Template_form_capsLock_0_listener($event) { return ctx.capsLockOn = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChangePasswordFormComponent_mat_icon_10_Template, 3, 3, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "error-messages", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ChangePasswordFormComponent_mat_icon_19_Template, 3, 3, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "error-messages", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ChangePasswordFormComponent_mat_icon_28_Template, 3, 3, "mat-icon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "error-messages", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChangePasswordFormComponent_Template_button_click_34_listener() { return ctx.cancelClicked(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("askBeforeRefresh", ctx.formGroup.dirty)("formGroup", ctx.formGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 13, "@c/Old password"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.capsLockOn);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("validationErrorMessages", ctx.validationErrorMessages);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 15, "@c/New password"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.capsLockOn);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("validationErrorMessages", ctx.validationErrorMessages);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 17, "@c/authentication/ChangePasswordFormComponent/Confirm new password"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.capsLockOn);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("validationErrorMessages", ctx.validationErrorMessages);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 19, "@c/authentication/ChangePasswordFormComponent/Save"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 21, "@c/authentication/ChangePasswordFormComponent/Cancel"));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _ui_modules_caps_lock_directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_10__["CapsLockDirective"], _ui_modules_ask_before_refresh_directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_11__["AskBeforeRefreshDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _ui_modules_error_messages_components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_15__["ErrorMessagesComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {    \r\n    overflow-y: auto; \r\n    display: flex; \r\n    flex-direction: column;     \r\n    flex-grow: 1;\r\n\r\n    padding: 25px 0 25px 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0IsRUFFTyxXQUFXO0lBQ2xDLGFBQWEsRUFFbUIsV0FBVztJQUMzQyxzQkFBc0IsRUFFQSxXQUFXO0lBQ2pDLFlBQVk7O0lBRVosd0JBQXdCO0FBQzVCIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7ICAgIFxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7IC8qIFNhZmFyaSAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFNhZmFyaSAqL1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTsgLyogU2FmYXJpICovICAgIFxyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgIHBhZGRpbmc6IDI1cHggMCAyNXB4IDBweDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
    return ChangePasswordFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseReactiveFormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangePasswordFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'change-password-form',
                templateUrl: './change-password-form.component.html',
                styleUrls: ['./change-password-form.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }]; }, { passwordSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], uppercase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lowercase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], specialCharsCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], digitsCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "4lPV":
/*!********************************************!*\
  !*** ./src/common/config/config.module.ts ***!
  \********************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConfigModule });
    ConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConfigModule_Factory(t) { return new (t || ConfigModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return ConfigModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "68UT":
/*!******************************************************!*\
  !*** ./src/ui/modules/caps-lock/caps-lock.module.ts ***!
  \******************************************************/
/*! exports provided: CapsLockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapsLockModule", function() { return CapsLockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/caps-lock.directive */ "V7SN");


//


var CapsLockModule = /** @class */ (function () {
    function CapsLockModule() {
    }
    CapsLockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CapsLockModule });
    CapsLockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CapsLockModule_Factory(t) { return new (t || CapsLockModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return CapsLockModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CapsLockModule, { declarations: [_directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_2__["CapsLockDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_2__["CapsLockDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapsLockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_2__["CapsLockDirective"]
                ],
                exports: [
                    _directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_2__["CapsLockDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "69b4":
/*!****************************************************************************!*\
  !*** ./src/common/http-request-indicator/http-request-indicator.module.ts ***!
  \****************************************************************************/
/*! exports provided: HttpRequestIndicatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorModule", function() { return HttpRequestIndicatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/http-request-indicator/http-request-indicator.component */ "E8Zy");
/* harmony import */ var _services_indicated_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/indicated-interceptor.service */ "nhkn");
/* harmony import */ var _services_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/loading-interceptor.service */ "XftJ");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loading/loading.component */ "qI6W");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");



//






var HttpRequestIndicatorModule = /** @class */ (function () {
    function HttpRequestIndicatorModule() {
    }
    HttpRequestIndicatorModule.forRoot = function () {
        return {
            ngModule: HttpRequestIndicatorModule,
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _services_indicated_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["IndicatedInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _services_loading_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["LoadingInterceptor"], multi: true }
            ]
        };
    };
    HttpRequestIndicatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HttpRequestIndicatorModule });
    HttpRequestIndicatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HttpRequestIndicatorModule_Factory(t) { return new (t || HttpRequestIndicatorModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
            ]] });
    return HttpRequestIndicatorModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpRequestIndicatorModule, { declarations: [_components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]], exports: [_components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpRequestIndicatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
                ],
                declarations: [_components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]],
                exports: [_components_http_request_indicator_http_request_indicator_component__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "7XjW":
/*!***************************************************************************************!*\
  !*** ./src/common/http-request-indicator/services/http-request-indicators.service.ts ***!
  \***************************************************************************************/
/*! exports provided: HttpRequestIndicatorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorsService", function() { return HttpRequestIndicatorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_http_request_indicator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/http-request-indicator */ "Rm8x");



var HttpRequestIndicatorsService = /** @class */ (function () {
    function HttpRequestIndicatorsService() {
        this.indicators = [];
    }
    HttpRequestIndicatorsService.prototype.registerIndicator = function (uid, urlExpressions) {
        var indicator = new _models_http_request_indicator__WEBPACK_IMPORTED_MODULE_1__["HttpRequestIndicator"](uid, urlExpressions);
        this.indicators.push(indicator);
        return indicator.show;
    };
    HttpRequestIndicatorsService.prototype.unregisterIndicator = function (uid) {
        this.indicators.splice(this.indicators.map(function (indicator) { return indicator.uid; }).indexOf(uid), 1);
    };
    HttpRequestIndicatorsService.prototype.findIndicators = function (url) {
        var indicators = [];
        for (var i = 0; i < this.indicators.length; i++) {
            var indicator = this.indicators[i];
            for (var j = 0; j < indicator.urlExpressions.length; j++) {
                var expression = indicator.urlExpressions[j];
                var pattern = new RegExp(expression);
                if (pattern.test(url)) {
                    indicators.push(indicator);
                    break;
                }
            }
        }
        return indicators;
    };
    HttpRequestIndicatorsService.prototype.setLoading = function (flag) {
    };
    HttpRequestIndicatorsService.ɵfac = function HttpRequestIndicatorsService_Factory(t) { return new (t || HttpRequestIndicatorsService)(); };
    HttpRequestIndicatorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpRequestIndicatorsService, factory: HttpRequestIndicatorsService.ɵfac, providedIn: 'root' });
    return HttpRequestIndicatorsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpRequestIndicatorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7lQ3":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/components/presidentes-form/presidentes-form.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PresidentesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentesFormComponent", function() { return PresidentesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../ui/components/base-reactive-form/base-reactive-form-component */ "gmUQ");
/* harmony import */ var _common_services_country_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../common/services/country.service */ "/RXN");
/* harmony import */ var _ui_modules_ask_before_refresh_directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../ui/modules/ask-before-refresh/directives/ask-before-refresh.directive */ "iFtz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_modules_image_upload_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../ui/modules/image-upload/image-upload/image-upload.component */ "wY/o");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



//

//














function PresidentesFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", element_r1 == null ? null : element_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r1 == null ? null : element_r1.name);
} }
var PresidentesFormComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PresidentesFormComponent, _super);
    function PresidentesFormComponent(countryService, translateService) {
        var _this = _super.call(this, translateService) || this;
        _this.countryService = countryService;
        _this.imageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.countries = [];
        _this.countries = _this.countryService.getCountryList();
        return _this;
        // setTranslations(this.translateService, TRANSLATIONS);
    }
    PresidentesFormComponent.prototype.ngOnInit = function () {
        var validationsErrors = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        this.validationErrorMessages = validationsErrors;
        this.createFormGroup();
    };
    PresidentesFormComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.nombre, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.apellidos, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            pais: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.pais, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            biografia: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.biografia),
            mandatos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.mandatos),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.data.descripcion),
        });
    };
    PresidentesFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.data.paisCode = this.countryService.getCodeByCountry(this.formGroup.get('pais').value);
            this.accept.emit(this.data);
        }
        else {
            this.triggerValidation();
        }
    };
    PresidentesFormComponent.prototype.handleImageChangeEvent = function (image) {
        this.imageChange.emit(image);
    };
    PresidentesFormComponent.prototype.handleImageRemoveEvent = function (image) {
        this.imageChange.emit(image);
    };
    PresidentesFormComponent.ɵfac = function PresidentesFormComponent_Factory(t) { return new (t || PresidentesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    PresidentesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PresidentesFormComponent, selectors: [["app-presidentes-form"]], outputs: { imageChange: "imageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 11, consts: [["novalidate", "", "role", "form", "autocomplete", "off", "inputFocus", "", 1, "flex-grow-1", "min-height-0", "display-flex", "flex-direction-column", 3, "askBeforeRefresh", "formGroup", "ngSubmit"], [1, "flex-grow-1", "overflow-auto", "display-flex", "flex-direction-column"], [1, "flex-grow-1", "flex-shrink-0", "display-flex", "flex-direction-column"], ["fxFlex", "", "fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "mb-20"], [1, "width-100pc"], ["matInput", "", "type", "text", "formControlName", "nombre"], ["matInput", "", "type", "text", "formControlName", "apellidos"], ["disableOptionCentering", "", "placeholder", "Select", "formControlName", "pais", "required", ""], [4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "mandatos"], ["matInput", "", "type", "text", "formControlName", "biografia"], ["appearance", "fill", 1, "width-100pc"], ["matInput", "", "formControlName", "description", "formControlName", "descripcion", 1, "min-height-100px"], [1, "image-upload", 3, "actualImagePath", "showButton", "fileChange", "fileRemove"], [1, "padding-top-25px", "flex-shrink-0", "display-flex", "border-top-style-solid", "border-top-width-2px", "border-top-color-grey"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-raised-button", "", "type", "button", 1, "margin-left-10px", 3, "click"], [3, "value"]], template: function PresidentesFormComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PresidentesFormComponent_Template_form_ngSubmit_0_listener() { return ctx.submitClicked(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nombre");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Apellidos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pais");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PresidentesFormComponent_div_17_Template, 3, 2, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Mandatos");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Biografia");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Descripcion");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "textarea", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "app-image-upload", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fileChange", function PresidentesFormComponent_Template_app_image_upload_fileChange_30_listener($event) { return ctx.handleImageChangeEvent($event); })("fileRemove", function PresidentesFormComponent_Template_app_image_upload_fileRemove_30_listener($event) { return ctx.handleImageRemoveEvent($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PresidentesFormComponent_Template_button_click_35_listener() { return ctx.cancelClicked(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("askBeforeRefresh", ctx.formGroup.dirty)("formGroup", ctx.formGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("actualImagePath", ctx.data.foto)("showButton", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 7, "Save"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 9, "Cancel"));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _ui_modules_ask_before_refresh_directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_6__["AskBeforeRefreshDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ui_modules_image_upload_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_11__["ImageUploadComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.height-34px[_ngcontent-%COMP%] {\n  height: 34px !important;\n}\n\n.width-100pc[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcmVzaWRlbnRlcy1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJwcmVzaWRlbnRlcy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5oZWlnaHQtMzRweHtcclxuICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2lkdGgtMTAwcGN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"], changeDetection: 0 });
    return PresidentesFormComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_4__["BaseReactiveFormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PresidentesFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-presidentes-form',
                templateUrl: './presidentes-form.component.html',
                styleUrls: ['./presidentes-form.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _common_services_country_service__WEBPACK_IMPORTED_MODULE_5__["CountryService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, { imageChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "8UB1":
/*!*********************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/mostrar-presidente-dialog/mostrar-presidente-dialog.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MostrarPresidenteDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostrarPresidenteDialogModule", function() { return MostrarPresidenteDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/confirm-dialog/mostrar-presidente-dialog.component */ "0Ofe");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/ui.module */ "od0u");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");




//

//







var MostrarPresidenteDialogModule = /** @class */ (function () {
    function MostrarPresidenteDialogModule() {
    }
    MostrarPresidenteDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MostrarPresidenteDialogModule });
    MostrarPresidenteDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MostrarPresidenteDialogModule_Factory(t) { return new (t || MostrarPresidenteDialogModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
            ]] });
    return MostrarPresidenteDialogModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MostrarPresidenteDialogModule, { declarations: [_components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MostrarPresidenteDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"],
        ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]], exports: [_components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MostrarPresidenteDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MostrarPresidenteDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"],
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
                ],
                declarations: [
                    _components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MostrarPresidenteDialogComponent"]
                ],
                exports: [
                    _components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_7__["MostrarPresidenteDialogComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiUrl: 'http://ec2-13-58-79-219.us-east-2.compute.amazonaws.com:8080/',
    apiBucket: 'https://s3.us-east-2.amazonaws.com/dictaduras.recursos/'
};


/***/ }),

/***/ "BEtn":
/*!**********************************************!*\
  !*** ./src/ui/services/svg-icons.service.ts ***!
  \**********************************************/
/*! exports provided: SvgIconsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconsService", function() { return SvgIconsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_svg_icons_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/svg-icons/icons */ "fVzh");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







var SvgIconsService = /** @class */ (function () {
    function SvgIconsService(iconRegistry, sanitizer) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.registerIcons();
    }
    SvgIconsService.prototype.registerIcons = function () {
        var _this = this;
        _models_svg_icons_icons__WEBPACK_IMPORTED_MODULE_1__["ICONS"].forEach(function (icon) {
            _this.iconRegistry.addSvgIconLiteral(icon.iconName, _this.sanitizer.bypassSecurityTrustHtml(icon.literal));
        });
    };
    SvgIconsService.ɵfac = function SvgIconsService_Factory(t) { return new (t || SvgIconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
    SvgIconsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SvgIconsService, factory: SvgIconsService.ɵfac, providedIn: 'root' });
    return SvgIconsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgIconsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "D64r":
/*!*************************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/components/new-presidente/new-presidente.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: NewPresidenteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPresidenteComponent", function() { return NewPresidenteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _common_error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../common/error-handling/services/toastr.service */ "IQ7q");
/* harmony import */ var _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _ui_modules_image_upload_services_image_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../ui/modules/image-upload/services/image.service */ "d2QS");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/presidentes.service */ "Vx6W");
/* harmony import */ var _presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../presidentes-form/presidentes-form.component */ "7lQ3");


//

















var errorKey = 'Error';
var savedMessageKey = 'Saved';
var NewPresidenteComponent = /** @class */ (function () {
    function NewPresidenteComponent(activatedRoute, errorHandlingService, router, translate, toastr, dialog, imagesService, presidentesService) {
        this.activatedRoute = activatedRoute;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.translate = translate;
        this.toastr = toastr;
        this.dialog = dialog;
        this.imagesService = imagesService;
        this.presidentesService = presidentesService;
        this.data = {
            name: '',
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'No';
        this.okBtnKey = 'Yes';
        this.saveTitleKey = 'Discard Title';
        this.saveMessageKey = 'Discard Message';
        // @Input() brands: Array<Brand>;TODO
        // @Output() close = new EventEmitter();TODO
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    NewPresidenteComponent.prototype.submit = function (data) {
        this.createPresidente(data);
    };
    NewPresidenteComponent.prototype.handleImageChangeEvent = function (image) {
        this.file = image;
        console.log(image);
    };
    NewPresidenteComponent.prototype.createPresidente = function (data) {
        var _this = this;
        if (this.file !== null && this.file !== undefined) {
            this.imagesService.postImagenPresidente(this.file, 'presidenteId')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.onDestroy$))
                .subscribe(function (response) {
                data.foto = response.data;
                _this.save(data);
            });
        }
        else {
            this.save(data);
        }
    };
    NewPresidenteComponent.prototype.save = function (data) {
        var _this = this;
        this.presidentesService.postCreatePresidente(data).subscribe(function (response) {
            _this.close();
        });
    };
    NewPresidenteComponent.prototype.cancel = function () {
        this.close();
    };
    NewPresidenteComponent.prototype.close = function () {
        this.router.navigate(this.activatedRoute.snapshot.data.closeRouteCommand, { relativeTo: this.activatedRoute });
    };
    NewPresidenteComponent.ɵfac = function NewPresidenteComponent_Factory(t) { return new (t || NewPresidenteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_modules_image_upload_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__["PresidentesService"])); };
    NewPresidenteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewPresidenteComponent, selectors: [["app-new-presidente"]], decls: 3, vars: 2, consts: [[1, "margin-top-0px"], [1, "flex-grow-1", 3, "data", "validationErrors", "accept", "cancel", "dataChange", "imageChange"]], template: function NewPresidenteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADD PRESIDENTE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-presidentes-form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("accept", function NewPresidenteComponent_Template_app_presidentes_form_accept_2_listener($event) { return ctx.submit($event); })("cancel", function NewPresidenteComponent_Template_app_presidentes_form_cancel_2_listener() { return ctx.cancel(); })("dataChange", function NewPresidenteComponent_Template_app_presidentes_form_dataChange_2_listener() { return ctx.dataChanged(); })("imageChange", function NewPresidenteComponent_Template_app_presidentes_form_imageChange_2_listener($event) { return ctx.handleImageChangeEvent($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("validationErrors", ctx.validationErrors);
        } }, directives: [_presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_10__["PresidentesFormComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%;\n  background-color: white !important;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  height: 60%;\n  max-height: 82vh;\n  margin-bottom: 10px;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  padding: 0px;\n  align-self: flex-start;\n  height: 200px;\n  width: 150px;\n  margin-left: 2px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n.max-width-60-pct[_ngcontent-%COMP%] {\n  max-width: 60% !important;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid #f1f1f1;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n  .mat-dialog-container {\n  padding: 0px 0px 25px 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxuZXctcHJlc2lkZW50ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0E7O0FBRUE7RUFDQSx5QkFBQTtBQUNBOztBQUVBO0VBQ0EseUJBQUE7QUFDQTs7QUFFQTtFQUNBLHVCQUFBO0FBQ0E7O0FBQ0E7RUFDQSx1QkFBQTtBQUVBOztBQUNBO0VBQ0UsMEJBQUE7QUFFRiIsImZpbGUiOiJuZXctcHJlc2lkZW50ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG5mb250LXNpemU6IDI0cHg7XHJcbndpZHRoOiAyNHB4O1xyXG5oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXgtd2lkdGgtNjAtcGN0e1xyXG5tYXgtd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbHtcclxuYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxudGgubWF0LWhlYWRlci1jZWxse1xyXG5ib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4IDBweCAyNXB4IDI1cHg7XHJcbn1cclxuIl19 */"] });
    return NewPresidenteComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewPresidenteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-presidente',
                templateUrl: './new-presidente.component.html',
                styleUrls: ['./new-presidente.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _common_error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _ui_modules_image_upload_services_image_service__WEBPACK_IMPORTED_MODULE_7__["ImagesService"] }, { type: _services_presidentes_service__WEBPACK_IMPORTED_MODULE_9__["PresidentesService"] }]; }, null); })();


/***/ }),

/***/ "E8Zy":
/*!*****************************************************************************************************************!*\
  !*** ./src/common/http-request-indicator/components/http-request-indicator/http-request-indicator.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HttpRequestIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicatorComponent", function() { return HttpRequestIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-request-indicators.service */ "7XjW");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ "EdvF");

// "@types/lodash": "ts2.0",
// "lodash": "4.17.4",
// "lodash.uniqueid": "4.0.1"






var HttpRequestIndicatorComponent = /** @class */ (function () {
    function HttpRequestIndicatorComponent(httpRequestIndicators, loadingService) {
        this.httpRequestIndicators = httpRequestIndicators;
        this.loadingService = loadingService;
        this.uid = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqueId"]();
    }
    HttpRequestIndicatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.httpRequestIndicators
            .registerIndicator(this.uid, this.urlExpressions)
            .subscribe(function (visible) {
            _this.loadingService.loading$.next(visible);
        });
    };
    HttpRequestIndicatorComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.httpRequestIndicators.unregisterIndicator(this.uid);
    };
    HttpRequestIndicatorComponent.ɵfac = function HttpRequestIndicatorComponent_Factory(t) { return new (t || HttpRequestIndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestIndicatorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"])); };
    HttpRequestIndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HttpRequestIndicatorComponent, selectors: [["app-http-request-indicator"]], inputs: { urlExpressions: "urlExpressions" }, decls: 0, vars: 0, template: function HttpRequestIndicatorComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodHRwLXJlcXVlc3QtaW5kaWNhdG9yLmNvbXBvbmVudC5jc3MifQ== */"], changeDetection: 0 });
    return HttpRequestIndicatorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpRequestIndicatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-http-request-indicator',
                templateUrl: './http-request-indicator.component.html',
                styleUrls: ['./http-request-indicator.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestIndicatorsService"] }, { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] }]; }, { urlExpressions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Ecfk":
/*!************************************************************!*\
  !*** ./src/common/error-handling/error-handling.module.ts ***!
  \************************************************************/
/*! exports provided: ErrorHandlingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingModule", function() { return ErrorHandlingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/http-headers-interceptor.service */ "/XId");
/* harmony import */ var _interceptors_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/error-handling-interceptor.service */ "lerV");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/toastr.service */ "IQ7q");
/* harmony import */ var _modules_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/custom-snackbar/custom-snackbar.module */ "t/wU");



//


//
//import { NgxTranslateModule } from '../../ngx-translate';TODO






var ErrorHandlingModule = /** @class */ (function () {
    function ErrorHandlingModule() {
    }
    ErrorHandlingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ErrorHandlingModule });
    ErrorHandlingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ErrorHandlingModule_Factory(t) { return new (t || ErrorHandlingModule)(); }, providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["HttpHeadersInterceptorService"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingInterceptorService"], multi: true },
            _services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                //NgxTranslateModule,TODO
                _modules_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_8__["CustomSnackbarModule"]
            ]] });
    return ErrorHandlingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ErrorHandlingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], 
        //NgxTranslateModule,TODO
        _modules_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_8__["CustomSnackbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ErrorHandlingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                    //NgxTranslateModule,TODO
                    _modules_custom_snackbar_custom_snackbar_module__WEBPACK_IMPORTED_MODULE_8__["CustomSnackbarModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_5__["HttpHeadersInterceptorService"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _interceptors_error_handling_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["ErrorHandlingInterceptorService"], multi: true },
                    _services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "EcuQ":
/*!**************************************************************!*\
  !*** ./src/common/validation/helpers/lowercase-validator.ts ***!
  \**************************************************************/
/*! exports provided: lowercase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
function lowercase(minRequired) {
    return function (control) {
        var inputValue = control.value;
        if (inputValue && minRequired && minRequired > 0) {
            var regExp = new RegExp(/([^a-z])/g);
            var valueSplit = inputValue.replace(regExp, '');
            var isValid = valueSplit.length >= minRequired ? true : false;
            return isValid ? null : { 'passwordStrength': { 'lowercaseCount': { value: control.value } } };
        }
        return null;
    };
}


/***/ }),

/***/ "EdvF":
/*!***********************************************************************!*\
  !*** ./src/common/http-request-indicator/services/loading.service.ts ***!
  \***********************************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loading/loading.component */ "qI6W");









var DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'loading-overlay-backdrop',
    panelClass: 'loading-overlay-panel'
};
var LoadingService = /** @class */ (function () {
    function LoadingService(router, overlay) {
        var _this = this;
        this.router = router;
        this.overlay = overlay;
        this.counter = 0;
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loading$.subscribe(function (loading) {
            if (loading) {
                _this.counter++;
                if (_this.counter > 0 && !_this.overlayRef) {
                    _this.overlayRef = _this.createOverlay(DEFAULT_CONFIG);
                    var loadingPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"]);
                    _this.overlayRef.attach(loadingPortal);
                }
            }
            else {
                _this.counter--;
                _this.counter = _this.counter < 0 ? 0 : _this.counter;
                if (_this.counter === 0) {
                    if (_this.overlayRef) {
                        _this.overlayRef.dispose();
                        _this.overlayRef = null;
                    }
                }
            }
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.loading$.next(true);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                _this.loading$.next(false);
            }
        });
    }
    LoadingService.prototype.showLoader = function (mostrarIndicador) {
        this.loading$.next(mostrarIndicador);
    };
    LoadingService.prototype.getOverlayConfig = function (config) {
        var positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayConfig"]({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
        });
        return overlayConfig;
    };
    LoadingService.prototype.createOverlay = function (config) {
        // Returns an OverlayConfig
        var overlayConfig = this.getOverlayConfig(config);
        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    };
    LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"])); };
    LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
    return LoadingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }]; }, null); })();


/***/ }),

/***/ "F149":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








var _c0 = function () { return ["/home"]; };
var _c1 = function () { return ["/landing"]; };
var _c2 = function () { return ["/register"]; };
var _c3 = function () { return ["/profile"]; };
var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent() {
        this.isCollapsed = true;
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
    };
    ProfilepageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    ProfilepageComponent.ɵfac = function ProfilepageComponent_Factory(t) { return new (t || ProfilepageComponent)(); };
    ProfilepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilepageComponent, selectors: [["app-profilepage"]], decls: 283, vars: 16, consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "tooltip", "Designed and Coded by Creative Tim", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["href", "https://twitter.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Twitter", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "d-lg-none", "d-xl-none"], ["href", "https://www.facebook.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Like us on Facebook", 1, "nav-link"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/CreativeTimOfficial", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Instagram", 1, "nav-link"], [1, "fab", "fa-instagram"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["href", "https://github.com/creativetimofficial/blk-design-system-angular/issues", 1, "nav-link"], [1, "wrapper"], [1, "page-header"], ["src", "assets/img/dots.png", 1, "dots"], ["src", "assets/img/path4.png", 1, "path"], [1, "container", "align-items-center"], [1, "col-lg-6", "col-md-6"], [1, "profile-title", "text-left"], [1, "text-on-back"], [1, "profile-description"], [1, "btn-wrapper", "profile", "pt-3"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-twitter", "btn-round", "mr-1"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-facebook", "btn-round", "mr-1"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-dribbble", "btn-round"], [1, "fab", "fa-dribbble"], [1, "col-lg-4", "col-md-6", "ml-auto", "mr-auto"], [1, "card", "card-coin", "card-plain"], [1, "card-header"], ["src", "assets/img/mike.jpg", 1, "img-center", "img-fluid", "rounded-circle"], [1, "title"], [1, "card-body"], [1, "nav-tabs-danger", "justify-content-center", "tab-subcategories"], ["heading", "Wallet"], [1, "table-responsive"], ["id", "plain-table", 1, "table", "tablesorter"], [1, "text-danger"], [1, "header"], ["heading", "Send"], [1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], [1, "form-group"], ["placeholder", "e.g. 1Nasd92348hU984353hfid", "type", "text", 1, "form-control"], [1, "form-text"], ["placeholder", "1.587", "type", "text", 1, "form-control"], ["type", "submit", 1, "btn", "btn-simple", "btn-danger", "btn-icon", "btn-round", "float-right"], [1, "tim-icons", "icon-send"], ["heading", "News"], [1, "section"], [1, "row", "justify-content-between"], [1, "col-md-6"], [1, "row", "justify-content-between", "align-items-center"], [3, "showIndicators"], ["alt", "First slide", "src", "assets/img/denys.jpg", 1, "d-block"], [1, "carousel-caption", "d-none", "d-md-block"], ["alt", "Second slide", "src", "assets/img/fabien-bazanegue.jpg", 1, "d-block"], ["alt", "Third slide", "src", "assets/img/mark-finn.jpg", 1, "d-block"], [1, "col-md-5"], [1, "profile-description", "text-left"], [1, "btn-wrapper", "pt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-simple", "btn-danger", "mr-1"], [1, "tim-icons", "icon-book-bookmark"], ["href", "javascript:void(0)", 1, "btn", "btn-simple", "btn-info"], [1, "tim-icons", "icon-bulb-63"], [1, "card", "card-plain"], ["type", "text", "value", "Mike", 1, "form-control"], ["placeholder", "mike@email.com", "type", "email", 1, "form-control"], ["type", "text", "value", "001-12321345", 1, "form-control"], ["type", "text", "value", "CreativeTim", 1, "form-control"], [1, "col-md-12"], ["placeholder", "Hello there!", "type", "text", 1, "form-control"], ["placement", "right", "type", "submit", 1, "btn", "btn-danger", "btn-round", "float-right"], [1, "col-md-4", "ml-auto"], [1, "info", "info-horizontal"], [1, "icon", "icon-danger"], [1, "tim-icons", "icon-square-pin"], [1, "description"], [1, "info-title"], [1, "tim-icons", "icon-mobile"], [1, "footer"], [1, "col-md-3"], [1, "nav"], ["href", "https://creative-tim.com/contact-us", 1, "nav-link"], ["href", "https://creative-tim.com/about-us", 1, "nav-link"], ["href", "https://creative-tim.com/blog", 1, "nav-link"], ["href", "https://opensource.org/licenses/MIT", 1, "nav-link"], [1, "btn-wrapper", "profile"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple"]], template: function ProfilepageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " BLK\u2022 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Design System Angular ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilepageComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " BLK\u2022 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfilepageComponent_Template_button_click_18_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Twitter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Instagram");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Back to Kit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Have an issue? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Mike Scheinder");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Transactions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tabset", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tab", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "table", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "thead", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "COIN");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "th", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "AMOUNT");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "VALUE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "BTC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "7.342");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "48,870.75 USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "ETH");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "30.737");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "64,53.30 USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "XRP");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "19.242");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "18,354.96 USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tab", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Pay to ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Please enter a valid address. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Amount ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tab", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "table", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "thead", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "th", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Latest Crypto News");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "The Daily: Nexo to Pay on Stable...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Venezuela Begins Public of Nation...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "PR: BitCanna \u00E2\u0080\u0093 Dutch Blockchain...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "carousel", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Big City Life, United States");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Somewhere Beyond, United States");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Stocks, United States");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h1", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Projects");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h5", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "02");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " An artist of considerable range, Ryan \u00E2\u0080\u0094 the name taken by Melbourne-raised, Brooklyn-based Nick Murphy \u00E2\u0080\u0094 writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "button", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Bookmark ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " Check it! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "section", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h1", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h5", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "03");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Your Name ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "input", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " Email address ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "input", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Phone ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "input", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " Company ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Message ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "input", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "button", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Send text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h4", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Find us at the office");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Bld Mihail Kogalniceanu, nr. 8, ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " 7652 Bucharest, ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Romania ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h4", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Give us a ring");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " Michael Jordan ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " +40 762 321 762 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Mon - Fri, 8:00-22:00 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "footer", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "h1", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "BLK\u2022");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "ul", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Landing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " Register ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "ul", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "a", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Contact Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "a", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " About Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "a", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Blog ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " License ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h3", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Follow us:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "a", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "i", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](105);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showIndicators", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c3));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseDirective"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabDirective"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]], encapsulation: 2 });
    return ProfilepageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-profilepage",
                templateUrl: "profilepage.component.html"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "F8q6":
/*!************************************************************************!*\
  !*** ./src/ui/modules/image-upload/zoom-image/zoom-image.component.ts ***!
  \************************************************************************/
/*! exports provided: ZoomImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomImageComponent", function() { return ZoomImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _zoom_image_dialog_zoom_image_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zoom-image-dialog/zoom-image-dialog.component */ "oke5");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dialog.service */ "Wnat");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






var _c0 = ["img"];
var _c1 = ["len"];
var _c2 = function (a0) { return { opacity: a0 }; };
var ZoomImageComponent = /** @class */ (function () {
    function ZoomImageComponent(render, dialogService) {
        this.render = render;
        this.dialogService = dialogService;
        this.zoom = 5;
        this.lenSize = 40;
        this.showLens = false;
        this.posX = 0;
        this.posY = 0;
        this.ratioX = 1;
        this.ratioY = 1;
    }
    ZoomImageComponent.prototype.mouseMove = function (event) {
        var zoomPosition = this.moveLens(event);
        this.render.setStyle(this.divZoomOutput, 'background-position', zoomPosition);
    };
    ZoomImageComponent.prototype.ngOnInit = function () { };
    ZoomImageComponent.prototype.onLoad = function () {
        this.setZoomOutputStyle();
        this.setRatios();
    };
    ZoomImageComponent.prototype.setRatios = function () {
        var zoomOutputRectangle = this.divZoomOutput.getBoundingClientRect();
        this.ratioX = this.calculateRatioBetweenDivAndLens(zoomOutputRectangle.width, this.img.nativeElement.width, this.lens.nativeElement.offsetWidth);
        this.ratioY = this.calculateRatioBetweenDivAndLens(zoomOutputRectangle.height, this.img.nativeElement.height, this.lens.nativeElement.offsetHeight);
    };
    ZoomImageComponent.prototype.calculateRatioBetweenDivAndLens = function (rectangleMeasurement, nativeMeasurement, offsetMeasurement) {
        return (rectangleMeasurement - nativeMeasurement * this.zoom) / (nativeMeasurement - offsetMeasurement);
    };
    ZoomImageComponent.prototype.setZoomOutputStyle = function () {
        this.render.setStyle(this.divZoomOutput, 'background-image', "url('" + this.imagen + "')");
        this.render.setStyle(this.divZoomOutput, 'background-size', this.img.nativeElement.width * this.zoom + 'px ' + this.img.nativeElement.height * this.zoom + 'px');
    };
    ZoomImageComponent.prototype.moveLens = function (e) {
        e.preventDefault(); /*prevent any other actions that may occur when moving over the image:*/
        this.setLensPositions(e);
        /*returns what the lens "sees":*/
        return this.posX * this.ratioX + 'px ' + this.posY * this.ratioY + 'px';
    };
    ZoomImageComponent.prototype.setLensPositions = function (e) {
        var cursorPosition = this.getCursorPosition(e);
        var lensPositionX = this.calculateLensPosition(cursorPosition.x, this.lens.nativeElement.offsetWidth);
        var lensPositionY = this.calculateLensPosition(cursorPosition.y, this.lens.nativeElement.offsetHeight);
        this.posX = this.setLensOuterLimits(lensPositionX, this.img.nativeElement.width, this.lens.nativeElement.offsetWidth);
        this.posY = this.setLensOuterLimits(lensPositionY, this.img.nativeElement.height, this.lens.nativeElement.offsetHeight);
    };
    ZoomImageComponent.prototype.calculateLensPosition = function (axis, offsetMeasurement) {
        return axis - offsetMeasurement / 2;
    };
    ZoomImageComponent.prototype.setLensOuterLimits = function (axis, nativeMeasurement, offsetMeasurement) {
        if (axis > nativeMeasurement - offsetMeasurement) {
            axis = nativeMeasurement - offsetMeasurement;
        }
        if (axis < 0) {
            axis = 0;
        }
        return axis;
    };
    ZoomImageComponent.prototype.getCursorPosition = function (e) {
        e = e || window.event;
        return this.getImagePositions(e);
    };
    ZoomImageComponent.prototype.considerPageScrolling = function (x, y) {
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    };
    ZoomImageComponent.prototype.getImagePositions = function (e) {
        /*get the x and y positions of the image:*/
        var imgRectangle = this.img.nativeElement.getBoundingClientRect();
        var x = this.calculateCursorCoordinate(e.pageX, imgRectangle.left);
        var y = this.calculateCursorCoordinate(e.pageY, imgRectangle.top);
        return this.considerPageScrolling(x, y);
    };
    ZoomImageComponent.prototype.calculateCursorCoordinate = function (pageCoordinate, imgCoordinate) {
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        return pageCoordinate - imgCoordinate;
    };
    ZoomImageComponent.prototype.clickZoom = function () {
        this.dialogService.openFromComponent(_zoom_image_dialog_zoom_image_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ZoomImageDialogComponent"], 'auto', { imgURL: this.imagen }, false);
    };
    ZoomImageComponent.ɵfac = function ZoomImageComponent_Factory(t) { return new (t || ZoomImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"])); };
    ZoomImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoomImageComponent, selectors: [["app-zoom-image"]], viewQuery: function ZoomImageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.img = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lens = _t.first);
        } }, hostBindings: function ZoomImageComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function ZoomImageComponent_mousemove_HostBindingHandler($event) { return ctx.mouseMove($event); });
        } }, inputs: { imagen: ["img", "imagen"], zoom: "zoom", lenSize: "lenSize", divZoomOutput: "divZoomOutput", showLens: "showLens" }, decls: 5, vars: 12, consts: [[1, "img-zoom-container", 3, "click"], [1, "image", 3, "src", "load"], ["img", ""], [1, "img-zoom-lens", 3, "ngStyle"], ["len", ""]], template: function ZoomImageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZoomImageComponent_Template_div_click_0_listener() { return ctx.clickZoom(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ZoomImageComponent_Template_img_load_1_listener() { return ctx.onLoad(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.lenSize + "px")("height", ctx.lenSize + "px")("left", ctx.posX + "px")("top", ctx.posY + "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx.showLens ? 1 : 0));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".img-zoom-container[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.img-zoom-lens[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #d4d4d4;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  max-width: 145px;\n  max-height: 145px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcem9vbS1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtBQUNEOztBQUNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVEIiwiZmlsZSI6Inpvb20taW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXpvb20tY29udGFpbmVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1nLXpvb20tbGVucyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbn1cclxuLmltYWdlIHtcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0bWF4LXdpZHRoOiAxNDVweDtcclxuXHRtYXgtaGVpZ2h0OiAxNDVweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"] });
    return ZoomImageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoom-image',
                templateUrl: './zoom-image.component.html',
                styleUrls: ['./zoom-image.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"] }]; }, { img: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['img', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], lens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['len', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], imagen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['img']
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], divZoomOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showLens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
        }] }); })();


/***/ }),

/***/ "FDOo":
/*!************************************************************!*\
  !*** ./src/ui/modules/alert-dialog/alert-dialog.module.ts ***!
  \************************************************************/
/*! exports provided: AlertDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogModule", function() { return AlertDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/alert-dialog/alert-dialog.component */ "39SF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


//

//





var AlertDialogModule = /** @class */ (function () {
    function AlertDialogModule() {
    }
    AlertDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AlertDialogModule });
    AlertDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AlertDialogModule_Factory(t) { return new (t || AlertDialogModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            ]] });
    return AlertDialogModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlertDialogModule, { declarations: [_components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]], exports: [_components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                ],
                declarations: [
                    _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"]
                ],
                exports: [
                    _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FuJU":
/*!***************************************************************************!*\
  !*** ./src/app/sindictaduras-web/components/nav-bar/nav-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/services/dialog.service */ "Wnat");
/* harmony import */ var _common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/authentication/services/auth.service */ "vmVr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function NavBarComponent_a_37_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_a_37_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showLoginDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Entrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_a_38_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_a_38_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salir ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["/home"]; };
var _c1 = function () { return ["/contact"]; };
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService, dialogService) {
        this.authService = authService;
        this.dialogService = dialogService;
        this.isCollapsed = true;
        this.isLogguedIn = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.reAuthenticacion.subscribe(function (response) {
            _this.chekcIfIsLogguedIn();
        });
    };
    NavBarComponent.prototype.chekcIfIsLogguedIn = function () {
        this.isLogguedIn = this.authService.isLoggedIn();
    };
    NavBarComponent.prototype.showLoginDialog = function () {
        this.dialogService.showLoginDialog();
    };
    NavBarComponent.prototype.logOut = function () {
        this.authService.logout();
        this.isLogguedIn = false;
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
    };
    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"])); };
    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 39, vars: 9, consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "tooltip", "Por un mundo mejor.", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", "width-250px", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "close-menu", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["placement", "bottom", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "d-lg-none", "d-xl-none"], [1, "fab", "fa-facebook-square"], [1, "fab", "fa-instagram"], [1, "nav-item"], ["tooltip", "Contactenos", 1, "nav-link", 3, "routerLink"], ["class", "nav-link btn btn-default padding-left-10px padding-right-10px", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "nav-link", "btn", "btn-default", "padding-left-10px", "padding-right-10px", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " SINDICTADURAS ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_6_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_15_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Twitter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Instagram");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Contactenos ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NavBarComponent_a_37_Template, 2, 0, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NavBarComponent_a_38_Template, 2, 0, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogguedIn);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogguedIn);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], encapsulation: 2 });
    return NavBarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: 'nav-bar.component.html'
            }]
    }], function () { return [{ type: _common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "GPLj":
/*!************************************************!*\
  !*** ./src/ui/models/svg-icons/event-views.ts ***!
  \************************************************/
/*! exports provided: EVENT_VIEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_VIEWS", function() { return EVENT_VIEWS; });
var EVENT_VIEWS = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"68px\" height=\"77.028px\" viewBox=\"0 0 68 77.028\" enable-background=\"new 0 0 68 77.028\" xml:space=\"preserve\">\n<g>\n<path fill=\"#045748\" d=\"M41.043,69.373l-0.024-26.196L68,16.082v-3.384C68,6.948,55.399,0,34.001,0S-0.027,7.111,0,12.808l0,3.333\n   l27.05,27.036l0.008,33.852 M34.001,21.453c-15.658-0.011-26.764-5.59-26.764-7.674c-0.008-2.071,11.107-7.658,26.764-7.65\n   c15.654-0.008,26.771,5.579,26.762,7.65C60.763,15.863,49.657,21.442,34.001,21.453z\"/>\n</g>\n</svg>\n";


/***/ }),

/***/ "GlO1":
/*!***********************************************************!*\
  !*** ./src/common/error-handling/models/handled-error.ts ***!
  \***********************************************************/
/*! exports provided: HandledError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandledError", function() { return HandledError; });
var HandledError = /** @class */ (function () {
    function HandledError() {
        this.message = '';
        this.error = new Error();
    }
    return HandledError;
}());



/***/ }),

/***/ "IQ7q":
/*!**************************************************************!*\
  !*** ./src/common/error-handling/services/toastr.service.ts ***!
  \**************************************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component */ "qqib");





var ToastrService = /** @class */ (function () {
    function ToastrService(snackBar) {
        this.snackBar = snackBar;
    }
    ToastrService.prototype.success = function (message, title) {
        this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["CustomSnackbarComponent"], {
            data: { messageType: "Success", messageData: message, messageTitle: title },
            duration: 2000,
            horizontalPosition: 'right',
            panelClass: ['background-color-primary'],
        });
    };
    ToastrService.prototype.error = function (message, title) {
        this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["CustomSnackbarComponent"], {
            data: { messageType: "Error", messageData: message, messageTitle: title },
            duration: 2000,
            horizontalPosition: 'right',
            panelClass: ['background-color-accent'],
        });
    };
    ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
    ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac, providedIn: 'root' });
    return ToastrService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "IqbY":
/*!**********************************************************************!*\
  !*** ./src/common/error-handling/services/error-handling.service.ts ***!
  \**********************************************************************/
/*! exports provided: ErrorHandlingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingService", function() { return ErrorHandlingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _models_handled_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/handled-error */ "GlO1");
/* harmony import */ var _modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component */ "qqib");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert.service */ "gHp3");
/* harmony import */ var _http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../http-request-indicator/services/loading.service */ "EdvF");



//




//










var errorClientKey = 'Bad request';
var errorServerKey = 'Ups ha pasado al mal en el servidor.';
var errorServerDownKey = 'El servidor en estos momentos no se encuentra disponible.';
var errorTitle = 'Error';
var ErrorHandlingService = /** @class */ (function () {
    function ErrorHandlingService(snackBar, alertService, translate, router, loadingService) {
        this.snackBar = snackBar;
        this.alertService = alertService;
        this.translate = translate;
        this.router = router;
        this.loadingService = loadingService;
        this.serverOnline = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
        this.showExpireNotification = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.showExpireLogin = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.showNotificationObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.timeBeforeEmmitTheSameError = 1000;
        // setTranslations(translate, TRANSLATIONS);
        this.onServerUp();
        this.subscriptionToNotification();
    }
    ErrorHandlingService.prototype.subscriptionToNotification = function () {
        var _this = this;
        this.showNotificationObservable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (error) {
            // Preventing shows more than one time the token expiration error
            if (_this.lastEmittedNotification &&
                _this.lastEmittedNotification.errorMessage === error.errorMessage) {
                var differenceInMilliSeconds = error.date.getTime() - _this.lastEmittedNotification.date.getTime();
                if (differenceInMilliSeconds <= _this.timeBeforeEmmitTheSameError) {
                    return false;
                }
            }
            return true;
        }))
            .subscribe(function (value) {
            _this.lastEmittedNotification = value;
            _this.alertService.error(value.errorMessage, 'OK');
        });
    };
    Object.defineProperty(ErrorHandlingService.prototype, "logoutCommands", {
        get: function () {
            return this._logoutCommands;
        },
        set: function (value) {
            this._logoutCommands = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorHandlingService.prototype, "logoutNavigationExtras", {
        get: function () {
            return this._logoutNavigationExtras;
        },
        set: function (value) {
            this._logoutNavigationExtras = value;
        },
        enumerable: false,
        configurable: true
    });
    ErrorHandlingService.prototype.onServerUp = function () {
        var _this = this;
        this.serverOnline.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function (value) {
            if (value === true) {
                // Removing timeOutClient threat if it was provided
                if (_this.timeOutClient$) {
                    _this.timeOutClient$.unsubscribe();
                    _this.timeOutClient$ = null;
                }
                // Removing timeOutServer threat if it was provided
                if (_this.timeOutServer$) {
                    _this.timeOutServer$.unsubscribe();
                    _this.timeOutServer$ = null;
                }
                if (_this.toastOfServerDown !== undefined && _this.toastOfServerDown !== null) {
                    _this.toastOfServerDown.dismiss();
                }
            }
        });
    };
    ErrorHandlingService.prototype.handleServiceError = function (err) {
        var handledError = new _models_handled_error__WEBPACK_IMPORTED_MODULE_7__["HandledError"]();
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            // If the request have status code equal to 0 is that the spa can't reach the api
            if (err.status === 0) {
                // Setting the state of the server to down and emitting the new state
                if (this.serverOnline.getValue() === true) {
                    // Returning error code 410 corresponding to "Gone" response that means the the resource you want not exist right now
                    handledError.errorCode = 410;
                    // this.translate.get([errorServerDownKey, errorTitle]).subscribe(text => {TODO
                    this.toastOfServerDown = this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_8__["CustomSnackbarComponent"], {
                        data: { messageData: errorServerDownKey, messageTitle: errorTitle, messageType: 'Error' },
                        horizontalPosition: 'right',
                        panelClass: ['error-snackbar'],
                    });
                    // });
                    this.serverOnline.next(false);
                }
                return handledError;
            }
            // Setting the state of the server to up if the error is not "server down"
            this.serverOnline.next(true);
            try {
                // handledError.message = err.statusText;
                var errObj = err.error;
                // Managing error from client request
                if (err.status >= 400 && err.status < 500) {
                    if (err.status === 401) {
                        // redirecting the user to login page if the error is caused by token expiration
                        if (errObj.includes('Token expirado')) {
                            this.showExpireLogin.next(true);
                        }
                    }
                    if (err.status === 403 && err.url.indexOf('/auth/login') === -1) {
                        // this.alertService.info('Usted no tiene permisos para esta funcionalidad', 'OK');
                        this.showExpireLogin.next(true);
                    }
                    return this.handlingClientErrors(err, errObj, handledError);
                }
                else {
                    // Handling errors in the server side
                    return this.handlingServerErrors(err, errObj, handledError);
                }
            }
            catch (exception) {
                /* If this code is executed is because the response from the api doesn't have a valid json format that means
                 is returning some kind of html or something else*/
                if (err.status >= 400 && err.status < 500) {
                    this.translate.get(errorClientKey).subscribe(function (text) {
                        handledError.message = text;
                    });
                }
                else {
                    this.translate.get(errorServerKey).subscribe(function (text) {
                        handledError.message = text;
                    });
                }
                return handledError;
            }
        }
        else {
            handledError.error = err;
            return handledError;
        }
    };
    ErrorHandlingService.prototype.handlingClientErrors = function (err, errObj, handledError) {
        if (err.status === 401) {
            // Checking if the authentication error is caused by token expiration
            if (errObj.includes('Token expirado')) {
                handledError.errorCode = err.status;
                handledError.logoutCommands = this.logoutCommands;
                handledError.logoutNavigationExtras = this.logoutNavigationExtras;
                handledError.message = errObj;
            }
            else {
                // Checking if the error is caused by trying to authenticate with a wrong password
                if (errObj.detail && errObj.detail[0] && errObj.detail[0].error_description) {
                    // handledError.message = errObj.detail[0].error_description;
                }
                else {
                    this.buildingErrorMessage(errObj, handledError);
                }
            }
            return handledError;
        }
        else {
            // If the error comes without a error code then is possible that is a kind of form validation error
            if (err.status) {
                handledError.errorCode = err.error.status;
                handledError.message = err.error.message;
                handledError.error = err.error;
                return handledError;
            }
            else {
                handledError.errorCode = -1;
                if (errObj.error) {
                    this.translate.get(/*errorClientKey*/ errObj.error).subscribe(function (text) {
                        handledError.message = text;
                    });
                    return handledError;
                }
                return handledError;
            }
        }
    };
    ErrorHandlingService.prototype.handlingServerErrors = function (err, errObj, handledError) {
        if (errObj) {
            handledError.message = errObj.message;
            handledError.error.message = errObj.message;
            return handledError;
        }
        else {
            // Managing all the remaining errors as a server side errors
            this.translate.get(errorServerKey).subscribe(function (text) {
                handledError.message = text;
            });
            return handledError;
        }
    };
    ErrorHandlingService.prototype.handleUiError = function (key, err, url) {
        var serverState = this.serverOnline.getValue();
        var error = err.error;
        this.loadingService.showLoader(false);
        // If server state is online then continues managing the
        if (serverState) {
            // Displaying the error if it really contains a message
            if (error.message) {
                if (error.message === 'Invalid unique constraints') {
                    switch (url) {
                        case 'user': {
                            error.message = 'This user already exists';
                            break;
                        }
                        default: {
                            error.message = 'This already exists';
                            break;
                        }
                    }
                }
                this.showNotificationObservable.next({
                    key: key,
                    errorMessage: error.message,
                    errorCode: error.errorCode,
                    date: new Date(),
                });
            }
            if (error.logoutCommands) {
                this.router.navigate(error.logoutCommands, error.logoutNavigationExtras);
            }
        }
    };
    ErrorHandlingService.prototype.errorDaemon = function (path, error, handledError) {
        var _this = this;
        if (error.constructor === Object) {
            Object.keys(error).forEach(function (key) {
                path.push(key);
                _this.errorDaemon(path, error[key], handledError);
                path.pop();
            });
        }
        else {
            var pathStr = this.capitalizeWord(path.join('.'));
            var errorStr = this.capitalizeWord(error.constructor === Array ? error.join(' ') : error);
            if (handledError.message === '' || handledError.message === undefined) {
                handledError.message = pathStr + ': ' + errorStr + '\n';
            }
            else {
                handledError.message = handledError.message + pathStr + ': ' + ' ' + errorStr + '\n';
            }
        }
    };
    ErrorHandlingService.prototype.buildingErrorMessage = function (error, handledError) {
        // Checking if the error comes with more than one validation error
        if (error.detail[0].constructor === Object) {
            var path = [];
            this.errorDaemon(path, error.detail[0], handledError);
            // sending the form validations errors to the component where are the fields
            handledError.formErrors = error.detail[0];
        }
        else {
            handledError.message = error.detail[0];
        }
    };
    ErrorHandlingService.prototype.capitalizeWord = function (word) {
        return typeof word === 'string' ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    };
    ErrorHandlingService.ɵfac = function ErrorHandlingService_Factory(t) { return new (t || ErrorHandlingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"])); };
    ErrorHandlingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlingService, factory: ErrorHandlingService.ɵfac, providedIn: 'root' });
    return ErrorHandlingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "JoXL":
/*!******************************************************************!*\
  !*** ./src/ui/modules/capitalize-word/capitalize-word.module.ts ***!
  \******************************************************************/
/*! exports provided: CapitalizeWordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeWordModule", function() { return CapitalizeWordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/capitalize-word.pipe */ "w5Yz");


//


var CapitalizeWordModule = /** @class */ (function () {
    function CapitalizeWordModule() {
    }
    CapitalizeWordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CapitalizeWordModule });
    CapitalizeWordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CapitalizeWordModule_Factory(t) { return new (t || CapitalizeWordModule)(); }, providers: [
            _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return CapitalizeWordModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CapitalizeWordModule, { declarations: [_pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizeWordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]
                ],
                exports: [
                    _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]
                ],
                providers: [
                    _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_2__["CapitalizeWordPipe"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Jvyg":
/*!****************************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/usuarios/components/confirmar-usuario/confirmar-usuario.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ConfirmarUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarUsuarioComponent", function() { return ConfirmarUsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuarios.service */ "ojJt");
/* harmony import */ var _common_error_handling_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../common/error-handling/services/alert.service */ "gHp3");










var ConfirmarUsuarioComponent = /** @class */ (function () {
    function ConfirmarUsuarioComponent(route, usersService, alertService, router) {
        this.route = route;
        this.usersService = usersService;
        this.alertService = alertService;
        this.router = router;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.confirmationCode = this.route.snapshot.params['id'];
        this.confirmUser();
    }
    ConfirmarUsuarioComponent.prototype.ngOnInit = function () { };
    ConfirmarUsuarioComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    ConfirmarUsuarioComponent.prototype.confirmUser = function () {
        var _this = this;
        this.usersService
            .confirmarUsuario(this.confirmationCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy$))
            .subscribe(function (response) {
            _this.manageConfirmUser(response.data);
        }, function (error) {
            var httpError = error;
            _this.alertService.error('Ocurrió un error: ' + error.message, 'OK');
            // this.authenticationService.logout();
        });
    };
    ConfirmarUsuarioComponent.prototype.manageConfirmUser = function (data) {
        localStorage.setItem('sindictaduras-token', data.token);
        localStorage.setItem('sindictaduras-user', JSON.stringify(data.usuario));
        this.alertService.success('Gracias por validar su usuario', 'OK');
        this.router.navigate(['home']);
    };
    ConfirmarUsuarioComponent.ɵfac = function ConfirmarUsuarioComponent_Factory(t) { return new (t || ConfirmarUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_error_handling_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    ConfirmarUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmarUsuarioComponent, selectors: [["app-confirmar-usuario"]], decls: 8, vars: 0, consts: [[1, "wrapper"], [1, "page-header", "header-filter", "d-flex", "flex-wrap-wrap", "justify-content-space-around", "height-100pct"], [1, "width-100pct", "height-100pct", "z-index--1000", "position-absolute"], [1, "content-center", "brand"], [1, "h1-seo", "text-h1"], [1, "text-h3"]], template: function ConfirmarUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SINDICTADURAS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Por un mundo mejor. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXItdXN1YXJpby5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ConfirmarUsuarioComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmarUsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmar-usuario',
                templateUrl: './confirmar-usuario.component.html',
                styleUrls: ['./confirmar-usuario.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] }, { type: _common_error_handling_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "K/4U":
/*!********************************************!*\
  !*** ./src/ui/modules/logo/logo.module.ts ***!
  \********************************************/
/*! exports provided: LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/logo/logo.component */ "w5m0");


//


var LogoModule = /** @class */ (function () {
    function LogoModule() {
    }
    LogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogoModule });
    LogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogoModule_Factory(t) { return new (t || LogoModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return LogoModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogoModule, { declarations: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]
                ],
                exports: [
                    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "MH2F":
/*!*********************************************!*\
  !*** ./src/ui/models/svg-icons/password.ts ***!
  \*********************************************/
/*! exports provided: PASSWORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD", function() { return PASSWORD; });
var PASSWORD = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"70px\" height=\"85px\" viewBox=\"0 0 70 85\" enable-background=\"new 0 0 70 85\" xml:space=\"preserve\">\n<path fill=\"#045748\" d=\"M64,30h-9v-7C55,8.514,48.327,0,35,0C21.673,0,15,8.514,15,23v7H5c-2.762,0-5,3.238-5,6v39\nc0,2.75,2.142,5.691,4.759,6.535l5.982,1.93C13.358,84.31,17.75,85,20.5,85h29c2.75,0,7.143-0.69,9.76-1.535l5.982-1.93\nC67.859,80.691,70,77.75,70,75V36C70,33.238,66.761,30,64,30z M25,21c0-7.225,3.986-11,10-11c6.013,0,10,3.775,10,11v9H25V21z\nM35.1,69.264c-4,0-7.243-5.6-7.243-12.506c0-6.908,3.243-12.507,7.243-12.507c4,0,7.245,5.599,7.245,12.507\nC42.344,63.664,39.1,69.264,35.1,69.264z\"/>\n</svg>\n";


/***/ }),

/***/ "MPVL":
/*!************************************************************!*\
  !*** ./src/common/authentication/authentication.module.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "zOv7");
/* harmony import */ var _ui_modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/modules/caps-lock/caps-lock.module */ "68UT");
/* harmony import */ var _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/modules/error-messages/error-messages.module */ "fCae");
/* harmony import */ var _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../error-handling/error-handling.module */ "Ecfk");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config/config.module */ "4lPV");
/* harmony import */ var _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ngrx/ngrx.module */ "kKmI");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "WNK1");
/* harmony import */ var _components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/change-password-form/change-password-form.component */ "3VOU");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "39ud");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/logout/logout.component */ "lfqm");
/* harmony import */ var _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/manage-session/manage-session.component */ "pvPJ");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/test/test.component */ "vehe");
/* harmony import */ var _components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login-dialog/login-dialog.component */ "adYY");



//






// import { ToastrModule } from 'ngx-toastr';

//
/*import {
  AppHeaderModule,
  AskBeforeRefreshModule,
  CapsLockModule,
  CustomSnackbarModule,
  ErrorMessagesModule,
  InputFocusModule,
  SmsImageModule,
  SpinnerIndicator200Module,
} from '@c/ui';*/






/*import { NgxTranslateModule } from '@c/ngx-translate';
import { ValidationModule } from '@c/validation';*/
//









var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
    AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                // InputFocusModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                // ToastrModule,
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild(),
                // AppHeaderModule,
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_10__["AskBeforeRefreshModule"],
                _ui_modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_11__["CapsLockModule"],
                // CustomSnackbarModule,
                _config_config_module__WEBPACK_IMPORTED_MODULE_14__["ConfigModule"],
                _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlingModule"],
                _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_12__["ErrorMessagesModule"],
                // InputFocusModule,
                _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_15__["NgrxModule"],
            ]] });
    return AuthenticationModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
        _components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordFormComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
        _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
        _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_20__["ManageSessionComponent"],
        _components_test_test_component__WEBPACK_IMPORTED_MODULE_21__["TestComponent"],
        _components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_22__["LoginDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        // InputFocusModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], 
        // AppHeaderModule,
        _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_10__["AskBeforeRefreshModule"],
        _ui_modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_11__["CapsLockModule"],
        // CustomSnackbarModule,
        _config_config_module__WEBPACK_IMPORTED_MODULE_14__["ConfigModule"],
        _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlingModule"],
        _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_12__["ErrorMessagesModule"],
        // InputFocusModule,
        _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_15__["NgrxModule"]], exports: [_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
        _components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordFormComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
        _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
        _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_20__["ManageSessionComponent"],
        _components_test_test_component__WEBPACK_IMPORTED_MODULE_21__["TestComponent"],
        _components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_22__["LoginDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    // InputFocusModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                    // ToastrModule,
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild(),
                    // AppHeaderModule,
                    _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_10__["AskBeforeRefreshModule"],
                    _ui_modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_11__["CapsLockModule"],
                    // CustomSnackbarModule,
                    _config_config_module__WEBPACK_IMPORTED_MODULE_14__["ConfigModule"],
                    _error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_13__["ErrorHandlingModule"],
                    _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_12__["ErrorMessagesModule"],
                    // InputFocusModule,
                    _ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_15__["NgrxModule"],
                ],
                declarations: [
                    _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
                    _components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordFormComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                    _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                    _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_20__["ManageSessionComponent"],
                    _components_test_test_component__WEBPACK_IMPORTED_MODULE_21__["TestComponent"],
                    _components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_22__["LoginDialogComponent"]
                ],
                exports: [
                    _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
                    _components_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordFormComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                    _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_19__["LogoutComponent"],
                    _components_manage_session_manage_session_component__WEBPACK_IMPORTED_MODULE_20__["ManageSessionComponent"],
                    _components_test_test_component__WEBPACK_IMPORTED_MODULE_21__["TestComponent"],
                    _components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_22__["LoginDialogComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "NX4o":
/*!****************************************!*\
  !*** ./src/ui/models/svg-icons/pen.ts ***!
  \****************************************/
/*! exports provided: PEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PEN", function() { return PEN; });
var PEN = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\twidth=\"79.359px\" height=\"98.187px\" viewBox=\"0 0 77.999 78\" enable-background=\"new 0 0 77.999 78\" xml:space=\"preserve\">\n<g>\n\t<path fill=\"#045748\" d=\"M71.807,6.191c-7.215-7.216-12.629-6.133-12.629-6.133l-25.26,25.259L5.049,54.185L0,78l23.813-5.051\n\t\tl28.869-28.868l25.26-25.257C77.941,18.824,79.025,13.409,71.807,6.191z M22.395,70.086l-8.117,1.748\n\t\tc-0.785-1.467-1.727-2.932-3.455-4.659c-1.727-1.727-3.193-2.669-4.658-3.455l1.75-8.116l2.346-2.348c0,0,4.418,0.089,9.404,5.077\n\t\tc4.988,4.987,5.078,9.408,5.078,9.408L22.395,70.086z\"/>\n</g>\n</svg>";


/***/ }),

/***/ "Nskb":
/*!*****************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/presidentes.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PresidentesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentesModule", function() { return PresidentesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/presidentes-card/presidentes-card.component */ "sK0c");
/* harmony import */ var _components_presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/presidentes-form/presidentes-form.component */ "7lQ3");
/* harmony import */ var _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../ui/modules/error-messages/error-messages.module */ "fCae");
/* harmony import */ var _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../ui/modules/ask-before-refresh/ask-before-refresh.module */ "zOv7");
/* harmony import */ var _components_new_presidente_new_presidente_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/new-presidente/new-presidente.component */ "D64r");
/* harmony import */ var _components_presidentes_table_presidentes_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/presidentes-table/presidentes-table.component */ "+It3");
/* harmony import */ var _presidentes_routing_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./presidentes-routing.module */ "llRu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_modules_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../ui/modules/image-upload/image-upload.module */ "zsIL");
/* harmony import */ var _components_edit_presidente_edit_presidente_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/edit-presidente/edit-presidente.component */ "/n1G");



//














//











var PresidentesModule = /** @class */ (function () {
    function PresidentesModule() {
    }
    PresidentesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PresidentesModule });
    PresidentesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PresidentesModule_Factory(t) { return new (t || PresidentesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                //
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"],
                //
                _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_19__["ErrorMessagesModule"],
                _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_20__["AskBeforeRefreshModule"],
                _presidentes_routing_module__WEBPACK_IMPORTED_MODULE_23__["MsPresidentesRoutingModule"],
                _ui_modules_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_25__["ImageUploadModule"]
            ]] });
    return PresidentesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PresidentesModule, { declarations: [_components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_17__["PresidentesCardComponent"],
        _components_presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_18__["PresidentesFormComponent"],
        _components_new_presidente_new_presidente_component__WEBPACK_IMPORTED_MODULE_21__["NewPresidenteComponent"],
        _components_presidentes_table_presidentes_table_component__WEBPACK_IMPORTED_MODULE_22__["PresidentesTableComponent"],
        _components_edit_presidente_edit_presidente_component__WEBPACK_IMPORTED_MODULE_26__["EditPresidenteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        //
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"],
        //
        _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_19__["ErrorMessagesModule"],
        _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_20__["AskBeforeRefreshModule"],
        _presidentes_routing_module__WEBPACK_IMPORTED_MODULE_23__["MsPresidentesRoutingModule"],
        _ui_modules_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_25__["ImageUploadModule"]], exports: [_components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_17__["PresidentesCardComponent"],
        _components_presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_18__["PresidentesFormComponent"],
        _components_new_presidente_new_presidente_component__WEBPACK_IMPORTED_MODULE_21__["NewPresidenteComponent"],
        _components_presidentes_table_presidentes_table_component__WEBPACK_IMPORTED_MODULE_22__["PresidentesTableComponent"],
        _components_edit_presidente_edit_presidente_component__WEBPACK_IMPORTED_MODULE_26__["EditPresidenteComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresidentesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    //
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslateModule"],
                    //
                    _ui_modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_19__["ErrorMessagesModule"],
                    _ui_modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_20__["AskBeforeRefreshModule"],
                    _presidentes_routing_module__WEBPACK_IMPORTED_MODULE_23__["MsPresidentesRoutingModule"],
                    _ui_modules_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_25__["ImageUploadModule"]
                ],
                exports: [
                    _components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_17__["PresidentesCardComponent"],
                    _components_presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_18__["PresidentesFormComponent"],
                    _components_new_presidente_new_presidente_component__WEBPACK_IMPORTED_MODULE_21__["NewPresidenteComponent"],
                    _components_presidentes_table_presidentes_table_component__WEBPACK_IMPORTED_MODULE_22__["PresidentesTableComponent"],
                    _components_edit_presidente_edit_presidente_component__WEBPACK_IMPORTED_MODULE_26__["EditPresidenteComponent"]
                ],
                declarations: [
                    _components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_17__["PresidentesCardComponent"],
                    _components_presidentes_form_presidentes_form_component__WEBPACK_IMPORTED_MODULE_18__["PresidentesFormComponent"],
                    _components_new_presidente_new_presidente_component__WEBPACK_IMPORTED_MODULE_21__["NewPresidenteComponent"],
                    _components_presidentes_table_presidentes_table_component__WEBPACK_IMPORTED_MODULE_22__["PresidentesTableComponent"],
                    _components_edit_presidente_edit_presidente_component__WEBPACK_IMPORTED_MODULE_26__["EditPresidenteComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Nxwy":
/*!******************************************************************************!*\
  !*** ./src/ui/modules/spinner-indicator-200/spinner-indicator-200.module.ts ***!
  \******************************************************************************/
/*! exports provided: SpinnerIndicator200Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerIndicator200Module", function() { return SpinnerIndicator200Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_spinner_indicator_200_spinner_indicator_200_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/spinner-indicator-200/spinner-indicator-200.component */ "fPXp");


//


var SpinnerIndicator200Module = /** @class */ (function () {
    function SpinnerIndicator200Module() {
    }
    SpinnerIndicator200Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SpinnerIndicator200Module });
    SpinnerIndicator200Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SpinnerIndicator200Module_Factory(t) { return new (t || SpinnerIndicator200Module)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return SpinnerIndicator200Module;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SpinnerIndicator200Module, { declarations: [_components_spinner_indicator_200_spinner_indicator_200_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerIndicator200Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_spinner_indicator_200_spinner_indicator_200_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerIndicator200Component"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerIndicator200Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    _components_spinner_indicator_200_spinner_indicator_200_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerIndicator200Component"]
                ],
                exports: [
                    _components_spinner_indicator_200_spinner_indicator_200_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerIndicator200Component"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "O+Ig":
/*!******************************************!*\
  !*** ./src/ui/models/svg-icons/style.ts ***!
  \******************************************/
/*! exports provided: STYLE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE", function() { return STYLE; });
var STYLE = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"567.639px\" height=\"567.639px\" viewBox=\"0 0 567.639 567.639\" style=\"enable-background:new 0 0 567.639 567.639;\"\nxml:space=\"preserve\">\n<g>\n<g>\n   <path d=\"M512.603,270.913c-17.002-3.118-45.795-3.146-80.104-9.534l4.714,28.257c0.813,4.82-2.457,9.381-7.268,10.174\n\t   c-0.497,0.086-0.984,0.115-1.473,0.115c-4.245,0-7.994-3.051-8.711-7.373l-4.905-29.366c-0.536-3.213-3.529-6.445-6.665-7.287\n\t   c-1.77-0.487-3.548-0.985-5.346-1.501c-3.127-0.899-5.222,0.927-4.686,4.131l2.467,14.812c0.812,4.819-2.457,9.371-7.268,10.184\n\t   c-0.497,0.077-0.984,0.125-1.473,0.125c-4.236,0-7.984-3.051-8.711-7.383l-4.074-24.403c-0.535-3.223-3.423-6.78-6.436-8.042\n\t   c-2.113-0.87-4.227-1.788-6.35-2.745c-2.974-1.329-4.915,0.134-4.37,3.347l2.104,12.613c0.812,4.829-2.448,9.39-7.268,10.184\n\t   c-0.497,0.076-0.976,0.134-1.463,0.134c-4.236,0-7.985-3.069-8.712-7.392l-4.332-25.962c-0.525-3.213-3.241-7.153-6.015-8.845\n\t   c-2.63-1.635-5.278-3.337-7.918-5.097c-2.706-1.798-4.437-0.717-3.901,2.496l3.031,18.188c0.813,4.819-2.447,9.371-7.268,10.165\n\t   c-0.497,0.095-0.984,0.134-1.463,0.134c-4.245,0-7.994-3.06-8.711-7.392l-7.526-45.116c-1.759-2.018-3.385-3.988-4.666-5.699\n\t   c-10.882-14.458-32.627-40.841-50.585-47.191c-18.8-6.636-33.87,6.923-37.112,19.498c-1.616,6.321,1.224,16.82,3.242,23.017\n\t   c1.253,3.844,3.204,8.042,6.235,11.504c4.284,4.905,5.91,10.098,0.937,14.296c-11.628,9.888-33.622,26.622-58.551,35.85\n\t   c-49.142,18.188-57.748-6.875-57.748-6.875s-10.873-35.228-28.286-47.917c-5.259-3.844-16.161-5.221-22.491-3.729\n\t   c-2.247,0.545-4.312,1.387-6.282,2.362c3.882,22.692,20.913,77.456,95.396,113.393c96.61,46.654,289.006,55.959,325.057,57.307\n\t   c3.261,0.125,3.3,0.68,0.096,1.225c-23.485,3.959-114.491,17.441-205.01,6.34C151.476,358.237,49.08,326.212,22.277,236.047\n\t   c-0.555,1.97-1.081,3.815-1.587,5.403c-4.322,13.626-8.329,22.701-9.161,52.326c-0.172,6.512-2.85,16.352-5.145,22.453\n\t   c-2.754,7.285-5.67,18.053-6.053,31.355c-0.382,13.244-0.373,24.557-0.268,32.426c0.086,6.512,4.188,15.387,9.801,18.695\n\t   c4.007,2.381,9.094,4.809,14.927,6.311c6.312,1.635,16.094,4.553,22.31,6.531c2.687,0.861,5.814,1.588,9.294,1.951\n\t   c6.483,0.668,14.066-0.201,16.916-0.039c2.85,0.154,5.154,1.635,5.154,3.318s3.404,3.041,7.612,3.041s8.826-1.77,10.318-3.93\n\t   c1.492-2.172,4.466-3.93,6.636-3.93c2.171,0,3.94,1.768,3.94,3.93c0,2.17,3.184,3.93,7.124,3.93s8.224-1.865,9.572-4.188\n\t   c1.367-2.295,4.121-4.18,6.158-4.18c2.027,0,4.886,1.875,6.378,4.18c1.501,2.312,5.575,4.188,9.104,4.188\n\t   c3.529,0,7.488-1.77,8.845-3.93c1.358-2.172,4.542-2.172,7.115,0c2.582,2.17,8.53,3.93,13.273,3.93\n\t   c4.743,0,9.151-1.424,9.83-3.184c0.669-1.77,3.203-3.203,5.651-3.203c2.438,0,5.527,1.424,6.885,3.203\n\t   c1.358,1.76,6.082,2.408,10.557,1.473c4.476-0.957,9.094-3.711,10.318-6.148c1.224-2.439,3.758-2.889,5.661-0.996\n\t   c1.884,1.914,7.057,4.008,11.542,4.668c4.475,0.688,9.869-0.086,12.039-1.723c2.171-1.625,5.69-2.609,7.851-2.219\n\t   c2.17,0.422,3.93,2.391,3.93,4.428c0,2.047,3.749,3.691,8.357,3.691c4.619,0,9.677-1.09,11.312-2.457\n\t   c1.625-1.357,4.81-2.133,7.114-1.721c2.305,0.4,4.179,1.836,4.179,3.193s2.305,2.447,5.154,2.447c2.859,0,7.038-0.879,9.343-1.959\n\t   c2.305-1.092,5.498-1.75,7.124-1.473c1.636,0.268,2.955,1.701,2.955,3.203c0,1.49,5.278,2.695,11.79,2.695h0.985\n\t   c6.521,0,11.79-1.768,11.79-3.93c0-2.17,1.875-3.93,4.17-3.93c2.305,0,4.179,1.77,4.179,3.93c0,2.172,4.618,3.93,10.317,3.93\n\t   s12.298-1.205,14.746-2.695c2.438-1.502,6.072-1.502,8.108,0c2.027,1.49,8.855,2.695,15.233,2.695s12.651-1.539,14.009-3.432\n\t   c1.358-1.895,4.332-3.988,6.627-4.676c2.305-0.66,5.059,0.314,6.14,2.209c1.09,1.902,7.143,2.418,13.55,1.186l1.912-0.383\n\t   c6.388-1.254,12.24-4.361,13.053-6.953c0.813-2.572,2.688-4.885,4.179-5.154c1.492-0.268,4.026,1.168,5.652,3.195\n\t   c1.625,2.037,6.474,2.695,10.805,1.463c4.342-1.215,8.415-5.289,9.095-9.084c0.679-3.797,3.538-7.65,6.388-8.588\n\t   c2.85-0.957,5.154,0.479,5.154,3.193c0,2.717,4.943,3.041,11.035,0.756c6.139-2.334,11.082-6.396,11.082-9.113\n\t   c0-2.715,1.646-5.584,3.682-6.387c2.037-0.814,4.677-0.488,5.9,0.727c1.215,1.223,4.849,0.354,8.109-1.961\n\t   c3.261-2.295,6.34-5.938,6.885-8.1c0.545-2.17,5.565-6.637,10.337-11.072c9.85-9.172,23.142-27.197,16.677-54.508\n\t   C556.093,265.528,548.721,277.558,512.603,270.913z\"/>\n</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>";


/***/ }),

/***/ "O/Hd":
/*!***********************************************!*\
  !*** ./src/ui/models/svg-icons/statistics.ts ***!
  \***********************************************/
/*! exports provided: STATISTICS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATISTICS", function() { return STATISTICS; });
var STATISTICS = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"142.882px\" height=\"179.735px\" viewBox=\"0 0 142.882 179.735\" enable-background=\"new 0 0 142.882 179.735\"\nxml:space=\"preserve\">\n<g>\n<path fill=\"#045748\" d=\"M116.862,117.546c-21.248-7.858-28.038-14.489-28.038-28.684c0-8.524,6.487-5.739,9.337-21.348\n   c1.178-6.472,6.911-0.104,8.006-14.885c0-5.891-3.126-7.355-3.126-7.355s0.868-4.71,1.592-10.366\n   C104.5,35.569,73.42,37.961,46.513,64.81c-0.847,0.848-1.69,1.718-2.528,2.615l-0.006,0.003c-0.031,0.033-0.063,0.063-0.093,0.097\n   l-0.034-0.01c2.849,15.608,9.336,12.823,9.336,21.348c0,14.194-8.997,23.654-32.705,28.334v1.319h34.279\n   c6.395,0,13.24,5.986,13.24,12.977l0.027,35.725h74.853V129.25C137.697,123.718,121.37,119.215,116.862,117.546z\"/>\n<path fill=\"#427994\" d=\"M46.513,64.81c27.552-26.704,57.988-29.24,58.121-29.901C108.089,17.884,96.741-0.04,70.764,0\n   C41.278,0.045,35.745,21.595,36.52,29.954c0.621,6.709,2.207,15.424,2.207,15.424S35.6,46.843,35.6,52.734\n   c1.1,14.779,7.3,8.515,8.265,14.872l0.114-0.178l0.006-0.003C44.823,66.528,45.652,65.644,46.513,64.81z\"/>\n</g>\n<path fill=\"none\" stroke=\"#EC008C\" d=\"M80.441,103.805\"/>\n<path fill=\"none\" stroke=\"#EC008C\" d=\"M123.399,103.805\"/>\n<path fill=\"none\" stroke=\"#427994\" stroke-width=\"7\" d=\"M64.872,167.834c0,4.738-3.841,8.578-8.58,8.578H12.079\nc-4.738,0-8.579-3.84-8.579-8.578v-43.398c0-4.738,3.841-8.58,8.579-8.58h44.213c4.738,0,8.58,3.842,8.58,8.58V167.834z\"/>\n<path fill=\"#045748\" d=\"M31.526,124.534c-9.91,1.176-17.766,9.031-18.942,18.941h18.942V124.534z M36.946,124.569v21.744\nc0,1.426-1.155,2.58-2.582,2.58H12.622c1.392,10.633,10.474,18.844,21.485,18.844c11.973,0,21.681-9.707,21.681-21.682\nC55.788,135.045,47.576,125.961,36.946,124.569z\"/>\n</svg>\n";


/***/ }),

/***/ "QQzo":
/*!********************************************************************************!*\
  !*** ./src/ui/modules/confirm-dialog-message/confirm-dialog-message.module.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmDialogMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogMessageModule", function() { return ConfirmDialogMessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_confirm_dialog_message_confirm_dialog_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/confirm-dialog-message/confirm-dialog-message.component */ "k7wE");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



//



//





var ConfirmDialogMessageModule = /** @class */ (function () {
    function ConfirmDialogMessageModule() {
    }
    ConfirmDialogMessageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConfirmDialogMessageModule });
    ConfirmDialogMessageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConfirmDialogMessageModule_Factory(t) { return new (t || ConfirmDialogMessageModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            ]] });
    return ConfirmDialogMessageModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfirmDialogMessageModule, { declarations: [_components_confirm_dialog_message_confirm_dialog_message_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogMessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]], exports: [_components_confirm_dialog_message_confirm_dialog_message_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogMessageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogMessageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                ],
                declarations: [
                    _components_confirm_dialog_message_confirm_dialog_message_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogMessageComponent"]
                ],
                exports: [
                    _components_confirm_dialog_message_confirm_dialog_message_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogMessageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Rm8x":
/*!****************************************************************************!*\
  !*** ./src/common/http-request-indicator/models/http-request-indicator.ts ***!
  \****************************************************************************/
/*! exports provided: HttpRequestIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestIndicator", function() { return HttpRequestIndicator; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

var HttpRequestIndicator = /** @class */ (function () {
    function HttpRequestIndicator(uid, urlExpressions) {
        this.uid = uid;
        this.urlExpressions = urlExpressions;
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    return HttpRequestIndicator;
}());



/***/ }),

/***/ "S96s":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/contact-page/contact-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");





var _c0 = function () { return ["/home"]; };
var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
        this.isCollapsed = true;
    }
    ContactPageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
    };
    ContactPageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
    };
    ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(); };
    ContactPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["app-contact-page"]], decls: 102, vars: 7, consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "tooltip", "Por un mundo mejor.", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", "width-250px", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "close-menu", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["placement", "bottom", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "d-lg-none", "d-xl-none"], [1, "fab", "fa-facebook-square"], [1, "fab", "fa-instagram"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "wrapper"], [1, "page-header"], ["src", "assets/img/blob.png", 1, "path"], ["src", "assets/img/path2.png", 1, "path2"], ["src", "assets/img/triunghiuri.png", 1, "shapes", "triangle"], ["src", "assets/img/waves.png", 1, "shapes", "wave"], ["src", "assets/img/patrat.png", 1, "shapes", "squares"], ["src", "assets/img/cercuri.png", 1, "shapes", "circle"], [1, "content-center"], [1, "row", "row-grid", "justify-content-between", "align-items-center", "text-left"], [1, "col-lg-6", "col-md-6"], [1, "text-white"], [1, "text-white", "mb-3"], [1, "btn-wrapper", "mb-3"], [1, "category", "text-success", "d-inline", "mr-1"], ["href", "javascript:void(0)", 1, "btn", "btn-success", "btn-link", "btn-sm"], [1, "tim-icons", "icon-minimal-right"], [1, "btn-wrapper"], [1, "button-container"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-simple", "btn-round", "btn-neutral", "mr-1"], [1, "fab", "fa-dribbble"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-simple", "btn-round", "btn-neutral"], [1, "fab", "fa-facebook"], [1, "col-lg-4", "col-md-5"], ["alt", "Circle image", "src", "assets/img/etherum.png", 1, "img-fluid"], [1, "section", "section-lg"], [1, "section"], ["src", "assets/img/path4.png", 1, "path"], [1, "row", "row-grid", "justify-content-between"], [1, "col-md-12"], [1, "pl-md-5"], [1, "color-withe"], ["href", "https://es.wikipedia.org/wiki/Dictadura", "target", "_blank", 1, "font-weight-bold", "text-info", "mt-5"], [1, "tim-icons", "icon-minimal-right", "text-info"], [1, "footer"], [1, "col-md-3"], [1, "title"], ["target", "_blank", "href", "https://www.paypal.com/donate?hosted_button_id=U8456AX4PL5GQ", 1, "font-weight-bold", "text-info", "mt-5"], [1, "d-flex", "flex-grow-1"], [1, "btn-wrapper", "profile"], [1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], [1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " SINDICTADURAS ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPageComponent_Template_button_click_6_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactPageComponent_Template_button_click_15_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Twitter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Instagram");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Regresar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " We keep your coin ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " secured ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "From 9.99%/mo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "section", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Una dictadura es una forma autoritaria de gobierno, caracterizada por tener un solo l\u00EDder o un grupo de l\u00EDderes y una escasa o nula tolerancia hacia el pluralismo pol\u00EDtico o la libertad de prensa. Seg\u00FAn otras definiciones, las democracias son reg\u00EDmenes en los que \u00ABquienes gobiernan son seleccionados mediante elecciones competitivas\u00BB; por lo tanto, las dictaduras no son \u00ABdemocracias\u00BB. Con el advenimiento de los siglos XIX y XX, las dictaduras y las democracias constitucionales emergieron como las dos principales formas de gobierno del mundo, eliminando gradualmente las monarqu\u00EDas, una de las formas tradicionales de gobierno extendidas entonces. T\u00EDpicamente, en un r\u00E9gimen dictatorial, el l\u00EDder del pa\u00EDs se identifica con el t\u00EDtulo de dictador; aunque, su t\u00EDtulo formal puede parecerse m\u00E1s a algo similar a l\u00EDder. Un aspecto com\u00FAn que caracteriza a los dictadores es aprovechar su fuerte personalidad, generalmente suprimiendo la libertad de expresi\u00F3n y el discurso de las masas, para mantener una supremac\u00EDa y estabilidad pol\u00EDtica y social completa. La dictadura y las sociedades totalitarias generalmente emplean propaganda pol\u00EDtica para disminuir la influencia de los defensores de sistemas de gobierno alternativos ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Seguir leyendo... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "footer", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h1", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "SINDICTADURAS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Hacer una Donaci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "span", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Escribanos a: sindictadur4s@gmail.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseDirective"]], encapsulation: 2 });
    return ContactPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-page',
                templateUrl: 'contact-page.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SQ+P":
/*!**********************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/sindictaduras-web-routing/sin-dictaduras-web-routing.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SinDictadurasWebRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinDictadurasWebRoutingModule", function() { return SinDictadurasWebRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/index/index.component */ "sqmE");





var routes = [
    {
        path: '',
        component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
        children: [
            {
                path: '',
                redirectTo: 'presidentes',
                pathMatch: 'full'
            },
            {
                path: 'presidentes',
                loadChildren: '../presidentes/presidentes.module#PresidentesModule'
            }
        ]
    }
];
var SinDictadurasWebRoutingModule = /** @class */ (function () {
    function SinDictadurasWebRoutingModule() {
    }
    SinDictadurasWebRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SinDictadurasWebRoutingModule });
    SinDictadurasWebRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SinDictadurasWebRoutingModule_Factory(t) { return new (t || SinDictadurasWebRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return SinDictadurasWebRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SinDictadurasWebRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinDictadurasWebRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/services/dialog.service */ "Wnat");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
















var AppComponent = /** @class */ (function () {
    function AppComponent(dialogService, renderer, location, document, errorHandlingService, socialAuthService, translate) {
        this.dialogService = dialogService;
        this.renderer = renderer;
        this.location = location;
        this.errorHandlingService = errorHandlingService;
        this.socialAuthService = socialAuthService;
        this.translate = translate;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        translate.setDefaultLang('en');
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById('navbar-top');
            if (element) {
                element.classList.remove('navbar-transparent');
                // element.classList.add('bg-danger');
            }
        }
        else {
            var element = document.getElementById('navbar-top');
            if (element) {
                element.classList.add('navbar-transparent');
                // element.classList.remove('bg-danger');
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onWindowScroll(event);
        this.errorHandlingService.showExpireLogin.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroy$)).subscribe(function (userDetails) {
            localStorage.removeItem('sindictaduras-token');
            _this.dialogService.showLoginDialog();
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlingService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialAuthService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "TTea":
/*!**************************************************!*\
  !*** ./src/common/models/Countries/countries.ts ***!
  \**************************************************/
/*! exports provided: country, COUNTRIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "country", function() { return country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTRIES", function() { return COUNTRIES; });
var country = /** @class */ (function () {
    function country() {
    }
    return country;
}());

var COUNTRIES = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: "Cote D'Ivoire", code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: "Korea, Democratic People'S Republic of", code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: "Lao People'S Democratic Republic", code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' },
];


/***/ }),

/***/ "TYli":
/*!**********************************************************!*\
  !*** ./src/common/ngrx/services/root-actions.service.ts ***!
  \**********************************************************/
/*! exports provided: RootActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootActionsService", function() { return RootActionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




var RootActionsService = /** @class */ (function () {
    function RootActionsService(store) {
        this.store = store;
    }
    RootActionsService.prototype.setState = function (state) {
        // this.store.dispatch(createAction(RootActionsService.SET_STATE, state));
    };
    RootActionsService.SET_STATE = 'SET_STATE';
    RootActionsService.ɵfac = function RootActionsService_Factory(t) { return new (t || RootActionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
    RootActionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootActionsService, factory: RootActionsService.ɵfac, providedIn: 'root' });
    return RootActionsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootActionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "V7SN":
/*!********************************************************************!*\
  !*** ./src/ui/modules/caps-lock/directives/caps-lock.directive.ts ***!
  \********************************************************************/
/*! exports provided: CapsLockDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapsLockDirective", function() { return CapsLockDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var CapsLockDirective = /** @class */ (function () {
    function CapsLockDirective() {
        this.capsLockEnabled = false;
        this.capsLock = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CapsLockDirective.prototype.onKeyDown = function (event) {
        if (event.which == 20 && this.capsLockEnabled !== null) {
            this.capsLockEnabled = !this.capsLockEnabled;
            // console.log("Keydown. CapsLock enabled: " + this.capsLockEnabled.toString());
            this.capsLock.emit(this.capsLockEnabled);
        }
        else if (event.which == 20) {
            // console.log("Keydown. Initial state not set.");
        }
    };
    CapsLockDirective.prototype.onKeyPress = function (event) {
        var str = String.fromCharCode(event.which);
        if (!str || str.toLowerCase() === str.toUpperCase()) {
            // console.log("Keypress. Some control key pressed.");
            return;
        }
        this.capsLockEnabled = (str.toLowerCase() === str && event.shiftKey) || (str.toUpperCase() === str && !event.shiftKey);
        // console.log("Keypress. CapsLock enabled: " + this.capsLockEnabled.toString());
        this.capsLock.emit(this.capsLockEnabled);
    };
    CapsLockDirective.ɵfac = function CapsLockDirective_Factory(t) { return new (t || CapsLockDirective)(); };
    CapsLockDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CapsLockDirective, selectors: [["", "capsLock", ""]], hostBindings: function CapsLockDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function CapsLockDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keypress", function CapsLockDirective_keypress_HostBindingHandler($event) { return ctx.onKeyPress($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, outputs: { capsLock: "capsLock" } });
    return CapsLockDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapsLockDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[capsLock]'
            }]
    }], null, { capsLock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['capsLock']
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown', ['$event']]
        }], onKeyPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keypress', ['$event']]
        }] }); })();


/***/ }),

/***/ "Vx6W":
/*!***************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/services/presidentes.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ASCENDING, PresidentesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentesService", function() { return PresidentesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/error-handling/services/error-handling-http.service */ "3MQd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/config/services/config.service */ "1WeG");
/* harmony import */ var _common_error_handling_interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/error-handling/interceptors/http-headers-interceptor.service */ "/XId");


//

//






var ASCENDING = 'asc';
var PresidentesService = /** @class */ (function () {
    function PresidentesService(configService, httpHeaders, http) {
        this.configService = configService;
        this.httpHeaders = httpHeaders;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'updatedAt';
        this.previousSortDirection = 'desc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.presidentesList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ dataCount: 0, data: [] });
        this.apiEndpoint = this.configService.apiUrl + this.configService.config.apiConfigs.presidentes.apiEndpoint;
    }
    PresidentesService.prototype.getPresidentes = function () {
        var requestOptions = { headers: this.httpHeaders.getHeaders() };
        requestOptions.headers = requestOptions.headers.delete('Content-Type');
        return this.http.get(this.apiEndpoint, requestOptions);
    };
    PresidentesService.prototype.getPresidente = function (presidenteId) {
        return this.http.get(this.apiEndpoint + presidenteId);
    };
    PresidentesService.prototype.postCreatePresidente = function (presidente) {
        return this.http.post(this.apiEndpoint, presidente);
    };
    PresidentesService.prototype.putEditPresidente = function (presidente) {
        return this.http.put(this.apiEndpoint, presidente);
    };
    PresidentesService.ɵfac = function PresidentesService_Factory(t) { return new (t || PresidentesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_error_handling_interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["HttpHeadersInterceptorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"])); };
    PresidentesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PresidentesService, factory: PresidentesService.ɵfac, providedIn: 'root' });
    return PresidentesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresidentesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _common_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _common_error_handling_interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_4__["HttpHeadersInterceptorService"] }, { type: _common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"] }]; }, null); })();


/***/ }),

/***/ "WFee":
/*!**********************************************************************!*\
  !*** ./src/ui/modules/ask-before-cancel/ask-before-cancel.module.ts ***!
  \**********************************************************************/
/*! exports provided: AskBeforeCancelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskBeforeCancelModule", function() { return AskBeforeCancelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_ask_before_cancel_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/ask-before-cancel.directive */ "anf1");




var AskBeforeCancelModule = /** @class */ (function () {
    function AskBeforeCancelModule() {
    }
    AskBeforeCancelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AskBeforeCancelModule });
    AskBeforeCancelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AskBeforeCancelModule_Factory(t) { return new (t || AskBeforeCancelModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]] });
    return AskBeforeCancelModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AskBeforeCancelModule, { declarations: [_directives_ask_before_cancel_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeCancelDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directives_ask_before_cancel_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeCancelDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AskBeforeCancelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    _directives_ask_before_cancel_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeCancelDirective"]
                ],
                exports: [
                    _directives_ask_before_cancel_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeCancelDirective"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "WNK1":
/*!*******************************************************************************************!*\
  !*** ./src/common/authentication/components/change-password/change-password.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "vmVr");
/* harmony import */ var _change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../change-password-form/change-password-form.component */ "3VOU");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/helpers/component-can-deactivate */ "c/YZ");
/* harmony import */ var _ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/helpers/mixin-decorator */ "+ImJ");
/* harmony import */ var _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../error-handling/services/toastr.service */ "IQ7q");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");


//

//




// import { TRANSLATIONS } from './i18n/change-password.component.translations';











var errorTitleKey = '@c/authentication/ChangePasswordComponent/ErrorTitle';
var updatedPasswordMessageKey = '@c/authentication/ChangePasswordComponent/Updated Password Message';
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(authService, dialog, errorHandlingService, translateService, snackBar, toastTr) {
        this.authService = authService;
        this.dialog = dialog;
        this.errorHandlingService = errorHandlingService;
        this.translateService = translateService;
        this.snackBar = snackBar;
        this.toastTr = toastTr;
        this.data = {
            old_password: '',
            password: '',
            confirmPassword: ''
        };
        // Begin Mixin code of the CanDeactivate class
        this.unsavedChanges = false;
        this.cancelBtnKey = 'ChangePasswordRouteComponent/No';
        this.okBtnKey = 'ChangePasswordRouteComponent/Yes';
        this.saveTitleKey = 'ChangePasswordRouteComponent/Discard Title';
        this.saveMessageKey = 'ChangePasswordRouteComponent/Discard Message';
        // end
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //setTranslations(this.translateService, TRANSLATIONS);
    }
    ChangePasswordComponent.prototype.submit = function (data) {
        this.changePassword(data);
    };
    ChangePasswordComponent.prototype.changePassword = function (data) {
        var _this = this;
        this.authService.changePassword(data.old_password, data.password).subscribe(function () {
            _this.unsavedChanges = false;
            _this.translateService.get(updatedPasswordMessageKey).subscribe(function (value) {
                return _this.toastTr.success(value);
            });
            _this.close.emit();
        }, function (error) {
            _this.errorHandlingService.handleUiError(errorTitleKey, error);
            _this.validationErrors = error.formErrors;
        });
    };
    ChangePasswordComponent.prototype.cancel = function () {
        this.close.emit();
    };
    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"])); };
    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["change-password"]], viewQuery: function ChangePasswordComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordFormComponent"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formComponent = _t.first);
        } }, inputs: { passwordSize: "passwordSize", uppercase: "uppercase", lowercase: "lowercase", specialCharsCount: "specialCharsCount", digitsCount: "digitsCount" }, outputs: { close: "close" }, decls: 3, vars: 3, consts: [[1, "margin-top-0"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "@c/authentication/ChangePasswordComponent/Change password"));
        } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {    \r\n    overflow-y: auto; \r\n    display: flex; \r\n    flex-direction: column; \r\n    flex-grow: 1;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCLEVBRU8sV0FBVztJQUNsQyxhQUFhLEVBRW1CLFdBQVc7SUFDM0Msc0JBQXNCLEVBRUEsV0FBVztJQUNqQyxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyAgICBcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4OyAvKiBTYWZhcmkgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBTYWZhcmkgKi9cclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7IC8qIFNhZmFyaSAqL1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });
    ChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ui_helpers_mixin_decorator__WEBPACK_IMPORTED_MODULE_8__["Mixin"])([_ui_helpers_component_can_deactivate__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateMixin"]]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _error_handling_services_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }]; }, { formComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordFormComponent"]]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], passwordSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], uppercase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lowercase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], specialCharsCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], digitsCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "Wnat":
/*!*******************************************!*\
  !*** ./src/ui/services/dialog.service.ts ***!
  \*******************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "ronc");
/* harmony import */ var _common_authentication_components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/authentication/components/login-dialog/login-dialog.component */ "adYY");







var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
        this.defaultDialogConfig = {
            width: '50%'
        };
    }
    DialogService.prototype.confirm = function (data) {
        var confirmDialogConfig = {
            width: '250px',
            disableClose: true,
            data: data
        };
        return this.openDialog(_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], confirmDialogConfig).afterClosed();
    };
    DialogService.prototype.customDialogComponent = function (component, config) {
        if (config === void 0) { config = this.defaultDialogConfig; }
        var dialogRef = this.openDialog(component, config);
        return dialogRef;
    };
    DialogService.prototype.openDialog = function (component, config) {
        var dialogRef = this.dialog.open(component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultDialogConfig), config));
        return dialogRef;
    };
    DialogService.prototype.openFromComponent = function (component, width, heigth, dialogData, panelClass, disableClose) {
        if (panelClass === void 0) { panelClass = ''; }
        if (disableClose === void 0) { disableClose = true; }
        return this.dialog.open(component, {
            width: width,
            height: heigth,
            data: dialogData,
            autoFocus: false,
            disableClose: disableClose,
            panelClass: panelClass,
        });
    };
    DialogService.prototype.showLoginDialog = function () {
        return this.openFromComponent(_common_authentication_components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoginDialogComponent"], '40%', 'auto', {}, 'close-button-login');
    };
    DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
    DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
    return DialogService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "X623":
/*!******************************************************************!*\
  !*** ./src/common/validation/helpers/same-password-validator.ts ***!
  \******************************************************************/
/*! exports provided: samePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "samePassword", function() { return samePassword; });
function samePassword(passwordToCompareControl) {
    var currentControl;
    return function (control) {
        var inputValue = control.value;
        if (!currentControl) {
            currentControl = control;
            if (!passwordToCompareControl) {
                throw new Error("samePasswordValidator(): control to compare was not found");
            }
            passwordToCompareControl.valueChanges.subscribe(function (passwordToCompareValue) {
                if (inputValue) {
                    if (passwordToCompareValue !== currentControl.value) {
                        currentControl.setErrors({ matchPassword: true });
                    }
                    else {
                        currentControl.setErrors(null);
                    }
                }
            });
        }
        if (inputValue) {
            if (passwordToCompareControl.value !== currentControl.value) {
                return {
                    matchPassword: true
                };
            }
        }
        return null;
    };
}


/***/ }),

/***/ "XftJ":
/*!***********************************************************************************!*\
  !*** ./src/common/http-request-indicator/services/loading-interceptor.service.ts ***!
  \***********************************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _http_request_indicators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-request-indicators.service */ "7XjW");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.service */ "EdvF");








var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(loadingService, httpRequestIndicatorsService) {
        this.loadingService = loadingService;
        this.httpRequestIndicatorsService = httpRequestIndicatorsService;
        this.totalRequests = 0;
    }
    LoadingInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.totalRequests++;
        this.httpRequestIndicatorsService.setLoading(true);
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            if (res instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.decreaseRequests();
            }
        }, function (error) { }, function () {
            _this.decreaseRequests();
        }));
    };
    LoadingInterceptor.prototype.decreaseRequests = function () {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            // this.loadingService.setLoading(false);
        }
    };
    LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorsService"])); };
    LoadingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });
    return LoadingInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }, { type: _http_request_indicators_service__WEBPACK_IMPORTED_MODULE_3__["HttpRequestIndicatorsService"] }]; }, null); })();


/***/ }),

/***/ "Yktm":
/*!***************************************************************!*\
  !*** ./src/app/sindictaduras-web/sindictaduras-web.module.ts ***!
  \***************************************************************/
/*! exports provided: SinDictadurasWebModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinDictadurasWebModule", function() { return SinDictadurasWebModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _modules_mostrar_presidente_dialog_mostrar_presidente_dialog_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/mostrar-presidente-dialog/mostrar-presidente-dialog.module */ "8UB1");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/ui.module */ "od0u");
/* harmony import */ var _common_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/authentication/authentication.module */ "MPVL");
/* harmony import */ var _modules_presidentes_presidentes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/presidentes/presidentes.module */ "Nskb");
/* harmony import */ var _modules_votacion_votacion_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/votacion/votacion.module */ "sZIE");
/* harmony import */ var _modules_usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/usuarios/usuarios.module */ "wMJE");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "FuJU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_sindictaduras_web_routing_sin_dictaduras_web_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/sindictaduras-web-routing/sin-dictaduras-web-routing.module */ "SQ+P");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");



//

//












var SinDictadurasWebModule = /** @class */ (function () {
    function SinDictadurasWebModule() {
    }
    SinDictadurasWebModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SinDictadurasWebModule });
    SinDictadurasWebModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SinDictadurasWebModule_Factory(t) { return new (t || SinDictadurasWebModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                //
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                //
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                //
                _modules_mostrar_presidente_dialog_mostrar_presidente_dialog_module__WEBPACK_IMPORTED_MODULE_4__["MostrarPresidenteDialogModule"],
                _modules_presidentes_presidentes_module__WEBPACK_IMPORTED_MODULE_7__["PresidentesModule"],
                _modules_votacion_votacion_module__WEBPACK_IMPORTED_MODULE_8__["VotacionModule"],
                _common_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationModule"],
                _modules_usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_9__["UsuariosModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                _modules_sindictaduras_web_routing_sin_dictaduras_web_routing_module__WEBPACK_IMPORTED_MODULE_12__["SinDictadurasWebRoutingModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__["CollapseModule"]
            ]] });
    return SinDictadurasWebModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SinDictadurasWebModule, { declarations: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        //
        ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
        //
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
        //
        _modules_mostrar_presidente_dialog_mostrar_presidente_dialog_module__WEBPACK_IMPORTED_MODULE_4__["MostrarPresidenteDialogModule"],
        _modules_presidentes_presidentes_module__WEBPACK_IMPORTED_MODULE_7__["PresidentesModule"],
        _modules_votacion_votacion_module__WEBPACK_IMPORTED_MODULE_8__["VotacionModule"],
        _common_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationModule"],
        _modules_usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_9__["UsuariosModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
        _modules_sindictaduras_web_routing_sin_dictaduras_web_routing_module__WEBPACK_IMPORTED_MODULE_12__["SinDictadurasWebRoutingModule"],
        ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
        ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__["CollapseModule"]], exports: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinDictadurasWebModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    //
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
                    //
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UiModule"],
                    //
                    _modules_mostrar_presidente_dialog_mostrar_presidente_dialog_module__WEBPACK_IMPORTED_MODULE_4__["MostrarPresidenteDialogModule"],
                    _modules_presidentes_presidentes_module__WEBPACK_IMPORTED_MODULE_7__["PresidentesModule"],
                    _modules_votacion_votacion_module__WEBPACK_IMPORTED_MODULE_8__["VotacionModule"],
                    _common_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationModule"],
                    _modules_usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_9__["UsuariosModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                    _modules_sindictaduras_web_routing_sin_dictaduras_web_routing_module__WEBPACK_IMPORTED_MODULE_12__["SinDictadurasWebRoutingModule"],
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_14__["CollapseModule"]
                ],
                declarations: [
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"]
                ],
                exports: [
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _common_error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/error-handling/error-handling.module */ "Ecfk");
/* harmony import */ var _common_authentication_components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/authentication/components/login-dialog/login-dialog.component */ "adYY");
/* harmony import */ var src_common_http_request_indicator_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/common/http-request-indicator/components/loading/loading.component */ "qI6W");
/* harmony import */ var _common_http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/http-request-indicator/http-request-indicator.module */ "69b4");








//






//










var createTranslateLoader = function (http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            {
                provide: 'SocialAuthServiceConfig',
                useValue: {
                    autoLogin: false,
                    providers: [
                        {
                            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"].PROVIDER_ID,
                            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"]('762921540185-ksaf5icuhccfp1fg4462cdgn880ks8d4.apps.googleusercontent.com')
                        },
                        {
                            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"].PROVIDER_ID,
                            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"]('clientId')
                        }
                    ]
                },
            }
        ], imports: [[
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                //
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                // BsDropdownModule.forRoot(),
                // ProgressbarModule.forRoot(),
                // TooltipModule.forRoot(),
                // CollapseModule.forRoot(),
                // TabsModule.forRoot(),
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__["PagesModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                    }
                }),
                // PaginationModule.forRoot(),
                // AlertModule.forRoot(),
                // BsDatepickerModule.forRoot(),
                // CarouselModule.forRoot(),
                // ModalModule.forRoot(),
                _common_error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlingModule"],
                _common_http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_17__["HttpRequestIndicatorModule"].forRoot(),
                angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        // IndexComponent,
        // ProfilepageComponent,
        // RegisterpageComponent,
        // ContactPageComponent
    ], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        //
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        // BsDropdownModule.forRoot(),
        // ProgressbarModule.forRoot(),
        // TooltipModule.forRoot(),
        // CollapseModule.forRoot(),
        // TabsModule.forRoot(),
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__["PagesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], 
        // PaginationModule.forRoot(),
        // AlertModule.forRoot(),
        // BsDatepickerModule.forRoot(),
        // CarouselModule.forRoot(),
        // ModalModule.forRoot(),
        _common_error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlingModule"], _common_http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_17__["HttpRequestIndicatorModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                    // IndexComponent,
                    // ProfilepageComponent,
                    // RegisterpageComponent,
                    // ContactPageComponent
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    //
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    // BsDropdownModule.forRoot(),
                    // ProgressbarModule.forRoot(),
                    // TooltipModule.forRoot(),
                    // CollapseModule.forRoot(),
                    // TabsModule.forRoot(),
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_12__["PagesModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                            useFactory: createTranslateLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                        }
                    }),
                    // PaginationModule.forRoot(),
                    // AlertModule.forRoot(),
                    // BsDatepickerModule.forRoot(),
                    // CarouselModule.forRoot(),
                    // ModalModule.forRoot(),
                    _common_error_handling_error_handling_module__WEBPACK_IMPORTED_MODULE_14__["ErrorHandlingModule"],
                    _common_http_request_indicator_http_request_indicator_module__WEBPACK_IMPORTED_MODULE_17__["HttpRequestIndicatorModule"].forRoot(),
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"],
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"]
                ],
                providers: [
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"]('762921540185-ksaf5icuhccfp1fg4462cdgn880ks8d4.apps.googleusercontent.com')
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"]('clientId')
                                }
                            ]
                        },
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
                entryComponents: [
                    _common_authentication_components_login_dialog_login_dialog_component__WEBPACK_IMPORTED_MODULE_15__["LoginDialogComponent"],
                    src_common_http_request_indicator_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "adYY":
/*!*************************************************************************************!*\
  !*** ./src/common/authentication/components/login-dialog/login-dialog.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LoginDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDialogComponent", function() { return LoginDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/services/config.service */ "1WeG");
/* harmony import */ var _ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/components/base-reactive-form/base-reactive-form-component */ "gmUQ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/auth.service */ "vmVr");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_sindictaduras_web_modules_usuarios_models_usuario__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../app/sindictaduras-web/modules/usuarios/models/usuario */ "q+X9");
/* harmony import */ var _app_sindictaduras_web_modules_usuarios_services_usuarios_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../app/sindictaduras-web/modules/usuarios/services/usuarios.service */ "ojJt");
/* harmony import */ var _error_handling_services_alert_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../error-handling/services/alert.service */ "gHp3");
/* harmony import */ var _http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../http-request-indicator/services/loading.service */ "EdvF");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ui_modules_caps_lock_directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../ui/modules/caps-lock/directives/caps-lock.directive */ "V7SN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");






//


//


























var _c0 = function (a0) { return { "input-group-focus": a0 }; };
function LoginDialogComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function LoginDialogComponent_div_23_Template_input_focus_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.focus2 = true; })("blur", function LoginDialogComponent_div_23_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.focus2 = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r0.focus2 === true));
} }
function LoginDialogComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Si usted no tiene cuenta puede ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginDialogComponent_span_24_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.registro(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "registrase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginDialogComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Ir al ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginDialogComponent_span_25_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.registro(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
var errorKey = 'LoginComponent/Error';
var requiredUserandPasswordKey = 'El email o contraseña no pueden estar vacios.';
var LoginDialogComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LoginDialogComponent, _super);
    function LoginDialogComponent(route, alertService, router, configService, authService, socialAuthService, translateService, errorHandlingService, snackBar, dialogRef, dialogData, usuariosService, loadingService) {
        var _this = _super.call(this, translateService) || this;
        _this.route = route;
        _this.alertService = alertService;
        _this.router = router;
        _this.configService = configService;
        _this.authService = authService;
        _this.socialAuthService = socialAuthService;
        _this.translateService = translateService;
        _this.errorHandlingService = errorHandlingService;
        _this.snackBar = snackBar;
        _this.dialogRef = dialogRef;
        _this.dialogData = dialogData;
        _this.usuariosService = usuariosService;
        _this.loadingService = loadingService;
        _this.isLogin = true;
        return _this;
        // setTranslations(this.translateService, TRANSLATIONS);
    }
    LoginDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = {
            userName: '',
            password: '',
        };
        this.validationErrorMessages = [
            {
                type: 'required',
                key: 'Required Field',
                params: null,
                translation: ''
            }
        ];
        if (this.authService.isAuthenticated) {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
        else {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
            this.authService.loginNavigationExtras = undefined;
        }
        this.createFormGroup();
        this.socialAuthService.authState.subscribe(function (user) {
            if (user !== null && user !== undefined) {
                _this.usuario = new _app_sindictaduras_web_modules_usuarios_models_usuario__WEBPACK_IMPORTED_MODULE_12__["Usuario"](user);
                _this.formGroup.get('userName').setValue(user.email);
                _this.formGroup.get('password').setValue(user.id);
                if (!_this.isLogin) {
                    _this.register(true);
                }
                else {
                    _this.login();
                    localStorage.setItem('signInWithSocialNetwork', 'true');
                }
            }
        }, function (error) {
            console.log('error');
        });
    };
    LoginDialogComponent.prototype.createFormGroup = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.userName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.data.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    LoginDialogComponent.prototype.login = function () {
        var _this = this;
        var userName = this.formGroup.get('userName').value;
        var password = this.formGroup.get('password').value;
        if (this.authService.isAuthenticated) {
            this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
        }
        else {
            if (userName && password) {
                this.loadingService.showLoader(true);
                this.authService.loginUser(userName, password).subscribe(function (response) {
                    // this.rootActions.setState(this.authService.userPreferences);
                    /*if (this.returnUrl && this.returnUrl.length > 0) {
                        this.router.navigateByUrl(this.returnUrl);
                    } else {
                        // tslint:disable-next-line:max-line-length
                        this.router.navigate(this.authService.afterLoginCommands, this.authService.afterLoginNavigationExtras);
                    }*/
                    _this.close();
                    _this.alertService.success('Bienvenido', 'OK');
                    _this.loadingService.showLoader(false);
                    _this.authService.reAuthenticacion.next(false);
                }, function (error) { return _this.errorHandlingService.handleUiError(errorKey, error); });
            }
            else {
                this.translateService.get([requiredUserandPasswordKey, errorKey]).subscribe(function (translations) {
                    _this.alertService.success(requiredUserandPasswordKey);
                });
            }
        }
    };
    LoginDialogComponent.prototype.register = function (signInWithSocialNetwork) {
        var _this = this;
        if (signInWithSocialNetwork === void 0) { signInWithSocialNetwork = false; }
        if (!signInWithSocialNetwork) {
            var userName = this.formGroup.get('userName').value;
            var password = this.formGroup.get('password').value;
            this.usuario = {
                usuario: userName,
                contrasena: password
            };
        }
        this.loadingService.showLoader(true);
        this.usuariosService.registrarUsuario(this.usuario).subscribe(function (response) {
            if (response.data.usuario.signInWithSocialNetwork) {
                localStorage.setItem('sindictaduras-token', response.data.token);
                localStorage.setItem('sindictaduras-user', JSON.stringify(response.data.usuario));
                localStorage.setItem('signInWithSocialNetwork', 'true');
                _this.alertService.success('Se ha registrado con exito. Gracias', 'OK');
            }
            else {
                _this.alertService.success('Se ha registrado con exito. Le hemos enviado un mail para confirmar su usuario', 'OK');
            }
            _this.loadingService.showLoader(false);
            _this.authService.reAuthenticacion.next(true);
            _this.close();
        }, function (error) {
            _this.loadingService.showLoader(false);
            _this.alertService.error(error.message, 'OK');
        });
    };
    LoginDialogComponent.prototype.signInWithGoogle = function () {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID);
    };
    LoginDialogComponent.prototype.signOut = function () {
        this.socialAuthService.signOut();
    };
    LoginDialogComponent.prototype.close = function () {
        this.dialogRef.close(false);
    };
    LoginDialogComponent.prototype.registro = function (isLogin) {
        this.isLogin = isLogin;
    };
    LoginDialogComponent.ɵfac = function LoginDialogComponent_Factory(t) { return new (t || LoginDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_error_handling_services_alert_service__WEBPACK_IMPORTED_MODULE_14__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_config_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_sindictaduras_web_modules_usuarios_services_usuarios_service__WEBPACK_IMPORTED_MODULE_13__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_15__["LoadingService"])); };
    LoginDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginDialogComponent, selectors: [["app-login-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 12, consts: [["mat-button", "", 1, "close", "z-index-1050", 3, "click"], [1, "row", "margin-0px", "width-100pct", "height-100pct"], ["id", "square7", 1, "square", "square-7"], ["id", "square8", 1, "square", "square-8"], [1, "card", "card-register", "width-100pct", "height-100pct"], [1, "card-header", "height-25pct"], ["alt", "Card image", "src", "assets/img/square1.png", 1, "card-img"], [1, "card-title"], [1, "card-body"], ["capsLock", "", "inputFocus", "", 1, "form", 3, "formGroup", "ngSubmit", "capsLock"], [1, "input-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "tim-icons", "icon-email-85"], ["formControlName", "userName", "placeholder", "Email", "type", "email", 1, "form-control", 3, "focus", "blur"], [1, "tim-icons", "icon-lock-circle"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control", 3, "focus", "blur"], ["class", "input-group", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "padding-left-10px", "padding-right-10px"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "btn-round", "btn-lg", "width-100pct", 3, "click"], [1, "d-flex", "padding-left-10px", "padding-right-10px", "padding-bottom-10px", "justify-content-space-between"], [1, "btn", "btn-default", "btn-round", "btn-lg", "width-100pct", "color-withe", 3, "click"], ["type", "password", "placeholder", "Reenter Password", 1, "form-control", 3, "focus", "blur"], [1, "cursor-pointer", 3, "click"]], template: function LoginDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginDialogComponent_Template_button_click_0_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "sindictaduras");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginDialogComponent_Template_form_ngSubmit_12_listener() { return ctx.login(); })("capsLock", function LoginDialogComponent_Template_form_capsLock_12_listener($event) { return ctx.capsLockOn = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function LoginDialogComponent_Template_input_focus_17_listener() { return ctx.focus1 = true; })("blur", function LoginDialogComponent_Template_input_blur_17_listener() { return ctx.focus1 = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function LoginDialogComponent_Template_input_focus_22_listener() { return ctx.focus2 = true; })("blur", function LoginDialogComponent_Template_input_blur_22_listener() { return ctx.focus2 = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginDialogComponent_div_23_Template, 5, 3, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, LoginDialogComponent_span_24_Template, 5, 0, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, LoginDialogComponent_span_25_Template, 5, 0, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginDialogComponent_Template_a_click_27_listener() { return ctx.isLogin ? ctx.login() : ctx.register(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginDialogComponent_Template_a_click_30_listener() { return ctx.signInWithGoogle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.focus1 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.focus2 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLogin);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLogin);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLogin);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isLogin ? "Entrar" : "Registrarse", " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isLogin ? "Entrar " : "Registrarse ", " con Google ");
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _ui_modules_caps_lock_directives_caps_lock_directive__WEBPACK_IMPORTED_MODULE_18__["CapsLockDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"]], styles: [".login-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n  \n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding-bottom: 10px;\n  font-size: 32px;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  padding: 40px;\n  background: #fff;\n  width: 300px;\n  box-shadow: 0 0 10px #ddd;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 30px white inset;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .close-button-login {\n  position: relative !important;\n  width: 350px !important;\n}\n.close.mat-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  line-height: 14px;\n  min-width: auto;\n}\n  .mat-dialog-container {\n  padding: 0px !important;\n}\n  .cdk-overlay-container {\n  z-index: 1050 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7QUFISjtBQWxCSTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQW9CUjtBQW5CUTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFxQlo7QUFuQlE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFxQlo7QUFwQlk7RUFDSSwwQ0FBQTtBQXNCaEI7QUFHQTtFQUNJLGtCQUFBO0FBQUo7QUFHQTtFQUNJLFdBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0E7RUFDSSx1QkFBQTtBQUFKO0FBR0E7RUFDSSx3QkFBQTtBQUFKIiwiZmlsZSI6ImxvZ2luLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1wYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLmFwcC1uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9naW4tZm9ybSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2RkZDtcclxuICAgICAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggd2hpdGUgaW5zZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyomOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDUwJTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgIH0qL1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udy0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2xvc2UtYnV0dG9uLWxvZ2luIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbG9zZS5tYXQtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDEwNTAgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
    return LoginDialogComponent;
}(_ui_components_base_reactive_form_base_reactive_form_component__WEBPACK_IMPORTED_MODULE_8__["BaseReactiveFormComponent"]));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LoginDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-login-dialog',
                templateUrl: './login-dialog.component.html',
                styleUrls: ['./login-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _error_handling_services_alert_service__WEBPACK_IMPORTED_MODULE_14__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialAuthService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_10__["ErrorHandlingService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"]]
            }] }, { type: _app_sindictaduras_web_modules_usuarios_services_usuarios_service__WEBPACK_IMPORTED_MODULE_13__["UsuariosService"] }, { type: _http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_15__["LoadingService"] }]; }, null); })();


/***/ }),

/***/ "afxl":
/*!************************************************!*\
  !*** ./src/ui/models/svg-icons/fist-up-red.ts ***!
  \************************************************/
/*! exports provided: FIST_UP_RED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIST_UP_RED", function() { return FIST_UP_RED; });
var FIST_UP_RED = "<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   id=\"svg3985\"\n   fill-rule=\"evenodd\"\n   preserveAspectRatio=\"xMidYMid\"\n   viewBox=\"0 0 21590 27940\"\n   version=\"1.1\">\n  <metadata\n     id=\"metadata3991\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <defs\n     id=\"defs3989\" />\n  <g\n     id=\"Default\"\n     visibility=\"visible\">\n    <desc\n       id=\"desc3699\">Master slide</desc>\n  </g>\n  <g\n     id=\"g3982\"\n     style=\"visibility:visible;stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n    <desc\n       id=\"desc3704\">Group</desc>\n    <g\n       id=\"g3734\"\n       style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n      <desc\n         id=\"desc3706\">Drawing</desc>\n      <g\n         id=\"g3732\"\n         style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3710\">\n          <path\n             d=\"M 8639,426 6546,3840 9419,5161 11318,2109 Z\"\n             id=\"path3708\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3728\">\n          <path\n             d=\"m 8682,453 -2093,3414 -43,-27 -43,-27 2093,-3414 43,27 z\"\n             id=\"path3712\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 6546,3840 -21,46 -8,-4 -7,-6 -6,-7 -4,-7 -3,-9 -2,-8 v -9 l 2,-9 3,-8 3,-6 z\"\n             id=\"path3714\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 6567,3794 2873,1321 -21,46 -21,46 -2873,-1321 21,-46 z\"\n             id=\"path3716\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 9419,5161 43,27 -5,7 -7,6 -7,5 -8,3 -9,2 -9,1 -9,-1 -8,-3 -2,-1 z\"\n             id=\"path3718\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 9376,5134 1899,-3052 43,27 43,27 -1899,3052 -43,-27 z\"\n             id=\"path3720\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 11318,2109 27,-43 7,5 6,7 5,7 4,8 2,9 v 9 l -1,9 -3,8 -4,8 z\"\n             id=\"path3722\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"M 11291,2152 8612,469 l 27,-43 27,-43 2679,1683 -27,43 z\"\n             id=\"path3724\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 8639,426 -43,-27 5,-7 6,-6 8,-5 8,-3 8,-2 9,-1 9,1 9,3 8,4 v 0 z\"\n             id=\"path3726\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3730\"\n           style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3768\"\n       style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n      <desc\n         id=\"desc3736\">Drawing</desc>\n      <g\n         id=\"g3766\"\n         style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3740\">\n          <path\n             d=\"m 12291,2748 -1800,2958 2191,1093 -148,1184 2484,-3779 z\"\n             id=\"path3738\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3762\">\n          <path\n             d=\"m 12335,2775 -1800,2958 -44,-27 -44,-27 1800,-2958 44,27 z\"\n             id=\"path3742\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 10491,5706 -23,46 -7,-5 -7,-6 -6,-7 -4,-8 -3,-8 -1,-9 v -9 l 2,-8 3,-9 2,-4 z\"\n             id=\"path3744\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 10514,5660 2191,1093 -23,46 -23,46 -2191,-1093 23,-46 z\"\n             id=\"path3746\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12682,6799 23,-46 7,5 7,6 6,7 4,8 3,8 1,9 v 9 0 z\"\n             id=\"path3748\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12733,6805 -148,1184 -51,-6 -51,-6 148,-1184 51,6 z\"\n             id=\"path3750\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12534,7983 43,28 -6,7 -7,6 -7,5 -8,3 -9,2 h -9 l -9,-1 -8,-3 -8,-4 -7,-6 -6,-7 -5,-7 -3,-8 -2,-9 v -9 -3 z\"\n             id=\"path3752\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12491,7955 2484,-3779 43,28 43,28 -2484,3779 -43,-28 z\"\n             id=\"path3754\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 15018,4204 24,-45 7,5 7,6 5,7 4,8 3,8 1,9 -1,9 -2,9 -3,8 -2,4 z\"\n             id=\"path3756\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 14994,4249 -2727,-1456 24,-45 24,-45 2727,1456 -24,45 z\"\n             id=\"path3758\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12291,2748 -44,-27 6,-7 6,-6 8,-5 8,-3 8,-2 9,-1 9,1 9,2 5,3 z\"\n             id=\"path3760\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3764\"\n           style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3802\"\n       style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n      <desc\n         id=\"desc3770\">Drawing</desc>\n      <g\n         id=\"g3800\"\n         style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3774\">\n          <path\n             d=\"m 15701,5479 -3896,5462 2337,864 3847,-4552 h -49 z\"\n             id=\"path3772\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3796\">\n          <path\n             d=\"m 15743,5509 -3896,5462 -42,-30 -42,-30 3896,-5462 42,30 z\"\n             id=\"path3776\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 11805,10941 -18,48 -8,-4 -7,-5 -6,-6 -5,-8 -4,-8 -2,-8 -1,-9 1,-9 2,-9 4,-8 2,-4 z\"\n             id=\"path3778\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 11823,10893 2337,864 -18,48 -18,48 -2337,-864 18,-48 z\"\n             id=\"path3780\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 14142,11805 39,33 -6,6 -8,5 -8,4 -8,2 -9,1 -9,-1 -9,-2 v 0 z\"\n             id=\"path3782\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 14103,11772 3847,-4552 39,33 39,33 -3847,4552 -39,-33 z\"\n             id=\"path3784\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 17989,7253 v -51 l 9,1 8,2 8,4 8,5 6,6 5,7 4,9 2,8 1,9 -1,9 -2,8 -4,8 -5,8 v 0 z\"\n             id=\"path3786\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 17989,7304 h -49 v -51 -51 h 49 v 51 z\"\n             id=\"path3788\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 17940,7253 v 51 l -9,-1 -8,-2 -8,-4 -7,-4 z\"\n             id=\"path3790\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 17908,7293 -2239,-1774 32,-40 32,-40 2239,1774 -32,40 z\"\n             id=\"path3792\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 15701,5479 -42,-30 6,-6 7,-6 8,-4 8,-3 9,-2 h 9 l 9,2 8,3 8,4 2,2 z\"\n             id=\"path3794\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3798\"\n           style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3832\"\n       style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n      <desc\n         id=\"desc3804\">Drawing</desc>\n      <g\n         id=\"g3830\"\n         style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3808\">\n          <path\n             d=\"m 18573,8255 -3603,4189 1119,1138 4139,-3689 z\"\n             id=\"path3806\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3826\">\n          <path\n             d=\"m 18612,8288 -3603,4189 -39,-33 -39,-33 3603,-4189 39,33 z\"\n             id=\"path3810\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 14970,12444 -36,36 -6,-7 -4,-8 -3,-8 -2,-9 v -9 l 2,-9 3,-8 4,-8 3,-3 z\"\n             id=\"path3812\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 15006,12408 1119,1138 -36,36 -36,36 -1119,-1138 36,-36 z\"\n             id=\"path3814\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 16089,13582 34,38 -7,5 -8,4 -9,3 -8,1 -9,-1 -9,-2 -8,-3 -8,-5 -4,-4 z\"\n             id=\"path3816\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 16055,13544 4139,-3689 34,38 34,38 -4139,3689 -34,-38 z\"\n             id=\"path3818\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 20228,9893 36,-36 6,7 4,7 3,9 2,8 v 9 l -2,9 -3,8 -4,8 -6,7 -2,2 z\"\n             id=\"path3820\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 20192,9929 -1655,-1638 36,-36 36,-36 1655,1638 -36,36 z\"\n             id=\"path3822\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 18573,8255 -39,-33 7,-6 7,-5 8,-4 9,-2 9,-1 8,1 9,2 8,4 7,5 3,3 z\"\n             id=\"path3824\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3828\"\n           style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3954\"\n       style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n      <desc\n         id=\"desc3834\">Drawing</desc>\n      <g\n         id=\"g3952\"\n         style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3838\">\n          <path\n             d=\"m 5377,4568 -4382,6509 6720,7693 -1267,7375 9884,-91 -438,-6692 2290,-2913 584,-3916 -2629,2186 -2192,-1957 -3992,-957 3896,6101 876,637 -1412,45 -438,1594 -586,-1594 -1460,229 1606,-1411 L 8639,11533 5669,10532 6741,9575 6448,7983 h 633 l 974,1365 2191,-91 1169,-637 146,-1458 z\"\n             id=\"path3836\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3948\">\n          <path\n             d=\"m 5419,4596 -4382,6509 -42,-28 -42,-28 4382,-6509 42,28 z\"\n             id=\"path3840\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 995,11077 -38,34 -6,-8 -4,-8 -2,-8 -1,-9 1,-9 2,-8 3,-9 3,-3 z\"\n             id=\"path3842\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 1033,11043 6720,7693 -38,34 -38,34 -6720,-7693 38,-34 z\"\n             id=\"path3844\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 7715,18770 38,-34 6,8 4,8 2,8 1,9 -1,9 v 1 z\"\n             id=\"path3846\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 7765,18779 -1267,7375 -50,-9 -50,-9 1267,-7375 50,9 z\"\n             id=\"path3848\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 6448,26145 v 51 l -8,-1 -9,-2 -8,-4 -7,-5 -7,-6 -5,-7 -4,-8 -2,-9 -1,-9 1,-8 v -1 z\"\n             id=\"path3850\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 6448,26094 9884,-91 v 51 51 l -9884,91 v -51 z\"\n             id=\"path3852\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 16332,26054 51,-3 v 9 l -2,8 -3,9 -5,7 -6,7 -7,5 -7,5 -9,3 -9,1 h -3 z\"\n             id=\"path3854\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 16281,26057 -438,-6692 51,-3 51,-3 438,6692 -51,3 z\"\n             id=\"path3856\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 15894,19362 -51,3 v -9 l 2,-8 3,-9 5,-7 1,-2 z\"\n             id=\"path3858\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 15854,19330 2290,-2913 40,32 40,32 -2290,2913 -40,-32 z\"\n             id=\"path3860\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 18184,16449 50,8 -2,8 -3,8 -5,8 z\"\n             id=\"path3862\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 18134,16441 584,-3916 50,8 50,8 -584,3916 -50,-8 z\"\n             id=\"path3864\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 18768,12533 -33,-39 8,-5 8,-4 8,-2 9,-1 9,1 9,2 8,4 7,5 6,6 5,8 4,8 2,8 1,9 -1,8 z\"\n             id=\"path3866\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 18801,12572 -2629,2186 -33,-39 -33,-39 2629,-2186 33,39 z\"\n             id=\"path3868\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 16139,14719 33,39 -8,5 -8,4 -8,2 -9,1 -9,-1 -9,-2 -8,-4 -7,-5 -1,-1 z\"\n             id=\"path3870\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 16105,14757 -2192,-1957 34,-38 34,-38 2192,1957 -34,38 z\"\n             id=\"path3872\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 13947,12762 12,-50 8,3 8,4 6,5 z\"\n             id=\"path3874\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 13935,12812 -3992,-957 12,-50 12,-50 3992,957 -12,50 z\"\n             id=\"path3876\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 9955,11805 -43,27 -4,-7 -3,-9 -1,-9 v -9 l 2,-8 4,-9 5,-7 6,-7 7,-5 7,-4 9,-3 9,-1 h 9 l 5,1 z\"\n             id=\"path3878\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 9998,11778 3896,6101 -43,27 -43,27 -3896,-6101 43,-27 z\"\n             id=\"path3880\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 13851,17906 -30,41 -7,-6 -5,-6 -1,-2 z\"\n             id=\"path3882\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 13881,17865 876,637 -30,41 -30,41 -876,-637 30,-41 z\"\n             id=\"path3884\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 14727,18543 30,-41 7,6 5,6 5,8 2,9 2,8 v 9 l -2,9 -3,8 -5,8 -6,7 -6,5 -8,5 -9,2 -8,2 h -2 z\"\n             id=\"path3886\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 14729,18594 -1412,45 -2,-51 -2,-51 1412,-45 2,51 z\"\n             id=\"path3888\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 13315,18588 -49,-14 3,-8 4,-8 6,-6 7,-6 8,-4 8,-3 9,-2 h 2 z\"\n             id=\"path3890\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 13364,18602 -438,1594 -49,-14 -49,-14 438,-1594 49,14 z\"\n             id=\"path3892\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12877,20182 49,14 -3,8 -4,8 -6,6 -7,6 -8,4 -8,3 -9,2 h -9 l -9,-2 -8,-3 -8,-4 -6,-6 -6,-7 -4,-8 -2,-3 z\"\n             id=\"path3894\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12829,20200 -586,-1594 48,-18 48,-18 586,1594 -48,18 z\"\n             id=\"path3896\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12291,18588 -8,-50 9,-1 9,1 8,2 8,4 8,6 6,6 5,7 3,7 z\"\n             id=\"path3898\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12299,18638 -1460,229 -8,-50 -8,-50 1460,-229 8,50 z\"\n             id=\"path3900\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 10831,18817 8,50 -9,1 -9,-1 -8,-2 -8,-4 -8,-6 -6,-6 -5,-7 -3,-8 -2,-9 -1,-9 1,-9 2,-8 4,-8 6,-8 4,-4 z\"\n             id=\"path3902\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 10797,18779 1606,-1411 34,38 34,38 -1606,1411 -34,-38 z\"\n             id=\"path3904\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12437,17406 43,-28 4,8 3,9 1,8 v 9 l -2,9 -4,8 -4,8 -6,6 -1,1 z\"\n             id=\"path3906\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 12394,17434 -3798,-5873 43,-28 43,-28 3798,5873 -43,28 z\"\n             id=\"path3908\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 8639,11533 16,-48 8,3 8,5 6,6 5,6 z\"\n             id=\"path3910\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 8623,11581 -2970,-1001 16,-48 16,-48 2970,1001 -16,48 z\"\n             id=\"path3912\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 5669,10532 -16,48 -8,-3 -8,-5 -6,-6 -6,-7 -3,-8 -3,-9 -1,-9 1,-9 2,-8 3,-8 5,-8 6,-6 z\"\n             id=\"path3914\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 5635,10494 1072,-957 34,38 34,38 -1072,957 -34,-38 z\"\n             id=\"path3916\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 6741,9575 50,-9 1,9 -1,8 -2,9 -4,8 -5,7 -5,6 z\"\n             id=\"path3918\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 6691,9584 -293,-1592 50,-9 50,-9 293,1592 -50,9 z\"\n             id=\"path3920\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 6448,7983 -50,9 -1,-9 1,-8 2,-9 4,-8 5,-7 6,-7 7,-5 8,-4 9,-2 9,-1 v 0 z\"\n             id=\"path3922\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 6448,7932 h 633 v 51 51 h -633 v -51 z\"\n             id=\"path3924\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 7081,7983 v -51 l 9,1 8,2 8,4 8,5 6,6 3,3 z\"\n             id=\"path3926\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 7123,7953 974,1365 -42,30 -42,30 -974,-1365 42,-30 z\"\n             id=\"path3928\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 8055,9348 2,51 h -9 l -8,-2 -9,-4 -7,-5 -7,-6 -4,-4 z\"\n             id=\"path3930\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 8053,9297 2191,-91 2,51 2,51 -2191,91 -2,-51 z\"\n             id=\"path3932\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 10246,9257 24,45 -8,3 -8,2 -6,1 z\"\n             id=\"path3934\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 10222,9212 1169,-637 24,45 24,45 -1169,637 -24,-45 z\"\n             id=\"path3936\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 11415,8620 51,5 -2,9 -3,8 -5,8 -5,7 -7,5 -5,3 z\"\n             id=\"path3938\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 11364,8615 146,-1458 51,5 51,5 -146,1458 -51,-5 z\"\n             id=\"path3940\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 11561,7162 20,-47 8,4 7,6 6,6 4,8 4,8 2,9 v 8 3 z\"\n             id=\"path3942\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 11541,7209 -6184,-2594 20,-47 20,-47 6184,2594 -20,47 z\"\n             id=\"path3944\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 5377,4568 -42,-28 5,-7 7,-6 8,-5 8,-3 9,-2 h 9 l 8,2 8,2 z\"\n             id=\"path3946\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3950\"\n           style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n      </g>\n    </g>\n    <g\n       id=\"g3980\"\n       style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n      <desc\n         id=\"desc3956\">Drawing</desc>\n      <g\n         id=\"g3978\"\n         style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\">\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3960\">\n          <path\n             d=\"m 11513,9849 -1120,1184 -1218,-501 z\"\n             id=\"path3958\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           style=\"fill:#f2292a;stroke:none;stroke-opacity:1;fill-opacity:1\"\n           id=\"g3974\">\n          <path\n             d=\"m 11550,9884 -1120,1184 -37,-35 -37,-35 1120,-1184 37,35 z\"\n             id=\"path3962\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 10393,11033 37,35 -7,6 -7,5 -8,3 -9,2 h -9 l -9,-1 -7,-3 z\"\n             id=\"path3964\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 10374,11080 -1218,-501 19,-47 19,-47 1218,501 -19,47 z\"\n             id=\"path3966\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 9175,10532 -19,47 -8,-4 -7,-5 -6,-7 -5,-7 -4,-9 -2,-8 v -9 l 1,-9 3,-8 4,-8 5,-7 7,-6 7,-5 9,-4 h 1 z\"\n             id=\"path3968\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 9161,10483 2338,-683 14,49 14,49 -2338,683 -14,-49 z\"\n             id=\"path3970\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n          <path\n             d=\"m 11513,9849 -14,-49 8,-2 h 9 l 9,1 9,3 7,5 7,5 6,7 5,7 3,9 2,8 v 9 l -1,9 -3,9 -5,7 -5,7 z\"\n             id=\"path3972\"\n             style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n        </g>\n        <g\n           id=\"g3976\"\n           style=\"stroke:none;stroke-opacity:1;fill:#f2292a;fill-opacity:1\" />\n      </g>\n    </g>\n  </g>\n</svg>";


/***/ }),

/***/ "anf1":
/*!************************************************************************************!*\
  !*** ./src/ui/modules/ask-before-cancel/directives/ask-before-cancel.directive.ts ***!
  \************************************************************************************/
/*! exports provided: AskBeforeCancelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskBeforeCancelDirective", function() { return AskBeforeCancelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



var AskBeforeCancelDirective = /** @class */ (function () {
    function AskBeforeCancelDirective(el) {
        this.answer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AskBeforeCancelDirective.prototype.onMouseEnter = function () {
        if (this.form && this.form.dirty) {
            this.answer.next(confirm(this.message));
        }
        else {
            this.answer.next(true);
        }
    };
    AskBeforeCancelDirective.ɵfac = function AskBeforeCancelDirective_Factory(t) { return new (t || AskBeforeCancelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    AskBeforeCancelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AskBeforeCancelDirective, selectors: [["", "askBeforeCancel", ""]], hostBindings: function AskBeforeCancelDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AskBeforeCancelDirective_click_HostBindingHandler() { return ctx.onMouseEnter(); });
        } }, inputs: { form: "form", message: "message" }, outputs: { answer: "answer" } });
    return AskBeforeCancelDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AskBeforeCancelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[askBeforeCancel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], answer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "bl52":
/*!********************************************!*\
  !*** ./src/ui/models/svg-icons/magnify.ts ***!
  \********************************************/
/*! exports provided: MAGNIFY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGNIFY", function() { return MAGNIFY; });
var MAGNIFY = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"85.785px\" height=\"91.93px\" viewBox=\"0 0 85.785 91.93\" enable-background=\"new 0 0 85.785 91.93\" xml:space=\"preserve\">\n<g>\n<g>\n   <path fill=\"#045748\" d=\"M50.691,67.235l20.385,22.892c1.995,2.229,5.419,2.418,7.646,0.422l5.649-5.056\n       c2.229-1.998,1.609-4.698-0.387-6.925L63.978,56.225\"/>\n</g>\n<circle fill=\"none\" stroke=\"#005647\" stroke-width=\"10\" cx=\"35.482\" cy=\"35.482\" r=\"30.482\"/>\n</g>\n</svg>";


/***/ }),

/***/ "c/YZ":
/*!****************************************************!*\
  !*** ./src/ui/helpers/component-can-deactivate.ts ***!
  \****************************************************/
/*! exports provided: CanDeactivateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateMixin", function() { return CanDeactivateMixin; });
/* harmony import */ var _modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component */ "ronc");

var CanDeactivateMixin = /** @class */ (function () {
    function CanDeactivateMixin(dialog) {
        this.dialog = dialog;
        this.unsavedChanges = false;
    }
    CanDeactivateMixin.prototype.canDeactivate = function () {
        if (this.unsavedChanges) {
            this.modalRef = this.dialog.open(_modules_confirm_dialog_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"], {
                data: {
                    titleKey: this.saveTitleKey,
                    messageKey: this.saveMessageKey,
                    okBtnKey: this.okBtnKey,
                    cancelBtnKey: this.cancelBtnKey,
                    okBtnColor: 'primary'
                }
            });
            return this.modalRef.afterClosed();
        }
        else {
            return true;
        }
    };
    CanDeactivateMixin.prototype.dataChanged = function () {
        this.unsavedChanges = true;
    };
    return CanDeactivateMixin;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../presidentes/presidentes.module": "Nskb",
	"./sindictaduras-web/sindictaduras-web.module": "Yktm"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "d2QS":
/*!***************************************************************!*\
  !*** ./src/ui/modules/image-upload/services/image.service.ts ***!
  \***************************************************************/
/*! exports provided: ImagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesService", function() { return ImagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _common_error_handling_interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/error-handling/interceptors/http-headers-interceptor.service */ "/XId");
/* harmony import */ var _common_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/config/services/config.service */ "1WeG");


//






var ImagesService = /** @class */ (function () {
    function ImagesService(configService, http, httpHeaders) {
        this.configService = configService;
        this.http = http;
        this.httpHeaders = httpHeaders;
        this.apiEndpoint = this.configService.apiUrl + this.configService.config.apiConfigs.file.apiEndpoint;
    }
    ImagesService.prototype.postImagenPresidente = function (file, presidenteId) {
        var requestOptions = { headers: this.httpHeaders.getHeaders() };
        console.log(requestOptions);
        requestOptions.headers = requestOptions.headers.delete('Content-Type');
        var formData = new FormData();
        formData.append('file', file);
        return this.http.post(this.apiEndpoint + 'presidente/' + presidenteId, formData, requestOptions);
    };
    ImagesService.ɵfac = function ImagesService_Factory(t) { return new (t || ImagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_error_handling_interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["HttpHeadersInterceptorService"])); };
    ImagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImagesService, factory: ImagesService.ɵfac, providedIn: 'root' });
    return ImagesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _common_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _common_error_handling_interceptors_http_headers_interceptor_service__WEBPACK_IMPORTED_MODULE_2__["HttpHeadersInterceptorService"] }]; }, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./index/index.component */ "sqmE");
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../ui/ui.module */ "od0u");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _sindictaduras_web_modules_presidentes_presidentes_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../sindictaduras-web/modules/presidentes/presidentes.module */ "Nskb");
/* harmony import */ var _sindictaduras_web_sindictaduras_web_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../sindictaduras-web/sindictaduras-web.module */ "Yktm");
/* harmony import */ var _examples_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./examples/contact-page/contact-page.component */ "S96s");





































var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesModule });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_15__["JwBootstrapSwitchNg2Module"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_20__["UiModule"],
                _sindictaduras_web_sindictaduras_web_module__WEBPACK_IMPORTED_MODULE_23__["SinDictadurasWebModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _sindictaduras_web_modules_presidentes_presidentes_module__WEBPACK_IMPORTED_MODULE_22__["PresidentesModule"]
            ]] });
    return PagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
        _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_18__["ProfilepageComponent"],
        _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_19__["RegisterpageComponent"],
        _examples_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_24__["ContactPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_15__["JwBootstrapSwitchNg2Module"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__["AlertModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"], _ui_ui_module__WEBPACK_IMPORTED_MODULE_20__["UiModule"],
        _sindictaduras_web_sindictaduras_web_module__WEBPACK_IMPORTED_MODULE_23__["SinDictadurasWebModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
        _sindictaduras_web_modules_presidentes_presidentes_module__WEBPACK_IMPORTED_MODULE_22__["PresidentesModule"]], exports: [_index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
        _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_18__["ProfilepageComponent"],
        _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_19__["RegisterpageComponent"],
        _examples_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_24__["ContactPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"].forRoot(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                    jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_15__["JwBootstrapSwitchNg2Module"],
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"].forRoot(),
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_11__["AlertModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_20__["UiModule"],
                    _sindictaduras_web_sindictaduras_web_module__WEBPACK_IMPORTED_MODULE_23__["SinDictadurasWebModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                    _sindictaduras_web_modules_presidentes_presidentes_module__WEBPACK_IMPORTED_MODULE_22__["PresidentesModule"]
                ],
                declarations: [
                    _index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
                    _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_18__["ProfilepageComponent"],
                    _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_19__["RegisterpageComponent"],
                    _examples_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_24__["ContactPageComponent"]
                ],
                exports: [
                    _index_index_component__WEBPACK_IMPORTED_MODULE_17__["IndexComponent"],
                    _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_18__["ProfilepageComponent"],
                    _examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_19__["RegisterpageComponent"],
                    _examples_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_24__["ContactPageComponent"]
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "e1+T":
/*!*****************************************!*\
  !*** ./src/ui/models/svg-icons/user.ts ***!
  \*****************************************/
/*! exports provided: USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER", function() { return USER; });
var USER = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" width=\"94px\" height=\"90px\" viewBox=\"0 0 94 90\" enable-background=\"new 0 0 94 90\" xml:space=\"preserve\">\n<g>\n\t<path fill=\"#045748\" d=\"M73.602,67.239c-12.326-4.492-16.266-8.281-16.266-16.395c0-4.871,3.764-3.28,5.416-12.2   c0.686-3.7,4.01-0.06,4.646-8.507c0-3.367-1.814-4.203-1.814-4.203s0.922-4.982,1.283-8.816C67.314,12.342,64.107,0,47,0   S26.684,12.342,27.133,17.119c0.361,3.834,1.283,8.816,1.283,8.816s-1.814,0.836-1.814,4.203c0.635,8.447,3.959,4.807,4.645,8.507   c1.654,8.919,5.416,7.329,5.416,12.2c0,8.113-3.938,11.902-16.264,16.395C8.033,71.745,0,76.339,0,79.473C0,82.604,0,90,0,90h47h47   c0,0,0-7.396,0-10.527C94,76.339,85.967,71.745,73.602,67.239z\"/>\n</g>\n</svg>";


/***/ }),

/***/ "fCae":
/*!****************************************************************!*\
  !*** ./src/ui/modules/error-messages/error-messages.module.ts ***!
  \****************************************************************/
/*! exports provided: ErrorMessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesModule", function() { return ErrorMessagesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error-messages/error-messages.component */ "i4ie");
/* harmony import */ var _capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../capitalize-word/capitalize-word.module */ "JoXL");


//


//



var ErrorMessagesModule = /** @class */ (function () {
    function ErrorMessagesModule() {
    }
    ErrorMessagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ErrorMessagesModule });
    ErrorMessagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ErrorMessagesModule_Factory(t) { return new (t || ErrorMessagesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_5__["CapitalizeWordModule"]
            ]] });
    return ErrorMessagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ErrorMessagesModule, { declarations: [_components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
        _capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_5__["CapitalizeWordModule"]], exports: [_components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorMessagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                    _capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_5__["CapitalizeWordModule"]
                ],
                declarations: [
                    _components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesComponent"]
                ],
                exports: [
                    _components_error_messages_error_messages_component__WEBPACK_IMPORTED_MODULE_4__["ErrorMessagesComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "fPXp":
/*!******************************************************************************************************************!*\
  !*** ./src/ui/modules/spinner-indicator-200/components/spinner-indicator-200/spinner-indicator-200.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SpinnerIndicator200Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerIndicator200Component", function() { return SpinnerIndicator200Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var SpinnerIndicator200Component = /** @class */ (function () {
    function SpinnerIndicator200Component() {
        this.width = '200px';
        this.height = '200px';
    }
    SpinnerIndicator200Component.ɵfac = function SpinnerIndicator200Component_Factory(t) { return new (t || SpinnerIndicator200Component)(); };
    SpinnerIndicator200Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerIndicator200Component, selectors: [["spinner-indicator-200"]], inputs: { width: "width", height: "height" }, decls: 37, vars: 2, consts: [["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 1, "lds-spinner", 2, "background", "transparent none repeat scroll 0% 0%"], ["transform", "rotate(0 50 50)"], ["x", "47", "y", "24", "rx", "9.4", "ry", "4.8", "width", "6", "height", "12", "fill", "#000000"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.9166666666666666s", "repeatCount", "indefinite"], ["transform", "rotate(30 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.8333333333333334s", "repeatCount", "indefinite"], ["transform", "rotate(60 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.75s", "repeatCount", "indefinite"], ["transform", "rotate(90 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.6666666666666666s", "repeatCount", "indefinite"], ["transform", "rotate(120 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.5833333333333334s", "repeatCount", "indefinite"], ["transform", "rotate(150 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.5s", "repeatCount", "indefinite"], ["transform", "rotate(180 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.4166666666666667s", "repeatCount", "indefinite"], ["transform", "rotate(210 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.3333333333333333s", "repeatCount", "indefinite"], ["transform", "rotate(240 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.25s", "repeatCount", "indefinite"], ["transform", "rotate(270 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.16666666666666666s", "repeatCount", "indefinite"], ["transform", "rotate(300 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "-0.08333333333333333s", "repeatCount", "indefinite"], ["transform", "rotate(330 50 50)"], ["attributeName", "opacity", "values", "1;0", "times", "0;1", "dur", "1s", "begin", "0s", "repeatCount", "indefinite"]], template: function SpinnerIndicator200Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "animate", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "animate", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "animate", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "animate", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "animate", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "animate", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "animate", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "animate", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "animate", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "animate", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "animate", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "rect", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "animate", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.width)("height", ctx.height);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLWluZGljYXRvci0yMDAuY29tcG9uZW50LmNzcyJ9 */"] });
    return SpinnerIndicator200Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerIndicator200Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'spinner-indicator-200',
                templateUrl: './spinner-indicator-200.component.html',
                styleUrls: ['./spinner-indicator-200.component.css']
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fVzh":
/*!******************************************!*\
  !*** ./src/ui/models/svg-icons/icons.ts ***!
  \******************************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var _event_detectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-detectors */ "s872");
/* harmony import */ var _event_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-dispatcher */ "lwKv");
/* harmony import */ var _event_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-views */ "GPLj");
/* harmony import */ var _globe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globe */ "wsHQ");
/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./groups */ "rp3/");
/* harmony import */ var _magnify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./magnify */ "bl52");
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password */ "MH2F");
/* harmony import */ var _pen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pen */ "NX4o");
/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics */ "O/Hd");
/* harmony import */ var _system_administration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system-administration */ "uxjj");
/* harmony import */ var _trash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trash */ "iP//");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user */ "e1+T");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style */ "O+Ig");
/* harmony import */ var _fist_up__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fist-up */ "2zLe");
/* harmony import */ var _fist_up_red__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fist-up-red */ "afxl");















var ICONS = [
    { iconName: 'moresneakers-event-detectors', literal: _event_detectors__WEBPACK_IMPORTED_MODULE_0__["EVENT_DETECTORS"] },
    { iconName: 'moresneakers-event-dispatcher', literal: _event_dispatcher__WEBPACK_IMPORTED_MODULE_1__["EVENT_DISPATCHER"] },
    { iconName: 'moresneakers-event-views', literal: _event_views__WEBPACK_IMPORTED_MODULE_2__["EVENT_VIEWS"] },
    { iconName: 'moresneakers-globe', literal: _globe__WEBPACK_IMPORTED_MODULE_3__["GLOBE"] },
    { iconName: 'moresneakers-groups', literal: _groups__WEBPACK_IMPORTED_MODULE_4__["GROUPS"] },
    { iconName: 'moresneakers-magnify', literal: _magnify__WEBPACK_IMPORTED_MODULE_5__["MAGNIFY"] },
    { iconName: 'moresneakers-password', literal: _password__WEBPACK_IMPORTED_MODULE_6__["PASSWORD"] },
    { iconName: 'moresneakers-pen', literal: _pen__WEBPACK_IMPORTED_MODULE_7__["PEN"] },
    { iconName: 'moresneakers-statistics', literal: _statistics__WEBPACK_IMPORTED_MODULE_8__["STATISTICS"] },
    { iconName: 'moresneakers-system-administration', literal: _system_administration__WEBPACK_IMPORTED_MODULE_9__["SYSTEM_ADMINISTRATION"] },
    { iconName: 'moresneakers-trash', literal: _trash__WEBPACK_IMPORTED_MODULE_10__["TRASH"] },
    { iconName: 'moresneakers-user', literal: _user__WEBPACK_IMPORTED_MODULE_11__["USER"] },
    { iconName: 'moresneakers-style', literal: _style__WEBPACK_IMPORTED_MODULE_12__["STYLE"] },
    //
    { iconName: 'fist-up', literal: _fist_up__WEBPACK_IMPORTED_MODULE_13__["FIST_UP"] },
    { iconName: 'fist-up-red', literal: _fist_up_red__WEBPACK_IMPORTED_MODULE_14__["FIST_UP_RED"] }
];


/***/ }),

/***/ "fjjy":
/*!*****************************************************************!*\
  !*** ./src/common/validation/helpers/digits-count-validator.ts ***!
  \*****************************************************************/
/*! exports provided: digitsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digitsCount", function() { return digitsCount; });
function digitsCount(minRequired) {
    return function (control) {
        var inputValue = control.value;
        if (inputValue && minRequired && minRequired > 0) {
            var regExp = new RegExp(/([^0-9])/ig);
            var valueSplit = inputValue.replace(regExp, '');
            var isValid = valueSplit.length >= minRequired ? true : false;
            return isValid ? null : { 'passwordStrength': { 'digitsCount': { value: control.value } } };
        }
        return null;
    };
}


/***/ }),

/***/ "gHp3":
/*!*************************************************************!*\
  !*** ./src/common/error-handling/services/alert.service.ts ***!
  \*************************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component */ "qqib");





var AlertService = /** @class */ (function () {
    function AlertService(snackBar) {
        this.snackBar = snackBar;
    }
    AlertService.prototype.success = function (message, action) {
        if (action === void 0) { action = null; }
        this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["CustomSnackbarComponent"], {
            data: { messageType: 'Success', messageData: message, messageTitle: action ? action : 'Success' },
            duration: 6000,
            horizontalPosition: 'right',
            panelClass: ['success-snackbar'],
        });
    };
    AlertService.prototype.error = function (message, action) {
        if (action === void 0) { action = null; }
        this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["CustomSnackbarComponent"], {
            data: { messageType: 'Error', messageData: message, messageTitle: action ? action : 'Error' },
            duration: 4000,
            horizontalPosition: 'right',
            panelClass: ['error-snackbar'],
        });
    };
    AlertService.prototype.info = function (message, action) {
        if (action === void 0) { action = null; }
        return this.snackBar.openFromComponent(_modules_custom_snackbar_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_2__["CustomSnackbarComponent"], {
            data: { messageType: 'Info', messageData: message, messageTitle: action ? action : 'Info' },
            duration: 6000,
            horizontalPosition: 'right',
            panelClass: ['info-snackbar'],
        });
    };
    AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
    return AlertService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "gm1B":
/*!*********************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/votacion/services/votacion.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ASCENDING, VotacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotacionService", function() { return VotacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/error-handling/services/error-handling-http.service */ "3MQd");
/* harmony import */ var _common_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/config/services/config.service */ "1WeG");


//




var ASCENDING = 'asc';
var VotacionService = /** @class */ (function () {
    function VotacionService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'updatedAt';
        this.previousSortDirection = 'desc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.apiEndpoint = this.configService.apiUrl + this.configService.config.apiConfigs.votacion.apiEndpoint;
    }
    VotacionService.prototype.realizarVotacion = function (votacion) {
        return this.http.post(this.apiEndpoint, votacion);
    };
    VotacionService.prototype.cargarVotacion = function (presidenteId) {
        return this.http.get(this.apiEndpoint + 'cargarVotacion/' + presidenteId);
    };
    VotacionService.ɵfac = function VotacionService_Factory(t) { return new (t || VotacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"])); };
    VotacionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VotacionService, factory: VotacionService.ɵfac, providedIn: 'root' });
    return VotacionService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VotacionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _common_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }, { type: _common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"] }]; }, null); })();


/***/ }),

/***/ "gmUQ":
/*!******************************************************************************!*\
  !*** ./src/ui/components/base-reactive-form/base-reactive-form-component.ts ***!
  \******************************************************************************/
/*! exports provided: BaseReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseReactiveFormComponent", function() { return BaseReactiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





var BaseReactiveFormComponent = /** @class */ (function () {
    function BaseReactiveFormComponent(translateService) {
        var _this = this;
        this.translateService = translateService;
        this.showValidationError = true;
        this._validationErrorMessages = [];
        this.accept = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLangChange$ = this.translateService.onLangChange.subscribe(function () {
            _this.translateValidationErrorMessages();
            _this.onLanguageChange();
        });
    }
    Object.defineProperty(BaseReactiveFormComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseReactiveFormComponent.prototype, "validationErrors", {
        get: function () {
            return this._validationErrors;
        },
        set: function (validationErrors) {
            this._validationErrors = validationErrors;
            this.updateValidationAndValidity();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseReactiveFormComponent.prototype, "validationErrorMessages", {
        get: function () {
            return this._validationErrorMessages;
        },
        set: function (value) {
            this._validationErrorMessages = value;
            this.translateValidationErrorMessages();
        },
        enumerable: false,
        configurable: true
    });
    BaseReactiveFormComponent.prototype.submitClicked = function () {
        if (this.formGroup.valid) {
            this.accept.emit(this._data);
        }
        else {
            this.triggerValidation();
        }
    };
    BaseReactiveFormComponent.prototype.cancelClicked = function () {
        this.cancel.emit();
    };
    BaseReactiveFormComponent.prototype.triggerValidation = function () {
        this.executeInAllFormControls(function (path, formControl) {
            formControl.markAsTouched();
            formControl.updateValueAndValidity();
        });
    };
    BaseReactiveFormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.formGroupValueChanges$ = this.formGroup.valueChanges.subscribe(function (values) {
            if (_this.formGroup.dirty) {
                _this.data = Object.assign(_this.data, _this.formGroup.value);
                _this.dataChange.emit();
            }
        });
        this.onAfterViewInit();
    };
    BaseReactiveFormComponent.prototype.ngOnDestroy = function () {
        if (this.formGroupValueChanges$) {
            this.formGroupValueChanges$.unsubscribe();
        }
        if (this.onLangChange$) {
            this.onLangChange$.unsubscribe();
        }
        this.onDestroy();
    };
    BaseReactiveFormComponent.prototype.updateValidationAndValidity = function () {
        if (this.validationErrors) {
            this.executeInAllFormControls(function (path, formControl, data) {
                var control = data;
                for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                    var key = path_1[_i];
                    if (control[key]) {
                        if (typeof control[key] === 'string' || control[key].length > 0) {
                            formControl.setErrors({ message: control[key] });
                        }
                        else {
                            control = control[key];
                        }
                    }
                }
            }, this.validationErrors);
        }
    };
    BaseReactiveFormComponent.prototype.executeInAllFormControls = function (actionToExecute, data) {
        var _this = this;
        Object.keys(this.formGroup.controls).forEach(function (field) {
            var item = _this.formGroup.controls[field];
            var path = [];
            path.push(field);
            _this.executeInControl(path, item, actionToExecute, data);
        });
    };
    BaseReactiveFormComponent.prototype.executeInControl = function (path, item, actionToExecute, data) {
        var _this = this;
        if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
            actionToExecute(path, item, data);
            path.pop();
        }
        else if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"] || item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]) {
            Object.keys(item.controls).forEach(function (field) {
                var control = item.controls[field];
                path.push(field);
                _this.executeInControl(path, control, actionToExecute, data);
            });
        }
        else {
            return;
        }
    };
    BaseReactiveFormComponent.prototype.translateValidationErrorMessages = function () {
        var _this = this;
        var newTranslations = [];
        this.validationErrorMessages.forEach(function (value) {
            newTranslations.push({
                type: value.type,
                key: value.key,
                params: value.params,
                translation: _this.translateService.instant(value.key, value.params)
            });
        });
        this._validationErrorMessages = newTranslations;
    };
    BaseReactiveFormComponent.prototype.onLanguageChange = function () {
    };
    BaseReactiveFormComponent.prototype.onDestroy = function () {
    };
    BaseReactiveFormComponent.prototype.onAfterViewInit = function () {
    };
    BaseReactiveFormComponent.ɵfac = function BaseReactiveFormComponent_Factory(t) { return new (t || BaseReactiveFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
    BaseReactiveFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseReactiveFormComponent, selectors: [["ng-component"]], inputs: { data: "data", validationErrors: "validationErrors" }, outputs: { accept: "accept", cancel: "cancel", dataChange: "dataChange" }, decls: 0, vars: 0, template: function BaseReactiveFormComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return BaseReactiveFormComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseReactiveFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: ''
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, { accept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dataChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], validationErrors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "i4ie":
/*!*********************************************************************************************!*\
  !*** ./src/ui/modules/error-messages/components/error-messages/error-messages.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ErrorMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesComponent", function() { return ErrorMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _capitalize_word_pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../capitalize-word/pipes/capitalize-word.pipe */ "w5Yz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");


//








function ErrorMessagesComponent_mat_icon_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.errorToDisplay);
} }
var ErrorMessagesComponent = /** @class */ (function () {
    function ErrorMessagesComponent(controlContainer, capitalizeWordPipe) {
        this.controlContainer = controlContainer;
        this.capitalizeWordPipe = capitalizeWordPipe;
        this.errorToDisplay = '';
        this.displayError = true;
    }
    Object.defineProperty(ErrorMessagesComponent.prototype, "validationErrorMessages", {
        get: function () {
            return this._validationErrorMessages;
        },
        set: function (value) {
            this._validationErrorMessages = value;
            this.checkAndBuildErrorMessage();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorMessagesComponent.prototype, "hostClasses", {
        get: function () {
            return [
                this.formControl.dirty ? 'ng-dirty' : '',
                this.formControl.invalid ? 'ng-invalid' : '',
                this.formControl.pristine ? 'ng-pristine' : '',
                this.formControl.touched ? 'ng-touched' : '',
                this.formControl.untouched ? 'ng-untouched' : '',
                this.formControl.valid ? 'ng-valid' : ''
            ].join(' ');
        },
        enumerable: false,
        configurable: true
    });
    ErrorMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formControl = this.controlContainer.control.get(this.for);
        this.formControlChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.formControl.valueChanges, this.formControl.statusChanges).subscribe(function () {
            _this.checkAndBuildErrorMessage();
        });
        this.checkAndBuildErrorMessage();
    };
    ErrorMessagesComponent.prototype.ngOnDestroy = function () {
        if (this.formControlChanges) {
            this.formControlChanges.unsubscribe();
        }
    };
    ErrorMessagesComponent.prototype.checkAndBuildErrorMessage = function () {
        var errors = '';
        if (this.formControl) {
            if (this.formControl.errors && this.formControl.errors.message && this.formControl.errors.message !== '') {
                this.errorToDisplay = this.capitalizeWordPipe.transform(this.formControl.errors.message.constructor === Array ?
                    this.formControl.errors.message.join(' ') : this.formControl.errors.message);
            }
            else {
                for (var key in Object.keys(this._validationErrorMessages)) {
                    if (key ? (this.formControl.errors && this.formControl.errors[this._validationErrorMessages[key].type]) :
                        (this.formControl.errors && this.formControl.errors[this._validationErrorMessages[key].type])) {
                        errors = this.capitalizeWordPipe.transform(this._validationErrorMessages[key].translation);
                        break;
                    }
                }
                this.errorToDisplay = errors;
            }
        }
    };
    ErrorMessagesComponent.ɵfac = function ErrorMessagesComponent_Factory(t) { return new (t || ErrorMessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_capitalize_word_pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeWordPipe"])); };
    ErrorMessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorMessagesComponent, selectors: [["error-messages"]], hostVars: 2, hostBindings: function ErrorMessagesComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.hostClasses);
        } }, inputs: { validationErrorMessages: "validationErrorMessages", displayError: "displayError", for: "for" }, decls: 1, vars: 1, consts: [["class", "cursor-default", "color", "warn", 3, "matTooltip", 4, "ngIf"], ["color", "warn", 1, "cursor-default", 3, "matTooltip"]], template: function ErrorMessagesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorMessagesComponent_mat_icon_0_Template, 2, 1, "mat-icon", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorToDisplay !== "" && ctx.displayError);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"]], styles: [".ng-invalid.ng-untouched[_nghost-%COMP%] {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImVycm9yLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC5uZy1pbnZhbGlkLm5nLXVudG91Y2hlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
    return ErrorMessagesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'error-messages',
                templateUrl: 'error-messages.component.html',
                styleUrls: ['error-messages.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"] }, { type: _capitalize_word_pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_3__["CapitalizeWordPipe"] }]; }, { validationErrorMessages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], for: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hostClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }] }); })();


/***/ }),

/***/ "iFtz":
/*!**************************************************************************************!*\
  !*** ./src/ui/modules/ask-before-refresh/directives/ask-before-refresh.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: AskBeforeRefreshDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskBeforeRefreshDirective", function() { return AskBeforeRefreshDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var AskBeforeRefreshDirective = /** @class */ (function () {
    function AskBeforeRefreshDirective(el) {
        var _this = this;
        this.askBeforeRefresh = function (event) {
            var confirmationMessage = 'show';
            if (!_this.isDirtyForm) {
                return true;
            }
            event.returnValue = confirmationMessage;
            return confirmationMessage;
        };
    }
    AskBeforeRefreshDirective.prototype.ngOnInit = function () {
        window.addEventListener('beforeunload', this.askBeforeRefresh);
    };
    AskBeforeRefreshDirective.prototype.ngOnDestroy = function () {
        window.removeEventListener('beforeunload', this.askBeforeRefresh);
    };
    AskBeforeRefreshDirective.ɵfac = function AskBeforeRefreshDirective_Factory(t) { return new (t || AskBeforeRefreshDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    AskBeforeRefreshDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AskBeforeRefreshDirective, selectors: [["", "askBeforeRefresh", ""]], inputs: { isDirtyForm: ["askBeforeRefresh", "isDirtyForm"] } });
    return AskBeforeRefreshDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AskBeforeRefreshDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[askBeforeRefresh]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { isDirtyForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['askBeforeRefresh']
        }] }); })();


/***/ }),

/***/ "iP//":
/*!******************************************!*\
  !*** ./src/ui/models/svg-icons/trash.ts ***!
  \******************************************/
/*! exports provided: TRASH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRASH", function() { return TRASH; });
var TRASH = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"79.359px\" height=\"98.187px\" viewBox=\"0 0 79.359 98.187\" enable-background=\"new 0 0 79.359 98.187\" xml:space=\"preserve\">\n<path fill=\"#045748\" d=\"M56.698,10.977V0H22.64v10.977L0,10.94v9.704h79.344l0.016-9.667H56.698z M50.57,10.963H28.31V5.85h22.26\n\tV10.963z\"/>\n<path fill=\"#045748\" d=\"M5.719,24.572v65.83c0,3.415,3.052,7.784,6.782,7.784h54.256c3.73,0,6.782-4.369,6.782-7.784v-65.83H5.719z\n\t M20.462,89.63h-6.93V30.533h6.93V89.63z M35.442,89.63h-6.931V30.533h6.931V89.63z M50.422,89.63H43.49V30.533h6.932V89.63z\n\t M65.401,89.63h-6.931V30.533h6.931V89.63z\"/>\n</svg>";


/***/ }),

/***/ "k7wE":
/*!*********************************************************************************************************************!*\
  !*** ./src/ui/modules/confirm-dialog-message/components/confirm-dialog-message/confirm-dialog-message.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ConfirmDialogMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogMessageComponent", function() { return ConfirmDialogMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












var ConfirmDialogMessageComponent = /** @class */ (function () {
    function ConfirmDialogMessageComponent(translate, dialogRef, data) {
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.data = data;
        this.titleKey = 'Title';
        this.messageKey = 'Message';
        this.messageParam = {};
        this.okBtnKey = 'Accept';
        this.cancelBtnKey = 'Cancel';
        this.confirmDelete = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        //setTranslations(this.translate, TRANSLATIONS);
    }
    ConfirmDialogMessageComponent.prototype.accept = function () {
        if (this.confirmDelete.value === "YES") {
            this.dialogRef.close(true);
        }
    };
    ConfirmDialogMessageComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    ConfirmDialogMessageComponent.ɵfac = function ConfirmDialogMessageComponent_Factory(t) { return new (t || ConfirmDialogMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
    ConfirmDialogMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogMessageComponent, selectors: [["confirm-dialog-message"]], decls: 16, vars: 16, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 3, "ngStyle", "innerHtml"], [1, "width-100pc", "margin-left-16px"], ["matInput", "", "type", "text", "matNativeControl", "", 3, "formControl"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "color", "click"], ["mat-raised-button", "", 3, "click"]], template: function ConfirmDialogMessageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "YES");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogMessageComponent_Template_button_click_10_listener() { return ctx.accept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogMessageComponent_Template_button_click_13_listener() { return ctx.cancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, ctx.data && ctx.data.titleKey ? ctx.data.titleKey : ctx.titleKey));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx.data && ctx.data.messageKey ? ctx.data.messageKey : ctx.messageKey, ctx.data && ctx.data.messageParam ? ctx.data.messageParam : ctx.messageParam), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.data.contentStyle ? ctx.data.contentStyle : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.confirmDelete);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.data.okBtnColor ? ctx.data.okBtnColor : "warn");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, ctx.data && ctx.data.okBtnKey ? ctx.data.okBtnKey : ctx.okBtnKey));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, ctx.data && ctx.data.cancelBtnKey ? ctx.data.cancelBtnKey : ctx.cancelBtnKey));
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAucGFuZWwgLnBhbmVsLWJvZHkge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn0iXX0= */"] });
    return ConfirmDialogMessageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'confirm-dialog-message',
                templateUrl: './confirm-dialog-message.component.html',
                styleUrls: ['./confirm-dialog-message.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "kKmI":
/*!****************************************!*\
  !*** ./src/common/ngrx/ngrx.module.ts ***!
  \****************************************/
/*! exports provided: NgrxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxModule", function() { return NgrxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_root_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/root-actions.service */ "TYli");


//



var NgrxModule = /** @class */ (function () {
    function NgrxModule() {
    }
    NgrxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgrxModule });
    NgrxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgrxModule_Factory(t) { return new (t || NgrxModule)(); }, providers: [
            _services_root_actions_service__WEBPACK_IMPORTED_MODULE_3__["RootActionsService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"]
            ]] });
    return NgrxModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgrxModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgrxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"]
                ],
                declarations: [],
                exports: [],
                providers: [
                    _services_root_actions_service__WEBPACK_IMPORTED_MODULE_3__["RootActionsService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lerV":
/*!**************************************************************************************!*\
  !*** ./src/common/error-handling/interceptors/error-handling-interceptor.service.ts ***!
  \**************************************************************************************/
/*! exports provided: ErrorHandlingInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlingInterceptorService", function() { return ErrorHandlingInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "yrbL");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error-handling.service */ "IqbY");


//


//




var ErrorHandlingInterceptorService = /** @class */ (function () {
    function ErrorHandlingInterceptorService(httpClient, errorHandlingService) {
        this.httpClient = httpClient;
        this.errorHandlingService = errorHandlingService;
    }
    ErrorHandlingInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (request) {
            if (request instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.errorHandlingService.serverOnline.next(true);
            }
            return request;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            // Common place where put code we want to execute for all the request when are success
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(_this.errorHandlingService.handleServiceError(error));
        }));
    };
    ErrorHandlingInterceptorService.ɵfac = function ErrorHandlingInterceptorService_Factory(t) { return new (t || ErrorHandlingInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"])); };
    ErrorHandlingInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlingInterceptorService, factory: ErrorHandlingInterceptorService.ɵfac, providedIn: 'root' });
    return ErrorHandlingInterceptorService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlingInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _services_error_handling_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlingService"] }]; }, null); })();


/***/ }),

/***/ "lfqm":
/*!*************************************************************************!*\
  !*** ./src/common/authentication/components/logout/logout.component.ts ***!
  \*************************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "vmVr");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/services/config.service */ "1WeG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _ui_services_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/services/title.service */ "03Ik");














var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, authService, configService, translate, titleService, errorHandlingService) {
        this.router = router;
        this.authService = authService;
        this.configService = configService;
        this.translate = translate;
        this.titleService = titleService;
        this.errorHandlingService = errorHandlingService;
        //setTranslations(this.translate, TRANSLATIONS);
    }
    LogoutComponent.prototype.ngAfterViewInit = function () {
        this.authService.logout();
        this.titleService.setTitle(null);
        this.router.navigate(this.authService.loginCommands, this.authService.loginNavigationExtras);
    };
    LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"])); };
    LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["logout"]], decls: 0, vars: 0, template: function LogoutComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] { \r\n    display: flex; \r\n    flex-direction:         column; \r\n    flex-grow:         1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQzJCLFdBQVc7SUFDbEMsYUFBYSxFQUVtQixXQUFXO0lBQzNDLDhCQUE4QixFQUVSLFdBQVc7SUFDakMsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImxvZ291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyAgICBcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDsgLyogU2FmYXJpICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogU2FmYXJpICovXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogICAgICAgICBjb2x1bW47XHJcblxyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7IC8qIFNhZmFyaSAqL1xyXG4gICAgZmxleC1ncm93OiAgICAgICAgIDE7XHJcbn0iXX0= */"] });
    return LogoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _ui_services_title_service__WEBPACK_IMPORTED_MODULE_6__["TitleService"] }, { type: _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlingService"] }]; }, null); })();


/***/ }),

/***/ "llRu":
/*!*************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/presidentes-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MsPresidentesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsPresidentesRoutingModule", function() { return MsPresidentesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/config/services/config-resolve.service */ "nMgP");
/* harmony import */ var _components_new_presidente_new_presidente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/new-presidente/new-presidente.component */ "D64r");
/* harmony import */ var _components_presidentes_table_presidentes_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/presidentes-table/presidentes-table.component */ "+It3");
/* harmony import */ var _components_edit_presidente_edit_presidente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-presidente/edit-presidente.component */ "/n1G");
/* harmony import */ var _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../routing/services/id-resolve.service */ "lvA6");


//







var routes = [
    {
        path: '',
        component: _components_presidentes_table_presidentes_table_component__WEBPACK_IMPORTED_MODULE_4__["PresidentesTableComponent"],
        resolve: {
            config: _common_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
        }
    },
    {
        path: 'create',
        component: _components_new_presidente_new_presidente_component__WEBPACK_IMPORTED_MODULE_3__["NewPresidenteComponent"],
        resolve: {
            config: _common_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
        },
        data: { closeRouteCommand: ['../'] }
    },
    {
        path: 'edit/:id',
        component: _components_edit_presidente_edit_presidente_component__WEBPACK_IMPORTED_MODULE_5__["EditPresidenteComponent"],
        // canActivate: [AuthGuardService],
        resolve: {
            config: _common_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_2__["ConfigResolveService"],
            presidenteId: _routing_services_id_resolve_service__WEBPACK_IMPORTED_MODULE_6__["IdResolveService"],
        },
        data: { closeRouteCommand: ['../../'] }
    },
];
var MsPresidentesRoutingModule = /** @class */ (function () {
    function MsPresidentesRoutingModule() {
    }
    MsPresidentesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MsPresidentesRoutingModule });
    MsPresidentesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MsPresidentesRoutingModule_Factory(t) { return new (t || MsPresidentesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MsPresidentesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MsPresidentesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsPresidentesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "lvA6":
/*!********************************************************!*\
  !*** ./src/app/routing/services/id-resolve.service.ts ***!
  \********************************************************/
/*! exports provided: IdResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdResolveService", function() { return IdResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var IdResolveService = /** @class */ (function () {
    function IdResolveService() {
    }
    IdResolveService.prototype.resolve = function (route) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(route.paramMap.get('id'));
    };
    IdResolveService.ɵfac = function IdResolveService_Factory(t) { return new (t || IdResolveService)(); };
    IdResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IdResolveService, factory: IdResolveService.ɵfac, providedIn: 'root' });
    return IdResolveService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "lwKv":
/*!*****************************************************!*\
  !*** ./src/ui/models/svg-icons/event-dispatcher.ts ***!
  \*****************************************************/
/*! exports provided: EVENT_DISPATCHER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DISPATCHER", function() { return EVENT_DISPATCHER; });
var EVENT_DISPATCHER = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"92px\" height=\"74px\" viewBox=\"0 0 92 74\" enable-background=\"new 0 0 92 74\" xml:space=\"preserve\">\n<path fill=\"#045748\" d=\"M89.47,0.173C87.752,0.779,2.864,30.692,1.193,31.281c-1.419,0.5-1.735,1.725-0.05,2.399\nc2.007,0.804,18.979,7.604,18.979,7.604h-0.002l11.253,4.51c0,0,54.187-39.792,54.924-40.333c0.736-0.542,1.589,0.475,1.052,1.056\nc-0.537,0.584-39.356,42.567-39.356,42.567c-0.002,0-0.002,0.002-0.002,0.002l-2.264,2.518l2.994,1.611v0.002\nc0,0,23.251,12.514,24.908,13.406c1.451,0.781,3.34,0.133,3.759-1.674c0.494-2.131,14.225-61.307,14.532-62.624\nC92.317,0.612,91.188-0.432,89.47,0.173z M31.271,72.81c0,1.234,0.693,1.577,1.655,0.703c1.254-1.137,14.245-12.796,14.245-12.796\nl-15.9-8.228V72.81z\"/>\n</svg>\n";


/***/ }),

/***/ "mLCQ":
/*!******************************************************************!*\
  !*** ./src/common/validation/helpers/special-chars-validator.ts ***!
  \******************************************************************/
/*! exports provided: specialChars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specialChars", function() { return specialChars; });
function specialChars(minRequired) {
    return function (control) {
        var inputValue = control.value;
        if (inputValue && minRequired && minRequired > 0) {
            var regExp = new RegExp(/([a-z0-9])/ig);
            var valueSplit = inputValue.replace(regExp, '');
            var isValid = valueSplit.length >= minRequired ? true : false;
            return isValid ? null : { 'passwordStrength': { 'specialCharsCount': { value: control.value } } };
        }
        return null;
    };
}


/***/ }),

/***/ "nMgP":
/*!**************************************************************!*\
  !*** ./src/common/config/services/config-resolve.service.ts ***!
  \**************************************************************/
/*! exports provided: ConfigResolveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigResolveService", function() { return ConfigResolveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "1WeG");




// import { setTranslations } from '@c/ngx-translate';
// import { ErrorHandlingService } from '@c/error-handling';
// import { TRANSLATIONS } from './i18n/config-resolve.service.translations';




var ConfigResolveService = /** @class */ (function () {
    function ConfigResolveService(/*private errorHandlinService: ErrorHandlingService,*/ configService, translate) {
        this.configService = configService;
        this.translate = translate;
        // setTranslations(this.translate, TRANSLATIONS);
    }
    ConfigResolveService.prototype.resolve = function (route) {
        if (this.configService.config) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.configService.config);
        }
        return this.configService.getConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            // this.errorHandlinService.handleUiError('@c/config/ConfigResolveService/Error', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    };
    ConfigResolveService.ɵfac = function ConfigResolveService_Factory(t) { return new (t || ConfigResolveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
    ConfigResolveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigResolveService, factory: ConfigResolveService.ɵfac, providedIn: 'root' });
    return ConfigResolveService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigResolveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "nZ0S":
/*!****************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/models/presidente.ts ***!
  \****************************************************************************/
/*! exports provided: Presidente, PresidentesResponse, PresidenteResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presidente", function() { return Presidente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentesResponse", function() { return PresidentesResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidenteResponse", function() { return PresidenteResponse; });
var Presidente = /** @class */ (function () {
    function Presidente() {
    }
    return Presidente;
}());

var PresidentesResponse = /** @class */ (function () {
    function PresidentesResponse() {
    }
    return PresidentesResponse;
}());

var PresidenteResponse = /** @class */ (function () {
    function PresidenteResponse() {
    }
    return PresidenteResponse;
}());



/***/ }),

/***/ "ngqe":
/*!****************************************************************!*\
  !*** ./src/ui/modules/confirm-dialog/confirm-dialog.module.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModule", function() { return ConfirmDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ "ronc");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


//

//





var ConfirmDialogModule = /** @class */ (function () {
    function ConfirmDialogModule() {
    }
    ConfirmDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ConfirmDialogModule });
    ConfirmDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ConfirmDialogModule_Factory(t) { return new (t || ConfirmDialogModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            ]] });
    return ConfirmDialogModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfirmDialogModule, { declarations: [_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]], exports: [_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                ],
                declarations: [
                    _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]
                ],
                exports: [
                    _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nhkn":
/*!*************************************************************************************!*\
  !*** ./src/common/http-request-indicator/services/indicated-interceptor.service.ts ***!
  \*************************************************************************************/
/*! exports provided: IndicatedInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndicatedInterceptor", function() { return IndicatedInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_request_indicators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-request-indicators.service */ "7XjW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





var IndicatedInterceptor = /** @class */ (function () {
    function IndicatedInterceptor(httpRequestIndicatorsService) {
        this.httpRequestIndicatorsService = httpRequestIndicatorsService;
    }
    IndicatedInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var indicators = this.httpRequestIndicatorsService.findIndicators(req.url.toString());
        indicators.forEach(function (indicator) { return indicator.show.next(true); });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            _this.httpRequestIndicatorsService.setLoading(true);
        }, function (error) { }, function () {
            indicators.forEach(function (indicator) { return indicator.show.next(false); });
        }));
    };
    IndicatedInterceptor.ɵfac = function IndicatedInterceptor_Factory(t) { return new (t || IndicatedInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_request_indicators_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestIndicatorsService"])); };
    IndicatedInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndicatedInterceptor, factory: IndicatedInterceptor.ɵfac });
    return IndicatedInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatedInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_request_indicators_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestIndicatorsService"] }]; }, null); })();


/***/ }),

/***/ "od0u":
/*!*****************************!*\
  !*** ./src/ui/ui.module.ts ***!
  \*****************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hammer_timejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammer-timejs */ "hkU9");
/* harmony import */ var hammer_timejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammer_timejs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_alert_dialog_alert_dialog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/alert-dialog/alert-dialog.module */ "FDOo");
/* harmony import */ var _modules_ask_before_cancel_ask_before_cancel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/ask-before-cancel/ask-before-cancel.module */ "WFee");
/* harmony import */ var _modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/ask-before-refresh/ask-before-refresh.module */ "zOv7");
/* harmony import */ var _modules_capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/capitalize-word/capitalize-word.module */ "JoXL");
/* harmony import */ var _modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/caps-lock/caps-lock.module */ "68UT");
/* harmony import */ var _modules_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/confirm-dialog/confirm-dialog.module */ "ngqe");
/* harmony import */ var _modules_confirm_dialog_message_confirm_dialog_message_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/confirm-dialog-message/confirm-dialog-message.module */ "QQzo");
/* harmony import */ var _modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/error-messages/error-messages.module */ "fCae");
/* harmony import */ var _modules_logo_logo_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/logo/logo.module */ "K/4U");
/* harmony import */ var _modules_session_expire_dialog_session_expire_dialog_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/session-expire-dialog/session-expire-dialog.module */ "qzae");
/* harmony import */ var _modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/spinner-indicator-200/spinner-indicator-200.module */ "Nxwy");
/* harmony import */ var _modules_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/image-upload/image-upload.module */ "zsIL");



//



//













var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiModule });
    UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiModule_Factory(t) { return new (t || UiModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                //
                _modules_alert_dialog_alert_dialog_module__WEBPACK_IMPORTED_MODULE_6__["AlertDialogModule"],
                _modules_ask_before_cancel_ask_before_cancel_module__WEBPACK_IMPORTED_MODULE_7__["AskBeforeCancelModule"],
                _modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_8__["AskBeforeRefreshModule"],
                _modules_capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_9__["CapitalizeWordModule"],
                _modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_10__["CapsLockModule"],
                _modules_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
                _modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_13__["ErrorMessagesModule"],
                _modules_logo_logo_module__WEBPACK_IMPORTED_MODULE_14__["LogoModule"],
                _modules_session_expire_dialog_session_expire_dialog_module__WEBPACK_IMPORTED_MODULE_15__["SessionExpireDialogModule"],
                _modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_16__["SpinnerIndicator200Module"],
                _modules_confirm_dialog_message_confirm_dialog_message_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogMessageModule"],
                _modules_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_17__["ImageUploadModule"]
            ]] });
    return UiModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
        //
        _modules_alert_dialog_alert_dialog_module__WEBPACK_IMPORTED_MODULE_6__["AlertDialogModule"],
        _modules_ask_before_cancel_ask_before_cancel_module__WEBPACK_IMPORTED_MODULE_7__["AskBeforeCancelModule"],
        _modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_8__["AskBeforeRefreshModule"],
        _modules_capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_9__["CapitalizeWordModule"],
        _modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_10__["CapsLockModule"],
        _modules_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
        _modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_13__["ErrorMessagesModule"],
        _modules_logo_logo_module__WEBPACK_IMPORTED_MODULE_14__["LogoModule"],
        _modules_session_expire_dialog_session_expire_dialog_module__WEBPACK_IMPORTED_MODULE_15__["SessionExpireDialogModule"],
        _modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_16__["SpinnerIndicator200Module"],
        _modules_confirm_dialog_message_confirm_dialog_message_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogMessageModule"],
        _modules_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_17__["ImageUploadModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                    //
                    _modules_alert_dialog_alert_dialog_module__WEBPACK_IMPORTED_MODULE_6__["AlertDialogModule"],
                    _modules_ask_before_cancel_ask_before_cancel_module__WEBPACK_IMPORTED_MODULE_7__["AskBeforeCancelModule"],
                    _modules_ask_before_refresh_ask_before_refresh_module__WEBPACK_IMPORTED_MODULE_8__["AskBeforeRefreshModule"],
                    _modules_capitalize_word_capitalize_word_module__WEBPACK_IMPORTED_MODULE_9__["CapitalizeWordModule"],
                    _modules_caps_lock_caps_lock_module__WEBPACK_IMPORTED_MODULE_10__["CapsLockModule"],
                    _modules_confirm_dialog_confirm_dialog_module__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogModule"],
                    _modules_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_13__["ErrorMessagesModule"],
                    _modules_logo_logo_module__WEBPACK_IMPORTED_MODULE_14__["LogoModule"],
                    _modules_session_expire_dialog_session_expire_dialog_module__WEBPACK_IMPORTED_MODULE_15__["SessionExpireDialogModule"],
                    _modules_spinner_indicator_200_spinner_indicator_200_module__WEBPACK_IMPORTED_MODULE_16__["SpinnerIndicator200Module"],
                    _modules_confirm_dialog_message_confirm_dialog_message_module__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogMessageModule"],
                    _modules_image_upload_image_upload_module__WEBPACK_IMPORTED_MODULE_17__["ImageUploadModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "ojJt":
/*!*********************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/usuarios/services/usuarios.service.ts ***!
  \*********************************************************************************/
/*! exports provided: ASCENDING, UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASCENDING", function() { return ASCENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/error-handling/services/error-handling-http.service */ "3MQd");
/* harmony import */ var _common_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/config/services/config.service */ "1WeG");


//




var ASCENDING = 'asc';
var UsuariosService = /** @class */ (function () {
    function UsuariosService(configService, http) {
        this.configService = configService;
        this.http = http;
        this.previousFilter = {};
        this.previousSortColumn = 'updatedAt';
        this.previousSortDirection = 'desc';
        this.previousPageIndex = 0;
        this.previousPageSize = 10;
        this.apiEndpoint = this.configService.apiUrl + this.configService.config.apiConfigs.usuarios.apiEndpoint;
    }
    UsuariosService.prototype.registrarUsuario = function (usuario) {
        return this.http.post(this.apiEndpoint + 'registro/', usuario);
    };
    UsuariosService.prototype.confirmarUsuario = function (codigo) {
        return this.http
            .post(this.apiEndpoint + 'confirmar/', codigo);
    };
    UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"])); };
    UsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });
    return UsuariosService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _common_config_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }, { type: _common_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_1__["ErrorHandlingHttpService"] }]; }, null); })();


/***/ }),

/***/ "oke5":
/*!**************************************************************************************!*\
  !*** ./src/ui/modules/image-upload/zoom-image-dialog/zoom-image-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ZoomImageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomImageDialogComponent", function() { return ZoomImageDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






var ZoomImageDialogComponent = /** @class */ (function () {
    function ZoomImageDialogComponent(dataReceived) {
        this.dataReceived = dataReceived;
        this.imgURL = './assets/img/no-image-available.png';
    }
    ZoomImageDialogComponent.prototype.ngOnInit = function () {
        this.imgURL = this.dataReceived.imgURL;
    };
    ZoomImageDialogComponent.ɵfac = function ZoomImageDialogComponent_Factory(t) { return new (t || ZoomImageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    ZoomImageDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoomImageDialogComponent, selectors: [["app-zoom-image-dialog"]], decls: 5, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "end start"], ["mat-icon-button", "", 3, "mat-dialog-close"], [1, "image", 3, "src"]], template: function ZoomImageDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".image[_ngcontent-%COMP%] {\n  width: auto;\n  height: 70vmin;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcem9vbS1pbWFnZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDRCIsImZpbGUiOiJ6b29tLWltYWdlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0aGVpZ2h0OiA3MHZtaW47XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"] });
    return ZoomImageDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomImageDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoom-image-dialog',
                templateUrl: './zoom-image-dialog.component.html',
                styleUrls: ['./zoom-image-dialog.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "pvPJ":
/*!*****************************************************************************************!*\
  !*** ./src/common/authentication/components/manage-session/manage-session.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManageSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageSessionComponent", function() { return ManageSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "vmVr");




var ManageSessionComponent = /** @class */ (function () {
    function ManageSessionComponent(authService) {
        this.authService = authService;
    }
    ManageSessionComponent.prototype.manageSession = function (addOrRemoveCounter) {
        var sessionCounterString = localStorage.getItem('tabCount');
        var sessionCounterActual = sessionCounterString !== undefined && sessionCounterString ? parseInt(localStorage.getItem('tabCount')) : 0;
        if (addOrRemoveCounter) {
            localStorage.setItem('tabCount', (sessionCounterActual + 1).toString());
        }
        else {
            sessionCounterActual = (sessionCounterActual - 1) >= 0 ? (sessionCounterActual - 1) : 0;
            localStorage.setItem('tabCount', sessionCounterActual.toString());
            if (sessionCounterActual === 0) {
                return this.updateExpirationTime();
            }
        }
        return true;
    };
    ManageSessionComponent.prototype.sleep = function (milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    };
    ManageSessionComponent.prototype.beforeUnloadHandler = function ($event) {
        this.manageSession(false);
        return true;
    };
    ManageSessionComponent.prototype.updateExpirationTime = function () {
        if (this.authService.currentUser) {
            this.authService.updateExpirationTime({ userActive: 0 }).subscribe(function () {
            });
            this.sleep(300);
            return false;
        }
        return true;
    };
    ManageSessionComponent.prototype.ngOnInit = function () {
        this.manageSession(true);
    };
    ManageSessionComponent.ɵfac = function ManageSessionComponent_Factory(t) { return new (t || ManageSessionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
    ManageSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageSessionComponent, selectors: [["manage-session"]], hostBindings: function ManageSessionComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function ManageSessionComponent_beforeunload_HostBindingHandler($event) { return ctx.beforeUnloadHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 0, vars: 0, template: function ManageSessionComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return ManageSessionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageSessionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'manage-session',
                template: ""
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, { beforeUnloadHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
        }] }); })();


/***/ }),

/***/ "q+X9":
/*!**********************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/usuarios/models/usuario.ts ***!
  \**********************************************************************/
/*! exports provided: Usuario, UsuariosResponse, UsuarioResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosResponse", function() { return UsuariosResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioResponse", function() { return UsuarioResponse; });
var Usuario = /** @class */ (function () {
    function Usuario(usuario) {
        this.nombre = usuario.name;
        this.apellido = usuario.lastName;
        this.email = usuario.email;
        this.usuario = usuario.email;
        this.contrasena = usuario.id;
        this.signInWithSocialNetwork = true;
    }
    return Usuario;
}());

var UsuariosResponse = /** @class */ (function () {
    function UsuariosResponse() {
    }
    return UsuariosResponse;
}());

var UsuarioResponse = /** @class */ (function () {
    function UsuarioResponse() {
    }
    return UsuarioResponse;
}());



/***/ }),

/***/ "qI6W":
/*!***********************************************************************************!*\
  !*** ./src/common/http-request-indicator/components/loading/loading.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 1, vars: 0, template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["MatSpinner"]], styles: ["svg[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n  .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\r\n    stroke: #888888;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdmcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5tYXQtc3Bpbm5lciBjaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjODg4ODg4O1xyXG59XHJcbiJdfQ== */"] });
    return LoadingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "qqib":
/*!*******************************************************************************************************************!*\
  !*** ./src/common/error-handling/modules/custom-snackbar/components/custom-snackbar/custom-snackbar.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: CustomSnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSnackbarComponent", function() { return CustomSnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


//






function CustomSnackbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSnackbarComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSnackbarComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx_r0.data.messageData), " ");
} }
function CustomSnackbarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSnackbarComponent_div_1_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSnackbarComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx_r1.data.messageData), " ");
} }
function CustomSnackbarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSnackbarComponent_div_2_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomSnackbarComponent_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx_r2.data.messageData), " ");
} }
//
var CustomSnackbarComponent = /** @class */ (function () {
    function CustomSnackbarComponent(translate, data, _snackRef) {
        this.translate = translate;
        this.data = data;
        this._snackRef = _snackRef;
    }
    CustomSnackbarComponent.prototype.dismiss = function () {
        this._snackRef.dismiss();
    };
    CustomSnackbarComponent.ɵfac = function CustomSnackbarComponent_Factory(t) { return new (t || CustomSnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"])); };
    CustomSnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomSnackbarComponent, selectors: [["app-custom-snackbar"]], decls: 3, vars: 3, consts: [["class", "d-flex align-items-center", "fxLayoutAlign", "space-between center", 3, "click", 4, "ngIf"], ["class", "display-flex align-items-center", 4, "ngIf"], ["fxLayoutAlign", "space-between center", 1, "d-flex", "align-items-center", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "d-flex", "align-items-center"], ["fxLayoutAlign", "start center", 1, "padding-left-15px"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 1, "mat-focus-indicator", "mat-button", "mat-button-base", 3, "click"], [1, "mat-button-wrapper"], [1, "margin-right-10px", "cursor-pointer"], ["matripple", "", 1, "mat-ripple", "mat-button-ripple"], [1, "mat-button-focus-overlay"], [1, "display-flex", "align-items-center"], [1, "padding-right-10px"], [1, "margin-right-10px", "cursor-pointer", 3, "click"], [1, "display-flex", "flex-grow-1"], [1, ""], [1, "display-flex"]], template: function CustomSnackbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomSnackbarComponent_div_0_Template, 14, 3, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomSnackbarComponent_div_1_Template, 15, 3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomSnackbarComponent_div_2_Template, 15, 3, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.messageType === "Error");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.messageType === "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.messageType === "Info");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: [".width-200px[_ngcontent-%COMP%] {\r\n\twidth: 200px;\r\n}\r\n\r\n.width-20px[_ngcontent-%COMP%] {\r\n\twidth: 20px;\r\n}\r\n\r\n.margin-auto-5px-auto-5px[_ngcontent-%COMP%] {\r\n\tmargin: auto 5px auto 5px !important;\r\n}\r\n\r\n.text-align-justify[_ngcontent-%COMP%] {\r\n\ttext-align: justify;\r\n}\r\n\r\n.display-flex[_ngcontent-%COMP%] {\r\n\tdisplay: flex !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1zbmFja2Jhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCIiwiZmlsZSI6ImN1c3RvbS1zbmFja2Jhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZHRoLTIwMHB4IHtcclxuXHR3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi53aWR0aC0yMHB4IHtcclxuXHR3aWR0aDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbi1hdXRvLTVweC1hdXRvLTVweCB7XHJcblx0bWFyZ2luOiBhdXRvIDVweCBhdXRvIDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1hbGlnbi1qdXN0aWZ5IHtcclxuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZGlzcGxheS1mbGV4IHtcclxuXHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    return CustomSnackbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSnackbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-snackbar',
                templateUrl: './custom-snackbar.component.html',
                styleUrls: ['./custom-snackbar.component.css'],
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"] }]; }, null); })();


/***/ }),

/***/ "qzae":
/*!******************************************************************************!*\
  !*** ./src/ui/modules/session-expire-dialog/session-expire-dialog.module.ts ***!
  \******************************************************************************/
/*! exports provided: SessionExpireDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpireDialogModule", function() { return SessionExpireDialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_session_expire_dialog_session_expire_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/session-expire-dialog/session-expire-dialog.component */ "vgvq");


//



//



var SessionExpireDialogModule = /** @class */ (function () {
    function SessionExpireDialogModule() {
    }
    SessionExpireDialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SessionExpireDialogModule });
    SessionExpireDialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SessionExpireDialogModule_Factory(t) { return new (t || SessionExpireDialogModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
            ]] });
    return SessionExpireDialogModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SessionExpireDialogModule, { declarations: [_components_session_expire_dialog_session_expire_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SessionExpireDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_components_session_expire_dialog_session_expire_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SessionExpireDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionExpireDialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
                ],
                declarations: [
                    _components_session_expire_dialog_session_expire_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SessionExpireDialogComponent"]
                ],
                exports: [
                    _components_session_expire_dialog_session_expire_dialog_component__WEBPACK_IMPORTED_MODULE_5__["SessionExpireDialogComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "r5Xs":
/*!***********************************************************************!*\
  !*** ./src/app/pages/examples/registerpage/registerpage.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







var _c0 = function () { return ["/home"]; };
var _c1 = function (a0) { return { "input-group-focus": a0 }; };
var _c2 = function () { return ["/landing"]; };
var _c3 = function () { return ["/register"]; };
var _c4 = function () { return ["/profile"]; };
var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent() {
        this.isCollapsed = true;
    }
    RegisterpageComponent.prototype.onMouseMove = function (e) {
        var squares1 = document.getElementById("square1");
        var squares2 = document.getElementById("square2");
        var squares3 = document.getElementById("square3");
        var squares4 = document.getElementById("square4");
        var squares5 = document.getElementById("square5");
        var squares6 = document.getElementById("square6");
        var squares7 = document.getElementById("square7");
        var squares8 = document.getElementById("square8");
        var posX = e.clientX - window.innerWidth / 2;
        var posY = e.clientY - window.innerWidth / 6;
        squares1.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares2.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares3.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares4.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares5.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares6.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.05 +
                "deg) rotateX(" +
                posY * -0.05 +
                "deg)";
        squares7.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
        squares8.style.transform =
            "perspective(500px) rotateY(" +
                posX * 0.02 +
                "deg) rotateX(" +
                posY * -0.02 +
                "deg)";
    };
    RegisterpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        this.onMouseMove(event);
    };
    RegisterpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    };
    RegisterpageComponent.ɵfac = function RegisterpageComponent_Factory(t) { return new (t || RegisterpageComponent)(); };
    RegisterpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterpageComponent, selectors: [["app-registerpage"]], hostBindings: function RegisterpageComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousemove", function RegisterpageComponent_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        } }, decls: 135, vars: 24, consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "tooltip", "Designed and Coded by Creative Tim", 1, "navbar-brand", 3, "routerLink"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [1, "navbar-nav"], [1, "nav-item", "p-0"], ["href", "https://twitter.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Twitter", 1, "nav-link"], [1, "fab", "fa-twitter"], [1, "d-lg-none", "d-xl-none"], ["href", "https://www.facebook.com/CreativeTim", "placement", "bottom", "target", "_blank", "tooltip", "Like us on Facebook", 1, "nav-link"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/CreativeTimOfficial", "placement", "bottom", "target", "_blank", "tooltip", "Follow us on Instagram", 1, "nav-link"], [1, "fab", "fa-instagram"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["href", "https://github.com/creativetimofficial/blk-design-system-angular/issues", 1, "nav-link"], [1, "wrapper"], [1, "page-header"], [1, "page-header-image"], [1, "content"], [1, "col-lg-5", "col-md-6", "offset-lg-0", "offset-md-3"], ["id", "square7", 1, "square", "square-7"], ["id", "square8", 1, "square", "square-8"], [1, "card", "card-register"], [1, "card-header"], ["alt", "Card image", "src", "assets/img/square1-red.png", 1, "card-img"], [1, "card-title"], [1, "card-body"], [1, "form"], [1, "input-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "tim-icons", "icon-single-02"], ["placeholder", "Full Name", "type", "text", 1, "form-control", 3, "focus", "blur"], [1, "tim-icons", "icon-email-85"], ["placeholder", "Email", "type", "text", 1, "form-control", 3, "focus", "blur"], [1, "tim-icons", "icon-lock-circle"], ["placeholder", "Password", "type", "text", 1, "form-control", 3, "focus", "blur"], [1, "form-check", "text-left"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input"], [1, "form-check-sign"], ["href", "javascript:void(0)"], [1, "card-footer"], ["href", "javascript:void(0)", 1, "btn", "btn-danger", "btn-round", "btn-lg"], [1, "register-bg"], ["id", "square1", 1, "square", "square-1"], ["id", "square2", 1, "square", "square-2"], ["id", "square3", 1, "square", "square-3"], ["id", "square4", 1, "square", "square-4"], ["id", "square5", 1, "square", "square-5"], ["id", "square6", 1, "square", "square-6"], [1, "footer"], [1, "col-md-3"], [1, "title"], [1, "nav"], ["href", "https://creative-tim.com/contact-us?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://creative-tim.com/about-us?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://creative-tim.com/blog?ref=blkdsa-footer", 1, "nav-link"], ["href", "https://opensource.org/licenses/MIT", 1, "nav-link"], [1, "btn-wrapper", "profile"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple"], [1, "fab", "fa-dribbble"]], template: function RegisterpageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " BLK\u2022 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Design System Angular ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterpageComponent_Template_button_click_7_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " BLK\u2022 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterpageComponent_Template_button_click_18_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Twitter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Instagram");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Back to Kit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Have an issue? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function RegisterpageComponent_Template_input_focus_62_listener() { return ctx.focus = true; })("blur", function RegisterpageComponent_Template_input_blur_62_listener() { return ctx.focus = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function RegisterpageComponent_Template_input_focus_67_listener() { return ctx.focus1 = true; })("blur", function RegisterpageComponent_Template_input_blur_67_listener() { return ctx.focus1 = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function RegisterpageComponent_Template_input_focus_72_listener() { return ctx.focus2 = true; })("blur", function RegisterpageComponent_Template_input_blur_72_listener() { return ctx.focus2 = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " I agree to the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " terms and conditions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " . ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Get Started ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "footer", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "BLK\u2022");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Landing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Register ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Contact Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " About Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Blog ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " License ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Follow us:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx.focus === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.focus1 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.focus2 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], encapsulation: 2 });
    return RegisterpageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-registerpage",
                templateUrl: "registerpage.component.html"
            }]
    }], function () { return []; }, { onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["document:mousemove", ["$event"]]
        }] }); })();


/***/ }),

/***/ "ronc":
/*!*********************************************************************************************!*\
  !*** ./src/ui/modules/confirm-dialog/components/confirm-dialog/confirm-dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(translate, dialogRef, data) {
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.data = data;
        this.titleKey = 'Title';
        this.messageKey = 'Message';
        this.messageParam = {};
        this.okBtnKey = 'Accept';
        this.cancelBtnKey = 'Cancel';
        // setTranslations(this.translate, TRANSLATIONS);
    }
    ConfirmDialogComponent.prototype.accept = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent.prototype.cancel = function () {
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
    ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["confirm-dialog"]], decls: 12, vars: 15, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 3, "ngStyle", "innerHtml"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "color", "click"], ["mat-raised-button", "", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.accept(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_9_listener() { return ctx.cancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.data && ctx.data.titleKey ? ctx.data.titleKey : ctx.titleKey));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, ctx.data && ctx.data.messageKey ? ctx.data.messageKey : ctx.messageKey, ctx.data && ctx.data.messageParam ? ctx.data.messageParam : ctx.messageParam), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.data.contentStyle ? ctx.data.contentStyle : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.data.okBtnColor ? ctx.data.okBtnColor : "warn");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, ctx.data && ctx.data.okBtnKey ? ctx.data.okBtnKey : ctx.okBtnKey));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, ctx.data && ctx.data.cancelBtnKey ? ctx.data.cancelBtnKey : ctx.cancelBtnKey));
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["[_nghost-%COMP%]   .panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC5wYW5lbCAucGFuZWwtYm9keSB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufSJdfQ== */"] });
    return ConfirmDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.css']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "rp3/":
/*!*******************************************!*\
  !*** ./src/ui/models/svg-icons/groups.ts ***!
  \*******************************************/
/*! exports provided: GROUPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPS", function() { return GROUPS; });
var GROUPS = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"94.017px\" height=\"90px\" viewBox=\"0 0 94.017 90\" enable-background=\"new 0 0 94.017 90\" xml:space=\"preserve\">\n<g>\n<path fill=\"#045748\" d=\"M73.618,67.239c-12.326-4.492-16.266-8.281-16.266-16.395c0-4.871,3.764-3.28,5.416-12.2\n   c0.686-3.7,4.01-0.06,4.646-8.507c0-3.367-1.814-4.203-1.814-4.203s0.922-4.982,1.283-8.816C67.331,12.342,64.124,0,47.017,0\n   S26.7,12.342,27.149,17.119c0.361,3.834,1.283,8.816,1.283,8.816s-1.814,0.836-1.814,4.203c0.635,8.447,3.959,4.807,4.645,8.507\n   c1.654,8.919,5.416,7.329,5.416,12.2c0,8.113-3.938,11.902-16.264,16.395C8.05,71.745,0.017,76.339,0.017,79.473\n   c0,3.132,0,10.527,0,10.527h47h47c0,0,0-7.396,0-10.527C94.017,76.339,85.983,71.745,73.618,67.239z\"/>\n</g>\n<g>\n<path fill=\"#045748\" d=\"M93.979,56.09c-6.383-2.326-8.423-4.289-8.423-8.49c0-2.521,1.949-1.697,2.805-6.316\n   c0.355-1.917,2.076-0.031,2.406-4.406c0-1.743-0.939-2.176-0.939-2.176s0.477-2.58,0.664-4.566\n   c0.231-2.474-1.43-8.865-10.288-8.865s-10.521,6.391-10.288,8.865c0.188,1.986,0.664,4.566,0.664,4.566s-0.939,0.433-0.939,2.176\n   c0.329,4.375,2.051,2.489,2.406,4.406c0.855,4.619,2.804,3.795,2.804,6.316c0,4.201-2.058,6.113-8.422,8.49\n   c-4.181,1.562-3.743,1.53-3.743,1.53c4.469,3.688,18.369,8.335,20.416,10.257l0,0l10.891,0.016\"/>\n</g>\n<g>\n<path fill=\"#045748\" d=\"M0.013,56.102c6.383-2.326,8.423-4.289,8.423-8.49c0-2.522-1.949-1.697-2.805-6.317\n   c-0.355-1.917-2.076-0.031-2.406-4.405c0-1.744,0.939-2.176,0.939-2.176s-0.477-2.58-0.664-4.566\n   c-0.231-2.474,1.43-8.865,10.288-8.865s10.521,6.392,10.288,8.865c-0.188,1.986-0.664,4.566-0.664,4.566s0.939,0.432,0.939,2.176\n   c-0.329,4.374-2.051,2.488-2.406,4.405c-0.855,4.62-2.804,3.794-2.804,6.317c0,4.201,2.058,6.113,8.422,8.49\n   c4.181,1.561,3.474,1.364,3.474,1.364c-4.469,3.688-18.1,8.501-20.147,10.423l0,0L0,67.904\"/>\n</g>\n</svg>\n";


/***/ }),

/***/ "s872":
/*!****************************************************!*\
  !*** ./src/ui/models/svg-icons/event-detectors.ts ***!
  \****************************************************/
/*! exports provided: EVENT_DETECTORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_DETECTORS", function() { return EVENT_DETECTORS; });
var EVENT_DETECTORS = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"90px\" height=\"85px\" viewBox=\"0 0 90 85\" enable-background=\"new 0 0 90 85\" xml:space=\"preserve\">\n<g>\n<path fill=\"#045748\" d=\"M87.431,15.9C30.388,38.735,53.494-22.723,9.25,9.629L0,12.952L18.326,85H28.42l-8.976-35.288\n   c39.471-33.09,23.491,36.055,70.184-31.788C90.712,16.35,89.261,15.168,87.431,15.9z\"/>\n</g>\n</svg>\n";


/***/ }),

/***/ "sK0c":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/presidentes/components/presidentes-card/presidentes-card.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PresidentesCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentesCardComponent", function() { return PresidentesCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_presidente__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/presidente */ "nZ0S");
/* harmony import */ var _mostrar_presidente_dialog_components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mostrar-presidente-dialog/components/confirm-dialog/mostrar-presidente-dialog.component */ "0Ofe");
/* harmony import */ var _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../ui/services/dialog.service */ "Wnat");
/* harmony import */ var _ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../ui/services/svg-icons.service */ "BEtn");
/* harmony import */ var _votacion_services_votacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../votacion/services/votacion.service */ "gm1B");
/* harmony import */ var _votacion_models_votacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../votacion/models/votacion */ "1BKp");
/* harmony import */ var _common_services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/services/country.service */ "/RXN");
/* harmony import */ var _common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/authentication/services/auth.service */ "vmVr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");

















function PresidentesCardComponent_div_0_div_17_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 21);
} }
function PresidentesCardComponent_div_0_div_17_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 22);
} }
var _c0 = function (a0) { return { "color-green": a0 }; };
var _c1 = function (a0) { return { "color-yellow": a0 }; };
function PresidentesCardComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "thumb_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "thumb_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PresidentesCardComponent_div_0_div_17_mat_icon_12_Template, 1, 0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PresidentesCardComponent_div_0_div_17_mat_icon_13_Template, 1, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r1.votacion == null ? null : ctx_r1.votacion.like));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.presidente.likeCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r1.votacion == null ? null : ctx_r1.votacion.disLike));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.presidente.disLikeCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.votacion == null ? null : ctx_r1.votacion.dictator));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.votacion == null ? null : ctx_r1.votacion.dictator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.presidente.dictatorCount, "");
} }
var _c2 = function (a0) { return { "background-image": a0 }; };
var _c3 = function (a0) { return { "hidden": a0 }; };
function PresidentesCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function PresidentesCardComponent_div_0_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.mostrarTexto(true); })("mouseleave", function PresidentesCardComponent_div_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.mostrarTexto(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresidentesCardComponent_div_0_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.mostrarPresidente(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "how_to_vote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Votar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PresidentesCardComponent_div_0_div_17_Template, 16, 11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("squares square", ctx_r0.posicion, "  align-items-center icon-box d-flex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, "url(" + ctx_r0.presidente.foto + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.presidente.biografia, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.presidente.nombre + " " + ctx_r0.presidente.apellidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.presidente.mandatos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.countryService.getCountryByCode(ctx_r0.presidente.pais));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c3, !ctx_r0.mostrarVoto));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.votacion);
} }
//
var errorKey = 'Error';
var PresidentesCardComponent = /** @class */ (function () {
    function PresidentesCardComponent(countryService, dialogService, authService, svgIconsService, cdRef, votacionService) {
        this.countryService = countryService;
        this.dialogService = dialogService;
        this.authService = authService;
        this.svgIconsService = svgIconsService;
        this.cdRef = cdRef;
        this.votacionService = votacionService;
        this.posicion = 1;
        this.svgIconsService.registerIcons();
    }
    PresidentesCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cargarVotacion(this.presidente.id);
        this.authService.reAuthenticacion.subscribe(function (response) {
            _this.cargarVotacion(_this.presidente.id);
        });
    };
    PresidentesCardComponent.prototype.actualizarVotacion = function (presidente) {
        if (this.presidente.id === presidente.id) {
            this.presidente = presidente;
            this.cdRef.detectChanges();
        }
    };
    PresidentesCardComponent.prototype.mostrarPresidente = function () {
        var _this = this;
        var dialogData = {
            presidente: this.presidente,
            votacion: this.votacion
        };
        var dialogRef = this.dialogService.openFromComponent(_mostrar_presidente_dialog_components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MostrarPresidenteDialogComponent"], '50%', '80%', dialogData, 'close-button');
        dialogRef.afterClosed().subscribe(function (response) {
            _this.votacion = response;
            _this.cdRef.detectChanges();
        });
    };
    PresidentesCardComponent.prototype.cargarVotacion = function (presidenteId) {
        var _this = this;
        this.votacionService.cargarVotacion(presidenteId).subscribe(function (respose) {
            _this.votacion = respose.data;
            if (_this.votacion === null || _this.votacion === undefined) {
                _this.votacion = new _votacion_models_votacion__WEBPACK_IMPORTED_MODULE_6__["Votacion"]('', '');
            }
            _this.cdRef.detectChanges();
        });
    };
    PresidentesCardComponent.prototype.mostrarTexto = function (mostrarVoto) {
        this.mostrarVoto = mostrarVoto;
    };
    PresidentesCardComponent.ɵfac = function PresidentesCardComponent_Factory(t) { return new (t || PresidentesCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_4__["SvgIconsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_votacion_services_votacion_service__WEBPACK_IMPORTED_MODULE_5__["VotacionService"])); };
    PresidentesCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresidentesCardComponent, selectors: [["app-presidentes-card"]], inputs: { presidente: "presidente", posicion: "posicion" }, decls: 1, vars: 1, consts: [["style", "background-size: cover;", 3, "class", "ngStyle", "mouseenter", "mouseleave", 4, "ngIf"], [2, "background-size", "cover", 3, "ngStyle", "mouseenter", "mouseleave"], [1, "position-absolute", "left-10px", "bottom-40px", "width-100pct"], [1, "justify-content-start", "label-pais"], [1, "h1-seo", "text-h1", "font-size-12px", "margin-0px", "cursor-pointer"], ["target", "_blank", 1, "color-withe", 3, "href"], [1, "h1-seo", "text-h1", "font-size-10px", "margin-0px", "cursor-pointer"], [1, "h1-seo", "text-h1", "margin-0px", "font-size-18px"], [1, "d-flex", "width-100pct", "height-100pct", "justify-content-center", "align-items-flex-end"], [1, "mostrar-votacion", "height-30px", "width-100pct", "justify-content-center", "align-items-center", "realizar-votacion", "cursor-pointer", 3, "ngClass", "click"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "padding-left-10px"], ["class", "mostrar-votacion height-30px width-100pct justify-content-center align-items-center", 4, "ngIf"], [1, "mostrar-votacion", "height-30px", "width-100pct", "justify-content-center", "align-items-center"], [1, "d-flex", "align-items-center"], ["tooltip", "Buen Presidente", 1, "", 3, "ngClass"], [1, "color-withe", "padding-left-5px"], [1, "d-flex", "align-items-center", "padding-left-15px"], ["tooltip", "Mal Presidente", 1, "", 3, "ngClass"], ["class", "", "svgIcon", "fist-up", "tooltip", "Dictador", 4, "ngIf"], ["class", "", "svgIcon", "fist-up-red", "tooltip", "Dictador", 4, "ngIf"], ["svgIcon", "fist-up", "tooltip", "Dictador", 1, ""], ["svgIcon", "fist-up-red", "tooltip", "Dictador", 1, ""]], template: function PresidentesCardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PresidentesCardComponent_div_0_Template, 18, 14, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.presidente);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: [".realizar-votacion[_ngcontent-%COMP%] {\n  top: 50%;\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxwcmVzaWRlbnRlcy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJwcmVzaWRlbnRlcy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWxpemFyLXZvdGFjaW9ue1xyXG4gIHRvcDogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"], changeDetection: 0 });
    return PresidentesCardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresidentesCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presidentes-card',
                templateUrl: './presidentes-card.component.html',
                styleUrls: ['./presidentes-card.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _common_services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"] }, { type: _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: _common_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_4__["SvgIconsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _votacion_services_votacion_service__WEBPACK_IMPORTED_MODULE_5__["VotacionService"] }]; }, { presidente: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], posicion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sZIE":
/*!***********************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/votacion/votacion.module.ts ***!
  \***********************************************************************/
/*! exports provided: VotacionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotacionModule", function() { return VotacionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



var VotacionModule = /** @class */ (function () {
    function VotacionModule() {
    }
    VotacionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VotacionModule });
    VotacionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VotacionModule_Factory(t) { return new (t || VotacionModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return VotacionModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VotacionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VotacionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/services/dialog.service */ "Wnat");
/* harmony import */ var _sindictaduras_web_modules_mostrar_presidente_dialog_components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sindictaduras-web/modules/mostrar-presidente-dialog/components/confirm-dialog/mostrar-presidente-dialog.component */ "0Ofe");
/* harmony import */ var _ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/services/svg-icons.service */ "BEtn");
/* harmony import */ var _sindictaduras_web_modules_presidentes_services_presidentes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sindictaduras-web/modules/presidentes/services/presidentes.service */ "Vx6W");
/* harmony import */ var _services_websocket_votacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/websocket-votacion.service */ "1oUk");
/* harmony import */ var _sindictaduras_web_modules_presidentes_components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sindictaduras-web/modules/presidentes/components/presidentes-card/presidentes-card.component */ "sK0c");
/* harmony import */ var _common_http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/http-request-indicator/services/loading.service */ "EdvF");
/* harmony import */ var _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _sindictaduras_web_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sindictaduras-web/components/nav-bar/nav-bar.component */ "FuJU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");



















function IndexComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-presidentes-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var presidente_r1 = ctx.$implicit;
    var indexOfelement_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("presidente", presidente_r1)("posicion", ctx_r0.obtenerPosicion(indexOfelement_r2 + 1));
} }
var IndexComponent = /** @class */ (function () {
    function IndexComponent(dialogService, svgIconsService, presidentesService, websocketVotacionService, loadingService, errorHandlingService) {
        this.dialogService = dialogService;
        this.svgIconsService = svgIconsService;
        this.presidentesService = presidentesService;
        this.websocketVotacionService = websocketVotacionService;
        this.loadingService = loadingService;
        this.errorHandlingService = errorHandlingService;
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
        this.presidentes = [];
        this.svgIconsService.registerIcons();
    }
    IndexComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        this.cargarPresidentes();
    };
    IndexComponent.prototype.conectarAlWebSocketVotacion = function () {
        this.websocketVotacionService.conectarAlWebSocket();
        this.subscribirseALosMensajesDelWebSocketListaDeVenta();
    };
    IndexComponent.prototype.subscribirseALosMensajesDelWebSocketListaDeVenta = function () {
        var _this = this;
        this.websocketVotacionService.enviarMensaje.subscribe(function (presidente) {
            _this.actualizarVotacion(JSON.parse(presidente));
        });
    };
    IndexComponent.prototype.actualizarVotacion = function (presidente) {
        this.presidentesCardComponents.forEach(function (presidentesCardComponent) {
            presidentesCardComponent.actualizarVotacion(presidente);
        });
    };
    IndexComponent.prototype.cargarPresidentes = function () {
        var _this = this;
        this.loadingService.showLoader(true);
        this.presidentesService.getPresidentes().subscribe(function (response) {
            _this.presidentes = response.data;
            _this.conectarAlWebSocketVotacion();
            _this.loadingService.showLoader(false);
        }, function (error) { return _this.errorHandlingService.handleUiError('', error); });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    IndexComponent.prototype.mostrarPresidente = function (fotoUrl) {
        this.dialogService.openFromComponent(_sindictaduras_web_modules_mostrar_presidente_dialog_components_confirm_dialog_mostrar_presidente_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MostrarPresidenteDialogComponent"], '50%', '80%', { foto: fotoUrl }, 'close-button');
    };
    IndexComponent.prototype.obtenerPosicion = function (posicion) {
        if (posicion > 8) {
            posicion = posicion % 8;
        }
        return posicion;
    };
    IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_3__["SvgIconsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sindictaduras_web_modules_presidentes_services_presidentes_service__WEBPACK_IMPORTED_MODULE_4__["PresidentesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_websocket_votacion_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketVotacionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"])); };
    IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], viewQuery: function IndexComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_sindictaduras_web_modules_presidentes_components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_6__["PresidentesCardComponent"], true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.presidentesCardComponents = _t);
        } }, decls: 10, vars: 1, consts: [[1, "wrapper"], [1, "page-header", "header-filter", "d-flex", "flex-wrap-wrap", "justify-content-space-around", "height-100pct"], ["class", "d-flex align-items-center padding-bottom-10px", 4, "ngFor", "ngForOf"], [1, "width-100pct", "height-100pct", "z-index--1000", "position-fixed"], [1, "content-center", "brand"], [1, "h1-seo", "text-h1"], [1, "text-h3"], [1, "d-flex", "align-items-center", "padding-bottom-10px"], [3, "presidente", "posicion"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IndexComponent_div_3_Template, 2, 2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SINDICTADURAS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Por un mundo mejor. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.presidentes);
        } }, directives: [_sindictaduras_web_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _sindictaduras_web_modules_presidentes_components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_6__["PresidentesCardComponent"]], encapsulation: 2 });
    return IndexComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: 'index.component.html'
            }]
    }], function () { return [{ type: _ui_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }, { type: _ui_services_svg_icons_service__WEBPACK_IMPORTED_MODULE_3__["SvgIconsService"] }, { type: _sindictaduras_web_modules_presidentes_services_presidentes_service__WEBPACK_IMPORTED_MODULE_4__["PresidentesService"] }, { type: _services_websocket_votacion_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketVotacionService"] }, { type: _common_http_request_indicator_services_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] }, { type: _common_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingService"] }]; }, { presidentesCardComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_sindictaduras_web_modules_presidentes_components_presidentes_card_presidentes_card_component__WEBPACK_IMPORTED_MODULE_6__["PresidentesCardComponent"]]
        }] }); })();


/***/ }),

/***/ "t/wU":
/*!*************************************************************************************!*\
  !*** ./src/common/error-handling/modules/custom-snackbar/custom-snackbar.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomSnackbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSnackbarModule", function() { return CustomSnackbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/custom-snackbar/custom-snackbar.component */ "qqib");


//


//



var CustomSnackbarModule = /** @class */ (function () {
    function CustomSnackbarModule() {
    }
    CustomSnackbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CustomSnackbarModule });
    CustomSnackbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CustomSnackbarModule_Factory(t) { return new (t || CustomSnackbarModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            ]] });
    return CustomSnackbarModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CustomSnackbarModule, { declarations: [_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["CustomSnackbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["CustomSnackbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomSnackbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                ],
                declarations: [
                    _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["CustomSnackbarComponent"]
                ],
                exports: [
                    _components_custom_snackbar_custom_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["CustomSnackbarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uxjj":
/*!**********************************************************!*\
  !*** ./src/ui/models/svg-icons/system-administration.ts ***!
  \**********************************************************/
/*! exports provided: SYSTEM_ADMINISTRATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_ADMINISTRATION", function() { return SYSTEM_ADMINISTRATION; });
var SYSTEM_ADMINISTRATION = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"70.968px\" height=\"74.236px\" viewBox=\"262.692 384.04 70.968 74.236\" enable-background=\"new 262.692 384.04 70.968 74.236\"\nxml:space=\"preserve\">\n<path fill=\"#045748\" d=\"M333.381,394.119c-0.371-2.471-1.652-1.947-2.313-0.901c-0.66,1.048-3.604,5.505-4.814,7.523\nc-1.201,2.008-4.156,5.955-9.668,2.057c-5.74-4.06-3.744-6.891-2.742-8.798c1.002-1.913,4.09-7.276,4.533-7.949\nc0.445-0.673-0.072-2.636-1.854-1.813c-1.785,0.823-12.615,5.129-14.119,11.296c-1.531,6.286,1.287,11.896-4.25,17.474\nl-34.428,35.541c0,0-2.25,1.906-0.109,4.047l5.094,4.641c2.367,2.367,4.25-0.047,4.25-0.047l34.545-36.074\nc1.973-1.984,5.131-5.026,8.941-4.163c8.166,1.849,12.619-1.22,15.303-6.286C334.148,406.129,333.752,396.589,333.381,394.119z\nM271.318,453.005c-1.796,0-3.251-1.453-3.251-3.248c0-1.797,1.455-3.252,3.251-3.252c1.795,0,3.251,1.455,3.251,3.252\nC274.569,451.552,273.114,453.005,271.318,453.005z\"/>\n</svg>\n";


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index/index.component */ "sqmE");
/* harmony import */ var _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/examples/registerpage/registerpage.component */ "r5Xs");
/* harmony import */ var _common_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/config/services/config-resolve.service */ "nMgP");
/* harmony import */ var _sindictaduras_web_modules_usuarios_components_confirmar_usuario_confirmar_usuario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sindictaduras-web/modules/usuarios/components/confirmar-usuario/confirmar-usuario.component */ "Jvyg");
/* harmony import */ var _pages_examples_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/examples/contact-page/contact-page.component */ "S96s");












var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
        resolve: {
            config: _common_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__["ConfigResolveService"]
        }
    },
    { path: 'profile', component: _pages_examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_5__["ProfilepageComponent"] },
    { path: 'register', component: _pages_examples_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_6__["RegisterpageComponent"] },
    {
        path: 'confirmar/:id',
        component: _sindictaduras_web_modules_usuarios_components_confirmar_usuario_confirmar_usuario_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmarUsuarioComponent"],
        resolve: {
            config: _common_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__["ConfigResolveService"]
        }
    },
    { path: 'contact', component: _pages_examples_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_9__["ContactPageComponent"] },
    {
        path: 'presidentes',
        loadChildren: './sindictaduras-web/sindictaduras-web.module#SinDictadurasWebModule',
        // canActivate: [AuthGuardService],
        resolve: {
            config: _common_config_services_config_resolve_service__WEBPACK_IMPORTED_MODULE_7__["ConfigResolveService"]
        }
    }
];
/*
const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'backoffice',
    loadChildren: './ms-back-office/ms-back-office.module#MsBackOfficeModule',
    // canActivate: [AuthGuardService],
    resolve: {
      config: ConfigResolveService
    }
  },
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];
*/
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "vehe":
/*!*********************************************************************!*\
  !*** ./src/common/authentication/components/test/test.component.ts ***!
  \*********************************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
    TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " test works!\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TestComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vgvq":
/*!******************************************************************************************************************!*\
  !*** ./src/ui/modules/session-expire-dialog/components/session-expire-dialog/session-expire-dialog.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SessionExpireDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionExpireDialogComponent", function() { return SessionExpireDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








var SessionExpireDialogComponent = /** @class */ (function () {
    function SessionExpireDialogComponent(translate, dialogRef) {
        this.translate = translate;
        this.dialogRef = dialogRef;
        this.remainingTime = 60;
        this.messageParam = {};
        this.sessionExpired = false;
        // setTranslations(this.translate, TRANSLATIONS);
    }
    SessionExpireDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._countDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000).subscribe(function () {
            _this.remainingTime -= 1;
            _this.messageParam = { param: _this.remainingTime };
            if (_this.remainingTime <= 0) {
                _this.logOutNow();
            }
        });
    };
    SessionExpireDialogComponent.prototype.stayLoggedIn = function () {
        this.sessionExpired = false;
        this.dialogRef.close(true);
    };
    SessionExpireDialogComponent.prototype.logOutNow = function () {
        this.sessionExpired = true;
        this.hide();
    };
    SessionExpireDialogComponent.prototype.hide = function () {
        if (this._countDown$) {
            this._countDown$.unsubscribe();
        }
        this.dialogRef.close(false);
    };
    SessionExpireDialogComponent.prototype.ngOnDestroy = function () {
        if (this._countDown$) {
            this._countDown$.unsubscribe();
        }
    };
    SessionExpireDialogComponent.ɵfac = function SessionExpireDialogComponent_Factory(t) { return new (t || SessionExpireDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
    SessionExpireDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionExpireDialogComponent, selectors: [["session-expire-dialog"]], decls: 13, vars: 13, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function SessionExpireDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionExpireDialogComponent_Template_button_click_7_listener() { return ctx.stayLoggedIn(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SessionExpireDialogComponent_Template_button_click_10_listener() { return ctx.logOutNow(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "@c/ui/SessionExpireDialogComponent/Title"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, "@c/ui/SessionExpireDialogComponent/Message", ctx.messageParam));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "@c/ui/SessionExpireDialogComponent/StayLoggedIn"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "@c/ui/SessionExpireDialogComponent/LogOutNow"));
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], encapsulation: 2 });
    return SessionExpireDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionExpireDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'session-expire-dialog',
                templateUrl: './session-expire-dialog.component.html'
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "vmVr":
/*!************************************************************!*\
  !*** ./src/common/authentication/services/auth.service.ts ***!
  \************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _config_services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/services/config.service */ "1WeG");
/* harmony import */ var _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../error-handling/services/error-handling.service */ "IqbY");
/* harmony import */ var _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../error-handling/services/error-handling-http.service */ "3MQd");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-social-login */ "ahC7");



//



//











var AuthService = /** @class */ (function () {
    function AuthService(http, errorHandlingService, router, configService, translate, activatedRoute, socialAuthService) {
        this.http = http;
        this.errorHandlingService = errorHandlingService;
        this.router = router;
        this.configService = configService;
        this.translate = translate;
        this.activatedRoute = activatedRoute;
        this.socialAuthService = socialAuthService;
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.userData = this.userSource.asObservable();
        this.userFullName$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.twoFactorAuthModalData$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.twoFactorAuthModalNavigation$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.reAuthenticacion = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        // setTranslations(this.translate, TRANSLATIONS);
        /*this.localService.getCurrentValue().subscribe(lang => {
            this.currentLang = lang;
        });*/
    }
    Object.defineProperty(AuthService.prototype, "logoutCommands", {
        get: function () {
            return this.errorHandlingService.logoutCommands;
        },
        set: function (value) {
            this.errorHandlingService.logoutCommands = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "logoutNavigationExtras", {
        get: function () {
            return this.errorHandlingService.logoutNavigationExtras;
        },
        set: function (value) {
            this.errorHandlingService.logoutNavigationExtras = value;
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.getHeaders = function (addUserOauth, isForm, addAuthorization) {
        if (addUserOauth === void 0) { addUserOauth = false; }
        if (isForm === void 0) { isForm = false; }
        if (addAuthorization === void 0) { addAuthorization = true; }
        var requestOptions = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept-Language': this.currentLang,
            'Content-Type': isForm ? 'application/x-www-form-urlencoded' : 'application/json',
        });
        if (addAuthorization) {
            requestOptions = requestOptions.append('Authorization', 'Bearer ' + this.userToken);
        }
        if (addUserOauth) {
            requestOptions = requestOptions.append('useroauth', this.userToken);
        }
        return requestOptions;
    };
    Object.defineProperty(AuthService.prototype, "userToken", {
        get: function () {
            return this.http.userToken;
        },
        set: function (value) {
            this.http.userToken = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentLang", {
        get: function () {
            return this.http.currentLanguage;
        },
        set: function (value) {
            this.http.currentLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var localStorageUser = localStorage.getItem('currentUser');
            if (localStorageUser && localStorageUser !== 'null') {
                return JSON.parse(localStorageUser);
            }
            return null;
        },
        set: function (value) {
            localStorage.setItem('currentUser', value ? JSON.stringify(value) : null);
            this.userFullName$.next(this.loggedUserInfo());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return this.userToken && this.userToken !== 'null' ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    AuthService.prototype.loggedUserInfo = function () {
        var value = this.currentUser;
        var userFullname = null;
        if (value) {
            userFullname = value.first_name && value.last_name ? value.first_name + " " + value.last_name : null;
            if (!userFullname) {
                userFullname = value.first_name ? value.first_name : value.last_name;
                userFullname = userFullname ? userFullname : value.username;
            }
        }
        return userFullname;
    };
    AuthService.prototype.loginUser = function (email, contrasena, code) {
        var _this = this;
        contrasena = contrasena.replace('+', '%2B');
        var headers = this.getHeaders(false, false, false);
        var credentials = {
            email: email,
            contrasena: contrasena
        };
        return this.http.post(this.configService.apiUrl + this.configService.config.apiConfigs.authentication.loginUser.apiEndpoint, credentials, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var data = response.data;
            localStorage.setItem('sindictaduras-token', data.token);
            localStorage.setItem('sindictaduras-user', JSON.stringify(data.usuario));
            _this.reAuthenticacion.next(true);
            return data;
        }));
    };
    AuthService.prototype.isLoggedIn = function () {
        // this.tokenIsFresh.next(true);}
        return localStorage.getItem('sindictaduras-token') !== null && localStorage.getItem('sindictaduras-token') !== 'null';
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('sindictaduras-user');
        localStorage.removeItem('sindictaduras-token');
        if (localStorage.getItem('signInWithSocialNetwork') === 'true') {
            this.socialAuthService.signOut();
            localStorage.removeItem('signInWithSocialNetwork');
        }
        sessionStorage.clear();
        /*let headers = this.getHeaders(false, true, false);
        let credentials = 'grant_type=password'
            + '&token=' + this.userToken;
        // Using the builtin Http of angular for prevent handling the errors and showing messages to the user
        this.http.httpClient.post(this.configService.config.apiConfigs.authentication.revokeUser.apiEndpoint,
            credentials, { headers: headers }).subscribe();*/
        // this.logoutSpa();
    };
    AuthService.prototype.postUserPreferences = function (preferences) {
        var headers = this.getHeaders(true);
        return this.http.post(this.configService.config.apiConfigs.authentication.userPreferences.apiEndpoint, preferences);
    };
    AuthService.prototype.getUserPreferences = function () {
        var _this = this;
        var headers = this.getHeaders(true);
        return this.http.get(this.configService.config.apiConfigs.authentication.userPreferences.apiEndpoint, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            _this.userPreferences = JSON.parse(response.preferences);
            // this.rootActions.setState(this.userPreferences);TODO
            return _this.userPreferences;
        }));
    };
    AuthService.prototype.logoutSpa = function () {
        this.userToken = null;
        this.currentUser = null;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    };
    AuthService.prototype.updateExpirationTime = function (data) {
        return this.http.patch(this.configService.config.apiConfigs.authentication.tokenExpirationTime.apiEndpoint, data, { headers: this.getHeaders(true) });
    };
    AuthService.prototype.changePassword = function (currentPassword, newPassword) {
        return this.http.patch(this.configService.config.apiConfigs.authentication.changePassword.apiEndpoint, {
            old_password: currentPassword,
            new_password: newPassword
        }, { headers: this.getHeaders() });
    };
    AuthService.prototype.patchUser = function (data, userId) {
        return this.http.patch(this.configService.config.apiConfigs.users.apiEndpoint + userId + '/', JSON.stringify(data));
    };
    AuthService.prototype.passUserData = function (user) {
        this.userSource.next(user);
    };
    AuthService.prototype.signOutSocial = function () {
        this.socialAuthService.signOut();
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialAuthService"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _error_handling_services_error_handling_http_service__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlingHttpService"] }, { type: _error_handling_services_error_handling_service__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }, { type: _config_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "w5Yz":
/*!**********************************************************************!*\
  !*** ./src/ui/modules/capitalize-word/pipes/capitalize-word.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: CapitalizeWordPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizeWordPipe", function() { return CapitalizeWordPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var CapitalizeWordPipe = /** @class */ (function () {
    function CapitalizeWordPipe() {
    }
    CapitalizeWordPipe.prototype.transform = function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    CapitalizeWordPipe.ɵfac = function CapitalizeWordPipe_Factory(t) { return new (t || CapitalizeWordPipe)(); };
    CapitalizeWordPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "capitalizeWord", type: CapitalizeWordPipe, pure: true });
    return CapitalizeWordPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizeWordPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'capitalizeWord'
            }]
    }], null, null); })();


/***/ }),

/***/ "w5m0":
/*!***************************************************************!*\
  !*** ./src/ui/modules/logo/components/logo/logo.component.ts ***!
  \***************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
    LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["logo"]], inputs: { width: "width", height: "height" }, decls: 14, vars: 2, consts: [[1, "flex-grow-1"], ["version", "1.1", "id", "Vordergrund", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 431.606 157.174", "enable-background", "new 0 0 431.606 157.174", 0, "xml", "space", "preserve"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M21.693,76.705\n      C89.439,31.554,183.421,6.682,282.132,13.911c55.282,4.048,106.4,17.981,149.37,38.665C377.858,19.897,309.332,0.2,233.446,0.2\n      C140.734,0.2,56.914,29.7,0.308,76.254c24.214,21.494,87.447,53.859,87.447,53.859S44.013,99.8,21.693,76.705z"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M120.671,129.889\n        c0,6.582,5.396,11.978,11.978,11.978s11.978-5.396,11.978-11.978v-8.741h-7.985v12.086h-7.985V72.156h7.985v12.086h7.985v-8.741\n        c0-6.583-5.396-11.978-11.978-11.978s-11.978,5.396-11.978,11.978V129.889z"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M150.895,129.889\n        c0,6.582,5.396,11.978,11.979,11.978c6.583,0,11.978-5.396,11.978-11.978V90.825c0-6.582-5.396-11.978-11.978-11.978\n        c-6.583,0-11.979,5.396-11.979,11.978V129.889z M158.88,87.48h7.985v45.754h-7.985V87.48z"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M184.804,156.974h14.244\n        c4.424,0,7.985-3.561,7.985-7.985V90.825c0-6.582-5.396-11.978-11.978-11.978s-11.978,5.396-11.978,11.978v42.409\n        c0,4.425,3.561,7.985,7.985,7.985h7.985v7.77h-14.244V156.974z M191.063,87.48h7.985v45.754h-7.985V87.48z"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M215.259,141.219h7.986V87.48h7.984\n        v53.739h7.986V87.48c0-4.425-3.562-7.986-7.986-7.986h-15.97V141.219z"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M255.427,79.494h-7.985v54.387\n        c0,2.158,0.863,4.208,2.374,5.611c1.511,1.402,3.453,2.267,5.611,2.374V79.494z M255.427,64.171h-7.985v7.985h7.985V64.171z"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M279.491,79.494h-7.986V64.171h-7.984\n        v69.71c0,2.158,0.862,4.208,2.374,5.611c1.51,1.402,3.453,2.267,5.61,2.374V87.48h7.986V79.494z"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M291.599,87.48h7.985v18.884h-7.985\n        V87.48z M283.613,129.889c0,6.582,5.396,11.978,11.978,11.978c6.583,0,11.979-5.396,11.979-11.978v-4.641h-7.985v7.985h-7.985\n        V114.35h15.971V90.825c0-6.582-5.396-11.978-11.979-11.978c-6.582,0-11.978,5.396-11.978,11.978V129.889z"], ["stroke-width", "0.4", "stroke-miterlimit", "3.8637", "d", "M339.752,125.249h-7.985v7.985h-7.985\n        V87.48h7.985v7.984h7.985v-4.64c0-6.582-5.396-11.978-11.979-11.978s-11.979,5.396-11.979,11.978v39.064\n        c0,6.582,5.396,11.978,11.979,11.978s11.979-5.396,11.979-11.978V125.249z"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("width", ctx.width)("height", ctx.height);
        } }, styles: ["[_nghost-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUIiLCJmaWxlIjoibG9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"] });
    return LogoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css']
            }]
    }], null, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "wMJE":
/*!***********************************************************************!*\
  !*** ./src/app/sindictaduras-web/modules/usuarios/usuarios.module.ts ***!
  \***********************************************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_confirmar_usuario_confirmar_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirmar-usuario/confirmar-usuario.component */ "Jvyg");




var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsuariosModule });
    UsuariosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsuariosModule_Factory(t) { return new (t || UsuariosModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return UsuariosModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuariosModule, { declarations: [_components_confirmar_usuario_confirmar_usuario_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmarUsuarioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_components_confirmar_usuario_confirmar_usuario_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmarUsuarioComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _components_confirmar_usuario_confirmar_usuario_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmarUsuarioComponent"]
                ],
                declarations: [
                    _components_confirmar_usuario_confirmar_usuario_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmarUsuarioComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wY/o":
/*!****************************************************************************!*\
  !*** ./src/ui/modules/image-upload/image-upload/image-upload.component.ts ***!
  \****************************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-image-compress */ "X9o6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _zoom_image_zoom_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../zoom-image/zoom-image.component */ "F8q6");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









var _c0 = ["file"];
function ImageUploadComponent_app_zoom_image_4_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-zoom-image", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ImageUploadComponent_app_zoom_image_4_Template_app_zoom_image_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.mouseHovering = true; })("mouseout", function ImageUploadComponent_app_zoom_image_4_Template_app_zoom_image_mouseout_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.mouseHovering = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("img", ctx_r1.imgURL)("divZoomOutput", _r0)("showLens", ctx_r1.mouseHovering && ctx_r1.showZoom);
} }
function ImageUploadComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageUploadComponent_button_5_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r3.click($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Subir imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageUploadComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageUploadComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Eliminar imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c1 = function (a0) { return { "hidden-button": a0 }; };
var _c2 = function (a0) { return { opacity: a0 }; };
var _c3 = function (a0) { return { hidden: a0 }; };
var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent(imageCompress) {
        this.imageCompress = imageCompress;
        this.showButton = true;
        this.showZoom = true;
        this.fileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imgURL = './assets/images/no-image-available.png';
        this.file = null;
        this.mouseHovering = false;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
        if (this.actualImagePath) {
            this.imgURL = this.actualImagePath;
            /*this.actualImagePath.pipe(takeUntil(this.onDestroy$)).subscribe((x) => {
                this.imgURL = x;
                console.log(x);
            });*/
        }
    };
    ImageUploadComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    ImageUploadComponent.prototype.selectFile = function (event) {
        var _this = this;
        if (event.target.files[0]) {
            var fileName;
            var fileType;
            this.file = event.target.files[0];
            fileName = this.file['name'];
            fileType = this.file['type'];
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    var localURL = event.target.result;
                    _this.compressImage(localURL, fileName, fileType);
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }
        /* Para que se pueda volver a subir una imagen subida
         anteriormente pero que haya sido cancelada: */
        this.imageChild.nativeElement.value = null;
    };
    ImageUploadComponent.prototype.compressImage = function (image, fileName, fileType) {
        var _this = this;
        var orientation = -1;
        this.imageCompress.compressFile(image, orientation, 50, 50).then(function (result) {
            _this.imgURL = result;
            var imageName = fileName;
            var imageBlob = _this.dataURItoBlob(result.split(',')[1], fileType);
            _this.fileChange.emit(new File([imageBlob], imageName, { type: fileType }));
        });
    };
    ImageUploadComponent.prototype.dataURItoBlob = function (dataURI, fileType) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: fileType });
        return blob;
    };
    ImageUploadComponent.prototype.removeImage = function () {
        this.imgURL = './assets/img/no-image-available.png';
        this.fileChange.emit(new File([''], null));
    };
    ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_image_compress__WEBPACK_IMPORTED_MODULE_1__["NgxImageCompressService"])); };
    ImageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageUploadComponent, selectors: [["app-image-upload"]], viewQuery: function ImageUploadComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageChild = _t.first);
        } }, inputs: { actualImagePath: "actualImagePath", showButton: "showButton", showZoom: "showZoom" }, outputs: { fileChange: "fileChange", fileRemove: "fileRemove" }, decls: 9, vars: 12, consts: [["fxLayout", "column", 3, "ngClass"], [1, "img-zoom-result", 3, "ngStyle", "ngClass"], ["divZoomed", ""], ["id", "profileImgContainer"], [3, "img", "divZoomOutput", "showLens", "mouseover", "mouseout", 4, "ngIf"], ["mat-button", "", "color", "primary", "type", "button", 3, "click", 4, "ngIf"], ["hidden", "", "type", "file", "accept", "image/*", 3, "change"], ["file", ""], ["mat-button", "", "color", "warn", "type", "button", 3, "click", 4, "ngIf"], [3, "img", "divZoomOutput", "showLens", "mouseover", "mouseout"], ["mat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "margen-icono-boton"], ["mat-button", "", "color", "warn", "type", "button", 3, "click"]], template: function ImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageUploadComponent_app_zoom_image_4_Template, 1, 3, "app-zoom-image", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImageUploadComponent_button_5_Template, 4, 0, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploadComponent_Template_input_change_6_listener($event) { return ctx.selectFile($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImageUploadComponent_button_8_Template, 4, 0, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, !ctx.showButton));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx.imgURL && ctx.mouseHovering && ctx.showZoom ? 1 : 0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, !ctx.mouseHovering));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showButton);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _zoom_image_zoom_image_component__WEBPACK_IMPORTED_MODULE_4__["ZoomImageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["#profileImgContainer[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.margen-icono-boton[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.hidden-button[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n}\n\n.img-zoom-result[_ngcontent-%COMP%] {\n  border: 1px solid #d4d4d4;\n  width: 420px;\n  height: 350px;\n  position: absolute;\n  right: 400px;\n  top: 40px;\n  background-color: white;\n  background-repeat: no-repeat;\n  transition: background-position 0.2s ease-out;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUFDRDs7QUFDQTtFQUNDLGlCQUFBO0FBRUQ7O0FBQUE7RUFDQyxtQkFBQTtBQUdEOztBQURBO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkNBQUE7QUFJRDs7QUFEQTtFQUNDLHdCQUFBO0FBSUQiLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGVJbWdDb250YWluZXIge1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubWFyZ2VuLWljb25vLWJvdG9uIHtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uaGlkZGVuLWJ1dHRvbiB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzZweDtcclxufVxyXG4uaW1nLXpvb20tcmVzdWx0IHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xyXG5cdHdpZHRoOiA0MjBweDtcclxuXHRoZWlnaHQ6IDM1MHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRyaWdodDogNDAwcHg7XHJcblx0dG9wOiA0MHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
    return ImageUploadComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-upload',
                templateUrl: './image-upload.component.html',
                styleUrls: ['./image-upload.component.scss'],
            }]
    }], function () { return [{ type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_1__["NgxImageCompressService"] }]; }, { imageChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['file']
        }], actualImagePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fileChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], fileRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "wsHQ":
/*!******************************************!*\
  !*** ./src/ui/models/svg-icons/globe.ts ***!
  \******************************************/
/*! exports provided: GLOBE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBE", function() { return GLOBE; });
var GLOBE = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nwidth=\"96\" height=\"96.001\" viewBox=\"0 0 96 96.001\" enable-background=\"new 0 0 96 96.001\" xml:space=\"preserve\">\n<path fill=\"#E9F2EA\" d=\"M48,0C21.531,0,0,21.537,0,48.001c0,26.469,21.531,48,48,48s48-21.531,48-48C96,21.537,74.469,0,48,0z\nM88.938,48.001c0,9.364-3.177,18-8.479,24.907c-1.5-1.178-3.094-4.34-1.594-7.621c1.511-3.301,1.906-10.938,1.563-13.91\nc-0.333-2.969-1.875-10.131-6.072-10.2c-4.188-0.063-7.063-1.447-9.553-6.416c-5.166-10.339,9.698-12.323,4.531-18.052\nc-1.447-1.605-8.916,6.619-10.01-4.344C59.25,11.588,60,10.416,61,9.197C77.219,14.646,88.938,29.975,88.938,48.001z M42.375,7.469\nc-0.979,1.906-3.563,2.682-5.136,4.115c-3.416,3.094-4.885,2.666-6.729,5.635c-1.854,2.969-7.834,7.25-7.834,9.396\nc0,2.145,3.021,4.682,4.531,4.188c1.511-0.496,5.49-0.469,7.834,0.354c2.344,0.828,19.572,1.656,14.083,16.22\nc-1.739,4.629-9.364,3.848-11.396,11.52c-0.303,1.121-1.354,5.928-1.428,7.5c-0.125,2.428,1.719,11.59-0.625,11.59\nc-2.354,0-8.688-8.193-8.688-9.678s-1.646-6.693-1.646-11.15c0-4.459-7.583-4.387-7.583-10.313c0-5.35,4.114-8.006,3.188-10.568\nc-0.906-2.548-8.136-2.642-11.146-2.948C15.063,19.672,27.448,9.531,42.375,7.469z M35.125,86.849\nc2.458-1.297,2.708-2.973,4.938-3.066c2.552-0.115,4.625-0.996,7.5-1.625c2.552-0.559,7.114-3.146,11.136-3.48\nc3.385-0.275,10.072,0.178,11.875,3.449c-6.479,4.301-14.24,6.813-22.573,6.813C43.5,88.939,39.177,88.199,35.125,86.849z\"/>\n</svg>";


/***/ }),

/***/ "zOv7":
/*!************************************************************************!*\
  !*** ./src/ui/modules/ask-before-refresh/ask-before-refresh.module.ts ***!
  \************************************************************************/
/*! exports provided: AskBeforeRefreshModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskBeforeRefreshModule", function() { return AskBeforeRefreshModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/ask-before-refresh.directive */ "iFtz");




var AskBeforeRefreshModule = /** @class */ (function () {
    function AskBeforeRefreshModule() {
    }
    AskBeforeRefreshModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AskBeforeRefreshModule });
    AskBeforeRefreshModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AskBeforeRefreshModule_Factory(t) { return new (t || AskBeforeRefreshModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ]] });
    return AskBeforeRefreshModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AskBeforeRefreshModule, { declarations: [_directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeRefreshDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeRefreshDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AskBeforeRefreshModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    _directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeRefreshDirective"]
                ],
                exports: [
                    _directives_ask_before_refresh_directive__WEBPACK_IMPORTED_MODULE_2__["AskBeforeRefreshDirective"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zsIL":
/*!************************************************************!*\
  !*** ./src/ui/modules/image-upload/image-upload.module.ts ***!
  \************************************************************/
/*! exports provided: ImageUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadModule", function() { return ImageUploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./image-upload/image-upload.component */ "wY/o");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-image-compress */ "X9o6");
/* harmony import */ var _zoom_image_zoom_image_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./zoom-image/zoom-image.component */ "F8q6");
/* harmony import */ var _zoom_image_dialog_zoom_image_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./zoom-image-dialog/zoom-image-dialog.component */ "oke5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");



//














//







var ImageUploadModule = /** @class */ (function () {
    function ImageUploadModule() {
    }
    ImageUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageUploadModule });
    ImageUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImageUploadModule_Factory(t) { return new (t || ImageUploadModule)(); }, providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_19__["NgxImageCompressService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                //
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"],
            ]] });
    return ImageUploadModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageUploadModule, { declarations: [_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_18__["ImageUploadComponent"],
        _zoom_image_zoom_image_component__WEBPACK_IMPORTED_MODULE_20__["ZoomImageComponent"],
        _zoom_image_dialog_zoom_image_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ZoomImageDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        //
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"]], exports: [_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_18__["ImageUploadComponent"],
        _zoom_image_zoom_image_component__WEBPACK_IMPORTED_MODULE_20__["ZoomImageComponent"],
        _zoom_image_dialog_zoom_image_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ZoomImageDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    //
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"],
                ],
                exports: [
                    _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_18__["ImageUploadComponent"],
                    _zoom_image_zoom_image_component__WEBPACK_IMPORTED_MODULE_20__["ZoomImageComponent"],
                    _zoom_image_dialog_zoom_image_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ZoomImageDialogComponent"]
                ],
                declarations: [
                    _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_18__["ImageUploadComponent"],
                    _zoom_image_zoom_image_component__WEBPACK_IMPORTED_MODULE_20__["ZoomImageComponent"],
                    _zoom_image_dialog_zoom_image_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ZoomImageDialogComponent"]
                ],
                providers: [ngx_image_compress__WEBPACK_IMPORTED_MODULE_19__["NgxImageCompressService"]],
            }]
    }], null, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map