webpackJsonp([117],{

/***/ 2029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/components.module.ts
var components_module = __webpack_require__(27);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 2 modules
var directives_module = __webpack_require__(31);

// EXTERNAL MODULE: ./src/pipes/pipes.module.ts + 2 modules
var pipes_module = __webpack_require__(106);

// EXTERNAL MODULE: ./src/addon/mod/chat/components/components.module.ts
var components_components_module = __webpack_require__(730);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(4);

// EXTERNAL MODULE: ./src/providers/sites.ts
var sites = __webpack_require__(1);

// EXTERNAL MODULE: ./src/core/user/providers/user.ts
var user = __webpack_require__(45);

// EXTERNAL MODULE: ./src/addon/mod/chat/providers/chat.ts
var chat = __webpack_require__(281);

// EXTERNAL MODULE: ./src/addon/mod/chat/providers/helper.ts
var helper = __webpack_require__(735);

// CONCATENATED MODULE: ./src/addon/mod/chat/pages/session-messages/session-messages.ts
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
 * Page that displays list of chat session messages.
 */
var session_messages_AddonModChatSessionMessagesPage = /** @class */ (function () {
    function AddonModChatSessionMessagesPage(navParams, domUtils, chatProvider, sitesProvider, chatHelper, userProvider) {
        this.domUtils = domUtils;
        this.chatProvider = chatProvider;
        this.chatHelper = chatHelper;
        this.userProvider = userProvider;
        this.messages = [];
        this.loaded = false;
        this.courseId = navParams.get('courseId');
        this.chatId = navParams.get('chatId');
        this.groupId = navParams.get('groupId');
        this.sessionStart = navParams.get('sessionStart');
        this.sessionEnd = navParams.get('sessionEnd');
        this.cmId = navParams.get('cmId');
        this.currentUserId = sitesProvider.getCurrentSiteUserId();
        this.fetchMessages();
    }
    /**
     * Fetch session messages.
     *
     * @return Promise resolved when done.
     */
    AddonModChatSessionMessagesPage.prototype.fetchMessages = function () {
        var _this = this;
        return this.chatProvider.getSessionMessages(this.chatId, this.sessionStart, this.sessionEnd, this.groupId)
            .then(function (messages) {
            return _this.chatProvider.getMessagesUserData(messages, _this.courseId).then(function (messages) {
                _this.messages = messages;
                if (messages.length) {
                    var _loop_1 = function (index) {
                        var message = _this.messages[index];
                        var prevMessage = index > 0 ? _this.messages[index - 1] : null;
                        _this.chatHelper.formatMessage(_this.currentUserId, message, prevMessage);
                        if (message.beep && message.beep != _this.currentUserId + '') {
                            _this.getUserFullname(message.beep).then(function (fullname) {
                                message.beepWho = fullname;
                            });
                        }
                    };
                    // Calculate which messages need to display the date or user data.
                    for (var index = 0; index < _this.messages.length; index++) {
                        _loop_1(index);
                    }
                    _this.messages[_this.messages.length - 1].showTail = true;
                }
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModalDefault(error, 'core.errorloadingcontent', true);
        }).finally(function () {
            _this.loaded = true;
        });
    };
    /**
     * Get the user fullname for a beep.
     *
     * @param  id User Id before parsing.
     * @return User fullname.
     */
    AddonModChatSessionMessagesPage.prototype.getUserFullname = function (id) {
        if (isNaN(parseInt(id, 10))) {
            return Promise.resolve(id);
        }
        return this.userProvider.getProfile(parseInt(id, 10), this.courseId, true).then(function (user) {
            return user.fullname;
        }).catch(function () {
            // Error getting profile.
            return id;
        });
    };
    /**
     * Refresh session messages.
     *
     * @param refresher Refresher.
     */
    AddonModChatSessionMessagesPage.prototype.refreshMessages = function (refresher) {
        var _this = this;
        this.chatProvider.invalidateSessionMessages(this.chatId, this.sessionStart, this.groupId).finally(function () {
            _this.fetchMessages().finally(function () {
                refresher.complete();
            });
        });
    };
    AddonModChatSessionMessagesPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-mod-chat-session-messages',
            templateUrl: 'session-messages.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["t" /* NavParams */], dom["a" /* CoreDomUtilsProvider */], chat["a" /* AddonModChatProvider */],
            sites["a" /* CoreSitesProvider */], helper["a" /* AddonModChatHelperProvider */], user["a" /* CoreUserProvider */]])
    ], AddonModChatSessionMessagesPage);
    return AddonModChatSessionMessagesPage;
}());

