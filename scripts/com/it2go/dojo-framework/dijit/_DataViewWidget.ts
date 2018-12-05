import * as _WidgetBase from "dijit/_WidgetBase";
import * as domStyle from "dojo/dom-style";
import declare from '../declareDecorator';
import DataModelWrapper from "../dojo/data/DataModelWrapper";
import * as registry from "dijit/registry";
import * as on from "dojo/on";
import * as lang from "dojo/_base/lang";
import * as ready from "dojo/ready";
import * as parser from "dojo/parser";
/*

import registry = require("dijit/registry");
import on = require("dojo/on");
import lang = require("dojo/_base/lang");
*/

/**
 * `dojo/_base/declare` can infer typings, but since we are generating our declare
 * constructor with a decorator (see below), we need to define our widget interface
 * explicitly.
 */
interface _DataViewWidget extends _WidgetBase {

   // startup(){}


}

// experiment for hash it works with indexedtype
interface MyMap{[key:string]:any}



/**
 * By using a decorator to create constructors with `dojo/_base/declare`, we can
 * write our widgets using TypeScript classes. The one caveat is that we are then
 * required to use merged declarations to define our interface, so the widget
 * class has to be declared as the default export in a separate statement.
 */
@declare(_WidgetBase)
class _DataViewWidget {

    //xx: MyMap = new DataModelWrapper({},{});
    // the model to work on
    dataModelWrapper: DataModelWrapper;

    // the attribute from model to represent in this view
    attrName: string;

    // a GUI attribute may not belong to model
    // so ignore them when initializing or reading
    isModelAttr: boolean = true;
    isModelSetFromParent: boolean = true;

    visible: boolean = true;
    readOnly: boolean = false;
    children: Array<_DataViewWidget> = new Array<_DataViewWidget>();
    parentViewWiget: _DataViewWidget;

    notifyParent: boolean;

    /*************************************************************************/
    /*          Functions                                                    */
    /*************************************************************************/
    /*************************************************************************/
    /*  IMPORTANT! you can't call super in this class so you have to override
    /*  metheds in subclass e.e DataViewWidget
     */
    /*************************************************************************/

    isVisible(): boolean{

        if(!this.visible) return false;

        // if a parent in the tree is not visible so
        // this widget is either not visible
        if(this.parentViewWiget && !this.parentViewWiget.isVisible())
            return false;

        // default true
        return true;
    }

    isReadOnly(): boolean{

        if(!this.readOnly) return false;

        // if a parent in the tree is not visible so
        // this widget is either not visible
        if(this.parentViewWiget && !this.parentViewWiget.isReadOnly())
            return false;

        // default true
        return true;
    }

    hide(): void{
        this.visible = false;
        domStyle.set(this.domNode, "display", "none");
    }

    show(): void{
        this.visible = false;
        domStyle.set(this.domNode, "display", "block");
    }

    setBackgroundColor(color: string): void{
        this.set('style',  {backgroundColor: color});
    }

    checkVisibility(){
        if(!this.isVisible())
            this.hide();
    }

    getChildWidgets(node: Node){
        let chilList:any = {};
        if(node && node.childNodes)
        {
            for ( var i = 0; i < node.childNodes.length; i++)
            {
                let childNode = node.childNodes[i];
                //var widget = dijit.getEnclosingWidget(childNode);
                let widget = registry.byId((childNode as Element).id);

                if(widget && widget instanceof _DataViewWidget) {
                    let w = <_DataViewWidget>widget;
                    chilList[w.id] = widget;
                } else {
                    let cList = this.getChildWidgets(childNode);
                    for(let c in cList)
                    {
                        let w = cList[c];
                        chilList[w.id] = w;
                    }
                }
            }
        }

        return chilList;
    }

    buildTree(){

        // reset the tree
        this.children = new Array<_DataViewWidget>();
        let chList = this.getChildren();

        // when no direct children exists so search in the
        // DOM descendants
        if(chList.length == 0)
            chList = this.getChildWidgets(this.domNode);

        for (let childName in chList){

            let child = chList[childName];
            if(child instanceof _DataViewWidget){
                let w = <_DataViewWidget>child;
                w.parentViewWiget = this;

                // if the child should notify his parent on events
                if(w.notifyParent){
                    this.own(on(child, "Change", lang.hitch(this, this.onChange)))
                }

                this.children.push(w);
                console.log("for widget id: " + this.id +" child found id: " + w.id);
                w.buildTree();
            }
        }

        console.log("for widget id: " + this.id +" children length: " + this.children.length);
    }

    setDataModelWrapper(aDataModelWrapper: DataModelWrapper){
        this.dataModelWrapper = aDataModelWrapper;

        if(this.dataModelWrapper && this.attrName){

        }



    }

    private onChange() {

    }
}




/*
 * We are using `export default` here, which is part of the ES6 module format.
 * If other consumers of the module are compatible with default exports, like
 * other modules written in TypeScript, then this is fine, but if someone
 * consumes this module, that instead of this being the return value of the module,
 * it will be located under Dialog.default.
 */
//export default _DataViewWidget;
export = _DataViewWidget;