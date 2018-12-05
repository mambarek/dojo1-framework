import _TemplatedDataViewWidget = require("../../../../com/it2go/dojo-framework/dijit/_TemplatedDataViewWidget");
import template = require("dojo/text!./templates/FirstTemplate.html");
import dojoDeclare = require("dojo/_base/declare");
import TemplatedDataViewWidget = require("../../../../com/it2go/dojo-framework/dijit/TemplatedDataViewWidget");

/*
    WICHTIG keine "extends" an der Klasse machen
    den export mit dojoDeclare mixen
    Die Methoden lassen sich überschreiben. vergiss nicht this.inherited(this.methodName,arguments) aufzurufen
    statt super.methodName()
 */
//class SecondTemplatedWidget extends _TemplatedDataViewWidget{
class SecondTemplatedWidget {

    templateString:string = template;

    postCreate(): void {
        //@ts-ignore
        this.inherited(this.postCreate, arguments);
        console.log(" ## SecondTemplatedWidget:postCreate call!!")
    }

    buildTree(): void{
        //@ts-ignore
        this.inherited(this.buildTree, arguments);
        console.log(" ## SecondTemplatedWidget:buildTree call!!")

    }
}

var exp = dojoDeclare( [TemplatedDataViewWidget], new SecondTemplatedWidget());
export = exp