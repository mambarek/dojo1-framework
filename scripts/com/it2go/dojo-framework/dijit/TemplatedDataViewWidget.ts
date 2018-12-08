import dojoDeclare = require("dojo/_base/declare");

import _WidgetsInTemplateMixin = require("dijit/_WidgetsInTemplateMixin");
import DataViewWidget = require("./DataViewWidget");

import dojoTemplatedMixin = require("dijit/_TemplatedMixin");



//@declareDecorator(_TemplatedDataViewWidget)
//class TemplatedDataViewWidget extends _TemplatedDataViewWidget{
interface TemplatedDataViewWidget extends DataViewWidget{}

class TemplatedDataViewWidget {

    widgetsInTemplate:boolean = true;

    startup(){
        //@ts-ignore
        this.inherited(this.startup,arguments);
        //super.startup();
        this.buildTree();
    }


/*    buildRendering(): void {
        // @ts-ignore
        this.inherited(this.buildRendering,arguments);
        // @ts-ignore
        //super.buildRendering();
    }
*/
/*    buildTree() {
        let containerNode = this.containerNode;
        let id = containerNode.id;
        let length1 = this.children.length;
    }*/
}

//var exp = _declare("alloy.editors.StringListTs", [DataViewWidget, _TemplatedMixin, _WidgetsInTemplateMixin], new TemplatedDataViewWidget());
//var exp = dojoDeclare( [DataViewWidget, dojoTemplatedMixin, _WidgetsInTemplateMixin], new TemplatedDataViewWidget());
var exp = dojoDeclare( [DataViewWidget, dojoTemplatedMixin, _WidgetsInTemplateMixin], new TemplatedDataViewWidget());
export = exp
//export = TemplatedDataViewWidget

