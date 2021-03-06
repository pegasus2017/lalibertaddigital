webpackJsonp([43],{

/***/ 2093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@ionic-native/device/index.js
var _ionic_native_device = __webpack_require__(492);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/file.ts
var file = __webpack_require__(57);

// EXTERNAL MODULE: ./src/providers/init.ts
var init = __webpack_require__(152);

// EXTERNAL MODULE: ./src/providers/lang.ts
var lang = __webpack_require__(151);

// EXTERNAL MODULE: ./src/providers/local-notifications.ts
var local_notifications = __webpack_require__(141);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/configconstants.ts
var configconstants = __webpack_require__(121);

// EXTERNAL MODULE: ./src/core/pushnotifications/providers/pushnotifications.ts
var pushnotifications = __webpack_require__(133);

// CONCATENATED MODULE: ./src/core/settings/pages/about/about.ts
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
 * Page that displays the about settings.
 */
var about_CoreSettingsAboutPage = /** @class */ (function () {
    function CoreSettingsAboutPage(platform, device, appProvider, fileProvider, initDelegate, langProvider, sitesProvider, localNotificationsProvider, pushNotificationsProvider) {
        var _this = this;
        var currentSite = sitesProvider.getCurrentSite();
        this.appName = appProvider.isDesktop() ? configconstants["a" /* CoreConfigConstants */].desktopappname : configconstants["a" /* CoreConfigConstants */].appname;
        this.versionName = configconstants["a" /* CoreConfigConstants */].versionname;
        this.versionCode = configconstants["a" /* CoreConfigConstants */].versioncode;
        this.compilationTime = configconstants["a" /* CoreConfigConstants */].compilationtime;
        this.lastCommit = configconstants["a" /* CoreConfigConstants */].lastcommit;
        // Calculate the privacy policy to use.
        this.privacyPolicy = (currentSite && (currentSite.getStoredConfig('tool_mobile_apppolicy') ||
            currentSite.getStoredConfig('sitepolicy'))) || configconstants["a" /* CoreConfigConstants */].privacypolicy;
        this.navigator = window.navigator;
        if (window.location && window.location.href) {
            var url = window.location.href;
            this.locationHref = url.substr(0, url.indexOf('#'));
        }
        this.appReady = initDelegate.isReady() ? 'core.yes' : 'core.no';
        this.deviceType = platform.is('tablet') ? 'core.tablet' : 'core.phone';
        if (platform.is('android')) {
            this.deviceOs = 'core.android';
        }
        else if (platform.is('ios')) {
            this.deviceOs = 'core.ios';
        }
        else if (platform.is('windows')) {
            this.deviceOs = 'core.windowsphone';
        }
        else {
            var matches = navigator.userAgent.match(/\(([^\)]*)\)/);
            if (matches && matches.length > 1) {
                this.deviceOs = matches[1];
            }
            else {
                this.deviceOs = 'core.unknown';
            }
        }
        langProvider.getCurrentLanguage().then(function (lang) {
            _this.currentLanguage = lang;
        });
        this.networkStatus = appProvider.isOnline() ? 'core.online' : 'core.offline';
        this.wifiConnection = appProvider.isWifi() ? 'core.yes' : 'core.no';
        this.deviceWebWorkers = !!window['Worker'] && !!window['URL'] ? 'core.yes' : 'core.no';
        this.device = device;
        if (fileProvider.isAvailable()) {
            fileProvider.getBasePath().then(function (basepath) {
                _this.fileSystemRoot = basepath;
                _this.fsClickable = fileProvider.usesHTMLAPI();
            });
        }
        this.localNotifAvailable = localNotificationsProvider.isAvailable() ? 'core.yes' : 'core.no';
        this.pushId = pushNotificationsProvider.getPushId();
        this.siteUrl = (currentSite && currentSite.getURL()) ||
            (typeof configconstants["a" /* CoreConfigConstants */].siteurl == 'string' && configconstants["a" /* CoreConfigConstants */].siteurl);
        this.isPrefixedUrl = !!configconstants["a" /* CoreConfigConstants */].siteurl;
    }
    CoreSettingsAboutPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-settings-about',
            templateUrl: 'about.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["v" /* Platform */], _ionic_native_device["a" /* Device */], app["a" /* CoreAppProvider */], file["a" /* CoreFileProvider */],
            init["a" /* CoreInitDelegate */], lang["a" /* CoreLangProvider */], sites["a" /* CoreSitesProvider */],
            local_notifications["a" /* CoreLocalNotificationsProvider */], pushnotifications["a" /* CorePushNotificationsProvider */]])
    ], CoreSettingsAboutPage);
    return CoreSettingsAboutPage;
}());

