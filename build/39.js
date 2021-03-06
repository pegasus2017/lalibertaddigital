webpackJsonp([39],{

/***/ 2097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/core/constants.ts
var constants = __webpack_require__(40);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/config.ts
var config = __webpack_require__(164);

// EXTERNAL MODULE: ./src/core/settings/providers/helper.ts
var helper = __webpack_require__(732);

// CONCATENATED MODULE: ./src/core/settings/pages/synchronization/synchronization.ts
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
 * Page that displays the synchronization settings.
 */
var synchronization_CoreSettingsSynchronizationPage = /** @class */ (function () {
    function CoreSettingsSynchronizationPage(configProvider, eventsProvider, sitesProvider, domUtils, settingsHelper) {
        var _this = this;
        this.configProvider = configProvider;
        this.eventsProvider = eventsProvider;
        this.sitesProvider = sitesProvider;
        this.domUtils = domUtils;
        this.settingsHelper = settingsHelper;
        this.sites = [];
        this.sitesLoaded = false;
        this.currentSiteId = '';
        this.syncOnlyOnWifi = false;
        this.isDestroyed = false;
        this.currentSiteId = this.sitesProvider.getCurrentSiteId();
        this.sitesObserver = this.eventsProvider.on(events["a" /* CoreEventsProvider */].SITE_UPDATED, function (data) {
            _this.sitesProvider.getSite(data.siteId).then(function (site) {
                var siteInfo = site.getInfo();
                var siteEntry = _this.sites.find(function (siteEntry) { return siteEntry.id == site.id; });
                if (siteEntry) {
                    siteEntry.siteUrl = siteInfo.siteurl;
                    siteEntry.siteName = site.getSiteName();
                    siteEntry.fullName = siteInfo.fullname;
                }
            });
        });
    }
    /**
     * View loaded.
     */
    CoreSettingsSynchronizationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.sitesProvider.getSortedSites().then(function (sites) {
            _this.sites = sites;
        }).finally(function () {
            _this.sitesLoaded = true;
        });
        this.configProvider.get(constants["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, true).then(function (syncOnlyOnWifi) {
            _this.syncOnlyOnWifi = !!syncOnlyOnWifi;
        });
    };
    /**
     * Called when sync only on wifi setting is enabled or disabled.
     */
    CoreSettingsSynchronizationPage.prototype.syncOnlyOnWifiChanged = function () {
        this.configProvider.set(constants["a" /* CoreConstants */].SETTINGS_SYNC_ONLY_ON_WIFI, this.syncOnlyOnWifi ? 1 : 0);
    };
    /**
     * Syncrhonizes a site.
     *
     * @param siteId Site ID.
     */
    CoreSettingsSynchronizationPage.prototype.synchronize = function (siteId) {
        var _this = this;
        this.settingsHelper.synchronizeSite(this.syncOnlyOnWifi, siteId).catch(function (error) {
            if (_this.isDestroyed) {
                return;
            }
            _this.domUtils.showErrorModalDefault(error, 'core.settings.errorsyncsite', true);
        });
    };
    /**
     * Returns true if site is beeing synchronized.
     *
     * @param siteId Site ID.
     * @return True if site is beeing synchronized, false otherwise.
     */
    CoreSettingsSynchronizationPage.prototype.isSynchronizing = function (siteId) {
        return !!this.settingsHelper.getSiteSyncPromise(siteId);
    };
    /**
     * Page destroyed.
     */
    CoreSettingsSynchronizationPage.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.sitesObserver && this.sitesObserver.off();
    };
    CoreSettingsSynchronizationPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-settings-synchronization',
            templateUrl: 'synchronization.html',
        }),
        __metadata("design:paramtypes", [config["a" /* CoreConfigProvider */], events["a" /* CoreEventsProvider */],
            sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */],
            helper["a" /* CoreSettingsHelper */]])
    ], CoreSettingsSynchronizationPage);
    return CoreSettingsSynchronizationPage;
}());

//# sourceMappingURL=synchronization.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(27);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(106);

// CONCATENATED MODULE: ./src/core/settings/pages/synchronization/synchronization.module.ts
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
var synchronization_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var synchronization_module_CoreSettingsSynchronizationPageModule = /** @class */ (function () {
    function CoreSettingsSynchronizationPageModule() {
    }
    CoreSettingsSynchronizationPageModule = synchronization_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                synchronization_CoreSettingsSynchronizationPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(synchronization_CoreSettingsSynchronizationPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsSynchronizationPageModule);
    return CoreSettingsSynchronizationPageModule;
}());

//# sourceMappingURL=synchronization.module.js.map
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

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-popover.ngfactory.js
var context_menu_popover_ngfactory = __webpack_require__(1522);

// EXTERNAL MODULE: ./src/components/course-picker-menu/course-picker-menu-popover.ngfactory.js
var course_picker_menu_popover_ngfactory = __webpack_require__(1523);

