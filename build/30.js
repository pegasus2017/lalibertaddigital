webpackJsonp([30],{

/***/ 2132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/core/user/providers/user.ts
var providers_user = __webpack_require__(45);

// EXTERNAL MODULE: ./src/core/user/providers/helper.ts
var helper = __webpack_require__(737);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/core/courses/providers/courses.ts
var courses = __webpack_require__(51);

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/providers/utils/mimetype.ts
var mimetype = __webpack_require__(67);

// EXTERNAL MODULE: ./src/core/fileuploader/providers/helper.ts
var providers_helper = __webpack_require__(150);

// EXTERNAL MODULE: ./src/core/user/providers/user-delegate.ts
var user_delegate = __webpack_require__(103);

// EXTERNAL MODULE: ./src/components/split-view/split-view.ts
var split_view = __webpack_require__(29);

// CONCATENATED MODULE: ./src/core/user/pages/profile/profile.ts
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













/**
 * Page that displays an user profile page.
 */
var profile_CoreUserProfilePage = /** @class */ (function () {
    function CoreUserProfilePage(navParams, userProvider, userHelper, domUtils, translate, eventsProvider, coursesProvider, sitesProvider, mimetypeUtils, fileUploaderHelper, userDelegate, navCtrl, svComponent) {
        var _this = this;
        this.userProvider = userProvider;
        this.userHelper = userHelper;
        this.domUtils = domUtils;
        this.translate = translate;
        this.eventsProvider = eventsProvider;
        this.coursesProvider = coursesProvider;
        this.sitesProvider = sitesProvider;
        this.mimetypeUtils = mimetypeUtils;
        this.fileUploaderHelper = fileUploaderHelper;
        this.userDelegate = userDelegate;
        this.navCtrl = navCtrl;
        this.svComponent = svComponent;
        this.userLoaded = false;
        this.isLoadingHandlers = false;
        this.isDeleted = false;
        this.isEnrolled = true;
        this.canChangeProfilePicture = false;
        this.actionHandlers = [];
        this.newPageHandlers = [];
        this.communicationHandlers = [];
        this.userId = navParams.get('userId');
        this.courseId = navParams.get('courseId');
        this.site = this.sitesProvider.getCurrentSite();
        // Allow to change the profile image only in the app profile page.
        this.canChangeProfilePicture =
            (!this.courseId || this.courseId == this.site.getSiteHomeId()) &&
                this.userId == this.site.getUserId() &&
                this.site.canUploadFiles() &&
                this.site.wsAvailable('core_user_update_picture') &&
                !this.userProvider.isUpdatePictureDisabledInSite(this.site);
        this.obsProfileRefreshed = eventsProvider.on(providers_user["a" /* CoreUserProvider */].PROFILE_REFRESHED, function (data) {
            if (_this.user && typeof data.user != 'undefined') {
                _this.user.email = data.user.email;
                _this.user.address = _this.userHelper.formatAddress('', data.user.city, data.user.country);
            }
        }, sitesProvider.getCurrentSiteId());
    }
    /**
     * View loaded.
     */
    CoreUserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fetchUser().then(function () {
            return _this.userProvider.logView(_this.userId, _this.courseId, _this.user.fullname).catch(function (error) {
                _this.isDeleted = error.errorcode === 'userdeleted';
                _this.isEnrolled = error.errorcode !== 'notenrolledprofile';
            });
        }).finally(function () {
            _this.userLoaded = true;
        });
    };
    /**
     * Fetches the user and updates the view.
     */
    CoreUserProfilePage.prototype.fetchUser = function () {
        var _this = this;
        return this.userProvider.getProfile(this.userId, this.courseId).then(function (user) {
            user.address = _this.userHelper.formatAddress('', user.city, user.country);
            user.roles = _this.userHelper.formatRoleList(user.roles);
            _this.user = user;
            _this.title = user.fullname;
            // If there's already a subscription, unsubscribe because we'll get a new one.
            _this.subscription && _this.subscription.unsubscribe();
            _this.subscription = _this.userDelegate.getProfileHandlersFor(user, _this.courseId).subscribe(function (handlers) {
                _this.actionHandlers = [];
                _this.newPageHandlers = [];
                _this.communicationHandlers = [];
                handlers.forEach(function (handler) {
                    switch (handler.type) {
                        case user_delegate["a" /* CoreUserDelegate */].TYPE_COMMUNICATION:
                            _this.communicationHandlers.push(handler.data);
                            break;
                        case user_delegate["a" /* CoreUserDelegate */].TYPE_ACTION:
                            _this.actionHandlers.push(handler.data);
                            break;
                        case user_delegate["a" /* CoreUserDelegate */].TYPE_NEW_PAGE:
                        default:
                            _this.newPageHandlers.push(handler.data);
                            break;
                    }
                });
                _this.isLoadingHandlers = !_this.userDelegate.areHandlersLoaded(user.id);
            });
            if (_this.userId == _this.site.getUserId() && user.profileimageurl != _this.site.getInfo().userpictureurl) {
                // The current user image received is different than the one stored in site info. Assume the image was updated.
                // Update the site info to get the right avatar in there.
                return _this.sitesProvider.updateSiteInfo(_this.site.getId()).then(function () {
                    if (user.profileimageurl != _this.site.getInfo().userpictureurl) {
                        // The image is still different, this means that the good one is the one in site info.
                        return _this.refreshUser();
                    }
                    else {
                        // Now they're the same, send event to use the right avatar in the rest of the app.
                        _this.eventsProvider.trigger(providers_user["a" /* CoreUserProvider */].PROFILE_PICTURE_UPDATED, {
                            userId: _this.userId,
                            picture: user.profileimageurl
                        }, _this.site.getId());
                    }
                }, function () {
                    // Cannot update site info. Assume the profile image is the right one.
                    _this.eventsProvider.trigger(providers_user["a" /* CoreUserProvider */].PROFILE_PICTURE_UPDATED, {
                        userId: _this.userId,
                        picture: user.profileimageurl
                    }, _this.site.getId());
                });
            }
        }).catch(function (error) {
            // Error is null for deleted users, do not show the modal.
            if (error) {
                _this.domUtils.showErrorModal(error);
            }
        });
    };
    /**
     * Opens dialog to change profile picture.
     */
    CoreUserProfilePage.prototype.changeProfilePicture = function () {
        var _this = this;
        var maxSize = -1, title = this.translate.instant('core.user.newpicture'), mimetypes = this.mimetypeUtils.getGroupMimeInfo('image', 'mimetypes');
        return this.fileUploaderHelper.selectAndUploadFile(maxSize, title, mimetypes).then(function (result) {
            var modal = _this.domUtils.showModalLoading('core.sending', true);
            return _this.userProvider.changeProfilePicture(result.itemid, _this.userId).then(function (profileImageURL) {
                _this.eventsProvider.trigger(providers_user["a" /* CoreUserProvider */].PROFILE_PICTURE_UPDATED, {
                    userId: _this.userId,
                    picture: profileImageURL
                }, _this.site.getId());
                _this.sitesProvider.updateSiteInfo(_this.site.getId());
                _this.refreshUser();
            }).finally(function () {
                modal.dismiss();
            });
        }).catch(function (message) {
            if (message) {
                _this.domUtils.showErrorModal(message);
            }
        });
    };
    /**
     * Refresh the user.
     *
     * @param refresher Refresher.
     */
    CoreUserProfilePage.prototype.refreshUser = function (refresher) {
        var _this = this;
        var promises = [];
        promises.push(this.userProvider.invalidateUserCache(this.userId));
        promises.push(this.coursesProvider.invalidateUserNavigationOptions());
        promises.push(this.coursesProvider.invalidateUserAdministrationOptions());
        Promise.all(promises).finally(function () {
            _this.fetchUser().finally(function () {
                _this.eventsProvider.trigger(providers_user["a" /* CoreUserProvider */].PROFILE_REFRESHED, {
                    courseId: _this.courseId,
                    userId: _this.userId,
                    user: _this.user
                }, _this.site.getId());
                refresher && refresher.complete();
            });
        });
    };
    /**
     * Open the page with the user details.
     */
    CoreUserProfilePage.prototype.openUserDetails = function () {
        // Decide which navCtrl to use. If this page is inside a split view, use the split view's master nav.
        var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        navCtrl.push('CoreUserAboutPage', { courseId: this.courseId, userId: this.userId });
    };
    /**
     * A handler was clicked.
     *
     * @param event Click event.
     * @param handler Handler that was clicked.
     */
    CoreUserProfilePage.prototype.handlerClicked = function (event, handler) {
        // Decide which navCtrl to use. If this page is inside a split view, use the split view's master nav.
        var navCtrl = this.svComponent ? this.svComponent.getMasterNav() : this.navCtrl;
        handler.action(event, navCtrl, this.user, this.courseId);
    };
    /**
     * Page destroyed.
     */
    CoreUserProfilePage.prototype.ngOnDestroy = function () {
        this.subscription && this.subscription.unsubscribe();
        this.obsProfileRefreshed && this.obsProfileRefreshed.off();
    };
    CoreUserProfilePage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-core-user-profile',
            templateUrl: 'profile.html',
        }),
        __param(12, Object(core["N" /* Optional */])()),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */], providers_user["a" /* CoreUserProvider */], helper["a" /* CoreUserHelperProvider */],
            dom["a" /* CoreDomUtilsProvider */], _ngx_translate_core["c" /* TranslateService */], events["a" /* CoreEventsProvider */],
            courses["a" /* CoreCoursesProvider */], sites["a" /* CoreSitesProvider */],
            mimetype["a" /* CoreMimetypeUtilsProvider */], providers_helper["a" /* CoreFileUploaderHelperProvider */],
            user_delegate["a" /* CoreUserDelegate */], ionic_angular["s" /* NavController */],
            split_view["a" /* CoreSplitViewComponent */]])
    ], CoreUserProfilePage);
    return CoreUserProfilePage;
}());

