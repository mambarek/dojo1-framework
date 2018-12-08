import SessionController = require("../application/SessionController");

class AttributeDescriptor{
    constructor(model:any, attr:string){
        this.attrName = attr;
        this.model = model;
    }

    attrName:string;
    model:any;
}

class AttributeNameResolver {

    sep: string = ".";

    resolve(name:string):AttributeDescriptor{
        if(!name) return null;

        let model:any;
        let attrName:string;

        let strings = name.split(this.sep);
        if(strings.length == 1) {
            model = this.getObjectForName(name);
        }else{
            attrName = strings[strings.length - 1];
            model = this.getObjectForName(strings[strings.length - 2]);
        }

        return new AttributeDescriptor(model, attrName);
    }

    getObjectForName(name:string):any{
        return SessionController.getInstance().getObjectForName(name);
    }

}

export {AttributeDescriptor}
export {AttributeNameResolver}