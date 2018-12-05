define(["require", "exports", "./Dialog", "dojo/domReady!"], function (require, exports, Dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* Now we are creating our application object */
    var app = {
        dialog: new Dialog_1.default()
    };
    /* Following dojo-boilerplate we will perform the same functions, though if you
     * edit this file, you will notice that all the expected code completion will
     * work
     */
    //app.dialog.placeAt(document.body);
    //app.dialog.startup();
    app.dialog.show();
    //document.body.className += ' loaded';
    /* Again, we are exporting default here, this means we will have to refer to it
     * properly if we were to utilize it elsewhere.
     */
    exports.default = app;
});
//# sourceMappingURL=main.js.map