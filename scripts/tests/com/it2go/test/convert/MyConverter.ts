import Converter = require("../../../../../com/it2go/dojo-framework/dijit/input/convert/Converter");
import InputWidget = require("../../../../../com/it2go/dojo-framework/dijit/input/InputWidget");
import RegisterConverter from "../../../../../com/it2go/dojo-framework/dijit/input/convert/RegisterConverter";

@RegisterConverter("myConverter")
class MyConverter implements Converter<String>{
    getAsObject(value: string, widget: InputWidget): String {
        return value + "#CONVERTED#";
    }

    getAsString(value: String, widget: InputWidget): string {

        widget.setWidgetStyle("background","yellow");

        return value + " -- CONVERTED --";
    }

}

export = MyConverter