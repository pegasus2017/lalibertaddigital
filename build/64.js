webpackJsonp([64],{

/***/ 2072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(11);

// CONCATENATED MODULE: ./src/core/course/pages/unsupported-module/unsupported-module.ts
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
 * Page that displays info about an unsupported module.
 */
var unsupported_module_CoreCourseUnsupportedModulePage = /** @class */ (function () {
    function CoreCourseUnsupportedModulePage(navParams, translate, textUtils) {
        this.translate = translate;
        this.textUtils = textUtils;
        this.module = navParams.get('module') || {};
        this.courseId = navParams.get('courseId');
    }
    /**
     * Expand the description.
     */
    CoreCourseUnsupportedModulePage.prototype.expandDescription = function () {
        this.textUtils.expandText(this.translate.instant('core.description'), this.module.description, undefined, undefined, [], true, 'module', this.module.id, this.courseId);
    };
    CoreCourseUnsupportedModulePage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-course-unsupported-module',
            templateUrl: 'unsupported-module.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */], _ngx_translate_core["c" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */]])
    ], CoreCourseUnsupportedModulePage);
    return CoreCourseUnsupportedModulePage;
}());

//# sourceMappingURL=unsupported-module.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(27);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var components_components_module = __webpack_require__(74);

// CONCATENATED MODULE: ./src/core/course/pages/unsupported-module/unsupported-module.module.ts
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
var unsupported_module_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var unsupported_module_module_CoreCourseUnsupportedModulePageModule = /** @class */ (function () {
    function CoreCourseUnsupportedModulePageModule() {
    }
    CoreCourseUnsupportedModulePageModule = unsupported_module_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                unsupported_module_CoreCourseUnsupportedModulePage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                components_components_module["a" /* CoreCourseComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(unsupported_module_CoreCourseUnsupportedModulePage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreCourseUnsupportedModulePageModule);
    return CoreCourseUnsupportedModulePageModule;
}());

//# sourceMappingURL=unsupported-module.module.js.map
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

// EXTERNAL MODULE: ./src/core/block/components/only-title-block/only-title-block.ngfactory.js
var only_title_block_ngfactory = __webpack_require__(1528);

// EXTERNAL MODULE: ./src/core/block/components/pre-rendered-block/pre-rendered-block.ngfactory.js
var pre_rendered_block_ngfactory = __webpack_require__(1529);

// EXTERNAL MODULE: ./src/core/block/components/course-blocks/course-blocks.ngfactory.js
var course_blocks_ngfactory = __webpack_require__(1526);

// EXTERNAL MODULE: ./src/core/course/components/unsupported-module/unsupported-module.ngfactory.js
var unsupported_module_ngfactory = __webpack_require__(1527);

// EXTERNAL MODULE: ./src/core/course/components/tag-area/tag-area.ngfactory.js
var tag_area_ngfactory = __webpack_require__(1530);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-item.ngfactory.js
var context_menu_item_ngfactory = __webpack_require__(92);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu-item.ts
var context_menu_item = __webpack_require__(81);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ts
var context_menu = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

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

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(720);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(314);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(248);

// EXTERNAL MODULE: ./src/directives/format-text.ts
var format_text = __webpack_require__(49);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/url.ts
var url = __webpack_require__(25);

// EXTERNAL MODULE: ./src/providers/logger.ts
var logger = __webpack_require__(6);

// EXTERNAL MODULE: ./src/providers/filepool.ts
var filepool = __webpack_require__(18);

// EXTERNAL MODULE: ./src/providers/app.ts
var providers_app = __webpack_require__(9);

// EXTERNAL MODULE: ./src/core/contentlinks/providers/helper.ts
var helper = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/providers/utils/iframe.ts
var iframe = __webpack_require__(44);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var providers_helper = __webpack_require__(32);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(373);

// EXTERNAL MODULE: ./src/components/context-menu/context-menu.ngfactory.js
var context_menu_ngfactory = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-controller.js
var popover_controller = __webpack_require__(69);

// EXTERNAL MODULE: ./src/components/tabs/tab.ts
var tab = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(107);

// EXTERNAL MODULE: ./src/core/course/components/unsupported-module/unsupported-module.ts
var unsupported_module = __webpack_require__(399);

// EXTERNAL MODULE: ./src/core/course/providers/course.ts
var course = __webpack_require__(13);

// EXTERNAL MODULE: ./src/core/course/providers/module-delegate.ts
var module_delegate = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(70);

// CONCATENATED MODULE: ./src/core/course/pages/unsupported-module/unsupported-module.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















































var styles_CoreCourseUnsupportedModulePage = [];
var RenderType_CoreCourseUnsupportedModulePage = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_CoreCourseUnsupportedModulePage, data: {} });

function View_CoreCourseUnsupportedModulePage_1(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "core-context-menu-item", [], null, null, null, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_30" /* ??did */](1, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], href: [2, "href"], priority: [3, "priority"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, core["_44" /* ??nov */](_v, 2).transform("core.openinbrowser")); var currVal_1 = "open"; var currVal_2 = _co.module.url; var currVal_3 = 900; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_CoreCourseUnsupportedModulePage_2(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "core-context-menu-item", [], null, [[null, "action"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("action" === en)) {
        var pd_0 = (_co.expandDescription() !== false);
        ad = (pd_0 && ad);
    } return ad; }, context_menu_item_ngfactory["b" /* View_CoreContextMenuItemComponent_0 */], context_menu_item_ngfactory["a" /* RenderType_CoreContextMenuItemComponent */])), core["_30" /* ??did */](1, 770048, null, 0, context_menu_item["a" /* CoreContextMenuItemComponent */], [context_menu["a" /* CoreContextMenuComponent */]], { content: [0, "content"], iconAction: [1, "iconAction"], priority: [2, "priority"] }, { action: "action" }), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, core["_44" /* ??nov */](_v, 2).transform("core.moduleintro")); var currVal_1 = "arrow-forward"; var currVal_2 = 800; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CoreCourseUnsupportedModulePage_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 27, "ion-header", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 23, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ??did */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ??did */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ??did */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_31" /* ??eld */](9, 0, null, 0, 1, "core-format-text", [["contextLevel", "module"]], null, null, null, null, null)), core["_30" /* ??did */](10, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], providers_app["a" /* CoreAppProvider */], helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n\n        "])), (_l()(), core["_31" /* ??eld */](12, 0, null, 2, 13, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ??did */](13, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ??qud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ??eld */](16, 0, null, null, 8, "core-context-menu", [], null, null, null, context_menu_ngfactory["b" /* View_CoreContextMenuComponent_0 */], context_menu_ngfactory["a" /* RenderType_CoreContextMenuComponent */])), core["_30" /* ??did */](17, 245760, null, 0, context_menu["a" /* CoreContextMenuComponent */], [translate_service["a" /* TranslateService */], popover_controller["a" /* PopoverController */], core["t" /* ElementRef */], dom["a" /* CoreDomUtilsProvider */], [2, tab["a" /* CoreTabComponent */]], utils["a" /* CoreUtilsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreCourseUnsupportedModulePage_1)), core["_30" /* ??did */](20, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreCourseUnsupportedModulePage_2)), core["_30" /* ??did */](23, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_31" /* ??eld */](29, 0, null, null, 5, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ??did */](30, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](32, 0, null, 1, 1, "core-course-unsupported-module", [], null, null, null, unsupported_module_ngfactory["c" /* View_CoreCourseUnsupportedModuleComponent_0 */], unsupported_module_ngfactory["b" /* RenderType_CoreCourseUnsupportedModuleComponent */])), core["_30" /* ??did */](33, 114688, null, 0, unsupported_module["a" /* CoreCourseUnsupportedModuleComponent */], [course["a" /* CoreCourseProvider */], module_delegate["a" /* CoreCourseModuleDelegate */]], { courseId: [0, "courseId"], module: [1, "module"] }, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_2 = _co.module.name; var currVal_3 = "module"; var currVal_4 = _co.module.id; var currVal_5 = _co.courseId; _ck(_v, 10, 0, currVal_2, currVal_3, currVal_4, currVal_5); _ck(_v, 17, 0); var currVal_6 = _co.module.url; _ck(_v, 20, 0, currVal_6); var currVal_7 = _co.module.description; _ck(_v, 23, 0, currVal_7); var currVal_10 = _co.courseId; var currVal_11 = _co.module; _ck(_v, 33, 0, currVal_10, currVal_11); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 4)._hidden; var currVal_1 = core["_44" /* ??nov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_8 = core["_44" /* ??nov */](_v, 30).statusbarPadding; var currVal_9 = core["_44" /* ??nov */](_v, 30)._hasRefresher; _ck(_v, 29, 0, currVal_8, currVal_9); }); }
function View_CoreCourseUnsupportedModulePage_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "page-core-course-unsupported-module", [], null, null, null, View_CoreCourseUnsupportedModulePage_0, RenderType_CoreCourseUnsupportedModulePage)), core["_30" /* ??did */](1, 49152, null, 0, unsupported_module_CoreCourseUnsupportedModulePage, [nav_params["a" /* NavParams */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */]], null, null)], null, null); }
var CoreCourseUnsupportedModulePageNgFactory = core["_27" /* ??ccf */]("page-core-course-unsupported-module", unsupported_module_CoreCourseUnsupportedModulePage, View_CoreCourseUnsupportedModulePage_Host_0, {}, {}, []);

