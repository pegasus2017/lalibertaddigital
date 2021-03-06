webpackJsonp([37],{

/***/ 2099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/file.ts
var file = __webpack_require__(57);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/text.ts
var utils_text = __webpack_require__(11);

// EXTERNAL MODULE: ./src/core/sharedfiles/providers/sharedfiles.ts
var sharedfiles = __webpack_require__(504);

// CONCATENATED MODULE: ./src/core/sharedfiles/pages/list/list.ts
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
 * Modal to display the list of shared files.
 */
var list_CoreSharedFilesListPage = /** @class */ (function () {
    function CoreSharedFilesListPage(viewCtrl, navParams, sharedFilesProvider, sitesProvider, textUtils, translate, fileProvider, eventsProvider, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.sharedFilesProvider = sharedFilesProvider;
        this.sitesProvider = sitesProvider;
        this.textUtils = textUtils;
        this.translate = translate;
        this.fileProvider = fileProvider;
        this.eventsProvider = eventsProvider;
        this.navCtrl = navCtrl;
        this.path = '';
        this.siteId = navParams.get('siteId') || this.sitesProvider.getCurrentSiteId();
        this.mimetypes = navParams.get('mimetypes');
        this.isModal = !!navParams.get('isModal');
        this.manage = !!navParams.get('manage');
        this.pick = !!navParams.get('pick');
        this.path = navParams.get('path') || '';
    }
    /**
     * Component being initialized.
     */
    CoreSharedFilesListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadFiles();
        // Listen for new files shared with the app.
        this.shareObserver = this.eventsProvider.on(events["a" /* CoreEventsProvider */].FILE_SHARED, function (data) {
            if (data.siteId == _this.siteId) {
                // File was stored in current site, refresh the list.
                _this.filesLoaded = false;
                _this.loadFiles().finally(function () {
                    _this.filesLoaded = true;
                });
            }
        });
    };
    /**
     * Load the files.
     *
     * @return Promise resolved when done.
     */
    CoreSharedFilesListPage.prototype.loadFiles = function () {
        var _this = this;
        if (this.path) {
            this.title = this.fileProvider.getFileAndDirectoryFromPath(this.path).name;
        }
        else {
            this.title = this.translate.instant('core.sharedfiles.sharedfiles');
        }
        return this.sharedFilesProvider.getSiteSharedFiles(this.siteId, this.path, this.mimetypes).then(function (files) {
            _this.files = files;
            _this.filesLoaded = true;
        });
    };
    /**
     * Close modal.
     */
    CoreSharedFilesListPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Refresh the list of files.
     *
     * @param refresher Refresher.
     */
    CoreSharedFilesListPage.prototype.refreshFiles = function (refresher) {
        this.loadFiles().finally(function () {
            refresher.complete();
        });
    };
    /**
     * Called when a file is deleted. Remove the file from the list.
     *
     * @param index Position of the file.
     */
    CoreSharedFilesListPage.prototype.fileDeleted = function (index) {
        this.files.splice(index, 1);
    };
    /**
     * Called when a file is renamed. Update the list.
     *
     * @param index Position of the file.
     * @param data Data containing the new FileEntry.
     */
    CoreSharedFilesListPage.prototype.fileRenamed = function (index, data) {
        this.files[index] = data.file;
    };
    /**
     * Open a subfolder.
     *
     * @param folder The folder to open.
     */
    CoreSharedFilesListPage.prototype.openFolder = function (folder) {
        var path = this.textUtils.concatenatePaths(this.path, folder.name);
        if (this.isModal) {
            // In Modal we don't want to open a new page because we cannot dismiss the modal from the new page.
            this.path = path;
            this.filesLoaded = false;
            this.loadFiles();
        }
        else {
            this.navCtrl.push('CoreSharedFilesListPage', {
                path: path,
                manage: this.manage,
                pick: this.pick,
                siteId: this.siteId,
                mimetypes: this.mimetypes,
                isModal: this.isModal
            });
        }
    };
    /**
     * Change site loaded.
     *
     * @param id Site to load.
     */
    CoreSharedFilesListPage.prototype.changeSite = function (id) {
        this.siteId = id;
        this.path = '';
        this.filesLoaded = false;
        this.loadFiles();
    };
    /**
     * A file was picked.
     *
     * @param file Picked file.
     */
    CoreSharedFilesListPage.prototype.filePicked = function (file) {
        this.viewCtrl.dismiss(file);
    };
    /**
     * Component destroyed.
     */
    CoreSharedFilesListPage.prototype.ngOnDestroy = function () {
        if (this.shareObserver) {
            this.shareObserver.off();
        }
    };
    CoreSharedFilesListPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-shared-files-list',
            templateUrl: 'list.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["G" /* ViewController */], ionic_angular["t" /* NavParams */], sharedfiles["a" /* CoreSharedFilesProvider */],
            sites["a" /* CoreSitesProvider */], utils_text["a" /* CoreTextUtilsProvider */], _ngx_translate_core["c" /* TranslateService */],
            file["a" /* CoreFileProvider */], events["a" /* CoreEventsProvider */], ionic_angular["s" /* NavController */]])
    ], CoreSharedFilesListPage);
    return CoreSharedFilesListPage;
}());

