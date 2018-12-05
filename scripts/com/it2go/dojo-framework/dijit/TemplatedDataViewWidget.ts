import dojoDeclare = require("dojo/_base/declare");

import _WidgetsInTemplateMixin = require("dijit/_WidgetsInTemplateMixin");
import DataViewWidget = require("./DataViewWidget");
import _TemplatedDataViewWidget = require("./_TemplatedDataViewWidget");
import declareDecorator from "../declareDecorator";
import _TemplatedMixin = require("./_TemplatedMixin");
import dojoTemplatedMixin = require("dijit/_TemplatedMixin");



//@declareDecorator(_TemplatedDataViewWidget)
//class TemplatedDataViewWidget extends _TemplatedDataViewWidget{

class TemplatedDataViewWidget {
    //inherited: (args: Object) => void;
    widgetsInTemplate:boolean = true;


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

//var exp = _declare("alloy.editors.StringListTs", [DataViewWidget, _TemplatedMixin, _WidgetsInTemplateMixin], new TemplatedDataViewWidget());
var exp = dojoDeclare( [DataViewWidget, dojoTemplatedMixin, _WidgetsInTemplateMixin], new TemplatedDataViewWidget());
export = exp
//export = TemplatedDataViewWidget

