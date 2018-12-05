var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "dijit/Dialog", "dojo/i18n!./nls/main", "./declareDecorator"], function (require, exports, DijitDialog, messages, declareDecorator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * By using a decorator to create constructors with `dojo/_base/declare`, we can
     * write our widgets using TypeScript classes. The one caveat is that we are then
     * required to use merged declarations to define our interface, so the widget
     * class has to be declared as the default export in a separate statement.
     */
    var Dialog = /** @class */ (function () {
        function Dialog() {
            this.title = messages.dialogTitle;
            this.content = messages.dialogContent;
            this.style = "width: 300px;height:200px";
        }
        Dialog = __decorate([
            declareDecorator_1.default(DijitDialog)
        ], Dialog);
        return Dialog;
    }());
    /*
     * We are using `export default` here, which is part of the ES6 module format.
     * If other consumers of the module are compatible with default exports, like
     * other modules written in TypeScript, then this is fine, but if someone
     * consumes this module, that instead of this being the return value of the module,
     * it will be located under Dialog.default.
     */
    exports.default = Dialog;
});
//# sourceMappingURL=Dialog.js.map