//# sourceMappingURL=list.js.map
// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(27);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// CONCATENATED MODULE: ./src/core/sharedfiles/pages/list/list.module.ts
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
var list_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var list_module_CoreSharedFilesListPageModule = /** @class */ (function () {
    function CoreSharedFilesListPageModule() {
    }
    CoreSharedFilesListPageModule = list_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                list_CoreSharedFilesListPage
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(list_CoreSharedFilesListPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], CoreSharedFilesListPageModule);
    return CoreSharedFilesListPageModule;
}());

//# sourceMappingURL=list.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(373);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(248);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(47);

// EXTERNAL MODULE: ./src/components/local-file/local-file.ngfactory.js
var local_file_ngfactory = __webpack_require__(744);

// EXTERNAL MODULE: ./src/components/local-file/local-file.ts
var local_file = __webpack_require__(384);

// EXTERNAL MODULE: ./src/providers/utils/mimetype.ts
var mimetype = __webpack_require__(67);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/utils/time.ts
var time = __webpack_require__(23);

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

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ngfactory.js
var empty_box_ngfactory = __webpack_require__(124);

// EXTERNAL MODULE: ./src/components/empty-box/empty-box.ts
var empty_box = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(372);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(719);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./src/directives/back-button.ts
var back_button = __webpack_require__(477);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(720);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(314);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(183);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(108);

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

// EXTERNAL MODULE: ./src/components/site-picker/site-picker.ts
var site_picker = __webpack_require__(1571);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// CONCATENATED MODULE: ./src/components/site-picker/site-picker.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var styles_CoreSitePickerComponent = [];
var RenderType_CoreSitePickerComponent = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_CoreSitePickerComponent, data: {} });