// EXTERNAL MODULE: ./src/components/recaptcha/recaptchamodal.ngfactory.js
var recaptchamodal_ngfactory = __webpack_require__(1524);

// EXTERNAL MODULE: ./src/components/bs-tooltip/bs-tooltip.ngfactory.js
var bs_tooltip_ngfactory = __webpack_require__(1525);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config_config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(115);

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

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var providers_helper = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(44);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var filter_providers_helper = __webpack_require__(32);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(372);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(719);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(35);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(477);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(720);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(314);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(107);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(55);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.ngfactory.js
var toggle_ngfactory = __webpack_require__(722);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(315);

// EXTERNAL MODULE: ./node_modules/ionic-angular/tap-click/haptic.js
var haptic = __webpack_require__(188);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(22);

// CONCATENATED MODULE: ./src/core/settings/pages/synchronization/synchronization.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























































var styles_CoreSettingsSynchronizationPage = [];
var RenderType_CoreSettingsSynchronizationPage = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_CoreSettingsSynchronizationPage, data: {} });

function View_CoreSettingsSynchronizationPage_2(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 6, "button", [["clear", ""], ["icon-only", ""], ["ion-button", ""], ["item-end", ""]], [[8, "title", 0], [1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.synchronize(_v.parent.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ??did */](1, 1097728, [[11, 4]], 0, button_button["a" /* Button */], [[8, ""], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { clear: [0, "clear"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ??eld */](4, 0, null, 0, 1, "ion-icon", [["name", "sync"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ??did */](5, 147456, null, 0, icon["a" /* Icon */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_2 = ""; _ck(_v, 1, 0, currVal_2); var currVal_4 = "sync"; _ck(_v, 5, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.siteName; var currVal_1 = core["_56" /* ??unv */](_v, 0, 1, core["_44" /* ??nov */](_v, 2).transform("core.settings.synchronizenow")); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = core["_44" /* ??nov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_3); }); }
function View_CoreSettingsSynchronizationPage_3(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "ion-spinner", [["item-end", ""]], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_30" /* ??did */](1, 114688, null, 0, spinner["a" /* Spinner */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreSettingsSynchronizationPage_1(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 22, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], [[2, "core-primary-selected-item", null]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 10, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 11, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 12, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](8, 0, null, null, 1, "core-format-text", [["clean", "true"]], null, null, null, null, null)), core["_30" /* ??did */](9, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */]], { text: [0, "text"], siteId: [1, "siteId"], clean: [2, "clean"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](14, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](15, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, 4, 1, null, View_CoreSettingsSynchronizationPage_2)), core["_30" /* ??did */](18, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, 4, 1, null, View_CoreSettingsSynchronizationPage_3)), core["_30" /* ??did */](21, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.context.$implicit.siteName; var currVal_2 = _v.context.$implicit.id; var currVal_3 = "true"; _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3); var currVal_6 = !_co.isSynchronizing(_v.context.$implicit.id); _ck(_v, 18, 0, currVal_6); var currVal_7 = _co.isSynchronizing(_v.context.$implicit.id); _ck(_v, 21, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.context.$implicit.id == _co.currentSiteId); _ck(_v, 0, 0, currVal_0); var currVal_4 = _v.context.$implicit.fullName; _ck(_v, 12, 0, currVal_4); var currVal_5 = _v.context.$implicit.siteUrl; _ck(_v, 15, 0, currVal_5); }); }
function View_CoreSettingsSynchronizationPage_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ??did */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ??did */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ??did */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ??ted */](9, 0, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_31" /* ??eld */](14, 0, null, null, 54, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ??did */](15, 4374528, null, 0, content["a" /* Content */], [config_config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](17, 0, null, 1, 50, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ??did */](18, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ??eld */](20, 0, null, 0, 10, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](21, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 2, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 3, { _icons: 1 }), core["_30" /* ??did */](25, 16384, null, 0, item_divider["a" /* ItemDivider */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](27, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](28, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ??eld */](32, 0, null, 0, 19, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](33, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 5, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 6, { _icons: 1 }), core["_30" /* ??did */](37, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](39, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ??did */](40, 16384, [[4, 4]], 0, label["a" /* Label */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ??ted */](41, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](44, 0, null, 4, 6, "ion-toggle", [["item-end", ""]], [[2, "toggle-disabled", null], [2, "toggle-checked", null], [2, "toggle-activated", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keyup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keyup" === en)) {
        var pd_0 = (core["_44" /* ??nov */](_v, 45)._keyup($event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.syncOnlyOnWifi = $event) !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = (_co.syncOnlyOnWifiChanged() !== false);
        ad = (pd_2 && ad);
    } return ad; }, toggle_ngfactory["b" /* View_Toggle_0 */], toggle_ngfactory["a" /* RenderType_Toggle */])), core["_30" /* ??did */](45, 1228800, null, 0, toggle["a" /* Toggle */], [util_form["a" /* Form */], config_config["a" /* Config */], platform["a" /* Platform */], core["t" /* ElementRef */], core["V" /* Renderer */], haptic["a" /* Haptic */], [2, item["a" /* Item */]], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */], core["M" /* NgZone */]], null, null), core["_50" /* ??prd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [toggle["a" /* Toggle */]]), core["_30" /* ??did */](47, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_50" /* ??prd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ??did */](49, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ??eld */](53, 0, null, 0, 10, "ion-item-divider", [["class", "item item-divider"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](54, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 7, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 8, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 9, { _icons: 1 }), core["_30" /* ??did */](58, 16384, null, 0, item_divider["a" /* ItemDivider */], [config_config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](60, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](61, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreSettingsSynchronizationPage_1)), core["_30" /* ??did */](66, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_5 = _co.sitesLoaded; _ck(_v, 18, 0, currVal_5); var currVal_18 = _co.syncOnlyOnWifi; _ck(_v, 47, 0, currVal_18); var currVal_20 = _co.sites; _ck(_v, 66, 0, currVal_20); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 4)._hidden; var currVal_1 = core["_44" /* ??nov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ??unv */](_v, 9, 0, core["_44" /* ??nov */](_v, 10).transform("core.settings.synchronization")); _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_44" /* ??nov */](_v, 15).statusbarPadding; var currVal_4 = core["_44" /* ??nov */](_v, 15)._hasRefresher; _ck(_v, 14, 0, currVal_3, currVal_4); var currVal_6 = core["_56" /* ??unv */](_v, 28, 0, core["_44" /* ??nov */](_v, 29).transform("core.settings.syncsettings")); _ck(_v, 28, 0, currVal_6); var currVal_7 = core["_56" /* ??unv */](_v, 41, 0, core["_44" /* ??nov */](_v, 42).transform("core.settings.enablesyncwifi")); _ck(_v, 41, 0, currVal_7); var currVal_8 = core["_44" /* ??nov */](_v, 45)._disabled; var currVal_9 = core["_44" /* ??nov */](_v, 45)._value; var currVal_10 = core["_44" /* ??nov */](_v, 45)._activated; var currVal_11 = core["_44" /* ??nov */](_v, 49).ngClassUntouched; var currVal_12 = core["_44" /* ??nov */](_v, 49).ngClassTouched; var currVal_13 = core["_44" /* ??nov */](_v, 49).ngClassPristine; var currVal_14 = core["_44" /* ??nov */](_v, 49).ngClassDirty; var currVal_15 = core["_44" /* ??nov */](_v, 49).ngClassValid; var currVal_16 = core["_44" /* ??nov */](_v, 49).ngClassInvalid; var currVal_17 = core["_44" /* ??nov */](_v, 49).ngClassPending; _ck(_v, 44, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_19 = core["_56" /* ??unv */](_v, 61, 0, core["_44" /* ??nov */](_v, 62).transform("core.settings.sites")); _ck(_v, 61, 0, currVal_19); }); }
