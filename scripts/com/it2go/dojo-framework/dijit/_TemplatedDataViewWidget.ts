import * as _WidgetsInTemplateMixin from "dijit/_WidgetsInTemplateMixin";

import declare from '../declareDecorator';
import _DataViewWidget = require("./_DataViewWidget");
import DataViewWidget = require("./DataViewWidget");
import dojoDeclare = require("dojo/_base/declare");

import DataModelWrapper from "../dojo/data/DataModelWrapper";
import _TemplatedMixin = require("dijit/_TemplatedMixin");
//import _TemplatedMixin = require("dijit/_TemplatedMixin");


/**
 * `dojo/_base/declare` can infer typings, but since we are generating our declare
 * constructor with a decorator (see below), we need to define our widget interface
 * explicitly.
 */
//interface _TemplatedDataViewWidget extends _TemplatedMixin,_WidgetsInTemplateMixin, DataViewWidget {}
//interface _TemplatedDataViewWidget extends _TemplatedMixin, DataViewWidget {}


// @ts-ignore
// @ts-ignore
/**
 * By using a decorator to create constructors with `dojo/_base/declare`, we can
 * write our widgets using TypeScript classes. The one caveat is that we are then
 * required to use merged declarations to define our interface, so the widget
 * class has to be declared as the default export in a separate statement.
 */
//@declare([_TemplatedMixin, _WidgetsInTemplateMixin, DataViewWidget])
//@declare(_TemplatedMixin)
// @ts-ignore
class _TemplatedDataViewWidget implements _TemplatedMixin, _DataViewWidget{
    toString(): string {
        throw new Error("Method not implemented.");
    }
    _attachEvents: dojo.Handle[];
    _attachPoints: string[];
    _attrPairNames: { [p: string]: string };
    _destroyed: true;
    attachScope: any;
    attrName: string;
    attributeMap: { [p: string]: any };
    baseClass: string;
    children: Array<_DataViewWidget>;
    class: string;
    containerNode: HTMLElement;
    dataModelWrapper: DataModelWrapper;
    dir: string;
    dojoAttachEvent: string;
    dojoAttachPoint: string;
    domNode: HTMLElement;
    id: string;
    isModelAttr: boolean;
    isModelSetFromParent: boolean;
    lang: string;
    notifyParent: boolean;
    ownerDocument: HTMLElement;
    parentViewWiget: _DataViewWidget;
    readOnly: boolean;
    searchContainerNode: boolean;
    srcNodeRef: HTMLElement;
    style: string;
    templatePath: string;
    templateString: string;
    textDir: string;
    title: string;
    tooltip: string;
    visible: boolean;
    private _callback: ((prop: string, oldValue: any, newValue: any) => void) | string;


    _attach(node: Element | Node, type: string, func?: Function): dojo.Handle {
        return undefined;
    }

    _attachTemplateNodes(rootNode: Element | Node): void {
    }

    _beforeFillContent(): void {
    }

    _changeAttrValue(name: string, value: any): this {
        return undefined;
    }

    _detachTemplateNodes(): void {
    }

    _getAttrNames(name: string): string {
        return "";
    }

    _processTemplateNode<T extends Element | Node | dijit._WidgetBase>(baseNode: T, getAttrFunc: (baseNode: T, attr: string) => string, attachFunc: (node: T, type: string, func?: Function) => dojo.Handle): boolean {
        return false;
    }

    applyTextDir(element: HTMLElement, text?: string): void {
    }

    buildRendering(): void {
    }

    buildTree(): void {
    }

    checkVisibility(): void {
    }

    connect(obj: any, event: string | dojo.ExtensionEvent, method: string | dojo.EventListener): dojo.WatchHandle {
        return undefined;
    }

    create(params?: any, srcNodeRef?: HTMLElement): void {
    }

    defer(fcn: Function, delay?: number): dojo.Handle {
        return undefined;
    }

    destroy(preserveDom?: boolean): void {
    }

    destroyDescendants(preserveDom?: boolean): void {
    }

    destroyRecursive(preserveDom?: boolean): void {
    }

    destroyRendering(preserveDom?: boolean): void {
    }

    disconnect(handle: dojo.WatchHandle): void {
    }

    emit(type: string, eventObj?: any, callbackArgs?: any[]): any {
    }

    enforceTextDirWithUcc(option: HTMLOptionElement, text: string): string {
        return "";
    }

    get(name: string): any {
    }

    getChildWidgets(node: Node): any {
    }

    getChildren<T extends dijit._WidgetBase>(): T[] {
        return [];
    }

    getParent<T extends dijit._WidgetBase>(): T {
        return undefined;
    }

    getTextDir(text: string): string {
        return "";
    }

    hide(): void {
    }

    isFocusable(): boolean {
        return false;
    }

    isLeftToRight(): boolean {
        return false;
    }

    isReadOnly(): boolean {
        return false;
    }

    isVisible(): boolean {
        return false;
    }

    on(type: string | dojo.ExtensionEvent, func: dojo.EventListener | Function): dojo.WatchHandle {
        return undefined;
    }

    onBlur(): void {
    }

    private onChange(): void {
    }

    onFocus(): void {
    }

    own(...args: any[]): any[] {
        return [];
    }

    placeAt<T extends dijit._WidgetBase>(reference: dojo.NodeFragmentOrString | T, position?: string | number): this {
        return undefined;
    }

    postCreate(): void {
    }

    postMixInProperties(): void {
    }

    postscript(params?: Object): void;
    postscript(params?: any, srcNodeRef?: HTMLElement): void;
    postscript(params?: Object | any, srcNodeRef?: HTMLElement): void {
    }

    restoreOriginalText(origObj: HTMLOptionElement): HTMLOptionElement {
        return undefined;
    }

    set(name: string, value: any): this;
    set(name: Object): this;
    set(name: string | Object, value?: any): this {
        return undefined;
    }

    setBackgroundColor(color: string): void {
    }

    setDataModelWrapper(aDataModelWrapper: DataModelWrapper): void {
    }

    show(): void {
    }

    startup(): void {
    }

    subscribe(t: string, method: dojo.EventListener): dojo.WatchHandle {
        return undefined;
    }

    uninitialize(): boolean {
        return false;
    }

    unsubscribe(handle: dojo.WatchHandle): void {
    }

    watch(callback: (prop: string, oldValue: any, newValue: any) => void): dojo.WatchHandle;
    watch(name: string, callback: (prop: string, oldValue: any, newValue: any) => void): dojo.WatchHandle;
    watch(callback: ((prop: string, oldValue: any, newValue: any) => void) | string, _callback?: (prop: string, oldValue: any, newValue: any) => void): dojo.WatchHandle {
        return undefined;
    }



}

class _TemplatedDataViewWidgetImpl extends _TemplatedDataViewWidget {
}

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins(_TemplatedDataViewWidget, [_TemplatedMixin,_DataViewWidget ]);


/*
 * We are using `export default` here, which is part of the ES6 module format.
 * If other consumers of the module are compatible with default exports, like
 * other modules written in TypeScript, then this is fine, but if someone
 * consumes this module, that instead of this being the return value of the module,
 * it will be located under Dialog.default.
 */
var exp = dojoDeclare( [DataViewWidget, _TemplatedMixin, _WidgetsInTemplateMixin], new _TemplatedDataViewWidget());
//export = exp
export = _TemplatedDataViewWidget