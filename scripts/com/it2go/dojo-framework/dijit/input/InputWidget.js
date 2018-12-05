var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "dijit/form/DateTextBox", "./_InputWidget", "dijit/form/TextBox", "dijit/form/SimpleTextarea", "./WidgetTypes"], function (require, exports, DateTextBox, _InputWidget, TextBox, SimpleTextarea, WidgetTypes) {
    "use strict";
    var InputWidget = /** @class */ (function (_super) {
        __extends(InputWidget, _super);
        function InputWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InputWidget.prototype.create = function (params, srcNodeRef) {
            console.log("++ InputWidget::create call!");
            _super.prototype.create.call(this, params, srcNodeRef);
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
        };
        InputWidget.prototype.postCreate = function () {
            //this.targetWidget = new DateTextBox();
            console.log("++ InputWidget::postCreate call!");
        };
        InputWidget.prototype.buildRendering = function () {
            _super.prototype.buildRendering.call(this);
            console.log("++ InputWidget::buildRendering call!");
            //this.targetWidget.startup();
            //this.targetWidget.placeAt(this.domNode);
        };
        InputWidget.prototype.startup = function () {
            _super.prototype.startup.call(this);
            //this.targetWidget.startup();
            //this.targetWidget.placeAt(this.domNode);
            console.log("++ InputWidget::startup call!");
        };
        return InputWidget;
    }(_InputWidget));
    return InputWidget;
});
//# sourceMappingURL=InputWidget.js.map