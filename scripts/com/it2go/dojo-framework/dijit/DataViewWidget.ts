import _DataViewWidget = require("./_DataViewWidget");
import {AttributeNameResolver} from "../dojo/data/AttributeNameResolver";
import * as registry from "dijit/registry";
import * as on from "dojo/on";
import * as lang from "dojo/_base/lang";

class DataViewWidget extends _DataViewWidget{

    create(params?: any, srcNodeRef?: HTMLElement): void {
        super.create(params, srcNodeRef);

        console.log("DataViewWidget::create called!!! id: " + this.id + " this.value: ", this.value);

        if(this.value) {
            let resolver = new AttributeNameResolver();
            let attributeDescriptor = resolver.resolve(this.value);
            if (attributeDescriptor) {
                this.attrName = attributeDescriptor.attrName;
                this.dataModelWrapper = attributeDescriptor.model;
            }
        }
    }

    startup(): void {
        super.startup();
        console.log("DataViewWidget::startup called!!! id: " + this.id + " this.value: ", this.value);

        // in startup the dom tree of the widget is build so build the frameworks tree
        //if(this.root)
        //    this.buildTree();
    }

    buildRendering(): void {
        super.buildRendering();

        console.log("DataViewWidget::buildRendering function called!!! id: " + this.id + " this.value: ", this.value);

    }


}

export = DataViewWidget