//# sourceMappingURL=about.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(27);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(106);

// CONCATENATED MODULE: ./src/core/settings/pages/about/about.module.ts
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
var about_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var about_module_CoreSettingsAboutPageModule = /** @class */ (function () {
    function CoreSettingsAboutPageModule() {
    }
    CoreSettingsAboutPageModule = about_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                about_CoreSettingsAboutPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(about_CoreSettingsAboutPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreSettingsAboutPageModule);
    return CoreSettingsAboutPageModule;
}());

//# sourceMappingURL=about.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-group.js
var item_group = __webpack_require__(382);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-divider.js
var item_divider = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

// EXTERNAL MODULE: ./src/directives/link.ts
var directives_link = __webpack_require__(187);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var utils_url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(226);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(23);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform_platform = __webpack_require__(16);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(10);

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

// CONCATENATED MODULE: ./src/core/settings/pages/about/about.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















































var styles_CoreSettingsAboutPage = [];
var RenderType_CoreSettingsAboutPage = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_CoreSettingsAboutPage, data: {} });

function View_CoreSettingsAboutPage_1(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 24, "ion-item-group", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, item_group["a" /* ItemGroup */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 10, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 11, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 12, { _icons: 1 }), core["_30" /* ??did */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](9, 2, ["\n            ", "\n        "])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](12, 0, null, null, 11, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](13, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 13, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 14, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 15, { _icons: 1 }), core["_30" /* ??did */](17, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](19, 0, null, 2, 3, "p", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](20, 0, null, null, 2, "a", [["auto-login", "no"], ["core-link", ""]], [[8, "href", 4]], null, null, null, null)), core["_30" /* ??did */](21, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], utils_url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["a" /* CoreTextUtilsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](22, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "]))], function (_ck, _v) { _ck(_v, 21, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 9, 0, core["_44" /* ??nov */](_v, 10).transform("core.settings.privacypolicy")); _ck(_v, 9, 0, currVal_0); var currVal_1 = _co.privacyPolicy; _ck(_v, 20, 0, currVal_1); var currVal_2 = _co.privacyPolicy; _ck(_v, 22, 0, currVal_2); }); }
function View_CoreSettingsAboutPage_3(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](-1, null, [" *"]))], null, null); }
function View_CoreSettingsAboutPage_2(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 27, "ion-item-group", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, item_group["a" /* ItemGroup */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 10, "ion-item-divider", [["class", "item item-divider"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 16, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 17, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 18, { _icons: 1 }), core["_30" /* ??did */](8, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](9, 2, ["\n            ", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_CoreSettingsAboutPage_3)), core["_30" /* ??did */](12, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](15, 0, null, null, 11, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](16, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 19, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 20, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 21, { _icons: 1 }), core["_30" /* ??did */](20, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](22, 0, null, 2, 3, "p", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](23, 0, null, null, 2, "a", [["auto-login", "yes"], ["core-link", ""]], [[8, "href", 4]], null, null, null, null)), core["_30" /* ??did */](24, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], utils_url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["a" /* CoreTextUtilsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](25, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.isPrefixedUrl; _ck(_v, 12, 0, currVal_1); _ck(_v, 24, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 9, 0, core["_44" /* ??nov */](_v, 10).transform("core.login.siteurl")); _ck(_v, 9, 0, currVal_0); var currVal_2 = _co.siteUrl; _ck(_v, 23, 0, currVal_2); var currVal_3 = _co.siteUrl; _ck(_v, 25, 0, currVal_3); }); }
function View_CoreSettingsAboutPage_4(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 25, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 26, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 27, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.versionname")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.versionName; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_5(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 28, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 29, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 30, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.versioncode")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.versionCode; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_7(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](1, null, ["", ""])), core["_49" /* ??ppd */](2, 3)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, _ck(_v, 2, 0, core["_44" /* ??nov */](_v.parent.parent, 0), _co.compilationTime, "LLL Z", false)); _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsAboutPage_8(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.lastCommit; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsAboutPage_6(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 16, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 31, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 32, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 33, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_CoreSettingsAboutPage_7)), core["_30" /* ??did */](12, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_CoreSettingsAboutPage_8)), core["_30" /* ??did */](15, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.compilationTime; _ck(_v, 12, 0, currVal_1); var currVal_2 = _co.lastCommit; _ck(_v, 15, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.compilationinfo")); _ck(_v, 8, 0, currVal_0); }); }
function View_CoreSettingsAboutPage_10(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "a", [["auto-login", "no"], ["core-link", ""]], [[8, "href", 4]], null, null, null, null)), core["_30" /* ??did */](1, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], utils_url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["a" /* CoreTextUtilsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](2, null, ["", ""]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fileSystemRoot; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.fileSystemRoot; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_11(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fileSystemRoot; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreSettingsAboutPage_9(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 17, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 34, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 35, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 36, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_10)), core["_30" /* ??did */](13, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_CoreSettingsAboutPage_11)), core["_30" /* ??did */](16, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.fsClickable; _ck(_v, 13, 0, currVal_1); var currVal_2 = !_co.fsClickable; _ck(_v, 16, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.filesystemroot")); _ck(_v, 8, 0, currVal_0); }); }
function View_CoreSettingsAboutPage_12(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 37, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 38, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 39, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.navigatoruseragent")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.navigator.userAgent; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_13(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 40, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 41, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 42, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.navigatorlanguage")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.navigator.language; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_14(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 43, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 44, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 45, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.locationhref")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.locationHref; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_15(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 46, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 47, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 48, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.appready")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_56" /* ??unv */](_v, 12, 0, core["_44" /* ??nov */](_v, 13).transform(_co.appReady)); _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_16(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 49, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 50, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 51, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.displayformat")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_56" /* ??unv */](_v, 12, 0, core["_44" /* ??nov */](_v, 13).transform(_co.deviceType)); _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_17(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 52, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 53, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 54, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.deviceos")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_56" /* ??unv */](_v, 12, 0, core["_44" /* ??nov */](_v, 13).transform(_co.deviceOs)); _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_18(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 55, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 56, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 57, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.currentlanguage")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.currentLanguage; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_19(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 58, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 59, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 60, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.networkstatus")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_56" /* ??unv */](_v, 12, 0, core["_44" /* ??nov */](_v, 13).transform(_co.networkStatus)); _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_20(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 61, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 62, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 63, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.wificonnection")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_56" /* ??unv */](_v, 12, 0, core["_44" /* ??nov */](_v, 13).transform(_co.wifiConnection)); _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_21(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 64, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 65, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 66, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.devicewebworkers")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_56" /* ??unv */](_v, 12, 0, core["_44" /* ??nov */](_v, 13).transform(_co.deviceWebWorkers)); _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_22(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 67, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 68, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 69, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.cordovaversion")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.device.cordova; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_23(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 70, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 71, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 72, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.cordovadeviceplatform")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.device.platform; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_24(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 73, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 74, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 75, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.cordovadeviceosversion")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.device.version; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_25(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 76, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 77, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 78, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.cordovadevicemodel")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.device.model; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_26(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 79, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 80, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 81, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.cordovadeviceuuid")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.device.uuid; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_27(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 13, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 82, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 83, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 84, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.pushid")); _ck(_v, 8, 0, currVal_0); var currVal_1 = _co.pushId; _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_28(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 85, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 86, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 87, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](8, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, 2, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 8, 0, core["_44" /* ??nov */](_v, 9).transform("core.settings.localnotifavailable")); _ck(_v, 8, 0, currVal_0); var currVal_1 = core["_56" /* ??unv */](_v, 12, 0, core["_44" /* ??nov */](_v, 13).transform(_co.localNotifAvailable)); _ck(_v, 12, 0, currVal_1); }); }
function View_CoreSettingsAboutPage_0(_l) { return core["_57" /* ??vid */](0, [core["_47" /* ??pid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["a" /* CoreLoggerProvider */], time["a" /* CoreTimeUtilsProvider */]]), (_l()(), core["_31" /* ??eld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ??did */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ??did */](5, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ??did */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform_platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ??eld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ??did */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ??ted */](10, 0, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_31" /* ??eld */](15, 0, null, null, 124, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ??did */](16, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform_platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](18, 0, null, 1, 9, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](19, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 2, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 3, { _icons: 1 }), core["_30" /* ??did */](23, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_31" /* ??eld */](25, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](26, null, ["", " ", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](29, 0, null, 1, 27, "ion-item-group", [], null, null, null, null, null)), core["_30" /* ??did */](30, 16384, null, 0, item_group["a" /* ItemGroup */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](32, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](33, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 5, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 6, { _icons: 1 }), core["_30" /* ??did */](37, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](38, 2, ["\n            ", "\n        "])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](41, 0, null, null, 14, "ion-item", [["class", "item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](42, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 7, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 8, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 9, { _icons: 1 }), core["_30" /* ??did */](46, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](48, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](-1, null, ["Apache 2.0"])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ??eld */](51, 0, null, 2, 3, "p", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](52, 0, null, null, 2, "a", [["auto-login", "no"], ["core-link", ""], ["href", "http://www.apache.org/licenses/LICENSE-2.0"]], null, null, null, null, null)), core["_30" /* ??did */](53, 81920, null, 0, directives_link["a" /* CoreLinkDirective */], [core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], utils["a" /* CoreUtilsProvider */], sites["a" /* CoreSitesProvider */], utils_url["a" /* CoreUrlUtilsProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], utils_text["a" /* CoreTextUtilsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["http://www.apache.org/licenses/LICENSE-2.0"])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ??and */](16777216, null, 1, 1, null, View_CoreSettingsAboutPage_1)), core["_30" /* ??did */](59, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_26" /* ??and */](16777216, null, 1, 1, null, View_CoreSettingsAboutPage_2)), core["_30" /* ??did */](62, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](64, 0, null, 1, 74, "ion-item-group", [], null, null, null, null, null)), core["_30" /* ??did */](65, 16384, null, 0, item_group["a" /* ItemGroup */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](67, 0, null, null, 7, "ion-item-divider", [["class", "item item-divider"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](68, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 22, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 23, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 24, { _icons: 1 }), core["_30" /* ??did */](72, 16384, null, 0, item_divider["a" /* ItemDivider */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](73, 2, ["\n            ", "\n        "])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_4)), core["_30" /* ??did */](77, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_5)), core["_30" /* ??did */](80, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_6)), core["_30" /* ??did */](83, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_9)), core["_30" /* ??did */](86, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_12)), core["_30" /* ??did */](89, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_13)), core["_30" /* ??did */](92, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_14)), core["_30" /* ??did */](95, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_15)), core["_30" /* ??did */](98, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_16)), core["_30" /* ??did */](101, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_17)), core["_30" /* ??did */](104, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_18)), core["_30" /* ??did */](107, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_19)), core["_30" /* ??did */](110, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_20)), core["_30" /* ??did */](113, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_21)), core["_30" /* ??did */](116, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_22)), core["_30" /* ??did */](119, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_23)), core["_30" /* ??did */](122, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_24)), core["_30" /* ??did */](125, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_25)), core["_30" /* ??did */](128, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_26)), core["_30" /* ??did */](131, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_27)), core["_30" /* ??did */](134, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSettingsAboutPage_28)), core["_30" /* ??did */](137, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); _ck(_v, 53, 0); var currVal_8 = _co.privacyPolicy; _ck(_v, 59, 0, currVal_8); var currVal_9 = _co.siteUrl; _ck(_v, 62, 0, currVal_9); var currVal_11 = _co.versionName; _ck(_v, 77, 0, currVal_11); var currVal_12 = _co.versionCode; _ck(_v, 80, 0, currVal_12); var currVal_13 = (_co.compilationTime || _co.lastCommit); _ck(_v, 83, 0, currVal_13); var currVal_14 = _co.fileSystemRoot; _ck(_v, 86, 0, currVal_14); var currVal_15 = (_co.navigator && _co.navigator.userAgent); _ck(_v, 89, 0, currVal_15); var currVal_16 = (_co.navigator && _co.navigator.language); _ck(_v, 92, 0, currVal_16); var currVal_17 = _co.locationHref; _ck(_v, 95, 0, currVal_17); var currVal_18 = _co.appReady; _ck(_v, 98, 0, currVal_18); var currVal_19 = _co.deviceType; _ck(_v, 101, 0, currVal_19); var currVal_20 = _co.deviceOs; _ck(_v, 104, 0, currVal_20); var currVal_21 = _co.currentLanguage; _ck(_v, 107, 0, currVal_21); var currVal_22 = _co.networkStatus; _ck(_v, 110, 0, currVal_22); var currVal_23 = _co.wifiConnection; _ck(_v, 113, 0, currVal_23); var currVal_24 = _co.deviceWebWorkers; _ck(_v, 116, 0, currVal_24); var currVal_25 = (_co.device && _co.device.cordova); _ck(_v, 119, 0, currVal_25); var currVal_26 = (_co.device && _co.device.platform); _ck(_v, 122, 0, currVal_26); var currVal_27 = (_co.device && _co.device.version); _ck(_v, 125, 0, currVal_27); var currVal_28 = (_co.device && _co.device.model); _ck(_v, 128, 0, currVal_28); var currVal_29 = (_co.device && _co.device.uuid); _ck(_v, 131, 0, currVal_29); var currVal_30 = _co.pushId; _ck(_v, 134, 0, currVal_30); var currVal_31 = _co.localNotifAvailable; _ck(_v, 137, 0, currVal_31); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ??nov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ??nov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ??unv */](_v, 10, 0, core["_44" /* ??nov */](_v, 11).transform("core.settings.about")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_44" /* ??nov */](_v, 16).statusbarPadding; var currVal_4 = core["_44" /* ??nov */](_v, 16)._hasRefresher; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = _co.appName; var currVal_6 = _co.versionName; _ck(_v, 26, 0, currVal_5, currVal_6); var currVal_7 = core["_56" /* ??unv */](_v, 38, 0, core["_44" /* ??nov */](_v, 39).transform("core.settings.license")); _ck(_v, 38, 0, currVal_7); var currVal_10 = core["_56" /* ??unv */](_v, 73, 0, core["_44" /* ??nov */](_v, 74).transform("core.settings.deviceinfo")); _ck(_v, 73, 0, currVal_10); }); }
function View_CoreSettingsAboutPage_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "page-core-settings-about", [], null, null, null, View_CoreSettingsAboutPage_0, RenderType_CoreSettingsAboutPage)), core["_30" /* ??did */](1, 49152, null, 0, about_CoreSettingsAboutPage, [platform_platform["a" /* Platform */], _ionic_native_device["a" /* Device */], app["a" /* CoreAppProvider */], file["a" /* CoreFileProvider */], init["a" /* CoreInitDelegate */], lang["a" /* CoreLangProvider */], sites["a" /* CoreSitesProvider */], local_notifications["a" /* CoreLocalNotificationsProvider */], pushnotifications["a" /* CorePushNotificationsProvider */]], null, null)], null, null); }
var CoreSettingsAboutPageNgFactory = core["_27" /* ??ccf */]("page-core-settings-about", about_CoreSettingsAboutPage, View_CoreSettingsAboutPage_Host_0, {}, {}, []);

//# sourceMappingURL=about.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(22);

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

// CONCATENATED MODULE: ./src/core/settings/pages/about/about.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSettingsAboutPageModuleNgFactory", function() { return CoreSettingsAboutPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreSettingsAboutPageModuleNgFactory = core["_28" /* ??cmf */](about_module_CoreSettingsAboutPageModule, [], function (_l) { return core["_40" /* ??mod */]([core["_41" /* ??mpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ??CodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreSettingsAboutPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ??mpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ??a */]]]), core["_41" /* ??mpd */](4608, esm5_forms["x" /* ??i */], esm5_forms["x" /* ??i */], []), core["_41" /* ??mpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ??mpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ??mpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ??mpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ??mpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ??mpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ??mpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ??mpd */](512, esm5_forms["v" /* ??ba */], esm5_forms["v" /* ??ba */], []), core["_41" /* ??mpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ??mpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ??mpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ??mpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ??mpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ??mpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ??mpd */](512, about_module_CoreSettingsAboutPageModule, about_module_CoreSettingsAboutPageModule, []), core["_41" /* ??mpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ??mpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ??mpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], about_CoreSettingsAboutPage, [])]); });

//# sourceMappingURL=about.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=43.js.map