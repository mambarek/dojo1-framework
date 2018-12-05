var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "dijit/_WidgetsInTemplateMixin", "./_DataViewWidget", "./DataViewWidget", "dojo/_base/declare", "dijit/_TemplatedMixin"], function (require, exports, _WidgetsInTemplateMixin, _DataViewWidget, DataViewWidget, dojoDeclare, _TemplatedMixin) {
    "use strict";
    //import _TemplatedMixin = require("dijit/_TemplatedMixin");
    /**
     * `dojo/_base/declare` can infer typings, but since we are generating our declare
     * constructor with a decorator (see below), we need to define our widget interface
     * explicitly.
     */
    //interface _TemplatedDataViewWidget extends _TemplatedMixin,_WidgetsInTemplateMixin, DataViewWidget {}
    //interface _TemplatedDataViewWidget extends _TemplatedMixin, DataViewWidget {}
    // @ts-ignore
    // @ts-ignore
    /**
     * By using a decorator to create constructors with `dojo/_base/declare`, we can
     * write our widgets using TypeScript classes. The one caveat is that we are then
     * required to use merged declarations to define our interface, so the widget
     * class has to be declared as the default export in a separate statement.
     */
    //@declare([_TemplatedMixin, _WidgetsInTemplateMixin, DataViewWidget])
    //@declare(_TemplatedMixin)
    // @ts-ignore
    var _TemplatedDataViewWidget = /** @class */ (function () {
        function _TemplatedDataViewWidget() {
        }
        _TemplatedDataViewWidget.prototype.toString = function () {
            throw new Error("Method not implemented.");
        };
        _TemplatedDataViewWidget.prototype._attach = function (node, type, func) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype._attachTemplateNodes = function (rootNode) {
        };
        _TemplatedDataViewWidget.prototype._beforeFillContent = function () {
        };
        _TemplatedDataViewWidget.prototype._changeAttrValue = function (name, value) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype._detachTemplateNodes = function () {
        };
        _TemplatedDataViewWidget.prototype._getAttrNames = function (name) {
            return "";
        };
        _TemplatedDataViewWidget.prototype._processTemplateNode = function (baseNode, getAttrFunc, attachFunc) {
            return false;
        };
        _TemplatedDataViewWidget.prototype.applyTextDir = function (element, text) {
        };
        _TemplatedDataViewWidget.prototype.buildRendering = function () {
        };
        _TemplatedDataViewWidget.prototype.buildTree = function () {
        };
        _TemplatedDataViewWidget.prototype.checkVisibility = function () {
        };
        _TemplatedDataViewWidget.prototype.connect = function (obj, event, method) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype.create = function (params, srcNodeRef) {
        };
        _TemplatedDataViewWidget.prototype.defer = function (fcn, delay) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype.destroy = function (preserveDom) {
        };
        _TemplatedDataViewWidget.prototype.destroyDescendants = function (preserveDom) {
        };
        _TemplatedDataViewWidget.prototype.destroyRecursive = function (preserveDom) {
        };
        _TemplatedDataViewWidget.prototype.destroyRendering = function (preserveDom) {
        };
        _TemplatedDataViewWidget.prototype.disconnect = function (handle) {
        };
        _TemplatedDataViewWidget.prototype.emit = function (type, eventObj, callbackArgs) {
        };
        _TemplatedDataViewWidget.prototype.enforceTextDirWithUcc = function (option, text) {
            return "";
        };
        _TemplatedDataViewWidget.prototype.get = function (name) {
        };
        _TemplatedDataViewWidget.prototype.getChildWidgets = function (node) {
        };
        _TemplatedDataViewWidget.prototype.getChildren = function () {
            return [];
        };
        _TemplatedDataViewWidget.prototype.getParent = function () {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype.getTextDir = function (text) {
            return "";
        };
        _TemplatedDataViewWidget.prototype.hide = function () {
        };
        _TemplatedDataViewWidget.prototype.isFocusable = function () {
            return false;
        };
        _TemplatedDataViewWidget.prototype.isLeftToRight = function () {
            return false;
        };
        _TemplatedDataViewWidget.prototype.isReadOnly = function () {
            return false;
        };
        _TemplatedDataViewWidget.prototype.isVisible = function () {
            return false;
        };
        _TemplatedDataViewWidget.prototype.on = function (type, func) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype.onBlur = function () {
        };
        _TemplatedDataViewWidget.prototype.onChange = function () {
        };
        _TemplatedDataViewWidget.prototype.onFocus = function () {
        };
        _TemplatedDataViewWidget.prototype.own = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return [];
        };
        _TemplatedDataViewWidget.prototype.placeAt = function (reference, position) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype.postCreate = function () {
        };
        _TemplatedDataViewWidget.prototype.postMixInProperties = function () {
        };
        _TemplatedDataViewWidget.prototype.postscript = function (params, srcNodeRef) {
        };
        _TemplatedDataViewWidget.prototype.restoreOriginalText = function (origObj) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype.set = function (name, value) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype.setBackgroundColor = function (color) {
        };
        _TemplatedDataViewWidget.prototype.setDataModelWrapper = function (aDataModelWrapper) {
        };
        _TemplatedDataViewWidget.prototype.show = function () {
        };
        _TemplatedDataViewWidget.prototype.startup = function () {
        };
        _TemplatedDataViewWidget.prototype.subscribe = function (t, method) {
            return undefined;
        };
        _TemplatedDataViewWidget.prototype.uninitialize = function () {
            return false;
        };
        _TemplatedDataViewWidget.prototype.unsubscribe = function (handle) {
        };
        _TemplatedDataViewWidget.prototype.watch = function (callback, _callback) {
            return undefined;
        };
        return _TemplatedDataViewWidget;
    }());
    var _TemplatedDataViewWidgetImpl = /** @class */ (function (_super) {
        __extends(_TemplatedDataViewWidgetImpl, _super);
        function _TemplatedDataViewWidgetImpl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return _TemplatedDataViewWidgetImpl;
    }(_TemplatedDataViewWidget));
    ////////////////////////////////////////
    // In your runtime library somewhere
    ////////////////////////////////////////
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
    applyMixins(_TemplatedDataViewWidget, [_TemplatedMixin, _DataViewWidget]);
    /*
     * We are using `export default` here, which is part of the ES6 module format.
     * If other consumers of the module are compatible with default exports, like
     * other modules written in TypeScript, then this is fine, but if someone
     * consumes this module, that instead of this being the return value of the module,
     * it will be located under Dialog.default.
     */
    var exp = dojoDeclare([DataViewWidget, _TemplatedMixin, _WidgetsInTemplateMixin], new _TemplatedDataViewWidget());
    return _TemplatedDataViewWidget;
});
//# sourceMappingURL=_TemplatedDataViewWidget.js.map