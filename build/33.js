webpackJsonp([33],{

/***/ 2104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// EXTERNAL MODULE: ./src/core/tag/providers/tag.ts
var tag = __webpack_require__(162);

// EXTERNAL MODULE: ./src/core/tag/providers/area-delegate.ts
var area_delegate = __webpack_require__(205);

// CONCATENATED MODULE: ./src/core/tag/pages/index/index.ts
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
 * Page that displays the tag index.
 */
var index_CoreTagIndexPage = /** @class */ (function () {
    function CoreTagIndexPage(navParams, tagProvider, domUtils, tagAreaDelegate) {
        this.tagProvider = tagProvider;
        this.domUtils = domUtils;
        this.tagAreaDelegate = tagAreaDelegate;
        this.loaded = false;
        this.hasUnsupportedAreas = false;
        this.tagId = navParams.get('tagId') || 0;
        this.tagName = navParams.get('tagName') || '';
        this.collectionId = navParams.get('collectionId');
        this.areaId = navParams.get('areaId') || 0;
        this.fromContextId = navParams.get('fromContextId') || 0;
        this.contextId = navParams.get('contextId') || 0;
        this.recursive = navParams.get('recursive') || true;
    }
    /**
     * View loaded.
     */
    CoreTagIndexPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchData().then(function () {
            if (_this.splitviewCtrl.isOn() && _this.areas && _this.areas.length > 0) {
                var area = _this.areas.find(function (area) { return area.id == _this.areaId; });
                _this.openArea(area || _this.areas[0]);
            }
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Fetch first page of tag index per area.
     *
     * @return Resolved when done.
     */
    CoreTagIndexPage.prototype.fetchData = function () {
        var _this = this;
        return this.tagProvider.getTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive, 0).then(function (areas) {
            _this.areas = [];
            _this.hasUnsupportedAreas = false;
            return Promise.all(areas.map(function (area) {
                return _this.tagAreaDelegate.parseContent(area.component, area.itemtype, area.content).then(function (items) {
                    if (!items || !items.length) {
                        // Tag area not supported, skip.
                        _this.hasUnsupportedAreas = true;
                        return null;
                    }
                    return {
                        id: area.ta,
                        componentName: area.component,
                        itemType: area.itemtype,
                        nameKey: _this.tagAreaDelegate.getDisplayNameKey(area.component, area.itemtype),
                        items: items,
                        canLoadMore: !!area.nextpageurl,
                        badge: items && items.length ? items.length + (area.nextpageurl ? '+' : '') : '',
                    };
                });
            })).then(function (areas) {
                _this.areas = areas.filter(function (area) { return area != null; });
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'Error loading tag index');
        });
    };
    /**
     * Refresh data.
     *
     * @param refresher Refresher.
     */
    CoreTagIndexPage.prototype.refreshData = function (refresher) {
        var _this = this;
        this.tagProvider.invalidateTagIndexPerArea(this.tagId, this.tagName, this.collectionId, this.areaId, this.fromContextId, this.contextId, this.recursive).finally(function () {
            _this.fetchData().finally(function () {
                refresher.complete();
            });
        });
    };
    /**
     * Navigate to an index area.
     *
     * @param area Area.
     */
    CoreTagIndexPage.prototype.openArea = function (area) {
        this.selectedAreaId = area.id;
        var params = {
            tagId: this.tagId,
            tagName: this.tagName,
            collectionId: this.collectionId,
            areaId: area.id,
            fromContextId: this.fromContextId,
            contextId: this.contextId,
            recursive: this.recursive,
            areaNameKey: area.nameKey,
            componentName: area.component,
            itemType: area.itemType,
            items: area.items.slice(),
            canLoadMore: area.canLoadMore,
            nextPage: 1
        };
        this.splitviewCtrl.push('CoreTagIndexAreaPage', params);
    };
    __decorate([
        Object(core["_9" /* ViewChild */])(split_view["a" /* CoreSplitViewComponent */]),
        __metadata("design:type", split_view["a" /* CoreSplitViewComponent */])
    ], CoreTagIndexPage.prototype, "splitviewCtrl", void 0);
    CoreTagIndexPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-tag-index',
            templateUrl: 'index.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */], tag["a" /* CoreTagProvider */], dom["a" /* CoreDomUtilsProvider */],
            area_delegate["a" /* CoreTagAreaDelegate */]])
    ], CoreTagIndexPage);
    return CoreTagIndexPage;
}());

