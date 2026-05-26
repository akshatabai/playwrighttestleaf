
// assign 1:Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and `"Even"` if the number is even.

const test = require("node:test");


function OddorEvebnum(num){

    if(num%2!==0){
      return "Odd";
    }

    else{
        return "Even";
    }
}

let num=73;
let result=OddorEvebnum(num);
console.log("Given Number is :" + result);


// assign 2:Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type

function IdentifyNumber(number){

    if(number>0){

        return "positive number";
    }

    else if(number<0) {
        return "negative number";
    }

    else{
    return "neutral number";
    }
}
console.log(IdentifyNumber(28));
console.log(IdentifyNumber(-12));
console.log(IdentifyNumber(0));

// assign 3:Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, andrunTests` with `switch` for test type messages.

function launchBrowser(browsername){       // function 1

    if(browsername=="Chrome"){
        console.log("Launching browser:"+browsername);
    }

    else{
         console.log("Launching broswer:" + browsername);
    }
}
launchBrowser("firefox"); // call function 

function runTests(testType){           // function 2

    switch(testType) {
     case 'smoke': // case 1
     console.log("test case:smoke");
     break;

     case 'sanity': // case2 
      console.log("test case:sanity");
        break;

    case 'Regression': // case 3
     console.log("test case:regression");
        break;

     default:          // case 4
      console.log("test case: No Test");
        break;   
}
}
runTests(); // calling function 


// assign 4 : student grade 

function getgrade(score){
     let grade;

     switch(true){   //check condition 

        case (score>=90):
            grade='A';
            break;

        case (score>=80):
            grade='B';
            break;
            
         case (score>=70):
            grade='C';
            break;
            
        default:
            grade='F';
            break;
     }
return grade;
}

console.log(getgrade(95));
console.log(getgrade(80));
console.log(getgrade());

