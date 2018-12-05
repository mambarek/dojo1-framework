
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]

enum AttributeFlags {ReadOnly = 'readOnly', Visible = 'visible'}

/**********************************************/
/* the backend must give an Entity to work on.
/* if there are any restriction e.g. visibility or writ rights so
/* this Back-End cand fill this in the attributeInfo array
 ***********************************************/

class DataModelWrapper{
    entity: any;
    attributesInfo: any;

    constructor(anEntity: any, attrInfo: any){
        this.entity = anEntity;
        this.attributesInfo = attrInfo;
    }

    static getProperty(o: any, p: string): any{
        if(!o) return o;

        if(!p) return p;

        return o[p];
    }

    isAttributeReadOnly(attr: string):boolean{

        if(!this.attributesInfo) return false;

        let attributeInfo = DataModelWrapper.getProperty(this.attributesInfo, attr);
        let readOnly = DataModelWrapper.getProperty(attributeInfo, AttributeFlags.ReadOnly);

        // readonly is not defined so default is false
        if(readOnly === null || readOnly === undefined) return false;

        return readOnly;
    }

    isAttributeVisible(attr: string):boolean{
        if(!this.attributesInfo) return false;

        let attributeInfo = DataModelWrapper.getProperty(this.attributesInfo, attr);
        let visible = DataModelWrapper.getProperty(attributeInfo, AttributeFlags.Visible);

        // visible is not defined so default is true
        if(visible === null || visible === undefined) return true;

        return visible;
    }
}

export default DataModelWrapper