//# sourceMappingURL=profile.js.map
// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(27);

// CONCATENATED MODULE: ./src/core/user/pages/profile/profile.module.ts
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
var profile_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var profile_module_CoreUserProfilePageModule = /** @class */ (function () {
    function CoreUserProfilePageModule() {
    }
    CoreUserProfilePageModule = profile_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                profile_CoreUserProfilePage,
            ],
            imports: [
                directives_module["a" /* CoreDirectivesModule */],
                components_module["a" /* CoreComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(profile_CoreUserProfilePage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], CoreUserProfilePageModule);
    return CoreUserProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map
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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/col.js
var col = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(99);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon_icon = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/row.js
var row = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.ngfactory.js
var spinner_ngfactory = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/spinner/spinner.js
var spinner = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/grid/grid.js
var grid = __webpack_require__(163);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/gestures/gesture-controller.js
var gesture_controller = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ngfactory.js
var user_avatar_ngfactory = __webpack_require__(216);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./src/providers/utils/utils.ts
var utils = __webpack_require__(2);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(158);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher.js
var refresher_refresher = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.ngfactory.js
var refresher_content_ngfactory = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/refresher/refresher-content.js
var refresher_content = __webpack_require__(174);

// EXTERNAL MODULE: ./src/components/loading/loading.ngfactory.js
var loading_ngfactory = __webpack_require__(55);

// EXTERNAL MODULE: ./src/components/loading/loading.ts
var loading = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(70);

// CONCATENATED MODULE: ./src/core/user/pages/profile/profile.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





























































var styles_CoreUserProfilePage = [];
var RenderType_CoreUserProfilePage = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_CoreUserProfilePage, data: {} });

function View_CoreUserProfilePage_2(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "ion-icon", [["class", "core-icon-foreground"], ["name", "create"], ["role", "img"]], [[2, "hide", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeProfilePicture() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ??did */](1, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_1 = "create"; _ck(_v, 1, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 1)._hidden; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreUserProfilePage_3(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.address; _ck(_v, 1, 0, currVal_0); }); }
function View_CoreUserProfilePage_4(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 6, "p", [["text-wrap", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "])), (_l()(), core["_31" /* ??eld */](2, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](3, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](5, null, ["", "\n                    ", "\n                "])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_56" /* ??unv */](_v, 3, 0, core["_44" /* ??nov */](_v, 4).transform("core.user.roles")); _ck(_v, 3, 0, currVal_0); var currVal_1 = core["_56" /* ??unv */](_v, 5, 0, core["_44" /* ??nov */](_v, 6).transform("core.labelsep")); var currVal_2 = _co.user.roles; _ck(_v, 5, 0, currVal_1, currVal_2); }); }
function View_CoreUserProfilePage_7(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 15, "ion-col", [["align-self-center", ""], ["class", "col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 11, "a", [["tappable", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.handlerClicked($event, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ??did */](4, 278528, null, 0, common["i" /* NgClass */], [core["E" /* IterableDiffers */], core["F" /* KeyValueDiffers */], core["t" /* ElementRef */], core["W" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), core["_46" /* ??pad */](5, 2), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                            "])), (_l()(), core["_31" /* ??eld */](8, 0, null, null, 1, "core-icon", [], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ??did */](9, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                            "])), (_l()(), core["_31" /* ??eld */](11, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](12, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_1 = _ck(_v, 5, 0, "core-user-profile-handler", _v.context.$implicit.class); _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.$implicit.icon; _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 3, 0, core["_44" /* ??nov */](_v, 6).transform(_v.context.$implicit.title)), ""); _ck(_v, 3, 0, currVal_0); var currVal_3 = core["_56" /* ??unv */](_v, 12, 0, core["_44" /* ??nov */](_v, 13).transform(_v.context.$implicit.title)); _ck(_v, 12, 0, currVal_3); }); }
function View_CoreUserProfilePage_6(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 5, "ion-row", [["class", "row"], ["justify-content-between", ""], ["no-padding", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreUserProfilePage_7)), core["_30" /* ??did */](4, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.communicationHandlers; _ck(_v, 4, 0, currVal_0); }, null); }
function View_CoreUserProfilePage_8(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 5, "ion-col", [["class", "core-loading-handlers col"], ["text-center", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, col["a" /* Col */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_30" /* ??did */](4, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "]))], function (_ck, _v) { _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 4)._paused; _ck(_v, 3, 0, currVal_0); }); }
function View_CoreUserProfilePage_5(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 12, "ion-grid", [["class", "core-user-communication-handlers grid"]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, grid["a" /* Grid */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreUserProfilePage_6)), core["_30" /* ??did */](4, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ??eld */](6, 0, null, null, 5, "ion-row", [["class", "row"], ["no-padding", ""]], null, null, null, null, null)), core["_30" /* ??did */](7, 16384, null, 0, row["a" /* Row */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreUserProfilePage_8)), core["_30" /* ??did */](10, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.communicationHandlers && _co.communicationHandlers.length); _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.isLoadingHandlers; _ck(_v, 10, 0, currVal_1); }, null); }
function View_CoreUserProfilePage_9(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 9, "ion-item", [["class", "core-loading-handlers item item-block"], ["text-center", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 7, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 8, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 9, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 2, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_30" /* ??did */](8, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "]))], function (_ck, _v) { _ck(_v, 8, 0); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 8)._paused; _ck(_v, 7, 0, currVal_0); }); }
function View_CoreUserProfilePage_11(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "core-icon", [["item-start", ""]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ??did */](1, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.icon; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreUserProfilePage_10(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 16, "a", [["class", "item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[8, "hidden", 0], [8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.handlerClicked($event, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 278528, null, 0, common["i" /* NgClass */], [core["E" /* IterableDiffers */], core["F" /* KeyValueDiffers */], core["t" /* ElementRef */], core["W" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), core["_46" /* ??pad */](2, 2), core["_30" /* ??did */](3, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 10, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 11, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 12, { _icons: 1 }), core["_30" /* ??did */](7, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreUserProfilePage_11)), core["_30" /* ??did */](11, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ??eld */](13, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](14, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "]))], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, "core-user-profile-handler", _v.context.$implicit.class); _ck(_v, 1, 0, currVal_2); var currVal_3 = _v.context.$implicit.icon; _ck(_v, 11, 0, currVal_3); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.hidden; var currVal_1 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 0, 1, core["_44" /* ??nov */](_v, 8).transform(_v.context.$implicit.title)), ""); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = core["_56" /* ??unv */](_v, 14, 0, core["_44" /* ??nov */](_v, 15).transform(_v.context.$implicit.title)); _ck(_v, 14, 0, currVal_4); }); }
function View_CoreUserProfilePage_14(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "core-icon", [["start", ""]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ??did */](1, 704512, null, 0, icon_icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.icon; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CoreUserProfilePage_15(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "ion-spinner", [], [[2, "spinner-paused", null]], null, null, spinner_ngfactory["b" /* View_Spinner_0 */], spinner_ngfactory["a" /* RenderType_Spinner */])), core["_30" /* ??did */](1, 114688, null, 0, spinner["a" /* Spinner */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 1)._paused; _ck(_v, 0, 0, currVal_0); }); }
function View_CoreUserProfilePage_13(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 15, "button", [["block", ""], ["icon-start", ""], ["ion-button", ""], ["outline", ""]], [[8, "hidden", 0], [8, "title", 0], [8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.handlerClicked($event, _v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ??did */](1, 278528, null, 0, common["i" /* NgClass */], [core["E" /* IterableDiffers */], core["F" /* KeyValueDiffers */], core["t" /* ElementRef */], core["W" /* Renderer2 */]], { ngClass: [0, "ngClass"] }, null), core["_46" /* ??pad */](2, 2), core["_30" /* ??did */](3, 1097728, [[14, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { outline: [0, "outline"], block: [1, "block"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreUserProfilePage_14)), core["_30" /* ??did */](7, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                    "])), (_l()(), core["_31" /* ??eld */](9, 0, null, 0, 2, "span", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](10, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreUserProfilePage_15)), core["_30" /* ??did */](14, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                "]))], function (_ck, _v) { var currVal_3 = _ck(_v, 2, 0, "core-user-profile-handler", _v.context.$implicit.class); _ck(_v, 1, 0, currVal_3); var currVal_4 = ""; var currVal_5 = ""; _ck(_v, 3, 0, currVal_4, currVal_5); var currVal_6 = _v.context.$implicit.icon; _ck(_v, 7, 0, currVal_6); var currVal_8 = _v.context.$implicit.spinner; _ck(_v, 14, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.hidden; var currVal_1 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 0, 1, core["_44" /* ??nov */](_v, 4).transform(_v.context.$implicit.title)), ""); var currVal_2 = _v.context.$implicit.spinner; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_7 = core["_56" /* ??unv */](_v, 10, 0, core["_44" /* ??nov */](_v, 11).transform(_v.context.$implicit.title)); _ck(_v, 10, 0, currVal_7); }); }
function View_CoreUserProfilePage_12(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 9, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 13, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 14, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 15, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_CoreUserProfilePage_13)), core["_30" /* ??did */](8, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.actionHandlers; _ck(_v, 8, 0, currVal_0); }, null); }
function View_CoreUserProfilePage_1(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 55, "ion-list", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 23, "ion-item", [["class", "item item-block"], ["text-center", ""]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](4, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 2, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 3, { _icons: 1 }), core["_30" /* ??did */](8, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ??eld */](10, 0, null, 2, 6, "ion-avatar", [["class", "item-avatar-center"], ["core-user-avatar", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_30" /* ??did */](11, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["a" /* CoreSitesProvider */], utils["a" /* CoreUtilsProvider */], app["a" /* CoreAppProvider */], events["a" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"], linkProfile: [1, "linkProfile"], userId: [2, "userId"], checkOnline: [3, "checkOnline"] }, null), core["_30" /* ??did */](12, 16384, null, 0, avatar["a" /* Avatar */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreUserProfilePage_2)), core["_30" /* ??did */](15, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n                "])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ??eld */](18, 0, null, 2, 1, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](19, null, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_CoreUserProfilePage_3)), core["_30" /* ??did */](22, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_CoreUserProfilePage_4)), core["_30" /* ??did */](25, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreUserProfilePage_5)), core["_30" /* ??did */](29, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n            "])), (_l()(), core["_31" /* ??eld */](31, 0, null, null, 14, "a", [["class", "core-user-profile-handler item item-block"], ["ion-item", ""], ["text-wrap", ""]], [[8, "title", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openUserDetails() !== false);
        ad = (pd_0 && ad);
    } return ad; }, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](32, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 4, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 5, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 6, { _icons: 1 }), core["_30" /* ??did */](36, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ??eld */](39, 0, null, 0, 1, "ion-icon", [["item-start", ""], ["name", "person"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ??did */](40, 147456, [[6, 4]], 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "])), (_l()(), core["_31" /* ??eld */](42, 0, null, 2, 2, "h2", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](43, null, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n            "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreUserProfilePage_9)), core["_30" /* ??did */](48, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreUserProfilePage_10)), core["_30" /* ??did */](51, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_CoreUserProfilePage_12)), core["_30" /* ??did */](54, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user; var currVal_1 = false; var currVal_2 = _co.user.id; var currVal_3 = true; _ck(_v, 11, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.canChangeProfilePicture; _ck(_v, 15, 0, currVal_4); var currVal_6 = _co.user.address; _ck(_v, 22, 0, currVal_6); var currVal_7 = _co.user.roles; _ck(_v, 25, 0, currVal_7); var currVal_8 = ((_co.communicationHandlers && _co.communicationHandlers.length) || _co.isLoadingHandlers); _ck(_v, 29, 0, currVal_8); var currVal_11 = "person"; _ck(_v, 40, 0, currVal_11); var currVal_13 = _co.isLoadingHandlers; _ck(_v, 48, 0, currVal_13); var currVal_14 = _co.newPageHandlers; _ck(_v, 51, 0, currVal_14); var currVal_15 = (_co.actionHandlers && _co.actionHandlers.length); _ck(_v, 54, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.user.fullname; _ck(_v, 19, 0, currVal_5); var currVal_9 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 31, 0, core["_44" /* ??nov */](_v, 37).transform("core.user.details")), ""); _ck(_v, 31, 0, currVal_9); var currVal_10 = core["_44" /* ??nov */](_v, 40)._hidden; _ck(_v, 39, 0, currVal_10); var currVal_12 = core["_56" /* ??unv */](_v, 43, 0, core["_44" /* ??nov */](_v, 44).transform("core.user.details")); _ck(_v, 43, 0, currVal_12); }); }
