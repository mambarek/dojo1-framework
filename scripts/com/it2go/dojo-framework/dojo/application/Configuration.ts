import {HtmlData} from "../HtmlData";

class Configuration{
    applicationName:string;
    htmlDataScope:string;
    private htmlData:any;

    getHtmlDataMap():any{

        // Lazy init
        if(this.htmlData) return this.htmlData;

        this.htmlData = {};

        for(let element in HtmlData){
            if(this.htmlDataScope)
                this.htmlData[element] = "data-" + this.htmlDataScope + "-" + element;
            else
                this.htmlData[element] = "data-" + element;
        }

        return this.htmlData;
    }

    getHtmlData(dataId:string):string{
        return this.getHtmlDataMap()[dataId];
    }
}

export = Configuration

