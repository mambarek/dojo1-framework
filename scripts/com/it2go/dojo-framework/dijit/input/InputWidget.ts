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
import Converter = require("./convert/Converter");
import SessionController = require("../../dojo/application/SessionController");
import domStyle = require("dojo/dom-style");
import {ConverterRegistry} from "./convert/ConverterRegistry";
import Application = require("../../dojo/application/Application");
import {HtmlData} from "../../dojo/HtmlData";


//interface InputWidget extends DataViewWidget{}
//interface InputWidget extends _InputWidget{}
//class InputWidget extends _InputWidget{

class InputWidget extends DataViewWidget{
    widgetType: string = WidgetTypes.Text;
    targetWidget: _FormValueWidget;
    //converter:any;
    validators:any;
    required:boolean;
    converter:Converter<any>;
    converterClass:string;

    create(params?: any, srcNodeRef?: HTMLElement): void {

        super.create(params,srcNodeRef);
        console.log("++ InputWidget::create call! id: " + this.id + " this.valuePath: ", this.valuePath);

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

        let value = this.getAttributetValue();

        if(this.converter) value = this.converter.getAsString(value, this);

        this.targetWidget.set('value',value);
        this.targetWidget.placeAt(this.domNode);
        this.getChildren().push(this.targetWidget);
    }

    initAttributes(){

        super.initAttributes();

        this.widgetType = this.domNode.getAttribute(Application.getConfiguration().getHtmlData(HtmlData.widgetType));
        if(!this.widgetType)
            this.widgetType = WidgetTypes.Text;

        let conv = this.domNode.getAttribute(Application.getConfiguration().getHtmlData(HtmlData.converter));
        if(conv){
            console.log("DataViewWidget::create called!!! id: " + this.id + " Converter: " + conv);
            this.converter = ConverterRegistry.getConverter(conv);
        }
    }

    postCreate(): void {
        //this.targetWidget = new DateTextBox();
        super.postCreate();
        // @ts-ignore
        //this.inherited(this.postCreate, arguments);
        console.log("++ InputWidget::postCreate call! id: " + this.id + " this.valuePath: ", this.valuePath);
    }

    buildRendering(): void {
        super.buildRendering();
        // @ts-ignore
        //this.inherited(this.buildRendering, arguments);
        console.log("++ InputWidget::buildRendering call! id: " + this.id + " this.valuePath: ", this.valuePath);
        //this.targetWidget.startup();
        //this.targetWidget.placeAt(this.domNode);
    }

    startup(): void {
        // @ts-ignore
        //this.inherited(this.buildRendering, arguments);
        super.startup();
        //this.targetWidget.startup();
        //this.targetWidget.placeAt(this.domNode);
        console.log("++ InputWidget::startup call! id: " + this.id + " this.valuePath: ", this.valuePath);
    }

    getAttributetValue():any{

        if(!this.dataModelWrapper || !this.dataModelWrapper.entity) return "";

        return this.dataModelWrapper.entity[this.attrName];
    }

    getAttributeTextValue():string{

        if(!this.dataModelWrapper || !this.dataModelWrapper.entity) return "";

        return this.dataModelWrapper.entity[this.attrName];
    }

    setWidgetStyle(style:string, value:string){

        if(this.isReadOnly()){
            domStyle.set(this.domNode, style, value);
            //this.attr('style',  style);
        }

        if(this.targetWidget)
            domStyle.set(this.targetWidget.domNode, style, value);
        //this.targetWidget.attr('style',  style);
    }
}

//let exp = dojoDeclare([DataViewWidget], new InputWidget());
//export = exp;
export = InputWidget