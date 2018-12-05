define(["require", "exports", "dojo/_base/declare", "dojo/text!./templates/FirstTemplate.html", "../../../../com/it2go/dojo-framework/dijit/TemplatedDataViewWidget"], function (require, exports, dojoDeclare, template, TemplatedDataViewWidget) {
    "use strict";
    //@declareDecorator(TemplatedDataViewWidget)
    //class FirstTemplatedWidget extends TemplatedDataViewWidget{
    var FirstTemplatedWidget = /** @class */ (function () {
        function FirstTemplatedWidget() {
            //inherited: (args: Object) => void;
            this.templateString = template;
        }
        FirstTemplatedWidget.prototype.postCreate = function () {
            //let newArgs = arguments;
            //newArgs.callee = this.postCreate;
            // @ts-ignore
            this.inherited(this.postCreate, arguments);
            //this.inherited(arguments);
            //super.postCreate();
            console.log("## FirstTemplatedWidget postCreate call!", this);
        };
        return FirstTemplatedWidget;
    }());
    //var exp = dojoDeclare( [_TemplatedMixin, _WidgetsInTemplateMixin, DataViewWidget], new FirstTemplatedWidget());
    var exp = dojoDeclare([TemplatedDataViewWidget], new FirstTemplatedWidget());
    return exp;
});
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
//# sourceMappingURL=FirstTemplatedWidget.js.map