webpackJsonp([133],{

/***/ 2010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/addon/calendar/providers/calendar.ts
var calendar = __webpack_require__(176);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// CONCATENATED MODULE: ./src/addon/calendar/pages/settings/settings.ts
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
 * Page that displays the calendar settings.
 */
var settings_AddonCalendarSettingsPage = /** @class */ (function () {
    function AddonCalendarSettingsPage(calendarProvider, eventsProvider, sitesProvider) {
        this.calendarProvider = calendarProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.defaultTime = 0;
    }
    /**
     * View loaded.
     */
    AddonCalendarSettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.calendarProvider.getDefaultNotificationTime().then(function (time) {
            _this.defaultTime = time;
        });
    };
    /**
     * Update default time.
     *
     * @param newTime New time.
     */
    AddonCalendarSettingsPage.prototype.updateDefaultTime = function (newTime) {
        this.calendarProvider.setDefaultNotificationTime(newTime);
        this.eventsProvider.trigger(calendar["a" /* AddonCalendarProvider */].DEFAULT_NOTIFICATION_TIME_CHANGED, { time: newTime }, this.sitesProvider.getCurrentSiteId());
    };
    AddonCalendarSettingsPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-calendar-settings',
            templateUrl: 'settings.html',
        }),
        __metadata("design:paramtypes", [calendar["a" /* AddonCalendarProvider */], events["a" /* CoreEventsProvider */],
            sites["a" /* CoreSitesProvider */]])
    ], AddonCalendarSettingsPage);
    return AddonCalendarSettingsPage;
}());

//# sourceMappingURL=settings.js.map
// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(106);

// CONCATENATED MODULE: ./src/addon/calendar/pages/settings/settings.module.ts
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var settings_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var settings_module_AddonCalendarSettingsPageModule = /** @class */ (function () {
    function AddonCalendarSettingsPageModule() {
    }
    AddonCalendarSettingsPageModule = settings_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                settings_AddonCalendarSettingsPage,
            ],
            imports: [
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(settings_AddonCalendarSettingsPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonCalendarSettingsPageModule);
    return AddonCalendarSettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(1513);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(1514);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(1515);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js
var loading_component_ngfactory = __webpack_require__(1516);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(1517);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(1518);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(1519);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js
var select_popover_component_ngfactory = __webpack_require__(1520);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(1521);

// EXTERNAL MODULE: ./src/pipes/duration.ts
var duration = __webpack_require__(1569);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(372);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(719);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(477);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(720);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(314);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(108);

// CONCATENATED MODULE: ./src/addon/calendar/pages/settings/settings.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







































var styles_AddonCalendarSettingsPage = [];
var RenderType_AddonCalendarSettingsPage = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_AddonCalendarSettingsPage, data: {} });

