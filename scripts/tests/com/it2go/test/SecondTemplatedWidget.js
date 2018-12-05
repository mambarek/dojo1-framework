define(["require", "exports", "dojo/text!./templates/FirstTemplate.html", "dojo/_base/declare", "../../../../com/it2go/dojo-framework/dijit/TemplatedDataViewWidget"], function (require, exports, template, dojoDeclare, TemplatedDataViewWidget) {
    "use strict";
    /*
        WICHTIG keine "extends" an der Klasse machen
        den export mit dojoDeclare mixen
        Die Methoden lassen sich überschreiben. vergiss nicht this.inherited(this.methodName,arguments) aufzurufen
        statt super.methodName()
     */
    //class SecondTemplatedWidget extends _TemplatedDataViewWidget{
    var SecondTemplatedWidget = /** @class */ (function () {
        function SecondTemplatedWidget() {
            this.templateString = template;
        }
        SecondTemplatedWidget.prototype.postCreate = function () {
            //@ts-ignore
            this.inherited(this.postCreate, arguments);
            console.log(" ## SecondTemplatedWidget:postCreate call!!");
        };
        SecondTemplatedWidget.prototype.buildTree = function () {
            //@ts-ignore
            this.inherited(this.buildTree, arguments);
            console.log(" ## SecondTemplatedWidget:buildTree call!!");
        };
        return SecondTemplatedWidget;
    }());
    var exp = dojoDeclare([TemplatedDataViewWidget], new SecondTemplatedWidget());
    return exp;
});
//# sourceMappingURL=SecondTemplatedWidget.js.map