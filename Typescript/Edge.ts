
import { Browser } from './browserparentclas.js'; 


class Edge extends Browser{

constructor(){

    super("Edge",22); // by using super keyword calling const of parent class and passing value to it
}

 takeSnap():void{

    console.log("take snap for:"+this.browserName);
 }

 clearCookies():void{

     console.log("Delete cookies  for:"+this.browserName);
 }

navigateBack():void{

    super.navigateBack(); // method overiding by uing super acess function from parent class
     console.log("navigate back to:"+this.browserName);
 }

}

const Edgbrow = new Edge();
Edgbrow.takeSnap();
Edgbrow.clearCookies();
Edgbrow.navigateBack();