//# sourceMappingURL=unsupported-module.ngfactory.js.map
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

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(106);

// EXTERNAL MODULE: ./src/core/block/components/components.module.ts
var block_components_components_module = __webpack_require__(274);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(273);

// CONCATENATED MODULE: ./src/core/course/pages/unsupported-module/unsupported-module.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreCourseUnsupportedModulePageModuleNgFactory", function() { return CoreCourseUnsupportedModulePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






































var CoreCourseUnsupportedModulePageModuleNgFactory = core["_28" /* ??cmf */](unsupported_module_module_CoreCourseUnsupportedModulePageModule, [], function (_l) { return core["_40" /* ??mod */]([core["_41" /* ??mpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ??CodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], only_title_block_ngfactory["a" /* CoreBlockOnlyTitleComponentNgFactory */], pre_rendered_block_ngfactory["a" /* CoreBlockPreRenderedComponentNgFactory */], course_blocks_ngfactory["a" /* CoreBlockCourseBlocksComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], tag_area_ngfactory["a" /* CoreCourseTagAreaComponentNgFactory */], CoreCourseUnsupportedModulePageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ??mpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ??a */]]]), core["_41" /* ??mpd */](4608, esm5_forms["x" /* ??i */], esm5_forms["x" /* ??i */], []), core["_41" /* ??mpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ??mpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ??mpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ??mpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ??mpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ??mpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ??mpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ??mpd */](512, esm5_forms["v" /* ??ba */], esm5_forms["v" /* ??ba */], []), core["_41" /* ??mpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ??mpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ??mpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ??mpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ??mpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ??mpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ??mpd */](512, block_components_components_module["a" /* CoreBlockComponentsModule */], block_components_components_module["a" /* CoreBlockComponentsModule */], []), core["_41" /* ??mpd */](512, components_components_module["a" /* CoreCourseComponentsModule */], components_components_module["a" /* CoreCourseComponentsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ??mpd */](512, unsupported_module_module_CoreCourseUnsupportedModulePageModule, unsupported_module_module_CoreCourseUnsupportedModulePageModule, []), core["_41" /* ??mpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ??mpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ??mpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], unsupported_module_CoreCourseUnsupportedModulePage, [])]); });

//# sourceMappingURL=unsupported-module.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=64.js.map