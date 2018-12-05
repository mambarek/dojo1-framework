import DataViewWidget = require("../DataViewWidget");
import _FormValueWidget = require("dijit/form/_FormValueWidget");
import DateTextBox = require("dijit/form/DateTextBox");
import dojoDeclare = require("dojo/_base/declare");
import _InputWidget = require("./_InputWidget");
import declare from "../../declareDecorator";
import * as _TemplatedMixin from "dijit/_TemplatedMixin";
import * as _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";
import TextBox = require("dijit/form/TextBox");
import SimpleTextarea = require("dijit/form/SimpleTextarea");
import WidgetTypes = require("./WidgetTypes");


class InputWidget extends _InputWidget{


    create(params?: any, srcNodeRef?: HTMLElement): void {
        console.log("++ InputWidget::create call!")
        super.create(params,srcNodeRef);

        switch (this.widgetType.toLocaleLowerCase()) {
            case WidgetTypes.Text.toLocaleLowerCase():
                this.targetWidget = new TextBox();
                break;
            case WidgetTypes.Date.toLocaleLowerCase():
                this.targetWidget = new DateTextBox();
                break;
            case WidgetTypes.TextArea.toLocaleLowerCase():
                this.targetWidget = new SimpleTextarea();
                break;
        }

        this.targetWidget.placeAt(this.domNode);
        this.getChildren().push(this.targetWidget);
    }

    postCreate(): void {
        //this.targetWidget = new DateTextBox();
        console.log("++ InputWidget::postCreate call!")
    }

    buildRendering(): void {
        super.buildRendering();
        console.log("++ InputWidget::buildRendering call!")
        //this.targetWidget.startup();
        //this.targetWidget.placeAt(this.domNode);
    }

    startup(): void {

        super.startup();
        //this.targetWidget.startup();
        //this.targetWidget.placeAt(this.domNode);
        console.log("++ InputWidget::startup call!")
    }
}


export = InputWidget