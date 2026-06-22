
// typescript datatypes
// 1 string,number,boolean,any,never,unknown,

/*
1. Explicit syntax type systems (you tell TypeScript the type)
2. Inferred type systems (TypeScript figures out the type automatically)


TYPE ANNOTATIONS:
--------------------------------------------------------------------------------
To explicitly signal to TypeScript what your types are, use annotations.

Syntax: value: type

EXAMPLES:
--------------------------------------------------------------------------------
let a: number = 1           // a is a number
let b: string = 'hello'     // b is a string
let c: boolean[] = [true, false]  // c is an array of booleans


TYPE INFERENCE:
--------------------------------------------------------------------------------
If you want TypeScript to infer your types for you, just leave them off:

let a = 1                   // a is a number (inferred)
let b = 'hello'             // b is a string (inferred)
let c = [true, false]       // c is an array of booleans (inferred)

*/

// statically typed 

let firstname:string="akshata";
// let firstname=345; // error ->Type 'number' is not assignable to type 'string'
  // let firstname="bhuvan"; // here i can reintilize value to ---> string  but not a number 
                           //and  cannott re-decalre varname i.e let is block-scope
var phno:number=67458920;
   //var  phno="aksha"; // errror->Type 'string' is not assignable to type 'number'. here i can re-decalre varname by using i.e var keyword
const Isinsurnce:boolean=true;
  // const  Isinsurnce=false; //Cannot assign to 'Isinsurnce' because it is a constant.here redecalre  and changing value not allow by using i.e const keyword


  /* any datatype  --> Accept  any datatype but it disable typesscript static type validation which causes unexpected runtime error  */

  let response:any= "success"
  response=200;
  console.log(response.toUppercase()); // runtime rrorr---->uppercase is not a function 


/* unknowm datatype---> accept any datatype but it force tp perform "type-safety" before performing any actions and the frmework remain type-safety 
                        by checking like typeof opertion which prevent from unexpected error in jenkins pipeline */

  // unknown -->  it will enable the type validation
let response2:unknown ="Success"
//response=200
if(typeof response2 === 'string' ){  // type safety check
console.log(response2.toUpperCase())
}else{
    console.log("the received datatype is not string")
}



never datatype--> it return nothing 



// union type

type method="UPI"|"creditcard"|"paypalcard";

function makepayment(paymentmethod:method):void{

 switch(paymentmethod){

    case "UPI":
        console.log("paymentmethod choosen:UPI");
        break;

    case "creditcard"  :
        console.log("paymentmethod choosen:creditcard");
        break;
        
    case "paypalcard"  :
        console.log("paymentmethod choosen:paypalcard");
        break;

 }
}
makepayment("UPI")
makepayment("creditcard")


// enum type

enum paymentmodes {
    UPI,
    Creditcard,
    PaypalCard
} 
function makepayment2(method:paymentmodes):void{

 switch(method){

    case paymentmodes.UPI:
        console.log("paymentmethod choosen:UPI");
        break;

    case paymentmodes.Creditcard  :
        console.log("paymentmethod choosen:creditcard");
        break;
        
    case paymentmodes.PaypalCard  :
        console.log("paymentmethod choosen:paypalcard");
        break;

 }
}
makepayment2(paymentmodes.UPI)