function View_CoreUserProfilePage_16(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "core-empty-box", [["icon", "person"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ??did */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, core["_44" /* ??nov */](_v, 2).transform("core.user.detailsnotavailable")); var currVal_1 = "person"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreUserProfilePage_17(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "core-empty-box", [["icon", "person"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ??did */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, core["_44" /* ??nov */](_v, 2).transform("core.userdeleted")); var currVal_1 = "person"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreUserProfilePage_18(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "core-empty-box", [["icon", "person"]], null, null, null, empty_box_ngfactory["b" /* View_CoreEmptyBoxComponent_0 */], empty_box_ngfactory["a" /* RenderType_CoreEmptyBoxComponent */])), core["_30" /* ??did */](1, 49152, null, 0, empty_box["a" /* CoreEmptyBoxComponent */], [], { message: [0, "message"], icon: [1, "icon"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]])], function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, core["_44" /* ??nov */](_v, 2).transform("core.notenrolledprofile")); var currVal_1 = "person"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_CoreUserProfilePage_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 11, "ion-header", [], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 7, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ??did */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ??did */](5, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ??eld */](7, 0, null, 3, 2, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ??did */](8, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ??ted */](9, 0, ["", ""])), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_31" /* ??eld */](13, 0, null, null, 26, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ??did */](14, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](16, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshUser($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ??did */](17, 212992, null, 0, refresher_refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](19, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ??did */](20, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher_refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](24, 0, null, 1, 14, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ??did */](25, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreUserProfilePage_1)), core["_30" /* ??did */](28, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreUserProfilePage_16)), core["_30" /* ??did */](31, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreUserProfilePage_17)), core["_30" /* ??did */](34, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_26" /* ??and */](16777216, null, 0, 1, null, View_CoreUserProfilePage_18)), core["_30" /* ??did */](37, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 5, 0); var currVal_7 = _co.userLoaded; _ck(_v, 17, 0, currVal_7); var currVal_9 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 20, 0, core["_44" /* ??nov */](_v, 21).transform("core.pulltorefresh")), ""); _ck(_v, 20, 0, currVal_9); var currVal_10 = _co.userLoaded; _ck(_v, 25, 0, currVal_10); var currVal_11 = ((_co.user && !_co.isDeleted) && _co.isEnrolled); _ck(_v, 28, 0, currVal_11); var currVal_12 = ((!_co.user && !_co.isDeleted) && _co.isEnrolled); _ck(_v, 31, 0, currVal_12); var currVal_13 = _co.isDeleted; _ck(_v, 34, 0, currVal_13); var currVal_14 = !_co.isEnrolled; _ck(_v, 37, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ??nov */](_v, 4)._hidden; var currVal_1 = core["_44" /* ??nov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _co.title; _ck(_v, 9, 0, currVal_2); var currVal_3 = core["_44" /* ??nov */](_v, 14).statusbarPadding; var currVal_4 = core["_44" /* ??nov */](_v, 14)._hasRefresher; _ck(_v, 13, 0, currVal_3, currVal_4); var currVal_5 = (core["_44" /* ??nov */](_v, 17).state !== "inactive"); var currVal_6 = core["_44" /* ??nov */](_v, 17)._top; _ck(_v, 16, 0, currVal_5, currVal_6); var currVal_8 = core["_44" /* ??nov */](_v, 20).r.state; _ck(_v, 19, 0, currVal_8); }); }
function View_CoreUserProfilePage_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "page-core-user-profile", [], null, null, null, View_CoreUserProfilePage_0, RenderType_CoreUserProfilePage)), core["_30" /* ??did */](1, 180224, null, 0, profile_CoreUserProfilePage, [nav_params["a" /* NavParams */], providers_user["a" /* CoreUserProvider */], helper["a" /* CoreUserHelperProvider */], dom["a" /* CoreDomUtilsProvider */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */], courses["a" /* CoreCoursesProvider */], sites["a" /* CoreSitesProvider */], mimetype["a" /* CoreMimetypeUtilsProvider */], providers_helper["a" /* CoreFileUploaderHelperProvider */], user_delegate["a" /* CoreUserDelegate */], nav_controller["a" /* NavController */], [2, split_view["a" /* CoreSplitViewComponent */]]], null, null)], null, null); }
var CoreUserProfilePageNgFactory = core["_27" /* ??ccf */]("page-core-user-profile", profile_CoreUserProfilePage, View_CoreUserProfilePage_Host_0, {}, {}, []);

//# sourceMappingURL=profile.ngfactory.js.map
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

// CONCATENATED MODULE: ./src/core/user/pages/profile/profile.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUserProfilePageModuleNgFactory", function() { return CoreUserProfilePageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































var CoreUserProfilePageModuleNgFactory = core["_28" /* ??cmf */](profile_module_CoreUserProfilePageModule, [], function (_l) { return core["_40" /* ??mod */]([core["_41" /* ??mpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ??CodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], CoreUserProfilePageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ??mpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ??a */]]]), core["_41" /* ??mpd */](4608, esm5_forms["x" /* ??i */], esm5_forms["x" /* ??i */], []), core["_41" /* ??mpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ??mpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ??mpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ??mpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ??mpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ??mpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ??mpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ??mpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ??mpd */](512, esm5_forms["v" /* ??ba */], esm5_forms["v" /* ??ba */], []), core["_41" /* ??mpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ??mpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ??mpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ??mpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ??mpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ??mpd */](512, profile_module_CoreUserProfilePageModule, profile_module_CoreUserProfilePageModule, []), core["_41" /* ??mpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ??mpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ??mpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], profile_CoreUserProfilePage, [])]); });

//# sourceMappingURL=profile.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=30.js.map