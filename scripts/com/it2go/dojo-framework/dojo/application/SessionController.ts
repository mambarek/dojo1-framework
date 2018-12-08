class SessionController{

    objectMap:any = {};

    private static instance:SessionController = new SessionController();
    static getInstance(){
        return this.instance;
    }

    getObjectForName(name:string):any{
        return this.objectMap[name];
    }

    pushObject(name:string, object:any){
        this.objectMap[name] = object;
    }
}

export = SessionController