function View_CoreSitePickerComponent_1(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "ion-option", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, [[4, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ??ted */](2, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.fullNameAndSiteName; _ck(_v, 2, 0, currVal_1); }); }
function View_CoreSitePickerComponent_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 23, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 2, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 3, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n    "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ??did */](8, 16384, [[1, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ??ted */](9, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n    "])), (_l()(), core["_31" /* ??eld */](12, 0, null, 3, 10, "ion-select", [["interface", "action-sheet"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (core["_44" /* ??nov */](_v, 13)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (core["_44" /* ??nov */](_v, 13)._keyup() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.selectedSite = $event) !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = (_co.siteSelected.emit(_co.selectedSite) !== false);
        ad = (pd_3 && ad);
    } return ad; }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_30" /* ??did */](13, 1228800, null, 1, select_select["a" /* Select */], [app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, null), core["_52" /* ??qud */](603979776, 4, { options: 1 }), core["_50" /* ??prd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_30" /* ??did */](16, 671744, null, 0, esm5_forms["q" /* NgModel */], [[8, null], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { model: [0, "model"] }, { update: "ngModelChange" }), core["_50" /* ??prd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ??did */](18, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSitePickerComponent_1)), core["_30" /* ??did */](21, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = "action-sheet"; _ck(_v, 13, 0, currVal_9); var currVal_10 = _co.selectedSite; _ck(_v, 16, 0, currVal_10); var currVal_11 = _co.sites; _ck(_v, 21, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 9, 0, core["_44" /* ??nov */](_v, 10).transform("core.site")); _ck(_v, 9, 0, currVal_0); var currVal_1 = core["_44" /* ??nov */](_v, 13)._disabled; var currVal_2 = core["_44" /* ??nov */](_v, 18).ngClassUntouched; var currVal_3 = core["_44" /* ??nov */](_v, 18).ngClassTouched; var currVal_4 = core["_44" /* ??nov */](_v, 18).ngClassPristine; var currVal_5 = core["_44" /* ??nov */](_v, 18).ngClassDirty; var currVal_6 = core["_44" /* ??nov */](_v, 18).ngClassValid; var currVal_7 = core["_44" /* ??nov */](_v, 18).ngClassInvalid; var currVal_8 = core["_44" /* ??nov */](_v, 18).ngClassPending; _ck(_v, 12, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_CoreSitePickerComponent_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "core-site-picker", [], null, null, null, View_CoreSitePickerComponent_0, RenderType_CoreSitePickerComponent)), core["_30" /* ??did */](1, 114688, null, 0, site_picker["a" /* CoreSitePickerComponent */], [translate_service["a" /* TranslateService */], sites["a" /* CoreSitesProvider */], filter["a" /* CoreFilterProvider */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreSitePickerComponentNgFactory = core["_27" /* ??ccf */]("core-site-picker", site_picker["a" /* CoreSitePickerComponent */], View_CoreSitePickerComponent_Host_0, { initialSite: "initialSite" }, { siteSelected: "siteSelected" }, []);

//# sourceMappingURL=site-picker.ngfactory.js.map
// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(55);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(70);

// CONCATENATED MODULE: ./src/core/sharedfiles/pages/list/list.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















































var styles_CoreSharedFilesListPage = [];
var RenderType_CoreSharedFilesListPage = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_CoreSharedFilesListPage, data: {} });

function View_CoreSharedFilesListPage_1(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ??qud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ??did */](5, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ??eld */](8, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ??did */](9, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_2 = "close"; _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 4, 0, core["_44" /* ??nov */](_v, 6).transform("core.close")); _ck(_v, 4, 0, currVal_0); var currVal_1 = core["_44" /* ??nov */](_v, 9)._hidden; _ck(_v, 8, 0, currVal_1); }); }
function View_CoreSharedFilesListPage_4(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "core-local-file", [], null, [[null, "onClick"], [null, "onDelete"], [null, "onRename"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onClick" === en)) {
        var pd_0 = (_co.filePicked(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } if (("onDelete" === en)) {
        var pd_1 = (_co.fileDeleted(_v.parent.context.index) !== false);
        ad = (pd_1 && ad);
    } if (("onRename" === en)) {
        var pd_2 = (_co.fileRenamed(_v.parent.context.index, $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, local_file_ngfactory["b" /* View_CoreLocalFileComponent_0 */], local_file_ngfactory["a" /* RenderType_CoreLocalFileComponent */])), core["_30" /* ??did */](1, 114688, null, 0, local_file["a" /* CoreLocalFileComponent */], [mimetype["a" /* CoreMimetypeUtilsProvider */], utils["a" /* CoreUtilsProvider */], translate_service["a" /* TranslateService */], utils_text["a" /* CoreTextUtilsProvider */], file["a" /* CoreFileProvider */], dom["a" /* CoreDomUtilsProvider */], time["a" /* CoreTimeUtilsProvider */]], { file: [0, "file"], manage: [1, "manage"], overrideClick: [2, "overrideClick"] }, { onDelete: "onDelete", onRename: "onRename", onClick: "onClick" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit; var currVal_1 = _co.manage; var currVal_2 = _co.pick; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_CoreSharedFilesListPage_5(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 12, "a", [["class", "item-media item item-block"], ["ion-item", ""], ["text-wrap", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openFolder(_v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 2, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 3, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 4, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 0, 1, "img", [["item-start", ""], ["role", "presentation"], ["src", "assets/img/files/folder-64.png"]], [[8, "alt", 0]], null, null, null, null)), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ??eld */](10, 0, null, 2, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](11, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "]))], null, function (_ck, _v) { var currVal_0 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 7, 0, core["_44" /* ??nov */](_v, 8).transform("core.folder")), ""); _ck(_v, 7, 0, currVal_0); var currVal_1 = _v.parent.context.$implicit.name; _ck(_v, 11, 0, currVal_1); }); }
function View_CoreSharedFilesListPage_3(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSharedFilesListPage_4)), core["_30" /* ??did */](3, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSharedFilesListPage_5)), core["_30" /* ??did */](6, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.isFile; _ck(_v, 3, 0, currVal_0); var currVal_1 = !_v.context.$implicit.isFile; _ck(_v, 6, 0, currVal_1); }, null); }
function View_CoreSharedFilesListPage_2(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 5, "ion-list", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreSharedFilesListPage_3)), core["_30" /* ??did */](4, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.files; _ck(_v, 4, 0, currVal_0); }, null); }
function View_CoreSharedFilesListPage_6(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "core-empty-box", [["icon", "folder"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ??did */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, core["_44" /* ??nov */](_v, 2).transform("core.sharedfiles.nosharedfiles")); var currVal_1 = "folder"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreSharedFilesListPage_7(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "core-empty-box", [["icon", "folder"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ??did */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, core["_44" /* ??nov */](_v, 2).transform("core.sharedfiles.nosharedfilestoupload")); var currVal_1 = "folder"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreSharedFilesListPage_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 14, "ion-header", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 10, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ??did */](4, 49152, null, 0, navbar["a" /* Navbar */], [app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ??did */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ??did */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ??ted */](9, 0, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_CoreSharedFilesListPage_1)), core["_30" /* ??did */](12, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_31" /* ??eld */](16, 0, null, null, 27, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ??did */](17, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](19, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshFiles($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ??did */](20, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](22, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ??did */](23, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](28, 0, null, 1, 1, "core-site-picker", [], [[8, "hidden", 0]], [[null, "siteSelected"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("siteSelected" === en)) {
        var pd_0 = (_co.changeSite($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_CoreSitePickerComponent_0, RenderType_CoreSitePickerComponent)), core["_30" /* ??did */](29, 114688, null, 0, site_picker["a" /* CoreSitePickerComponent */], [translate_service["a" /* TranslateService */], sites["a" /* CoreSitesProvider */], filter["a" /* CoreFilterProvider */]], { initialSite: [0, "initialSite"] }, { siteSelected: "siteSelected" }), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](31, 0, null, 1, 11, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ??did */](32, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreSharedFilesListPage_2)), core["_30" /* ??did */](35, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreSharedFilesListPage_6)), core["_30" /* ??did */](38, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreSharedFilesListPage_7)), core["_30" /* ??did */](41, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_3 = _co.isModal; _ck(_v, 12, 0, currVal_3); var currVal_8 = _co.filesLoaded; _ck(_v, 20, 0, currVal_8); var currVal_10 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 23, 0, core["_44" /* ??nov */](_v, 24).transform("core.pulltorefresh")), ""); _ck(_v, 23, 0, currVal_10); var currVal_12 = _co.siteId; _ck(_v, 29, 0, currVal_12); var currVal_13 = _co.filesLoaded; _ck(_v, 32, 0, currVal_13); var currVal_14 = (_co.files && (_co.files.length > 0)); _ck(_v, 35, 0, currVal_14); var currVal_15 = ((_co.files && !_co.files.length) && _co.manage); _ck(_v, 38, 0, currVal_15); var currVal_16 = ((_co.files && !_co.files.length) && !_co.manage); _ck(_v, 41, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ??nov */](_v, 4)._hidden; var currVal_1 = core["_44" /* ??nov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _co.title; _ck(_v, 9, 0, currVal_2); var currVal_4 = core["_44" /* ??nov */](_v, 17).statusbarPadding; var currVal_5 = core["_44" /* ??nov */](_v, 17)._hasRefresher; _ck(_v, 16, 0, currVal_4, currVal_5); var currVal_6 = (core["_44" /* ??nov */](_v, 20).state !== "inactive"); var currVal_7 = core["_44" /* ??nov */](_v, 20)._top; _ck(_v, 19, 0, currVal_6, currVal_7); var currVal_9 = core["_44" /* ??nov */](_v, 23).r.state; _ck(_v, 22, 0, currVal_9); var currVal_11 = !_co.filesLoaded; _ck(_v, 28, 0, currVal_11); }); }