function View_CoreSettingsSynchronizationPage_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "page-core-settings-synchronization", [], null, null, null, View_CoreSettingsSynchronizationPage_0, RenderType_CoreSettingsSynchronizationPage)), core["_30" /* ??did */](1, 180224, null, 0, synchronization_CoreSettingsSynchronizationPage, [config["a" /* CoreConfigProvider */], events["a" /* CoreEventsProvider */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], helper["a" /* CoreSettingsHelper */]], null, null)], null, null); }
var CoreSettingsSynchronizationPageNgFactory = core["_27" /* ??ccf */]("page-core-settings-synchronization", synchronization_CoreSettingsSynchronizationPage, View_CoreSettingsSynchronizationPage_Host_0, {}, {}, []);

//# sourceMappingURL=synchronization.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/core/settings/pages/synchronization/synchronization.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsSynchronizationPageModuleNgFactory", function() { return CoreSettingsSynchronizationPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreSettingsSynchronizationPageModuleNgFactory = core["_28" /* ??cmf */](synchronization_module_CoreSettingsSynchronizationPageModule, [], function (_l) { return core["_40" /* ??mod */]([core["_41" /* ??mpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ??CodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreSettingsSynchronizationPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ??mpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ??a */]]]), core["_41" /* ??mpd */](4608, esm5_forms["x" /* ??i */], esm5_forms["x" /* ??i */], []), core["_41" /* ??mpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ??mpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ??mpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ??mpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ??mpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ??mpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ??mpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ??mpd */](512, esm5_forms["v" /* ??ba */], esm5_forms["v" /* ??ba */], []), core["_41" /* ??mpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ??mpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ??mpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ??mpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ??mpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ??mpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ??mpd */](512, synchronization_module_CoreSettingsSynchronizationPageModule, synchronization_module_CoreSettingsSynchronizationPageModule, []), core["_41" /* ??mpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ??mpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ??mpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], synchronization_CoreSettingsSynchronizationPage, [])]); });

//# sourceMappingURL=synchronization.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=39.js.map