import template = require("dojo/text!./templates/FirstTemplate.html");
//import template = require("dojo/text!./templates/SecondTemplate.html");
import dojoDeclare = require("dojo/_base/declare");
import TemplatedDataViewWidget = require("../../../../com/it2go/dojo-framework/dijit/TemplatedDataViewWidget");
import DataViewWidget = require("../../../../com/it2go/dojo-framework/dijit/DataViewWidget");

/*
    WICHTIG keine "extends" an der Klasse machen
    den export mit dojoDeclare mixen
    Die Methoden lassen sich überschreiben. vergiss nicht this.inherited(this.methodName,arguments) aufzurufen
    statt super.methodName()
 */
// @ts-ignore
interface SecondTemplatedWidget extends TemplatedDataViewWidget{};
//class SecondTemplatedWidget extends TemplatedDataViewWidget{
class SecondTemplatedWidget {

    templateString:string = template;

/*    postCreate(): void {
        //@ts-ignore
        this.inherited(this.postCreate, arguments);
        //super.postCreate();
        console.log(" ## SecondTemplatedWidget:postCreate call!!")
    }*/


}

var exp = dojoDeclare( [TemplatedDataViewWidget], new SecondTemplatedWidget());
export = exp
//export  = SecondTemplatedWidget