import {ValidatorRegistry} from "./ValidatorRegistry";

export default function (validatorName:string) {

    return function (target: Function) {
        ValidatorRegistry.registerValidator(target,validatorName);
    }

}

