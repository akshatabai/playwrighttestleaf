
// assign 1:Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and `"Even"` if the number is even.

const { reverse } = require("node:dns");


function OddorEvennum(num){

    if(num%2!==0){
      return "Odd";
    }

    else{
        return "Even";
    }
}

let num=73;
let result=OddorEvennum(num);
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

    if(browsername==="Chrome"){
        console.log("Launching browser:"+browsername);
    }

    else{
         console.log("Launching browser:" + browsername);
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
runTests(); // calling function --->default will print
runTests("sanity"); // 


// assign 4 : student grade 

function getgrade(score){
     let grade;

     switch(true){   //check condition 

        case(score>=90):
            grade='A';
            break;

        case(score>=80):
            grade='B';
            break;
            
         case(score>=70):
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




function anagram(str1,str2){

    str1= str1.toLowerCase().split("").sort().join()
     str2= str2.toLowerCase().split("").sort().join()

     if(str1.includes(str2)){
        console.log("true")
     }
     else{
        console.log("false")
     }

}

anagram("listen","silent")
anagram("Listen","Silent")

 
//Assignment :2


//1.example:

 let s1 = "Hello World"

console.log(s1.length)

let words=s1.split(' ');
let lastword= words[words.length-1];
console.log(lastword.length);


// 2 exammple:

let s = " fly me to the moon "
console.log(s.length);

let word=s.trim().split(' '); // remove space and split the sentnence into words by using split array 
let lastwordlen=word[word.length-1];  // always index strt with 0 so [20-1] =19 word lenth 
console.log(lastwordlen.length); // last word i.e moon length

// 3 example
//Write a function to check if two strings are anagrams. //Input: isAnagram('listen', 'silent')

let str1='listen';
let str2='silent';

let storestr1=str1.split('').sort().join(""); //spliting into array and then sort in alphabetcially order after using join fun joiing 
let storestr2=str2.split('').sort().join("");

if(storestr1.includes(storestr2)){ //check anagram by using includes function check values 

    console.log("true");
}

    else {
        console.log("false");
    }

    let item1='hello';
    let item2='world';

let itemstr1=item1.split('').sort().join(""); //spliting into array and then sort in alphabetcially order after using join fun joiing 
let  itemstr2=item2.split('').sort().join("");

if(itemstr1.includes(itemstr2)){ //check anagram by using includes function check values 

    console.log("true");
}

    else {
        console.log("false");
    }




 // 4th example :Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a palindrome


 function reversestring(){

let originalstring="madam";  // original string
       
  let strchar= originalstring.split(''); // split array splitting into chars
          
    let revstring=strchar.reverse().join(""); // reverse() function==>rev orignal string and by using join==>joined the array

      if(originalstring===revstring){ // compare  orginal and reverse string are equal or not 
 
        console.log("Reverse string is palindrome") // if eqqqual print its a palindrome
      }

      else{
          console.log("Reverse string is  not a palindrome") // if not -->its not a palindrom
      }

 }
  reversestring(); // calling function