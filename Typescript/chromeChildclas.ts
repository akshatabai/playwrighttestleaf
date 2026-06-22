
import { test } from '@playwright/test';
import { Browser } from './browserparentclas.js'; 


class Chrome extends Browser {

    constructor(){
        super("chrome",28);
    }

openIncognito():void{
       console.log("open Incognito mode in :" + this.browserName)
}

clearCache():void{
      console.log("clear the cache of :"+ this.browserName);
}

 openURL():void{
          super.openURL()
       console.log("open URL  in incognito mode for :" + this.browserName)
 }


}

const Chbrow=new Chrome();
Chbrow.openURL();
Chbrow.openIncognito();
Chbrow.clearCache();
Chbrow.navigateBack();
Chbrow.closeURL();
