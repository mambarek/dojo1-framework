var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "dijit/_WidgetBase", "dojo/dom-style", "../declareDecorator", "dijit/registry", "dojo/on", "dojo/_base/lang"], function (require, exports, _WidgetBase, domStyle, declareDecorator_1, registry, on, lang) {
    "use strict";
    /**
     * By using a decorator to create constructors with `dojo/_base/declare`, we can
     * write our widgets using TypeScript classes. The one caveat is that we are then
     * required to use merged declarations to define our interface, so the widget
     * class has to be declared as the default export in a separate statement.
     */
    var _DataViewWidget = /** @class */ (function () {
        function _DataViewWidget() {
            // a GUI attribute may not belong to model
            // so ignore them when initializing or reading
            this.isModelAttr = true;
            this.isModelSetFromParent = true;
            this.visible = true;
            this.readOnly = false;
            this.children = new Array();
        }
        _DataViewWidget_1 = _DataViewWidget;
        /*************************************************************************/
        /*          Functions                                                    */
        /*************************************************************************/
        /*************************************************************************/
        /*  IMPORTANT! you can't call super in this class so you have to override
        /*  metheds in subclass e.e DataViewWidget
         */
        /*************************************************************************/
        _DataViewWidget.prototype.isVisible = function () {
            if (!this.visible)
                return false;
            // if a parent in the tree is not visible so
            // this widget is either not visible
            if (this.parentViewWiget && !this.parentViewWiget.isVisible())
                return false;
            // default true
            return true;
        };
        _DataViewWidget.prototype.isReadOnly = function () {
            if (!this.readOnly)
                return false;
            // if a parent in the tree is not visible so
            // this widget is either not visible
            if (this.parentViewWiget && !this.parentViewWiget.isReadOnly())
                return false;
            // default true
            return true;
        };
        _DataViewWidget.prototype.hide = function () {
            this.visible = false;
            domStyle.set(this.domNode, "display", "none");
        };
        _DataViewWidget.prototype.show = function () {
            this.visible = false;
            domStyle.set(this.domNode, "display", "block");
        };
        _DataViewWidget.prototype.setBackgroundColor = function (color) {
            this.set('style', { backgroundColor: color });
        };
        _DataViewWidget.prototype.checkVisibility = function () {
            if (!this.isVisible())
                this.hide();
        };
        _DataViewWidget.prototype.getChildWidgets = function (node) {
            var chilList = {};
            if (node && node.childNodes) {
                for (var i = 0; i < node.childNodes.length; i++) {
                    var childNode = node.childNodes[i];
                    //var widget = dijit.getEnclosingWidget(childNode);
                    var widget = registry.byId(childNode.id);
                    if (widget && widget instanceof _DataViewWidget_1) {
                        var w = widget;
                        chilList[w.id] = widget;
                    }
                    else {
                        var cList = this.getChildWidgets(childNode);
                        for (var c in cList) {
                            var w = cList[c];
                            chilList[w.id] = w;
                        }
                    }
                }
            }
            return chilList;
        };
        _DataViewWidget.prototype.buildTree = function () {
            // reset the tree
            this.children = new Array();
            var chList = this.getChildren();
            // when no direct children exists so search in the
            // DOM descendants
            if (chList.length == 0)
                chList = this.getChildWidgets(this.domNode);
            for (var childName in chList) {
                var child = chList[childName];
                if (child instanceof _DataViewWidget_1) {
                    var w = child;
                    w.parentViewWiget = this;
                    // if the child should notify his parent on events
                    if (w.notifyParent) {
                        this.own(on(child, "Change", lang.hitch(this, this.onChange)));
                    }
                    this.children.push(w);
                    console.log("for widget id: " + this.id + " child found id: " + w.id);
                    w.buildTree();
                }
            }
            console.log("for widget id: " + this.id + " children length: " + this.children.length);
        };
        _DataViewWidget.prototype.setDataModelWrapper = function (aDataModelWrapper) {
            this.dataModelWrapper = aDataModelWrapper;
            if (this.dataModelWrapper && this.attrName) {
            }
        };
        _DataViewWidget.prototype.onChange = function () {
        };
        var _DataViewWidget_1;
        _DataViewWidget = _DataViewWidget_1 = __decorate([
            declareDecorator_1.default(_WidgetBase)
        ], _DataViewWidget);
        return _DataViewWidget;
    }());
    return _DataViewWidget;
});
//# sourceMappingURL=_DataViewWidget.js.map