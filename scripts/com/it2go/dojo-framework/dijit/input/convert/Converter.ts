import InputWidget = require("../InputWidget");

interface Converter<T>{
    getAsString(value:T, widget:InputWidget):string;
    getAsObject(value:string, widget:InputWidget):T;
    //objectToDisplay():string;
    //displayToObject():any;
}

export = Converter;