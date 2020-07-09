
/*

const ageCalculator =function (name, yearOfBirth, currentYear){
let age = 0;
age = currentYear - yearOfBirth;
result = name + ' is ' + age +' years old.';
return result;
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
*/


let name = 'Miranda';
let yearOfBirth = "1983";
let currentYear = "2015";
let result = "";

const ageCalculator =function (name1, yearOfBirth1, currentYear1){
let age = 0;

age = currentYear1 - yearOfBirth1;
result = name1 + ' is ' + age +' years old';
return result;
}
console.log(ageCalculator(name, yearOfBirth, currentYear));




