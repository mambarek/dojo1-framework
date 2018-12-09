import {Validator} from "./Validator";
import InputWidget = require("../InputWidget");
import RegisterValidator from "./RegisterValidator";

@RegisterValidator("required")
class RequiredValidator implements Validator<any>{

    validate(value: any, widget: InputWidget): boolean {
        if(!value){
            widget.setWidgetStyle("background","red");
            widget.targetWidget.set("value","** Value required! **");
            // hier kann man alles machen
            // Error im widget hinzufpgen
            // Hightlighting usw.
            return false;
        }

        return true;
    }

}