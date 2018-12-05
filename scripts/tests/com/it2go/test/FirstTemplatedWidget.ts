import dojoDeclare = require("dojo/_base/declare");
import template = require("dojo/text!./templates/FirstTemplate.html");
import TemplatedDataViewWidget = require("../../../../com/it2go/dojo-framework/dijit/TemplatedDataViewWidget");
import InputWidget = require("../../../../com/it2go/dojo-framework/dijit/input/InputWidget");
import declareDecorator from "../../../../com/it2go/dojo-framework/declareDecorator";
import DataViewWidget = require("../../../../com/it2go/dojo-framework/dijit/DataViewWidget");

import _WidgetsInTemplateMixin = require("dijit/_WidgetsInTemplateMixin");

import _TemplatedDataViewWidget = require("../../../../com/it2go/dojo-framework/dijit/_TemplatedDataViewWidget");
import _TemplatedMixin = require("../../../../com/it2go/dojo-framework/dijit/_TemplatedMixin");





//@declareDecorator(TemplatedDataViewWidget)
//class FirstTemplatedWidget extends TemplatedDataViewWidget{
class FirstTemplatedWidget{
    //inherited: (args: Object) => void;
    templateString:string = template;
    postCreate(){
        //let newArgs = arguments;
        //newArgs.callee = this.postCreate;
        // @ts-ignore
        this.inherited(this.postCreate,arguments);
        //this.inherited(arguments);
        //super.postCreate();
        console.log("## FirstTemplatedWidget postCreate call!", this)
    }
}

//var exp = dojoDeclare( [_TemplatedMixin, _WidgetsInTemplateMixin, DataViewWidget], new FirstTemplatedWidget());
var exp = dojoDeclare( [TemplatedDataViewWidget], new FirstTemplatedWidget());
export = exp

/*
export = dojoDeclare([_TemplatedMixin, _WidgetsInTemplateMixin],[
    @declareDecorator(DataViewWidget)
    class FirstTemplatedWidget {
        inherited: (args: Object) => void;
        templateString:string = template;
        postCreate(){
            this.inherited(arguments);
            //super.postCreate();
            console.log("## FirstTemplatedWidget postCreate call!", this)
        }
    }
])*/