//# sourceMappingURL=session-messages.js.map
// CONCATENATED MODULE: ./src/addon/mod/chat/pages/session-messages/session-messages.module.ts
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
var session_messages_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var session_messages_module_AddonModChatSessionMessagesPageModule = /** @class */ (function () {
    function AddonModChatSessionMessagesPageModule() {
    }
    AddonModChatSessionMessagesPageModule = session_messages_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                session_messages_AddonModChatSessionMessagesPage,
            ],
            imports: [
                components_module["a" /* CoreComponentsModule */],
                directives_module["a" /* CoreDirectivesModule */],
                pipes_module["a" /* CorePipesModule */],
                components_components_module["a" /* AddonModChatComponentsModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(session_messages_AddonModChatSessionMessagesPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModChatSessionMessagesPageModule);
    return AddonModChatSessionMessagesPageModule;
}());

//# sourceMappingURL=session-messages.module.js.map
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

// EXTERNAL MODULE: ./src/addon/mod/chat/components/index/index.ngfactory.js
var index_ngfactory = __webpack_require__(1548);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/badge/badge.js
var badge = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(7);

// EXTERNAL MODULE: ./src/components/icon/icon.ngfactory.js
var icon_ngfactory = __webpack_require__(99);

// EXTERNAL MODULE: ./src/components/icon/icon.ts
var icon = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon_icon = __webpack_require__(47);

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

// EXTERNAL MODULE: ./src/providers/events.ts
var events = __webpack_require__(10);

// EXTERNAL MODULE: ./src/core/filter/providers/filter.ts
var filter = __webpack_require__(43);

// EXTERNAL MODULE: ./src/core/filter/providers/helper.ts
var filter_providers_helper = __webpack_require__(32);

// EXTERNAL MODULE: ./src/core/filter/providers/delegate.ts
var delegate = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ngfactory.js
var user_avatar_ngfactory = __webpack_require__(216);

// EXTERNAL MODULE: ./src/components/user-avatar/user-avatar.ts
var user_avatar = __webpack_require__(184);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/avatar/avatar.js
var avatar = __webpack_require__(158);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/note/note.js
var note = __webpack_require__(249);

// EXTERNAL MODULE: ./src/pipes/format-date.ts
var format_date = __webpack_require__(226);

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

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/list/list.js + 1 modules
var list = __webpack_require__(87);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(70);

// CONCATENATED MODULE: ./src/addon/mod/chat/pages/session-messages/session-messages.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 































































var styles_AddonModChatSessionMessagesPage = [];
var RenderType_AddonModChatSessionMessagesPage = core["_29" /* ??crt */]({ encapsulation: 2, styles: styles_AddonModChatSessionMessagesPage, data: {} });

function View_AddonModChatSessionMessagesPage_2(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "h6", [["class", "addon-messages-date"], ["text-center", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](1, null, ["\n                    ", "\n                "])), core["_49" /* ??ppd */](2, 2)], null, function (_ck, _v) { var currVal_0 = core["_56" /* ??unv */](_v, 1, 0, _ck(_v, 2, 0, core["_44" /* ??nov */](_v.parent.parent, 0), (_v.parent.context.$implicit.timestamp * 1000), "strftimedayshort")); _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModChatSessionMessagesPage_4(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 10, "ion-badge", [["color", "success"], ["text-wrap", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 1, "core-icon", [["name", "fa-sign-in"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ??did */](5, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](6, null, [" ", " ", ""])), core["_49" /* ??ppd */](7, 2), core["_48" /* ??pod */](8, { $a: 0 }), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = "success"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "fa-sign-in"; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = core["_56" /* ??unv */](_v, 6, 0, _ck(_v, 7, 0, core["_44" /* ??nov */](_v.parent.parent.parent, 0), (_v.parent.parent.context.$implicit.timestamp * 1000), "strftimetime")); var currVal_3 = core["_56" /* ??unv */](_v, 6, 1, core["_44" /* ??nov */](_v, 9).transform("addon.mod_chat.messageenter", _ck(_v, 8, 0, _v.parent.parent.context.$implicit.userfullname))); _ck(_v, 6, 0, currVal_2, currVal_3); }); }
function View_AddonModChatSessionMessagesPage_5(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 10, "ion-badge", [["color", "danger"], ["text-wrap", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 1, "core-icon", [["name", "fa-sign-out"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ??did */](5, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](6, null, [" ", " ", ""])), core["_49" /* ??ppd */](7, 2), core["_48" /* ??pod */](8, { $a: 0 }), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = "danger"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "fa-sign-out"; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = core["_56" /* ??unv */](_v, 6, 0, _ck(_v, 7, 0, core["_44" /* ??nov */](_v.parent.parent.parent, 0), (_v.parent.parent.context.$implicit.timestamp * 1000), "strftimetime")); var currVal_3 = core["_56" /* ??unv */](_v, 6, 1, core["_44" /* ??nov */](_v, 9).transform("addon.mod_chat.messageexit", _ck(_v, 8, 0, _v.parent.parent.context.$implicit.userfullname))); _ck(_v, 6, 0, currVal_2, currVal_3); }); }
function View_AddonModChatSessionMessagesPage_6(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 10, "ion-badge", [["color", "primary"], ["text-wrap", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 1, "ion-icon", [["name", "notifications"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ??did */](5, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](6, null, [" ", "\n                        ", " "])), core["_49" /* ??ppd */](7, 2), core["_48" /* ??pod */](8, { $a: 0 }), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = "primary"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "notifications"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = core["_44" /* ??nov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); var currVal_3 = core["_56" /* ??unv */](_v, 6, 0, _ck(_v, 7, 0, core["_44" /* ??nov */](_v.parent.parent.parent, 0), (_v.parent.parent.context.$implicit.timestamp * 1000), "strftimetime")); var currVal_4 = core["_56" /* ??unv */](_v, 6, 1, core["_44" /* ??nov */](_v, 9).transform("addon.mod_chat.messagebeepseveryone", _ck(_v, 8, 0, _v.parent.parent.context.$implicit.userfullname))); _ck(_v, 6, 0, currVal_3, currVal_4); }); }
function View_AddonModChatSessionMessagesPage_7(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 10, "ion-badge", [["color", "primary"], ["text-wrap", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 1, "ion-icon", [["name", "notifications"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ??did */](5, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](6, null, [" ", "\n                        ", " "])), core["_49" /* ??ppd */](7, 2), core["_48" /* ??pod */](8, { $a: 0 }), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = "primary"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "notifications"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = core["_44" /* ??nov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); var currVal_3 = core["_56" /* ??unv */](_v, 6, 0, _ck(_v, 7, 0, core["_44" /* ??nov */](_v.parent.parent.parent, 0), (_v.parent.parent.context.$implicit.timestamp * 1000), "strftimetime")); var currVal_4 = core["_56" /* ??unv */](_v, 6, 1, core["_44" /* ??nov */](_v, 9).transform("addon.mod_chat.messagebeepsyou", _ck(_v, 8, 0, _v.parent.parent.context.$implicit.userfullname))); _ck(_v, 6, 0, currVal_3, currVal_4); }); }
function View_AddonModChatSessionMessagesPage_8(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 10, "ion-badge", [["color", "light"], ["text-wrap", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 6, "span", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 1, "ion-icon", [["name", "notifications"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ??did */](5, 147456, null, 0, icon_icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](6, null, [" ", "\n                        ", " "])), core["_49" /* ??ppd */](7, 2), core["_48" /* ??pod */](8, { $a: 0 }), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = "light"; _ck(_v, 1, 0, currVal_0); var currVal_2 = "notifications"; _ck(_v, 5, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = core["_44" /* ??nov */](_v, 5)._hidden; _ck(_v, 4, 0, currVal_1); var currVal_3 = core["_56" /* ??unv */](_v, 6, 0, _ck(_v, 7, 0, core["_44" /* ??nov */](_v.parent.parent.parent, 0), (_v.parent.parent.context.$implicit.timestamp * 1000), "strftimetime")); var currVal_4 = core["_56" /* ??unv */](_v, 6, 1, core["_44" /* ??nov */](_v, 9).transform("addon.mod_chat.messageyoubeep", _ck(_v, 8, 0, _v.parent.parent.context.$implicit.beepWho))); _ck(_v, 6, 0, currVal_3, currVal_4); }); }
function View_AddonModChatSessionMessagesPage_9(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 12, "ion-badge", [["color", "info"], ["text-wrap", ""]], null, null, null, null, null)), core["_30" /* ??did */](1, 16384, null, 0, badge["a" /* Badge */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { color: [0, "color"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](3, 0, null, null, 8, "span", [], null, null, null, null, null)), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 1, "core-icon", [["name", "fa-asterisk"]], null, null, null, icon_ngfactory["b" /* View_CoreIconComponent_0 */], icon_ngfactory["a" /* RenderType_CoreIconComponent */])), core["_30" /* ??did */](5, 704512, null, 0, icon["a" /* CoreIconComponent */], [core["t" /* ElementRef */], config["a" /* Config */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ??ted */](6, null, [" ", "\n                            "])), core["_49" /* ??ppd */](7, 2), (_l()(), core["_31" /* ??eld */](8, 0, null, null, 3, "strong", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](9, null, ["", " "])), (_l()(), core["_31" /* ??eld */](10, 0, null, null, 1, "core-format-text", [["contextLevel", "module"]], null, null, null, null, null)), core["_30" /* ??did */](11, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "info"; _ck(_v, 1, 0, currVal_0); var currVal_1 = "fa-asterisk"; _ck(_v, 5, 0, currVal_1); var currVal_4 = _v.parent.parent.context.$implicit.message; var currVal_5 = "module"; var currVal_6 = _co.cmId; var currVal_7 = _co.courseId; _ck(_v, 11, 0, currVal_4, currVal_5, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_2 = core["_56" /* ??unv */](_v, 6, 0, _ck(_v, 7, 0, core["_44" /* ??nov */](_v.parent.parent.parent, 0), (_v.parent.parent.context.$implicit.timestamp * 1000), "strftimetime")); _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.parent.parent.context.$implicit.userfullname; _ck(_v, 9, 0, currVal_3); }); }
function View_AddonModChatSessionMessagesPage_3(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 19, "div", [["class", "addon-mod-chat-notice"], ["text-center", ""]], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_4)), core["_30" /* ??did */](3, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_5)), core["_30" /* ??did */](6, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_6)), core["_30" /* ??did */](9, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_7)), core["_30" /* ??did */](12, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_8)), core["_30" /* ??did */](15, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_9)), core["_30" /* ??did */](18, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.parent.context.$implicit.issystem && (_v.parent.context.$implicit.message == "enter")); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_v.parent.context.$implicit.issystem && (_v.parent.context.$implicit.message == "exit")); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_v.parent.context.$implicit.beep == "all"); _ck(_v, 9, 0, currVal_2); var currVal_3 = ((_v.parent.context.$implicit.userid != _co.currentUserId) && (_v.parent.context.$implicit.beep == _co.currentUserId)); _ck(_v, 12, 0, currVal_3); var currVal_4 = (((_v.parent.context.$implicit.userid == _co.currentUserId) && _v.parent.context.$implicit.beep) && (_v.parent.context.$implicit.beep != "all")); _ck(_v, 15, 0, currVal_4); var currVal_5 = (!_v.parent.context.$implicit.issystem && !_v.parent.context.$implicit.beep); _ck(_v, 18, 0, currVal_5); }, null); }
function View_AddonModChatSessionMessagesPage_11(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 2, "ion-avatar", [["core-user-avatar", ""], ["item-start", ""]], null, null, null, user_avatar_ngfactory["b" /* View_CoreUserAvatarComponent_0 */], user_avatar_ngfactory["a" /* RenderType_CoreUserAvatarComponent */])), core["_30" /* ??did */](1, 770048, null, 0, user_avatar["a" /* CoreUserAvatarComponent */], [nav_controller["a" /* NavController */], sites["a" /* CoreSitesProvider */], utils["a" /* CoreUtilsProvider */], app["a" /* CoreAppProvider */], events["a" /* CoreEventsProvider */], [2, split_view["a" /* CoreSplitViewComponent */]]], { user: [0, "user"], linkProfile: [1, "linkProfile"] }, null), core["_30" /* ??did */](2, 16384, null, 0, avatar["a" /* Avatar */], [], null, null)], function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit; var currVal_1 = false; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AddonModChatSessionMessagesPage_12(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.userfullname; _ck(_v, 1, 0, currVal_0); }); }
function View_AddonModChatSessionMessagesPage_13(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 0, "div", [["class", "tail"]], null, null, null, null, null))], null, null); }
function View_AddonModChatSessionMessagesPage_10(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 30, "ion-item", [["class", "addon-message item item-block"], ["text-wrap", ""]], [[2, "addon-message-mine", null], [2, "addon-message-not-mine", null], [2, "addon-message-no-user", null]], null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ??did */](1, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ??qud */](335544320, 1, { contentLabel: 0 }), core["_52" /* ??qud */](603979776, 2, { _buttons: 1 }), core["_52" /* ??qud */](603979776, 3, { _icons: 1 }), core["_30" /* ??did */](5, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                    "])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                    "])), (_l()(), core["_31" /* ??eld */](8, 0, null, 2, 12, "h2", [["class", "addon-message-user"]], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_11)), core["_30" /* ??did */](11, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_12)), core["_30" /* ??did */](14, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](16, 0, null, null, 3, "ion-note", [], null, null, null, null, null)), core["_30" /* ??did */](17, 16384, null, 0, note["a" /* Note */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ??ted */](18, null, ["", ""])), core["_49" /* ??ppd */](19, 2), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n\n                    "])), (_l()(), core["_31" /* ??eld */](22, 0, null, 2, 4, "p", [["class", "addon-message-text"]], null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                        "])), (_l()(), core["_31" /* ??eld */](24, 0, null, null, 1, "core-format-text", [["contextLevel", "module"]], null, null, null, null, null)), core["_30" /* ??did */](25, 540672, null, 0, format_text["a" /* CoreFormatTextDirective */], [core["t" /* ElementRef */], sites["a" /* CoreSitesProvider */], dom["a" /* CoreDomUtilsProvider */], utils_text["a" /* CoreTextUtilsProvider */], translate_service["a" /* TranslateService */], platform["a" /* Platform */], utils["a" /* CoreUtilsProvider */], url["a" /* CoreUrlUtilsProvider */], logger["a" /* CoreLoggerProvider */], filepool["a" /* CoreFilepoolProvider */], app["a" /* CoreAppProvider */], providers_helper["a" /* CoreContentLinksHelperProvider */], [2, nav_controller["a" /* NavController */]], [2, content["a" /* Content */]], [2, split_view["a" /* CoreSplitViewComponent */]], iframe["a" /* CoreIframeUtilsProvider */], events["a" /* CoreEventsProvider */], filter["a" /* CoreFilterProvider */], filter_providers_helper["a" /* CoreFilterHelperProvider */], delegate["a" /* CoreFilterDelegate */]], { text: [0, "text"], contextLevel: [1, "contextLevel"], contextInstanceId: [2, "contextInstanceId"], courseId: [3, "courseId"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                    "])), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                    "])), (_l()(), core["_26" /* ??and */](16777216, null, 2, 1, null, View_AddonModChatSessionMessagesPage_13)), core["_30" /* ??did */](29, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, 2, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = _v.parent.context.$implicit.showUserData; _ck(_v, 11, 0, currVal_3); var currVal_4 = _v.parent.context.$implicit.showUserData; _ck(_v, 14, 0, currVal_4); var currVal_6 = _v.parent.context.$implicit.message; var currVal_7 = "module"; var currVal_8 = _co.cmId; var currVal_9 = _co.courseId; _ck(_v, 25, 0, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = _v.parent.context.$implicit.showTail; _ck(_v, 29, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_v.parent.context.$implicit.userid == _co.currentUserId); var currVal_1 = (_v.parent.context.$implicit.userid != _co.currentUserId); var currVal_2 = !_v.parent.context.$implicit.showUserData; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_5 = core["_56" /* ??unv */](_v, 18, 0, _ck(_v, 19, 0, core["_44" /* ??nov */](_v.parent.parent, 0), (_v.parent.context.$implicit.timestamp * 1000), "strftimetime")); _ck(_v, 18, 0, currVal_5); }); }
function View_AddonModChatSessionMessagesPage_1(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), core["_55" /* ??ted */](-1, null, ["\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_2)), core["_30" /* ??did */](3, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_3)), core["_30" /* ??did */](6, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n\n                "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_10)), core["_30" /* ??did */](9, 16384, null, 0, common["k" /* NgIf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.showDate; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.special; _ck(_v, 6, 0, currVal_1); var currVal_2 = !_v.context.$implicit.special; _ck(_v, 9, 0, currVal_2); }, null); }
function View_AddonModChatSessionMessagesPage_0(_l) { return core["_57" /* ??vid */](0, [core["_47" /* ??pid */](0, format_date["a" /* CoreFormatDatePipe */], [logger["a" /* CoreLoggerProvider */], time["a" /* CoreTimeUtilsProvider */]]), (_l()(), core["_31" /* ??eld */](1, 0, null, null, 12, "ion-header", [], null, null, null, null, null)), core["_30" /* ??did */](2, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ??eld */](4, 0, null, null, 8, "ion-navbar", [["class", "toolbar"], ["core-back-button", ""]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ??did */](5, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_30" /* ??did */](6, 212992, null, 0, back_button["a" /* CoreBackButtonDirective */], [navbar["a" /* Navbar */], platform["a" /* Platform */], translate_service["a" /* TranslateService */], events["a" /* CoreEventsProvider */]], null, null), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ??eld */](8, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ??did */](9, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ??ted */](10, 0, ["", ""])), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"])), (_l()(), core["_31" /* ??eld */](15, 0, null, null, 21, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ??did */](16, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](18, 0, null, 2, 6, "ion-refresher", [], [[2, "refresher-active", null], [4, "top", null]], [[null, "ionRefresh"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ionRefresh" === en)) {
        var pd_0 = (_co.refreshMessages($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), core["_30" /* ??did */](19, 212992, null, 0, refresher["a" /* Refresher */], [platform["a" /* Platform */], content["a" /* Content */], core["M" /* NgZone */], gesture_controller["l" /* GestureController */]], { enabled: [0, "enabled"] }, { ionRefresh: "ionRefresh" }), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ??eld */](21, 0, null, null, 2, "ion-refresher-content", [], [[1, "state", 0]], null, null, refresher_content_ngfactory["b" /* View_RefresherContent_0 */], refresher_content_ngfactory["a" /* RenderType_RefresherContent */])), core["_30" /* ??did */](22, 114688, null, 0, refresher_content["a" /* RefresherContent */], [refresher["a" /* Refresher */], config["a" /* Config */]], { pullingText: [0, "pullingText"] }, null), core["_47" /* ??pid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ??ted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ??eld */](26, 0, null, 1, 9, "core-loading", [], null, null, null, loading_ngfactory["b" /* View_CoreLoadingComponent_0 */], loading_ngfactory["a" /* RenderType_CoreLoadingComponent */])), core["_30" /* ??did */](27, 638976, null, 0, loading["a" /* CoreLoadingComponent */], [translate_service["a" /* TranslateService */], core["t" /* ElementRef */], events["a" /* CoreEventsProvider */], utils["a" /* CoreUtilsProvider */]], { hideUntil: [0, "hideUntil"] }, null), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n        "])), (_l()(), core["_31" /* ??eld */](29, 0, null, 0, 5, "ion-list", [["aria-live", "polite"], ["class", "addon-messages-discussion-container safe-area-page"]], null, null, null, null, null)), core["_30" /* ??did */](30, 16384, null, 0, list["a" /* List */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], platform["a" /* Platform */], gesture_controller["l" /* GestureController */], dom_controller["a" /* DomController */]], null, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n            "])), (_l()(), core["_26" /* ??and */](16777216, null, null, 1, null, View_AddonModChatSessionMessagesPage_1)), core["_30" /* ??did */](33, 802816, null, 0, common["j" /* NgForOf */], [core["_11" /* ViewContainerRef */], core["_6" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), core["_55" /* ??ted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ??ted */](-1, 0, ["\n    "])), (_l()(), core["_55" /* ??ted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ??ted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 6, 0); var currVal_7 = _co.loaded; _ck(_v, 19, 0, currVal_7); var currVal_9 = core["_34" /* ??inlineInterpolate */](1, "", core["_56" /* ??unv */](_v, 22, 0, core["_44" /* ??nov */](_v, 23).transform("core.pulltorefresh")), ""); _ck(_v, 22, 0, currVal_9); var currVal_10 = _co.loaded; _ck(_v, 27, 0, currVal_10); var currVal_11 = _co.messages; _ck(_v, 33, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = core["_44" /* ??nov */](_v, 5)._hidden; var currVal_1 = core["_44" /* ??nov */](_v, 5)._sbPadding; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ??unv */](_v, 10, 0, core["_44" /* ??nov */](_v, 11).transform("addon.mod_chat.messages")); _ck(_v, 10, 0, currVal_2); var currVal_3 = core["_44" /* ??nov */](_v, 16).statusbarPadding; var currVal_4 = core["_44" /* ??nov */](_v, 16)._hasRefresher; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_5 = (core["_44" /* ??nov */](_v, 19).state !== "inactive"); var currVal_6 = core["_44" /* ??nov */](_v, 19)._top; _ck(_v, 18, 0, currVal_5, currVal_6); var currVal_8 = core["_44" /* ??nov */](_v, 22).r.state; _ck(_v, 21, 0, currVal_8); }); }
