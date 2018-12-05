import * as dojoTemplatedMixin from "dijit/_TemplatedMixin"
import declareDecorator from "../declareDecorator";
import dojoDeclare = require("dojo/_base/declare");

import DataViewWidget = require("./DataViewWidget");
import _AttachMixin = require("dijit/_AttachMixin");



interface _TemplatedMixin extends dojoTemplatedMixin{

}

@declareDecorator(dojoTemplatedMixin)
class _TemplatedMixin {

}

export = _TemplatedMixin

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
