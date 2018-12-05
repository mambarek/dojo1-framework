var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "dijit/_TemplatedMixin", "../declareDecorator"], function (require, exports, dojoTemplatedMixin, declareDecorator_1) {
    "use strict";
    var _TemplatedMixin = /** @class */ (function () {
        function _TemplatedMixin() {
        }
        _TemplatedMixin = __decorate([
            declareDecorator_1.default(dojoTemplatedMixin)
        ], _TemplatedMixin);
        return _TemplatedMixin;
    }());
    return _TemplatedMixin;
});
/*export default dojoDeclare([dojoTemplatedMixin, DataViewWidget],{
        class DataViewWidget{}
    }

)*/
/*class _TemplatedMixin implements dojoTemplatedMixin{
    _attachEvents: dojo.Handle[];
    _attachPoints: string[];
    attachScope: any;
    searchContainerNode: boolean;
    templatePath: string;
    templateString: string;

    _attach(node: Element | Node, type: string, func?: Function): dojo.Handle {
        return undefined;
    }

    _attachTemplateNodes(rootNode: Element | Node): void {
    }

    _beforeFillContent(): void {
    }

    _detachTemplateNodes(): void {
    }

    _processTemplateNode<T extends Element | Node | dijit._WidgetBase>(baseNode: T, getAttrFunc: (baseNode: T, attr: string) => string, attachFunc: (node: T, type: string, func?: Function) => dojo.Handle): boolean {
        return false;
    }

    buildRendering(): void {
    }

    destroyRendering(preserveDom?: boolean): void {
    }

}*/
/*
class _TemplatedMixin{}
export = dojoDeclare([_AttachMixin,dojoTemplatedMixin],new _TemplatedMixin())*/
//# sourceMappingURL=_TemplatedMixin.js.map