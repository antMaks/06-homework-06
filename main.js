// func 1
const getAverage = (...numbers) => {
  let numberInt = numbers.filter(num => Number.isInteger(num));
  numberInt = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue / numbers.length;
  });
  return numberInt;
};

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



// func 2



const filterEvenNumbers = (...numbers) => {
  let number = numbers.filter(num => num % 2 == 1);
  return number;
};

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

// func 3 

const countPositiveNumbers = (...numbers) => {
   return numbers.filter(n => n >= 0).length;
 };

 console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
 
 
 // func 4
 
 
 
 const getDividedByFive = (...numbers) => {
 let number = numbers.filter(num => num % 5 === 0);
 return number;
  }

console.log(
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
 );
 
 
 // func 5
 
 
 
 
 const replaceBadWords = string => {
   const badWords = ["fuck", "bullshit", "shit"];
   let newStr;
   badWords.forEach((word, i) => {
     newStr = string.replace(word[i], "****");
  });
   return newStr;
 };

 console.log(replaceBadWords("It's bullshit!"));
 console.log(replaceBadWords("Holy shit!"));
 console.log(replaceBadWords("Are you fucking kidding?"));
 console.log(replaceBadWords("Are you bitch?"));
