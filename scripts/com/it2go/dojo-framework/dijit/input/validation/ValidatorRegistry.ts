import {Validator} from "./Validator";

class ValidatorRegistry {

    private static validatorMap:any = {};

    static registerValidator(validatorClass:Function, id:string ){
        this.validatorMap[id] = new validatorClass.prototype.constructor;
    }

    static getValidator(id:string ):Validator<any>{
        return <Validator<any>>this.validatorMap[id];
    }
}

export {ValidatorRegistry}