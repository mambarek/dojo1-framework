import _DataViewWidget = require("./_DataViewWidget");
import {AttributeNameResolver} from "../dojo/data/AttributeNameResolver";
import * as registry from "dijit/registry";
import * as on from "dojo/on";
import * as lang from "dojo/_base/lang";
import {ConverterRegistry} from "./input/convert/ConverterRegistry";

class DataViewWidget extends _DataViewWidget{

    create(params?: any, srcNodeRef?: HTMLElement): void {
        super.create(params, srcNodeRef);

        console.log("DataViewWidget::create called!!! id: " + this.id + " this.valuePath: ", this.valuePath);

        this.initValue();
    }

    initValue(){
        this.valuePath = this.domNode.getAttribute("data-value");
        if(this.valuePath){
            console.log("DataViewWidget::create called!!! id: " + this.id + " valuePath: " + this.valuePath);

            let resolver = new AttributeNameResolver();
            let attributeDescriptor = resolver.resolve(this.valuePath);
            if (attributeDescriptor) {
                this.attrName = attributeDescriptor.attrName;
                this.dataModelWrapper = attributeDescriptor.model;
            }
        }
    }

    startup(): void {
        super.startup();
        console.log("DataViewWidget::startup called!!! id: " + this.id + " this.valuePath: ", this.valuePath);

        // in startup the dom tree of the widget is build so build the frameworks tree
        //if(this.root)
        //    this.buildTree();
    }

    buildRendering(): void {
        super.buildRendering();

        console.log("DataViewWidget::buildRendering function called!!! id: " + this.id + " this.valuePath: ", this.valuePath);

    }


}

export = DataViewWidget