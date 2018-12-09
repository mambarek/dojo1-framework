import Converter = require("./Converter");

class ConverterRegistry{

    private static converterMap:any = {};

    static registerConverter(converterClass:Function, id:string ){
        this.converterMap[id] = new converterClass.prototype.constructor;
    }

    static getConverter(id:string ):Converter<any>{
        return <Converter<any>>this.converterMap[id];
    }
}

export {ConverterRegistry};