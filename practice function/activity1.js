//Print the reverse order of  x = 32243

// function reverse (x){
//  x = x+ "";
 
// console.log(x.split('').reverse().join(''));

//   // console.log(x);
  
   
// }
//  reverse(32243);

//check whether the give word is palidrome or not

// function check_palidrome(word){
//   var lowerCase = word.toLowerCase();
//    var count = 0;
//   console.log(lowerCase);

//   if (lowerCase === '') {
//     console.log('Nothing found');
//     return false;
//   }

//   console.log(lowerCase.length);
  

//   if(lowerCase.length % 2 === 0){
//     count = (lowerCase.length) /2;
//     console.log(count);
    
//     console.log('even');
    
//   }else{
//      if(lowerCase.length === 1){
//       console.log('Its a Palidrome');
//       return true;
      
//      }else{
//       count = (lowerCase.length - 1)/2;
//       console.log(count);
      
//       console.log('odd');
      
//      }
    
//   }

//   for(x = 0 ; x < count ; x++){
//     console.log(count);
    
//     if(lowerCase[x] != lowerCase.slice(-1-x)[0]){
//     console.log('not a palidrome');
//     return false;
    
//   }
// }

// console.log('This entry is a palindrome');;

  
    
// }
// check_palidrome('MADAM');
// check_palidrome('Hello');


//all the combination of the word 'dog'

// function text(str){
//     var result =[];

//     function searchComb(start, curr){
//         if(curr.length > 0){
//             result.push(curr);
//         }

//         for (let i = start ; i < str.length ; i++){
//             searchComb(i+ 1, curr + str[i]);
//         }
//     }

//     searchComb(0, '');

//     return result;
// }

// const str = 'dog';

// const result = text(str);

// console.log(result);


//order the word according to the alphabatic order

// function alphabatic_order(str){
//     var toLowerCase = str.toLowerCase();
//     return toLowerCase.split('').sort().join('');
// }

// console.log(alphabatic_order('Webmaster'));

//First letter of each word is in uppercase

// function upperCase(str){
//     var array1 = str.split(' ');
//      console.log(array1);
      

//     var newArray = [];

//     for(var x = 0 ; x < array1.length; x++){
//         console.log(array1[x]);
//         newArray.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//     }

//     return newArray.join(' ');
// }

// console.log(upperCase('the quick brown box'));

//find the longest word from the sentence

function longest_word(str){
     var array = str.split(' ');
     console.log(array);
     console.log(array.length);

     var result = array[0];
     console.log(array[0]);
     console.log(result.length);
     
     
    
     for(var i = 1 ; i < array.length; i++){
        
        if(result.length < array[i].length){
            
            result = array[i];
           
        }
     }

     return result;
}

console.log(longest_word('Web development tutorial'));




