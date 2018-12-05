define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function pluck(o, names) {
        return names.map(function (n) { return o[n]; });
    }
    var person = {
        name: 'Jarid',
        age: 35
    };
    var strings = pluck(person, ['name']); // ok, string[]
    var AttributeFlags;
    (function (AttributeFlags) {
        AttributeFlags["ReadOnly"] = "readOnly";
        AttributeFlags["Visible"] = "visible";
    })(AttributeFlags || (AttributeFlags = {}));
    /**********************************************/
    /* the backend must give an Entity to work on.
    /* if there are any restriction e.g. visibility or writ rights so
    /* this Back-End cand fill this in the attributeInfo array
     ***********************************************/
    var DataModelWrapper = /** @class */ (function () {
        function DataModelWrapper(anEntity, attrInfo) {
            this.entity = anEntity;
            this.attributesInfo = attrInfo;
        }
        DataModelWrapper.getProperty = function (o, p) {
            if (!o)
                return o;
            if (!p)
                return p;
            return o[p];
        };
        DataModelWrapper.prototype.isAttributeReadOnly = function (attr) {
            if (!this.attributesInfo)
                return false;
            var attributeInfo = DataModelWrapper.getProperty(this.attributesInfo, attr);
            var readOnly = DataModelWrapper.getProperty(attributeInfo, AttributeFlags.ReadOnly);
            // readonly is not defined so default is false
            if (readOnly === null || readOnly === undefined)
                return false;
            return readOnly;
        };
        DataModelWrapper.prototype.isAttributeVisible = function (attr) {
            if (!this.attributesInfo)
                return false;
            var attributeInfo = DataModelWrapper.getProperty(this.attributesInfo, attr);
            var visible = DataModelWrapper.getProperty(attributeInfo, AttributeFlags.Visible);
            // visible is not defined so default is true
            if (visible === null || visible === undefined)
                return true;
            return visible;
        };
        return DataModelWrapper;
    }());
    exports.default = DataModelWrapper;
});
//# sourceMappingURL=DataModelWrapper.js.map