function View_CoreSharedFilesListPage_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "page-core-shared-files-list", [], null, null, null, View_CoreSharedFilesListPage_0, RenderType_CoreSharedFilesListPage)), core["_30" /* ??did */](1, 245760, null, 0, list_CoreSharedFilesListPage, [view_controller["a" /* ViewController */], nav_params["a" /* NavParams */], sharedfiles["a" /* CoreSharedFilesProvider */], sites["a" /* CoreSitesProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], file["a" /* CoreFileProvider */], events["a" /* CoreEventsProvider */], nav_controller["a" /* NavController */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CoreSharedFilesListPageNgFactory = core["_27" /* ??ccf */]("page-core-shared-files-list", list_CoreSharedFilesListPage, View_CoreSharedFilesListPage_Host_0, {}, {}, []);

//# sourceMappingURL=list.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/core/sharedfiles/pages/list/list.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreSharedFilesListPageModuleNgFactory", function() { return CoreSharedFilesListPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreSharedFilesListPageModuleNgFactory = core["_28" /* ??cmf */](list_module_CoreSharedFilesListPageModule, [], function (_l) { return core["_40" /* ??mod */]([core["_41" /* ??mpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ??CodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreSharedFilesListPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ??mpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ??a */]]]), core["_41" /* ??mpd */](4608, esm5_forms["x" /* ??i */], esm5_forms["x" /* ??i */], []), core["_41" /* ??mpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ??mpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ??mpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ??mpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ??mpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ??mpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ??mpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ??mpd */](512, esm5_forms["v" /* ??ba */], esm5_forms["v" /* ??ba */], []), core["_41" /* ??mpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ??mpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ??mpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ??mpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ??mpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ??mpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ??mpd */](512, list_module_CoreSharedFilesListPageModule, list_module_CoreSharedFilesListPageModule, []), core["_41" /* ??mpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ??mpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ??mpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], list_CoreSharedFilesListPage, [])]); });

//# sourceMappingURL=list.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=37.js.map