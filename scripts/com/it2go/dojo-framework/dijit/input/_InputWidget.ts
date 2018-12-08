import DataViewWidget = require("../DataViewWidget");
import _FormValueWidget = require("dijit/form/_FormValueWidget");
import DateTextBox = require("dijit/form/DateTextBox");
import dojoDeclare = require("dojo/_base/declare");
import declare from "../../declareDecorator";
import WidgetTypes = require("./WidgetTypes");



interface _InputWidget extends DataViewWidget{}

@declare(DataViewWidget)
class _InputWidget{

    widgetType: string = WidgetTypes.Text;
    targetWidget: _FormValueWidget;


}

//let exp = dojoDeclare([DataViewWidget], new _InputWidget());
//export = exp;
export = _InputWidget