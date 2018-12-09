import InputWidget = require("../InputWidget");

export interface Validator<T>{

    validate(value:T, widget:InputWidget):boolean;
}