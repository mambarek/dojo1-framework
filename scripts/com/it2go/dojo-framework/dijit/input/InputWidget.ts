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

//interface InputWidget extends DataViewWidget{}
//interface InputWidget extends _InputWidget{}
//class InputWidget extends _InputWidget{

class InputWidget extends DataViewWidget{
    widgetType: string = WidgetTypes.Text;
    targetWidget: _FormValueWidget;
    create(params?: any, srcNodeRef?: HTMLElement): void {

        console.log("++ InputWidget::create call for SUPER call! id: " + this.id + " this.value: ", this.value);
        super.create(params,srcNodeRef);
        // @ts-ignore
        //this.inherited(this.create, arguments);
        console.log("++ InputWidget::create call! id: " + this.id + " this.value: ", this.value);

        let value = this.getAttributetValue();
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

        this.targetWidget.set('value',value);
        this.targetWidget.placeAt(this.domNode);
        this.getChildren().push(this.targetWidget);
        //this.buildTree();
    }

    postCreate(): void {
        //this.targetWidget = new DateTextBox();
        super.postCreate();
        // @ts-ignore
        //this.inherited(this.postCreate, arguments);
        console.log("++ InputWidget::postCreate call! id: " + this.id + " this.value: ", this.value);
    }

    buildRendering(): void {
        super.buildRendering();
        // @ts-ignore
        //this.inherited(this.buildRendering, arguments);
        console.log("++ InputWidget::buildRendering call! id: " + this.id + " this.value: ", this.value);
        //this.targetWidget.startup();
        //this.targetWidget.placeAt(this.domNode);
    }

    startup(): void {
        // @ts-ignore
        //this.inherited(this.buildRendering, arguments);
        super.startup();
        //this.targetWidget.startup();
        //this.targetWidget.placeAt(this.domNode);
        console.log("++ InputWidget::startup call! id: " + this.id + " this.value: ", this.value);
    }

    getAttributetValue():any{

        if(!this.dataModelWrapper || !this.dataModelWrapper.entity) return "";

        return this.dataModelWrapper.entity[this.attrName];
    }

    getAttributeTextValue():string{

        if(!this.dataModelWrapper || !this.dataModelWrapper.entity) return "";

        return this.dataModelWrapper.entity[this.attrName];
    }
}

//let exp = dojoDeclare([DataViewWidget], new InputWidget());
//export = exp;
export = InputWidget