function View_AddonModChatSessionMessagesPage_Host_0(_l) { return core["_57" /* ??vid */](0, [(_l()(), core["_31" /* ??eld */](0, 0, null, null, 1, "page-addon-mod-chat-session-messages", [], null, null, null, View_AddonModChatSessionMessagesPage_0, RenderType_AddonModChatSessionMessagesPage)), core["_30" /* ??did */](1, 49152, null, 0, session_messages_AddonModChatSessionMessagesPage, [nav_params["a" /* NavParams */], dom["a" /* CoreDomUtilsProvider */], chat["a" /* AddonModChatProvider */], sites["a" /* CoreSitesProvider */], helper["a" /* AddonModChatHelperProvider */], user["a" /* CoreUserProvider */]], null, null)], null, null); }
var AddonModChatSessionMessagesPageNgFactory = core["_27" /* ??ccf */]("page-addon-mod-chat-session-messages", session_messages_AddonModChatSessionMessagesPage, View_AddonModChatSessionMessagesPage_Host_0, {}, {}, []);

//# sourceMappingURL=session-messages.ngfactory.js.map
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

// EXTERNAL MODULE: ./src/core/block/components/components.module.ts
var block_components_components_module = __webpack_require__(274);

// EXTERNAL MODULE: ./src/core/course/components/components.module.ts
var course_components_components_module = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(273);