//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(27);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// CONCATENATED MODULE: ./src/core/tag/pages/index/index.module.ts
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
var index_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var index_module_CoreTagIndexPageModule = /** @class */ (function () {
    function CoreTagIndexPageModule() {
    }
    CoreTagIndexPageModule = index_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                index_CoreTagIndexPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(index_CoreTagIndexPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreTagIndexPageModule);
    return CoreTagIndexPageModule;
}());

//# sourceMappingURL=index.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/badge/badge.js
var badge = __webpack_require__(140);

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

// EXTERNAL MODULE: ./src/components/split-view/split-view.ngfactory.js
var split_view_ngfactory = __webpack_require__(478);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/fileuploader.ts
var fileuploader = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(174);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(55);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(50);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(70);

// CONCATENATED MODULE: ./src/core/tag/pages/index/index.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












































var styles_CoreTagIndexPage = [];
var RenderType_CoreTagIndexPage = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_CoreTagIndexPage, data: {} });

function View_CoreTagIndexPage_1(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 10, "ion-item", [["class", "core-warning-item item item-block"], ["text-wrap", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 2, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 3, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 4, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 0, 1, "ion-icon", [["color", "warning"], ["item-start", ""], ["name", "warning"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ??did */](8, 147456, [[4, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"], name: [1, "name"] }, null), (_l()(), core["_55" /* ??ted */](9, 2, ["\n                    ", "\n                "])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_1 = "warning"; var currVal_2 = "warning"; _ck(_v, 8, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 8)._hidden; _ck(_v, 7, 0, currVal_0); var currVal_3 = core["_56" /* ??unv */](_v, 9, 0, core["_44" /* ??nov */](_v, 10).transform("core.tag.warningareasnotsupported")); _ck(_v, 9, 0, currVal_3); }); }
function View_CoreTagIndexPage_3(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "ion-badge", [["item-end", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.badge; _ck(_v, 2, 0, currVal_0); }); }
function View_CoreTagIndexPage_2(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0], [2, "core-split-item-selected", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openArea(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 5, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 6, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 7, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ??eld */](8, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](9, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, 4, 1, null, View_CoreTagIndexPage_3)), core["_30" /* ??did */](13, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "]))], function (_ck, _v) { var currVal_3 = _v.context.$implicit.badge; _ck(_v, 13, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 0, 0, core["_44" /* ??nov */](_v, 6).transform(_v.context.$implicit.nameKey)); var currVal_1 = (_v.context.$implicit.id == _co.selectedAreaId); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ??unv */](_v, 9, 0, core["_44" /* ??nov */](_v, 10).transform(_v.context.$implicit.nameKey)); _ck(_v, 9, 0, currVal_2); }); }
function View_CoreTagIndexPage_0(_l) { return core["_57" /* ??vid */](0, [core["_52" /* ??qud */](402653184, 1, { splitviewCtrl: 0 }), (_l()(), core["_31" /* ??eld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ??did */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ??did */](5, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ??did */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ??eld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ??did */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ??ted */](10, 0, ["", ": ", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_31" /* ??eld */](15, 0, null, null, 28, "core-split-view", [], null, null, null, split_view_ngfactory["b" /* View_CoreSplitViewComponent_0 */], split_view_ngfactory["a" /* RenderType_CoreSplitViewComponent */])), core["_30" /* ??did */](16, 245760, [[1, 4]], 0, split_view["a" /* CoreSplitViewComponent */], [[2, nav_controller["a" /* NavController */]], core["t" /* ElementRef */], fileuploader["a" /* CoreFileUploaderProvider */], platform["a" /* Platform */], translate_service["a" /* TranslateService */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n    "])), (_l()(), core["_31" /* ??eld */](18, 0, null, 0, 24, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ??did */](19, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n        "])), (_l()(), core["_31" /* ??eld */](21, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshData($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ??did */](22, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ??eld */](24, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ??did */](25, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n        "])), (_l()(), core["_31" /* ??eld */](29, 0, null, 1, 12, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ??did */](30, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n            "])), (_l()(), core["_31" /* ??eld */](32, 0, null, 0, 8, "ion-list", [], null, null, null, null, null)), core["_30" /* ??did */](33, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreTagIndexPage_1)), core["_30" /* ??did */](36, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreTagIndexPage_2)), core["_30" /* ??did */](39, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); _ck(_v, 16, 0); var currVal_8 = _co.loaded; _ck(_v, 22, 0, currVal_8); var currVal_10 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 25, 0, core["_44" /* ??nov */](_v, 26).transform("core.pulltorefresh")), ""); _ck(_v, 25, 0, currVal_10); var currVal_11 = _co.loaded; _ck(_v, 30, 0, currVal_11); var currVal_12 = _co.hasUnsupportedAreas; _ck(_v, 36, 0, currVal_12); var currVal_13 = _co.areas; _ck(_v, 39, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ??nov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ??nov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ??unv */](_v, 10, 0, core["_44" /* ??nov */](_v, 11).transform("core.tag.tag")); var currVal_3 = _co.tagName; _ck(_v, 10, 0, currVal_2, currVal_3); var currVal_4 = core["_44" /* ??nov */](_v, 19).statusbarPadding; var currVal_5 = core["_44" /* ??nov */](_v, 19)._hasRefresher; _ck(_v, 18, 0, currVal_4, currVal_5); var currVal_6 = (core["_44" /* ??nov */](_v, 22).state !== "inactive"); var currVal_7 = core["_44" /* ??nov */](_v, 22)._top; _ck(_v, 21, 0, currVal_6, currVal_7); var currVal_9 = core["_44" /* ??nov */](_v, 25).r.state; _ck(_v, 24, 0, currVal_9); }); }
function View_CoreTagIndexPage_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "page-core-tag-index", [], null, null, null, View_CoreTagIndexPage_0, RenderType_CoreTagIndexPage)), core["_30" /* ??did */](1, 49152, null, 0, index_CoreTagIndexPage, [nav_params["a" /* NavParams */], tag["a" /* CoreTagProvider */], dom["a" /* CoreDomUtilsProvider */], area_delegate["a" /* CoreTagAreaDelegate */]], null, null)], null, null); }
var CoreTagIndexPageNgFactory = core["_27" /* ??ccf */]("page-core-tag-index", index_CoreTagIndexPage, View_CoreTagIndexPage_Host_0, {}, {}, []);

//# sourceMappingURL=index.ngfactory.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(273);

// CONCATENATED MODULE: ./src/core/tag/pages/index/index.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTagIndexPageModuleNgFactory", function() { return CoreTagIndexPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreTagIndexPageModuleNgFactory = core["_28" /* ??cmf */](index_module_CoreTagIndexPageModule, [], function (_l) { return core["_40" /* ??mod */]([core["_41" /* ??mpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ??CodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreTagIndexPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ??mpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ??a */]]]), core["_41" /* ??mpd */](4608, esm5_forms["x" /* ??i */], esm5_forms["x" /* ??i */], []), core["_41" /* ??mpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ??mpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ??mpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ??mpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ??mpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ??mpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ??mpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ??mpd */](512, esm5_forms["v" /* ??ba */], esm5_forms["v" /* ??ba */], []), core["_41" /* ??mpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ??mpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ??mpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ??mpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ??mpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ??mpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ??mpd */](512, index_module_CoreTagIndexPageModule, index_module_CoreTagIndexPageModule, []), core["_41" /* ??mpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ??mpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ??mpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], index_CoreTagIndexPage, [])]); });

//# sourceMappingURL=index.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=33.js.map