function View_AddonCalendarSettingsPage_0(_l) { return core["_57" /* ??vid */](0, [core["_47" /* ??pid */](0, duration["a" /* CoreDurationPipe */], [logger["a" /* CoreLoggerProvider */], time["a" /* CoreTimeUtilsProvider */]]), (_l()(), core["_31" /* ??eld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ??did */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ??did */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ??did */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ??eld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ??did */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ??ted */](10, 0, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_31" /* ??eld */](15, 0, null, null, 68, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ??did */](16, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](18, 0, null, 1, 64, "ion-list", [], null, null, null, null, null)), core["_30" /* ??did */](19, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](21, 0, null, null, 60, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](22, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 2, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 3, { _icons: 1 }), core["_30" /* ??did */](26, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](28, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ??did */](29, 16384, [[1, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ??ted */](30, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](33, 0, null, 3, 47, "ion-select", [["interface", "action-sheet"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "ionChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (core["_44" /* ??nov */](_v, 34)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (core["_44" /* ??nov */](_v, 34)._keyup() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.defaultTime = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ionChange" === en)) {
        var pd_3 = (_co.updateDefaultTime($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_30" /* ??did */](34, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, { ionChange: "ionChange" }), core["_52" /* ??qud */](603979776, 4, { options: 1 }), core["_50" /* ??prd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_30" /* ??did */](37, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_50" /* ??prd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ??did */](39, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](41, 0, null, null, 3, "ion-option", [["value", "0"]], null, null, null, null, null)), core["_30" /* ??did */](42, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](43, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](46, 0, null, null, 3, "ion-option", [["value", "10"]], null, null, null, null, null)), core["_30" /* ??did */](47, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](48, null, ["", ""])), core["_49" /* ??ppd */](49, 1), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](51, 0, null, null, 3, "ion-option", [["value", "30"]], null, null, null, null, null)), core["_30" /* ??did */](52, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](53, null, ["", ""])), core["_49" /* ??ppd */](54, 1), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](56, 0, null, null, 3, "ion-option", [["value", "60"]], null, null, null, null, null)), core["_30" /* ??did */](57, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](58, null, ["", ""])), core["_49" /* ??ppd */](59, 1), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](61, 0, null, null, 3, "ion-option", [["value", "120"]], null, null, null, null, null)), core["_30" /* ??did */](62, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](63, null, ["", ""])), core["_49" /* ??ppd */](64, 1), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](66, 0, null, null, 3, "ion-option", [["value", "360"]], null, null, null, null, null)), core["_30" /* ??did */](67, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](68, null, ["", ""])), core["_49" /* ??ppd */](69, 1), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](71, 0, null, null, 3, "ion-option", [["value", "720"]], null, null, null, null, null)), core["_30" /* ??did */](72, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](73, null, ["", ""])), core["_49" /* ??ppd */](74, 1), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](76, 0, null, null, 3, "ion-option", [["value", "1440"]], null, null, null, null, null)), core["_30" /* ??did */](77, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](78, null, ["", ""])), core["_49" /* ??ppd */](79, 1), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_14 = "action-sheet"; _ck(_v, 34, 0, currVal_14); var currVal_15 = _co.defaultTime; _ck(_v, 37, 0, currVal_15); var currVal_16 = "0"; _ck(_v, 42, 0, currVal_16); var currVal_18 = "10"; _ck(_v, 47, 0, currVal_18); var currVal_20 = "30"; _ck(_v, 52, 0, currVal_20); var currVal_22 = "60"; _ck(_v, 57, 0, currVal_22); var currVal_24 = "120"; _ck(_v, 62, 0, currVal_24); var currVal_26 = "360"; _ck(_v, 67, 0, currVal_26); var currVal_28 = "720"; _ck(_v, 72, 0, currVal_28); var currVal_30 = "1440"; _ck(_v, 77, 0, currVal_30); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ??nov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ??unv */](_v, 10, 0, core["_44" /* ??nov */](_v, 11).transform("core.settings.settings")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_44" /* ??nov */](_v, 16).statusbarPadding; var currVal_4 = core["_44" /* ??nov */](_v, 16)._hasRefresher; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = core["_56" /* ??unv */](_v, 30, 0, core["_44" /* ??nov */](_v, 31).transform("addon.calendar.defaultnotificationtime")); _ck(_v, 30, 0, currVal_5); var currVal_6 = core["_44" /* ??nov */](_v, 34)._disabled; var currVal_7 = core["_44" /* ??nov */](_v, 39).ngClassUntouched; var currVal_8 = core["_44" /* ??nov */](_v, 39).ngClassTouched; var currVal_9 = core["_44" /* ??nov */](_v, 39).ngClassPristine; var currVal_10 = core["_44" /* ??nov */](_v, 39).ngClassDirty; var currVal_11 = core["_44" /* ??nov */](_v, 39).ngClassValid; var currVal_12 = core["_44" /* ??nov */](_v, 39).ngClassInvalid; var currVal_13 = core["_44" /* ??nov */](_v, 39).ngClassPending; _ck(_v, 33, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_17 = core["_56" /* ??unv */](_v, 43, 0, core["_44" /* ??nov */](_v, 44).transform("core.settings.disabled")); _ck(_v, 43, 0, currVal_17); var currVal_19 = core["_56" /* ??unv */](_v, 48, 0, _ck(_v, 49, 0, core["_44" /* ??nov */](_v, 0), 600)); _ck(_v, 48, 0, currVal_19); var currVal_21 = core["_56" /* ??unv */](_v, 53, 0, _ck(_v, 54, 0, core["_44" /* ??nov */](_v, 0), 1800)); _ck(_v, 53, 0, currVal_21); var currVal_23 = core["_56" /* ??unv */](_v, 58, 0, _ck(_v, 59, 0, core["_44" /* ??nov */](_v, 0), 3600)); _ck(_v, 58, 0, currVal_23); var currVal_25 = core["_56" /* ??unv */](_v, 63, 0, _ck(_v, 64, 0, core["_44" /* ??nov */](_v, 0), 7200)); _ck(_v, 63, 0, currVal_25); var currVal_27 = core["_56" /* ??unv */](_v, 68, 0, _ck(_v, 69, 0, core["_44" /* ??nov */](_v, 0), 21600)); _ck(_v, 68, 0, currVal_27); var currVal_29 = core["_56" /* ??unv */](_v, 73, 0, _ck(_v, 74, 0, core["_44" /* ??nov */](_v, 0), 43200)); _ck(_v, 73, 0, currVal_29); var currVal_31 = core["_56" /* ??unv */](_v, 78, 0, _ck(_v, 79, 0, core["_44" /* ??nov */](_v, 0), 86400)); _ck(_v, 78, 0, currVal_31); }); }
function View_AddonCalendarSettingsPage_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "page-addon-calendar-settings", [], null, null, null, View_AddonCalendarSettingsPage_0, RenderType_AddonCalendarSettingsPage)), core["_30" /* ??did */](1, 49152, null, 0, settings_AddonCalendarSettingsPage, [calendar["a" /* AddonCalendarProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */]], null, null)], null, null); }
var AddonCalendarSettingsPageNgFactory = core["_27" /* ??ccf */]("page-addon-calendar-settings", settings_AddonCalendarSettingsPage, View_AddonCalendarSettingsPage_Host_0, {}, {}, []);

//# sourceMappingURL=settings.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.loader.js
var translate_loader = __webpack_require__(368);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.compiler.js
var translate_compiler = __webpack_require__(369);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.parser.js
var translate_parser = __webpack_require__(371);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/missing-translation-handler.js
var missing_translation_handler = __webpack_require__(370);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.store.js
var translate_store = __webpack_require__(476);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(718);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(273);

// CONCATENATED MODULE: ./src/addon/calendar/pages/settings/settings.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonCalendarSettingsPageModuleNgFactory", function() { return AddonCalendarSettingsPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























var AddonCalendarSettingsPageModuleNgFactory = core["_28" /* ??cmf */](settings_module_AddonCalendarSettingsPageModule, [], function (_l) { return core["_40" /* ??mod */]([core["_41" /* ??mpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ??CodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], AddonCalendarSettingsPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ??mpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ??a */]]]), core["_41" /* ??mpd */](4608, esm5_forms["x" /* ??i */], esm5_forms["x" /* ??i */], []), core["_41" /* ??mpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ??mpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ??mpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ??mpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ??mpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ??mpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ??mpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ??mpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ??mpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ??mpd */](512, esm5_forms["v" /* ??ba */], esm5_forms["v" /* ??ba */], []), core["_41" /* ??mpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ??mpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ??mpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ??mpd */](512, settings_module_AddonCalendarSettingsPageModule, settings_module_AddonCalendarSettingsPageModule, []), core["_41" /* ??mpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], settings_AddonCalendarSettingsPage, []), core["_41" /* ??mpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ??mpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, [])]); });

//# sourceMappingURL=settings.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=133.js.map