// CONCATENATED MODULE: ./src/addon/mod/chat/pages/session-messages/session-messages.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModChatSessionMessagesPageModuleNgFactory", function() { return AddonModChatSessionMessagesPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








































var AddonModChatSessionMessagesPageModuleNgFactory = core["_28" /* ??cmf */](session_messages_module_AddonModChatSessionMessagesPageModule, [], function (_l) { return core["_40" /* ??mod */]([core["_41" /* ??mpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ??CodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], context_menu_popover_ngfactory["a" /* CoreContextMenuPopoverComponentNgFactory */], course_picker_menu_popover_ngfactory["a" /* CoreCoursePickerMenuPopoverComponentNgFactory */], recaptchamodal_ngfactory["a" /* CoreRecaptchaModalComponentNgFactory */], bs_tooltip_ngfactory["a" /* CoreBSTooltipComponentNgFactory */], only_title_block_ngfactory["a" /* CoreBlockOnlyTitleComponentNgFactory */], pre_rendered_block_ngfactory["a" /* CoreBlockPreRenderedComponentNgFactory */], course_blocks_ngfactory["a" /* CoreBlockCourseBlocksComponentNgFactory */], unsupported_module_ngfactory["a" /* CoreCourseUnsupportedModuleComponentNgFactory */], tag_area_ngfactory["a" /* CoreCourseTagAreaComponentNgFactory */], index_ngfactory["a" /* AddonModChatIndexComponentNgFactory */], AddonModChatSessionMessagesPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ??mpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["w" /* ??a */]]]), core["_41" /* ??mpd */](4608, esm5_forms["x" /* ??i */], esm5_forms["x" /* ??i */], []), core["_41" /* ??mpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ??mpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ??mpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ??mpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ??mpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ??mpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ??mpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ??mpd */](512, esm5_forms["v" /* ??ba */], esm5_forms["v" /* ??ba */], []), core["_41" /* ??mpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ??mpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ??mpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ??mpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ??mpd */](512, pipes_module["a" /* CorePipesModule */], pipes_module["a" /* CorePipesModule */], []), core["_41" /* ??mpd */](512, components_module["a" /* CoreComponentsModule */], components_module["a" /* CoreComponentsModule */], []), core["_41" /* ??mpd */](512, block_components_components_module["a" /* CoreBlockComponentsModule */], block_components_components_module["a" /* CoreBlockComponentsModule */], []), core["_41" /* ??mpd */](512, course_components_components_module["a" /* CoreCourseComponentsModule */], course_components_components_module["a" /* CoreCourseComponentsModule */], []), core["_41" /* ??mpd */](512, components_components_module["a" /* AddonModChatComponentsModule */], components_components_module["a" /* AddonModChatComponentsModule */], []), core["_41" /* ??mpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ??mpd */](512, session_messages_module_AddonModChatSessionMessagesPageModule, session_messages_module_AddonModChatSessionMessagesPageModule, []), core["_41" /* ??mpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ??mpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, []), core["_41" /* ??mpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], session_messages_AddonModChatSessionMessagesPage, [])]); });

//# sourceMappingURL=session-messages.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=117.js.map