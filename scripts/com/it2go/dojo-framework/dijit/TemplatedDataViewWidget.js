define(["require", "exports", "dojo/_base/declare", "dijit/_WidgetsInTemplateMixin", "./DataViewWidget", "dijit/_TemplatedMixin"], function (require, exports, dojoDeclare, _WidgetsInTemplateMixin, DataViewWidget, dojoTemplatedMixin) {
    "use strict";
    //@declareDecorator(_TemplatedDataViewWidget)
    //class TemplatedDataViewWidget extends _TemplatedDataViewWidget{
    var TemplatedDataViewWidget = /** @class */ (function () {
        function TemplatedDataViewWidget() {
            //inherited: (args: Object) => void;
            this.widgetsInTemplate = true;
            /*    buildRendering(): void {
                    // @ts-ignore
                    this.inherited(this.buildRendering,arguments);
                    // @ts-ignore
                    //super.buildRendering();
                }
            
                buildTree() {
                    // @ts-ignore
                    this.inherited(this.buildTree,arguments);
                    // @ts-ignore
                    //super.buildTree();
            
                }*/
        }
        return TemplatedDataViewWidget;
    }());
    //var exp = _declare("alloy.editors.StringListTs", [DataViewWidget, _TemplatedMixin, _WidgetsInTemplateMixin], new TemplatedDataViewWidget());
    var exp = dojoDeclare([DataViewWidget, dojoTemplatedMixin, _WidgetsInTemplateMixin], new TemplatedDataViewWidget());
    return exp;
});
//export = TemplatedDataViewWidget
//# sourceMappingURL=TemplatedDataViewWidget.js.map