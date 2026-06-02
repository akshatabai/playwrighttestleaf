

// assign1 :."I have a string let str = 'Hello World'. I want to change the 'H' to 'J'.

let str1='Hello World'; //string is immutable once assigned value wont chnage 

let str2=str1.replace('H','J'); /* using replace method to replace the value 
                                   after replace method again we are storing into var i.e str2 bcz string is immtable  */

console.log(str1); // string immutable o/p is same
console.log(str2); // after replacing we are storing into new var i.e 'str2' 

/*If I write str[0] = 'J';, what happens?--->nothing js ingnore it 
                                             To check or read the char at index 0 -->str[0] or str.charAt(0)  */


//assign 2:.You have a dynamic string: 'Order ID: #12345-Confirmed'. Write a quick logic using String methods (slice, split, or substring) to extract just the ID 12345


let id1= 'Order ID: #12345-Confirmed';

        let id2=id1.slice(11,16); // #->10th index ,1 -->11th index , 5-->15th index , -[16th index] splice will exclude end value 
        console.log(id2);  // o/p->12345

// assign 3: remove duplicates from a string

let string1='madam';// use 'set' to remove duplicates from string

let string2="programming";

let res1= [...new Set(string1)].join("");   // stp1: new set(madam)        -> set{'m','a','d'} i.e set remove duplictes fromstring
                                        // stp2 : ...Set{'m','a','d'}  -->'m','a','d' i.e ...(spread opertor it just take values out of set)
                                        // stp3 : []                --> ['m','a','d']  --->i.e ([] put those  values into new rray )
                                        // stp4: join(""              --->"mad"  i.e join to join all char toghther n print
console.log(res1);

let res2 = [...new Set(string2)].join("");

console.log(res2);


// assign 4 :"Take a sentence: 'Automation testing is incrediblly important'.

let sentence = 'Automation testing is incrediblly important';
let words = sentence.split(' ');
let longest = '';

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}
console.log(longest); // "incredibly"


// assign 5 :Write a program to count vowels in a string " Playwright"

let str='playwright';

let vowel='aeiou';

let count=0;

for(let i=0;i<str.length;i++){

  if(vowel.includes(str[i])){  // check each char presnt in tht vowel or not if tht char is presnt in vowel count i.e 2 vowels prent count be 2
    count++;
  }
}

console.log(count);