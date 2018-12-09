import {ConverterRegistry} from "./ConverterRegistry";

export default function (converterName:string) {

    return function (target: Function) {
        ConverterRegistry.registerConverter(target,converterName);
    }

}