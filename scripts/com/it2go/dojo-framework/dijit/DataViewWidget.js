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
define(["require", "exports", "./_DataViewWidget"], function (require, exports, _DataViewWidget) {
    "use strict";
    var DataViewWidget = /** @class */ (function (_super) {
        __extends(DataViewWidget, _super);
        function DataViewWidget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DataViewWidget.prototype.startup = function () {
            _super.prototype.startup.call(this);
            console.log("DataViewWidget startup function called!!! id: " + this.id);
        };
        return DataViewWidget;
    }(_DataViewWidget));
    return DataViewWidget;
});
//# sourceMappingURL=DataViewWidget.js.map