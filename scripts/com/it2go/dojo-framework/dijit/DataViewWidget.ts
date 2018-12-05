import _DataViewWidget = require("./_DataViewWidget");

class DataViewWidget extends _DataViewWidget{

    startup(): void {
        super.startup();
        console.log("DataViewWidget startup function called!!! id: " + this.id);
    }

 /*   buildRendering(): void {
        super.buildRendering();
        this.domNode.innerText += ' CHANGED FROM buildrendering from id: '+ this.id;
        console.log("DataViewWidget buildRendering function called!!! id: " + this.id);
        console.log(this.domNode.innerText);
    }*/
}

export = DataViewWidget