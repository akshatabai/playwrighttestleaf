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