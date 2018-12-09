import Configuration = require("./Configuration");


class Application{

    private static config: Configuration;

    static init(configuration:Configuration){
        this.config = configuration;
    }

    static getConfiguration():Configuration{
        if(this.config) return this.config;

        return this.getDefaultConfig();
    }

    static getDefaultConfig():Configuration{
        let conf = new Configuration();

        conf.applicationName = "App";

        return conf;
    }
}

export = Application

